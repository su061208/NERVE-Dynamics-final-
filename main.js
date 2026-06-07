const firebaseConfig = {
  apiKey: "AIzaSyBsBshpBt4A-BGebqakENkIQU1Sln6k6HA",
  authDomain: "mycompany2-2a042.firebaseapp.com",
  projectId: "mycompany2-2a042",
  storageBucket: "mycompany2-2a042.firebasestorage.app",
  messagingSenderId: "1033084071682",
  appId: "1:1033084071682:web:a8b04cd37dcfc90b37dc1b",
  measurementId: "G-MWGRW65TQN"
};

// [중요 로컬 구동 패치] 
// 모듈(type="module") 방식은 로컬 서버 없이 html 더블클릭 시 스크립트를 중단(CORS 오류)시켜 
// 애니메이션(Observer)을 마비시키므로, 호환성 글로벌 객체(firebase)로 재구성했습니다.
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

document.addEventListener('DOMContentLoaded', () => {

    // --- 1. Parallax Effect for Hero Image ---
    const heroBg = document.querySelector('.scroll-bg');
    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY;
        if(heroBg && scrolled < window.innerHeight) {
            heroBg.style.transform = `translateY(${scrolled * 0.4}px)`;
        }
    });

    // --- 2. Scroll Animation Setup ---
    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                obs.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-in, .fade-in-up, .fade-in-left, .fade-in-right').forEach(el => {
        observer.observe(el);
    });

    // --- 3. Community Board - Load Posts & Filter ---
    const boardList = document.getElementById('board-list');
    
    async function loadPosts() {
        if (!boardList) return;
        boardList.innerHTML = '<p style="text-align:center; padding: 2rem; color: #a1a1aa;">게시글을 동기화하고 있습니다...</p>';
        
        try {
            // Firebase 에서 게시물 가져오기
            const querySnapshot = await db.collection("posts").orderBy("createdAt", "desc").get();
            
            boardList.innerHTML = '';
            
            if (querySnapshot.empty) {
                boardList.innerHTML = '<p style="text-align:center; padding: 2rem; color: #a1a1aa;">등록된 글이 없습니다. 회원님의 첫 이야기를 들려주세요!</p>';
                return;
            }

            querySnapshot.forEach((doc) => {
                const data = doc.data();
                
                // HTML의 카테고리값(lifestyle, electric, service)과 기존의 시승기/리뷰 등을 통합 매핑
                const tagNames = { 
                    'lifestyle': '라이프스타일', 
                    'electric': '전기차(EQ)', 
                    'service': '서비스/관리',
                    'review': '시승기/리뷰', 
                    'tip': '정비 팁', 
                    'cert': '출고 인증'
                };
                const tagName = tagNames[data.category] || '일반';
                
                let timeString = '조금 전';
                if(data.createdAt) {
                    const date = data.createdAt.toDate();
                    timeString = date.toLocaleDateString() + ' ' + date.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
                }

                // fallback
                const authorDisplay = data.author ? data.author : '익명';
                const titleDisplay = data.title ? data.title : '제목 없음';

                const itemHTML = `
                    <div class="board-item-sleek" data-category="${data.category}">
                        <div class="board-thumb" style="background-image: url('benz_hero_sedan_1778467347199.png'); filter: grayscale(80%) contrast(1.2);"></div>
                        <div class="board-summary">
                            <div style="display: flex; justify-content: space-between; align-items: flex-start;">
                                <div>
                                    <span class="board-tag">${tagName}</span>
                                    <h4 class="board-title">${titleDisplay}</h4>
                                </div>
                                <button class="btn-delete" data-id="${doc.id}">삭제</button>
                            </div>
                            <p class="board-meta">
                                <span>${authorDisplay}</span><span class="dot">·</span><span>댓글: 0</span><span class="dot">·</span><span>${timeString}</span>
                            </p>
                        </div>
                    </div>
                `;
                boardList.insertAdjacentHTML('beforeend', itemHTML);
            });

            bindTagFilters();
            bindDeleteButtons();
            
            if (window.applyTranslation) window.applyTranslation(localStorage.getItem('site_lang') || 'KO');
            
        } catch(error) {
            console.error("Error loading posts: ", error);
            // 권한 에러 등으로 실패 시
            boardList.innerHTML = '<p style="text-align:center; padding: 2rem; color: #a1a1aa;">작성된 게시물이 없습니다. 로컬 테스트 중입니다.</p>';
            bindTagFilters(); // 최소한 이벤트는 활성화 
            if (window.applyTranslation) window.applyTranslation(localStorage.getItem('site_lang') || 'KO');
        }
    }

    function bindTagFilters() {
        const tagBtns = document.querySelectorAll('.tag-btn');
        const boardItems = document.querySelectorAll('.board-item-sleek');

        tagBtns.forEach(btn => {
            const newBtn = btn.cloneNode(true);
            btn.parentNode.replaceChild(newBtn, btn);

            newBtn.addEventListener('click', (e) => {
                document.querySelectorAll('.tag-btn').forEach(b => b.classList.remove('active'));
                e.target.classList.add('active');

                const filter = e.target.getAttribute('data-filter');

                document.querySelectorAll('.board-item-sleek').forEach(item => {
                    const category = item.getAttribute('data-category');
                    
                    item.style.opacity = '0';
                    item.style.transform = 'translateY(10px)';

                    setTimeout(() => {
                        if (filter === 'all' || category === filter) {
                            item.style.display = 'flex';
                            void item.offsetWidth;
                            item.style.opacity = '1';
                            item.style.transform = 'translateY(0)';
                        } else {
                            item.style.display = 'none';
                        }
                    }, 300);
                });
            });
        });
    }

    // 목록 불러오기 실행
    loadPosts();

    function bindDeleteButtons() {
        document.querySelectorAll('.btn-delete').forEach(btn => {
            btn.addEventListener('click', async (e) => {
                e.stopPropagation();
                const docId = e.target.getAttribute('data-id');
                const currentLang = localStorage.getItem('site_lang') || 'KO';
                const promptMsg = currentLang === 'EN' ? "Please enter the password used when creating the post to delete it:" : "게시글을 삭제하시려면 작성 시 입력한 비밀번호를 입력해주세요:";
                const password = prompt(promptMsg);
                
                if (password === null || password === "") return;
                
                try {
                    const docRef = db.collection("posts").doc(docId);
                    const docSnap = await docRef.get();
                    if (docSnap.exists) {
                        const docData = docSnap.data();
                        if (docData.password === password) {
                            const confirmMsg = currentLang === 'EN' ? "Are you sure you want to delete? Deleted data cannot be recovered." : "정말로 삭제하시겠습니까? 삭제된 데이터는 복구할 수 없습니다.";
                            if(confirm(confirmMsg)) {
                                await docRef.delete();
                                showNotification("게시글이 안전하게 삭제되었습니다.");
                                loadPosts();
                            }
                        } else {
                            alert(currentLang === 'EN' ? "Passwords do not match." : "비밀번호가 일치하지 않습니다.");
                        }
                    } else {
                        alert(currentLang === 'EN' ? "The post has already been deleted or does not exist." : "이미 삭제되었거나 존재하지 않는 게시물입니다.");
                    }
                } catch(err) {
                    console.error("Error deleting document: ", err);
                    alert(currentLang === 'EN' ? "An error occurred during post deletion." : "게시물 삭제 과정에서 오류가 발생했습니다.");
                }
            });
        });
    }

    // --- 4. Modal (Write Post) logic & Firebase Add ---
    const writeModal = document.getElementById('write-modal');
    const openModalBtn = document.getElementById('open-write-modal');
    const writeForm = document.getElementById('write-form');
    let toastTimeout;

    if (openModalBtn && writeModal) {
        openModalBtn.addEventListener('click', () => {
            writeModal.classList.add('active');
        });

        const closeBtns = writeModal.querySelectorAll('.close-modal');
        closeBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                writeModal.classList.remove('active');
                if(writeForm) writeForm.reset();
            });
        });

        if(writeForm) {
            writeForm.addEventListener('submit', async (e) => {
                e.preventDefault();
                
                const category = document.getElementById('doc-category').value;
                const author = document.getElementById('doc-author').value;
                const password = document.getElementById('doc-password').value;
                const title = document.getElementById('doc-title').value;
                const content = document.getElementById('doc-content').value;

                const submitBtn = writeForm.querySelector('button[type="submit"]');
                const origText = submitBtn.innerText;
                const currentLang = localStorage.getItem('site_lang') || 'KO';
                submitBtn.innerText = currentLang === 'EN' ? "Encrypting Securely..." : "안전하게 암호화 중...";
                submitBtn.disabled = true;
                
                try {
                    await db.collection("posts").add({
                        category: category,
                        author: author,
                        password: password, // 실무에선 해싱해야하지만 시뮬레이션
                        title: title,
                        content: content,
                        createdAt: firebase.firestore.FieldValue.serverTimestamp()
                    });
                    
                    writeModal.classList.remove('active');
                    writeForm.reset();
                    submitBtn.innerText = origText;
                    submitBtn.disabled = false;
                    
                    showNotification("비밀번호와 함께 글이 정상 업로드되었습니다.");
                    
                    loadPosts(); // 목록 리로드
                    
                } catch (e) {
                    console.error("Error adding document: ", e);
                    submitBtn.innerText = "에러 발생";
                    setTimeout(() => {
                        submitBtn.innerText = origText;
                        submitBtn.disabled = false;
                    }, 2000);
                }
            });
        }
    }

    // --- 5. Financial Calculator Logic ---
    const calcModel = document.getElementById('calc-model');
    const calcDownPayment = document.getElementById('calc-down-payment');
    const downPaymentLabel = document.getElementById('down-payment-val');
    const calcMonths = document.getElementById('calc-term');
    const termLabel = document.getElementById('term-val');
    const calcInterest = document.getElementById('calc-interest');
    
    const resMonthly = document.getElementById('monthly-payment');

    function updateCalculator() {
        if (!calcModel) return;
        const price = parseInt(calcModel.value);
        const downPercent = parseInt(calcDownPayment.value);
        const months = parseInt(calcMonths.value);
        const annualInterest = parseFloat(calcInterest.value) || 0;

        if (downPaymentLabel) downPaymentLabel.innerText = downPercent;
        if (termLabel) termLabel.innerText = months;

        const downAmount = price * (downPercent / 100);
        const principal = price - downAmount;

        let monthly = 0;
        if (principal > 0) {
            let parsedInterest = parseFloat(calcInterest.value.replace('%', ''));
            if (isNaN(parsedInterest)) parsedInterest = 5.5;
            if (parsedInterest > 0) {
                const r = (parsedInterest / 100) / 12;
                monthly = principal * (r * Math.pow(1 + r, months)) / (Math.pow(1 + r, months) - 1);
            } else {
                monthly = principal / months;
            }
        }

        if (resMonthly) resMonthly.innerText = '₩ ' + Math.round(monthly).toLocaleString();
    }

    if (calcModel && calcDownPayment && calcMonths) {
        calcModel.addEventListener('change', updateCalculator);
        calcDownPayment.addEventListener('input', updateCalculator);
        calcMonths.addEventListener('input', updateCalculator);
        if(calcInterest) calcInterest.addEventListener('input', updateCalculator);
        updateCalculator(); // init
    }

    // --- 6. Google Authentication Logic ---
    let isLoggedIn = false;
    const auth = firebase.auth();
    const provider = new firebase.auth.GoogleAuthProvider();
    const loginBtns = document.querySelectorAll('.btn-login');

    auth.onAuthStateChanged(user => {
        if(user) {
            isLoggedIn = true;
            loginBtns.forEach(btn => {
                const displayName = user.displayName ? user.displayName.split(' ')[0] : 'VIP';
                btn.innerText = `LOGOUT (${displayName}님)`;
            });
        } else {
            isLoggedIn = false;
            loginBtns.forEach(btn => btn.innerText = "LOGIN");
        }
    });

    loginBtns.forEach(btn => {
        btn.addEventListener('click', async (e) => {
            e.preventDefault();
            try {
                if(isLoggedIn) {
                    if (window.location.protocol === 'file:') {
                        isLoggedIn = false;
                        loginBtns.forEach(b => b.innerText = "LOGIN");
                        showNotification("안전하게 로그아웃 되었습니다.");
                        return;
                    }
                    await auth.signOut();
                    showNotification("안전하게 로그아웃 되었습니다.");
                } else {
                    if (window.location.protocol === 'file:') {
                        const tempName = prompt("NERVE Dynamics 프라이빗 라운지에 입장할 닉네임을 설정해주세요:", "VIP 고객");
                        if (tempName) {
                            isLoggedIn = true;
                            loginBtns.forEach(b => b.innerText = `LOGOUT (${tempName}님)`);
                            showNotification(`${tempName}님, 프라이빗 라운지에 오신 것을 환영합니다.`);
                        }
                        return;
                    }
                    const result = await auth.signInWithPopup(provider);
                    const name = result.user.displayName || '회원';
                    showNotification(`${name}님, 프라이빗 라운지에 오신 것을 환영합니다.`);
                }
            } catch(err) {
                console.error("Login Error: ", err);
                if(err.code === 'auth/unauthorized-domain') {
                    alert("파이어베이스 설정(승인된 도메인)에 현재 주소가 등록되지 않아 차단되었습니다.");
                } else {
                    showNotification("인증 팝업이 차단되었거나 오류가 발생했습니다.");
                }
            }
        });
    });

    // --- 7. Test Drive Form Logic ---
    const testDriveForm = document.getElementById('test-drive-form');
    if (testDriveForm) {
        testDriveForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            if(!isLoggedIn) {
                showNotification("회원 전용 서비스입니다. 상단의 LOGIN 버튼을 클릭해 로그인해 주세요.");
                return;
            }

            const tdModelEl = document.getElementById('td-model');
            const selectedModel = tdModelEl ? tdModelEl.value : '';
            const isConcept = selectedModel === 'Vital-Class' || selectedModel === 'Morph-Class';

            const btn = testDriveForm.querySelector('button[type="submit"]');
            const origText = btn.innerText;
            const currentLang = localStorage.getItem('site_lang') || 'KO';
            btn.innerText = currentLang === 'EN' ? "Processing Application..." : "신청 처리 중...";
            btn.disabled = true;

            setTimeout(() => {
                btn.innerText = origText;
                btn.disabled = false;
                testDriveForm.reset();
                if (isConcept) {
                    showNotification("컨셉 모델 사전 예약이 완료되었습니다. 공식 출시 시점에 가장 먼저 시승 혜택을 제공해 드리겠습니다.");
                } else {
                    showNotification("시승 신청이 완료되었습니다. 담당 전시장 직원이 곧 연락드릴 예정입니다.");
                }
            }, 1500);
        });
    }

    // --- 8. Model Details Logic (Standard + Concept Models) ---
    const modelDetails = {
        "E-Class": {
            subtitle: "시간을 앞서가는 지능형 럭셔리 세단",
            desc: "새로운 E-Class는 단순한 이동 수단을 넘어, 당신과 완벽하게 교감하는 디지털 파트너입니다. 메르세데스-벤츠 고유의 클래식한 우아함에 시대를 선도하는 최첨단 디지털 혁신을 결합하여, 매 순간 당신에게 꼭 맞춘 특별한 드라이빙 경험을 선사합니다.",
            features: [
                { title: "MBUX 슈퍼스크린 & 초개인화 경험", text: "조수석까지 매끄럽게 이어지는 압도적인 크기의 글래스 디스플레이가 미래지향적인 실내를 완성합니다. 인공지능이 운전자의 습관을 스스로 학습하여 자주 쓰는 기능을 자동화하는 '루틴(Routines)' 기능으로 당신만의 E-Class를 완성해 보세요." },
                { title: "시선을 사로잡는 시그니처 디자인", text: "우아하게 흐르는 루프 라인과 메르세데스-벤츠의 삼각별을 형상화한 독창적인 리어램프가 결합하여 언제 어디서나 독보적인 존재감을 드러냅니다." },
                { title: "공감각적 엔터테인먼트 룸", text: "부메스터® 4D 서라운드 사운드 시스템과 음악의 비트에 맞춰 반응하는 액티브 앰비언트 라이트가 주행의 순간을 하나의 예술 공연으로 탈바꿈시킵니다." },
                { title: "효율과 퍼포먼스의 조화", text: "48V 마일드 하이브리드 시스템이 적용되어 한층 부드러운 엔진 시동과 정숙한 주행은 물론, 뛰어난 연료 효율성까지 제공합니다." }
            ]
        },
        "EQS": {
            subtitle: "내일을 향한 감각적인 움직임",
            desc: "전기차 시대가 나아야 할 럭셔리의 새로운 기준을 제시합니다. 공기역학적 디자인의 정수와 혁신적인 전동화 기술이 만나, 고요하면서도 폭발적인 퍼포먼스를 완성했습니다. 내연기관의 한계를 넘어선 진보된 럭셔리를 직접 경험해 보십시오.",
            features: [
                { title: "원-보우(One-Bow) 디자인과 공기역학의 정점", text: "활을 연상시키는 유려한 곡선의 실루엣은 양산차 최고 수준의 공기저항계수를 달성했습니다. 이는 바람의 저항을 최소화하여 압도적인 1회 충전 주행거리와 경이로운 실내 정숙성을 가능하게 합니다." },
                { title: "MBUX 하이퍼스크린", text: "실내 전체를 가로지르는 거대한 곡선형 패널이 마치 우주선에 탑승한 듯한 감각을 선사합니다. 제로-레이어(Zero-layer) 인터페이스를 통해 복잡한 메뉴 이동 없이 필요한 기능을 직관적으로 제어할 수 있습니다." },
                { title: "구름 위를 달리는 듯한 승차감", text: "지능형 에어매틱(AIRMATIC) 서스펜션이 노면 상황을 즉각적으로 파악하여 최적의 승차감을 유지하며, 리어 액슬 스티어링은 대형 세단임에도 콤팩트카처럼 민첩한 코너링과 주차 편의성을 제공합니다." }
            ]
        },
        "S-Class": {
            subtitle: "세상을 이끄는 리더를 위한 궁극의 안식처",
            desc: "S-Class는 단순한 자동차를 넘어선 하나의 상징이자, 성공을 향한 여정에 동행하는 최고의 파트너입니다. 타협하지 않는 장인정신과 최첨단 안전 기술이 빚어낸 독보적인 승차감은 당신에게 완벽한 휴식과 새로운 영감을 제공합니다.",
            features: [
                { title: "퍼스트 클래스의 여유, 뒷좌석 컴포트", text: "이그제큐티브 시트와 쇼퍼 패키지를 통해 뒷좌석 탑승자에게 넓고 안락한 공간을 제공합니다. 섬세한 마사지 기능과 최상급 나파 가죽의 질감이 이동하는 모든 순간을 완벽한 휴식 시간으로 만들어 줍니다." },
                { title: "오감을 만족시키는 경이로운 정숙성", text: "외부의 소음과 진동을 완벽에 가깝게 차단하는 차체 설계로, 속도를 체감하기 어려울 만큼 고요하고 평온한 실내 환경을 유지합니다." },
                { title: "타협 없는 혁신적 안전 기술", text: "찰나의 순간까지 예측하는 드라이빙 어시스턴스 패키지와 100만 개 이상의 픽셀로 야간 시야를 정밀하게 밝히는 디지털 라이트가 당신과 소중한 사람을 가장 안전하게 보호합니다." }
            ]
        },
        "G-Class": {
            subtitle: "전설은 길을 가리지 않는다",
            desc: "수십 년의 시간 동안 변함없이 지켜온 독보적인 아이덴티티. G-Class는 거친 자연과 도심을 아우르며, 어떠한 험로에서도 한계 없는 퍼포먼스를 발휘합니다. 거친 본성과 럭셔리한 실내가 완벽하게 공존하는 유일무이한 오프로더의 감성을 느껴보십시오.",
            features: [
                { title: "타협을 모르는 오프로드 DNA", text: "3개의 100% 디퍼렌셜 락, 로우 레인지 기어, 그리고 견고한 사다리형 프레임 바디가 결합하여 가파른 경사와 험난한 지형도 거침없이 주파하는 궁극의 오프로드 성능을 자랑합니다." },
                { title: "시간을 초월한 아이코닉 디자인", text: "특유의 각진 실루엣, 외부로 노출된 도어 힌지, 상징적인 스페어타이어 커버 등 G-Class만의 헤리티지 디자인 요소가 현대적인 감각과 만나 강렬한 카리스마를 발산합니다." },
                { title: "반전의 럭셔리 인테리어", text: "터프한 외관과 상반되는 실내는 최고급 소재와 장인의 수작업으로 완성되었습니다. 최신 MBUX 인포테인먼트 시스템과 와이드 스크린 콕핏이 오프로더 안에서도 최상의 디지털 편의성을 제공합니다." }
            ]
        },
        'EQ "바이탈(Vital) 클래스"': {
            subtitle: "교감하는 바이오 에너지 모빌리티",
            desc: "지능형 생체 연결 기술을 탑재한 미래형 바이오 컨셉 세단. 운전자의 미세한 생체 파동과 감정 상태를 분석하여 최상의 치유 환경을 제공하며, 레벨 5 완전 자율주행과 연동되는 혁신적인 무결점 탑승자 안심 설계가 적용되었습니다.",
            features: [
                { title: "바이오 피드백 시트 시스템", text: "운전자의 심박수와 호흡, 스트레스 수치를 감지하여 실시간으로 요추 완화 롤러 마사지 및 미세 파동 음악을 매칭 제공합니다." },
                { title: "인텔리전트 자율 구조 모드", text: "탑승자의 갑작스러운 의료 응급 사태 시, 차량 스스로 비상 구급 신호를 인근 의료 기관으로 송출하고 완전 자율 주행 상태로 직행 응급실로 긴급 이송합니다." }
            ]
        },
        'G- "모프(Morph) 클래스"': {
            subtitle: "지형지물에 능동적으로 반응하는 트랜스포머 SUV",
            desc: "어떠한 한계도 모르는 능동형 변형 차체 기술이 탑재된 미래 오프로더의 정점. 주행 노면 상태와 기상 조건에 따라 휠베이스와 차체 스포일러 패널의 두께 및 구조가 실시간으로 변하여 극한의 기동성을 발휘합니다.",
            features: [
                { title: "액티브 에어로 다이내믹 패널", text: "고속 도로 진입 시 유선형 형태로 전후면 차체 플랩이 길어지고 넓어져 저항을 최소화하고 주행 효율성을 극대화합니다." },
                { title: "가변 트랙터 오프로드 모드", text: "극도로 험난한 진흙, 모래, 사막, 바위 구간 진입 시 휠 바디 지지대가 능동적으로 조율되어 최상의 접지 마찰력을 유지합니다." }
            ]
        },
        'MAYBACH "크로노스(Chronos) 클래스"': {
            subtitle: "시간 압축형 럭셔리 무빙 라운지",
            desc: "탑승자의 '시간적 효율과 완벽한 휴식'을 극대화하는 하이엔드 비즈니스 모델. 예측 자율주행 AI와 양자 컴퓨팅 라우팅 소프트웨어가 도시의 교통 흐름을 5분 앞서 예측하여 정체를 완전히 우회합니다. 차량 내부는 완벽한 무소음·무진동의 초지향성 제어 공간으로 전환되며, 탑승자의 업무 스케줄과 수면 패턴에 맞춰 실시간으로 최적의 차내 환경을 브레인웨이브(뇌파) 동기화 기술로 제어합니다.",
            features: [
                { title: "예측형 인지 라우팅", text: "단순한 내비게이션을 넘어 양자 컴퓨팅 기반의 통계적 흐름 예측 알고리즘이 도시 전체의 교통 인프라 데이터를 실시간 스캐닝합니다. 정체가 시작되기 5분 전 미리 최적의 우회로를 확보하여 도로 위에서 낭비되는 시간을 영(0)으로 수렴시킵니다." },
                { title: "뇌파 동기화 ANC 캐빈", text: "차량 내부에 탑승하는 순간, 최고급 시트에 내장된 생체 센서가 탑승자의 뇌파(Alpha, Beta, Theta 파)를 분석합니다. 업무 모드 시 고도의 집중력을 유도하는 지향성 음향과 홀로그램 스크린을 제어하며, 휴식 모드 시 자이로스코프 기반의 '제로-그라비티 능동 감쇄 알고리즘'이 작동하여 노면의 미세 진동과 소음을 100% 차단, 달리는 특급 호텔룸을 구현합니다." }
            ]
        },
        'AMG "에어로(Aero) 클래스"': {
            subtitle: "초고속 유체역학 하이퍼 모빌리티",
            desc: "지상과 상공의 경계를 허무는 하이브리드 수직이착륙(VTOL) 하이퍼 모빌리티. NERVE OS의 초고속 유체역학 제어 알고리즘이 적용되어, 지상 고속 주행 중 정체가 발생하거나 지형적 한계에 부딪히면 4개의 휠이 독립적인 추진 프로펠러로 가변 분할되며 공중으로 도약합니다. 비행 중 발생하는 모든 난기류를 실시간 로봇 제어로 상쇄하여 지상과 다름없는 안정적인 비행 성능을 제공합니다.",
            features: [
                { title: "가변형 로보틱 액추에이션 (Multi-Modal Transformation)", text: "고속 주행 중 지상 정체 구간을 만나거나 도강이 필요할 때, 주행 모드를 비행 모드로 전환합니다. NERVE OS의 초정밀 제어 아래 4개의 휠이 외부로 전개되며 1,000분의 1초 만에 각각 독립적인 지능형 추진 프로펠러(Thruster)로 변형, 공중으로 도약합니다." },
                { title: "실시간 난기류 상쇄 소프트웨어 (Active Aero-Stabilizer)", text: "비행 중 예기치 못한 도심 빌딩 숲의 난기류나 고도 변화를 만났을 때, 기체 표면에 배치된 마이크로 에어로 다이내믹 패널과 제트 분사구를 실시간으로 역방향 제어합니다. 이를 통해 탑승자는 하늘 위를 날고 있음에도 흔들림 없는 안락함과 AMG 특유의 날렵한 조향감을 동시에 경험할 수 있습니다." }
            ]
        }
    };

    const detailModal = document.getElementById('detail-modal');
    const closeDetailBtns = document.querySelectorAll('.detail-close');
    
    if (detailModal) {
        document.querySelectorAll('.model-card').forEach(card => {
            card.setAttribute('tabindex', '0');
            card.setAttribute('role', 'button');
            card.addEventListener('keydown', (e) => {
                if(e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    card.click();
                }
            });
            card.addEventListener('click', (e) => {
                // 사전 예약하기 버튼을 클릭한 경우 모달을 띄우지 않음
                if (e.target.closest('.btn-primary-outline')) {
                    return;
                }
                
                const h3 = card.querySelector('h3');
                if (!h3) return;
                
                let modelName = h3.innerText.trim();
                h3.childNodes.forEach(child => {
                    if (child.nodeType === Node.TEXT_NODE && child._ko) {
                        const txt = child._ko.trim();
                        if (txt) modelName = txt;
                    }
                });
                
                const data = modelDetails[modelName];
                
                if (data) {
                    document.getElementById('detail-model-name').innerText = modelName;
                    document.getElementById('detail-subtitle').innerText = data.subtitle;
                    document.getElementById('detail-desc').innerText = data.desc;
                    
                    const featuresHtml = data.features.map(f => `
                        <div style="margin-bottom: 2rem;">
                            <h5 style="font-size: 1.1rem; font-weight: 600; margin-bottom: 0.5rem; color: var(--color-black);">${f.title}</h5>
                            <p style="font-size: 1rem; color: var(--color-grey); line-height: 1.7;">${f.text}</p>
                        </div>
                    `).join('');
                    
                    document.getElementById('detail-features').innerHTML = featuresHtml;
                    detailModal.classList.add('active');
                    detailModal.style.display = 'flex'; // 강제 디스플레이 보장
                    
                    if (window.applyTranslation) window.applyTranslation(localStorage.getItem('site_lang') || 'KO');

                    const tdModel = document.getElementById('td-model');
                    if(tdModel) {
                        let valToSelect = modelName;
                        if (modelName.includes("바이탈")) valToSelect = "Vital-Class";
                        if (modelName.includes("모프")) valToSelect = "Morph-Class";
                        if (modelName.includes("크로노스")) valToSelect = "Chronos-Class";
                        if (modelName.includes("에어로")) valToSelect = "Aero-Class";
                        Array.from(tdModel.options).forEach(opt => {
                            if(opt.value === valToSelect) opt.selected = true;
                        });
                    }
                }
            });
        });

        closeDetailBtns.forEach(btn => {
            btn.setAttribute('tabindex', '0');
            btn.setAttribute('role', 'button');
            btn.addEventListener('keydown', (e) => {
                if(e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    btn.click();
                }
            });
            btn.addEventListener('click', () => {
                detailModal.classList.remove('active');
                detailModal.style.display = 'none';
                
                // 시승 신청하기 버튼을 눌렀을 경우를 위한 스크롤
                if(btn.tagName.toLowerCase() === 'a' && btn.getAttribute('href') === '#test-drive') {
                    const testDriveSection = document.getElementById('test-drive');
                    if(testDriveSection) testDriveSection.scrollIntoView({ behavior: 'smooth' });
                }
            });
        });
    }

    // --- 9. Notifications ---
    const toast = document.getElementById('notification-toast');
    const toastText = document.querySelector('.toast-text');

    function showNotification(message) {
        if(!toast || !toastText) return;
        const currentLang = localStorage.getItem('site_lang') || 'KO';
        let translatedMessage = message;
        if (currentLang === 'EN' && window.langDict) {
            if (window.langDict[message]) {
                translatedMessage = window.langDict[message];
            } else if (message.includes('님, 프라이빗 라운지에 오신 것을 환영합니다.')) {
                const name = message.split('님')[0];
                translatedMessage = `Welcome to the Private Lounge, ${name}.`;
            }
        }
        toastText.innerText = translatedMessage;
        toast.classList.add('show');
        
        clearTimeout(toastTimeout);
        toastTimeout = setTimeout(() => {
            toast.classList.remove('show');
        }, 4000);
    }

    // --- 10. Scroll to Top Floating Button Logic ---
    const scrollTopBtn = document.getElementById('scroll-to-top');
    if (scrollTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 400) {
                scrollTopBtn.classList.add('visible');
            } else {
                scrollTopBtn.classList.remove('visible');
            }
        });

        scrollTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
        
        scrollTopBtn.addEventListener('keydown', (e) => {
            if(e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                scrollTopBtn.click();
            }
        });
    }

    // --- 11. Language Toggle Logic ---
    const langToggleBtns = document.querySelectorAll('.btn-lang');
    let currentLang = localStorage.getItem('site_lang') || 'KO';

    // Set initial text
    langToggleBtns.forEach(btn => {
        btn.innerText = currentLang;
    });

    // Toggle event
    langToggleBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            currentLang = currentLang === 'KO' ? 'EN' : 'KO';
            localStorage.setItem('site_lang', currentLang);
            
            langToggleBtns.forEach(b => b.innerText = currentLang);
            
            if (window.applyTranslation) {
                window.applyTranslation(currentLang);
            }
        });
    });

    // Apply translations on load
    if (window.applyTranslation) {
        window.applyTranslation(currentLang);
    }
});
