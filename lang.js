const langDict = {
    // Navbar & Buttons
    "HOME": "HOME",
    "MODELS": "MODELS",
    "TECH": "TECH",
    "FINANCE": "FINANCE",
    "TEST DRIVE": "TEST DRIVE",
    "BOARD": "BOARD",
    "새로운 알림이 도착했습니다.": "A new notification has arrived.",
    "기존 모델 라인업": "Existing Fleet Lineup",
    "미래 모빌리티 살펴보기": "Explore Future Mobility",
    "자세히 보기": "View Details",
    "브랜드 필름 감상하기": "Watch Brand Film",
    "시승 신청하기": "Apply for Test Drive",
    "오너들을 위한 프라이빗 라운지 가기": "Go to Private Lounge for Owners",
    "메인 화면으로 돌아가기": "Return to Main Screen",
    
    // Hero Section
    "미래 모빌리티의 청사진": "Blueprint of Future Mobility",
    "완전 자율주행(Level 5)을 전제로 한 하이엔드 럭셔리 모델.": "High-end luxury model based on Level 5 autonomous driving.",
    "이동 수단을 넘어선 '프라이빗 라운지'의 공간으로 진화합니다.": "Evolving beyond a means of transport into a 'private lounge' space.",

    // About Section
    "인공지능 마인드와": "Fusion of AI Mind",
    "최정상 엔지니어링의 융합": "and Pinnacle Engineering",
    "차세대 AI 지능형 알고리즘과 인지 컴퓨팅 분야에서 독보적인 원천 기술을 보유한 테크 마스터": "Tech master with unrivaled core technologies in next-gen AI and cognitive computing",
    ", 그리고 130년간 전 세계 럭셔리 자동차의 기준을 정립해 온": ", and the brand that has defined global luxury cars for 130 years",
    "가 만났습니다.": "have united.",
    "이번 파트너십은 단순한 자동차 제조를 넘어, 모빌리티에 '지능(AI)'과 '신경망(Nerve)'을 이식하는 역사적인 혁신입니다. NERVE Dynamics의 고도화된 자율주행 알고리즘과 생체 인식 AI 기술은 Mercedes-Benz의 완벽한 하드웨어와 결합하여 완전히 새로운 차원의 이동 경험을 창조합니다.": "This partnership goes beyond simple car manufacturing; it is a historic innovation that implants 'intelligence (AI)' and 'nerves (Nerve)' into mobility. NERVE Dynamics' advanced autonomous driving algorithms and biometric AI technology combine with Mercedes-Benz's flawless hardware to create an entirely new dimension of mobility experience.",
    "스스로 생각하고, 운전자와 교감하며, 지형에 맞춰 진화하는 가장 지적인 럭셔리 모빌리티의 미래를 소개합니다.": "We introduce the future of the most intelligent luxury mobility—one that thinks for itself, interacts with the driver, and evolves according to the terrain.",

    // Legacy Section
    "1886년 최초의 내연기관 자동차를 발명한 이래 140년. 메르세데스-벤츠가 걸어온 길은 언제나 프리미엄 모빌리티의 기준이자 새로운 역사가 되었습니다.": "140 years since inventing the first internal combustion engine car in 1886. Mercedes-Benz has always been the standard for premium mobility and a new history.",
    "과거의 유산을 존중하면서도 미래를 향해 끊임없이 나아가는 위대한 여정에 동참하십시오.": "Join the great journey of moving endlessly toward the future while respecting the legacy of the past.",
    
    // Models Section
    "기존 모델의 라인업": "Existing Fleet Lineup",
    "우아함과 첨단 혁신의 완벽한 밸런스": "Perfect balance of elegance and cutting-edge innovation",
    "진보적인 럭셔리 순수 전기차의 기준": "The standard for progressive luxury pure electric vehicles",
    "시간이 흘러도 변치 않는 럭셔리의 정점": "The pinnacle of luxury that remains timeless",
    "장엄한 헤리티지와 모험을 향한 열정": "Majestic heritage and passion for adventure",
    
    "우리가 만들어갈 가장 완벽한 미래 모빌리티. 지금 사전 예약을 통해 가장 먼저 경험해 보십시오.": "The most perfect future mobility we will create. Experience it first through pre-order now.",
    "사전 예약하기": "Pre-order Now",
    
    // Concept Models
    "EQ \"바이탈(Vital) 클래스\"": "EQ \"Vital Class\"",
    "운전자와 심리적, 물리적으로 교감하는 바이오 특화 모델. 시트와 스티어링 센서가 생체 데이터를 실시간 분석하여 스트레스 해소를 위한 조명/향기를 조율하며, 응급 상황 시 자율구조 프로토콜을 가동합니다.": "A bio-specialized model that interacts physically and psychologically with the driver. Sensors analyze biometric data in real-time to adjust lighting and scent, and activate autonomous rescue protocols in emergencies.",
    "G- \"모프(Morph) 클래스\"": "G- \"Morph Class\"",
    "지형과 주행 상황에 맞추어 형태가 능동적으로 진화하는 트랜스포머 SUV. 고속 주행 시 유선형 형태로 차체 패널이 연장되며, 험로에선 액티브 에어로 다이내믹 패널과 결합하여 접지력을 극대화합니다.": "A transformer SUV that actively evolves its shape according to terrain. Body panels extend aerodynamically at high speeds and combine with active panels to maximize traction on rough roads.",
    "MAYBACH \"크로노스(Chronos) 클래스\"": "MAYBACH \"Chronos Class\"",
    "탑승자의 '시간적 효율과 완벽한 휴식'을 극대화하는 하이엔드 비즈니스 모델. 예측 자율주행 AI와 양자 컴퓨팅 라우팅 소프트웨어가 도시의 교통 흐름을 5분 앞서 예측하여 정체를 완전히 우회합니다. 차량 내부는 완벽한 무소음·무진동의 초지향성 제어 공간으로 전환되며, 탑승자의 업무 스케줄과 수면 패턴에 맞춰 실시간으로 최적의 차내 환경을 브레인웨이브(뇌파) 동기화 기술로 제어합니다.": "High-end business model that maximizes passenger's 'time efficiency and perfect rest'. Predictive autonomous AI and quantum computing routing software predict city traffic 5 minutes ahead to bypass congestion completely. The interior transforms into a perfect noiseless/vibrationless hyper-directional control space, adjusting in real-time to match work schedules and sleep patterns using brainwave synchronization tech.",
    "AMG \"에어로(Aero) 클래스\"": "AMG \"Aero Class\"",
    "지상과 상공의 경계를 허무는 하이브리드 수직이착륙(VTOL) 하이퍼 모빌리티. NERVE OS의 초고속 유체역학 제어 알고리즘이 적용되어, 지상 고속 주행 중 정체가 발생하거나 지형적 한계에 부딪히면 4개의 휠이 독립적인 추진 프로펠러로 가변 분할되며 공중으로 도약합니다. 비행 중 발생하는 모든 난기류를 실시간 로봇 제어로 상쇄하여 지상과 다름없는 안정적인 비행 성능을 제공합니다.": "Hybrid VTOL hyper-mobility blurring the line between ground and sky. Equipped with NERVE OS ultra-high-speed fluid dynamics control algorithm, if congestion or terrain limits occur during ground driving, its 4 wheels transform into independent thrusters to leap into the air. Real-time robotic control offsets all turbulence, providing stable flight performance comparable to the ground.",
    
    // Future Class Details
    "시간 압축형 럭셔리 무빙 라운지": "Time-Compression Luxury Moving Lounge",
    "메르세데스-마이바흐의 최상위 플래그십에 NERVE Dynamics의 '시공간 동기화 OS(Temporal Sync OS)'를 결합하여, 탑승자에게 완벽하게 독립된 '대체 시간'을 선사하는 초호화 비즈니스 모빌리티입니다.": "An ultra-luxurious business mobility that combines Mercedes-Maybach's top flagship with NERVE Dynamics' 'Temporal Sync OS', providing an entirely independent 'alternative time' for the passenger.",
    "예측형 인지 라우팅": "Predictive Cognitive Routing",
    "단순한 내비게이션을 넘어 양자 컴퓨팅 기반의 통계적 흐름 예측 알고리즘이 도시 전체의 교통 인프라 데이터를 실시간 스캐닝합니다. 정체가 시작되기 5분 전 미리 최적의 우회로를 확보하여 도로 위에서 낭비되는 시간을 영(0)으로 수렴시킵니다.": "Beyond simple navigation, quantum computing-based flow prediction algorithms scan city-wide traffic infrastructure data in real-time. It secures the optimal detour 5 minutes before congestion starts, reducing wasted time on the road to zero.",
    "뇌파 동기화 ANC 캐빈": "Brainwave-Sync ANC Cabin",
    "차량 내부에 탑승하는 순간, 최고급 시트에 내장된 생체 센서가 탑승자의 뇌파(Alpha, Beta, Theta 파)를 분석합니다. 업무 모드 시 고도의 집중력을 유도하는 지향성 음향과 홀로그램 스크린을 제어하며, 휴식 모드 시 자이로스코프 기반의 '제로-그라비티 능동 감쇄 알고리즘'이 작동하여 노면의 미세 진동과 소음을 100% 차단, 달리는 특급 호텔룸을 구현합니다.": "Upon boarding, biometric sensors in the premium seats analyze the passenger's brainwaves. In work mode, it controls directional sound and hologram screens for high concentration. In rest mode, the gyroscope-based 'Zero-Gravity Active Damping Algorithm' blocks 100% of micro-vibrations and noise, creating a running luxury hotel room.",
    "초고속 유체역학 하이퍼 모빌리티": "High-Speed Fluid Dynamics Hyper-Mobility",
    "메르세데스-AMG의 압도적인 트랙 퍼포먼스와 NERVE Dynamics의 '지공(地空) 하이브리드 제어 알고리즘'이 만나 탄생한 미래형 수직이착륙(VTOL) 하이퍼카입니다. 지상 주행의 한계를 완전히 극복하고 공간을 입체적으로 활용합니다.": "A futuristic VTOL hypercar born from the combination of Mercedes-AMG's overwhelming track performance and NERVE Dynamics' 'Ground-Air Hybrid Control Algorithm'. It completely overcomes ground driving limits and utilizes space three-dimensionally.",
    "가변형 로보틱 액추에이션 (Multi-Modal Transformation)": "Variable Robotic Actuation (Multi-Modal Transformation)",
    "고속 주행 중 지상 정체 구간을 만나거나 도강이 필요할 때, 주행 모드를 비행 모드로 전환합니다. NERVE OS의 초정밀 제어 아래 4개의 휠이 외부로 전개되며 1,000분의 1초 만에 각각 독립적인 지능형 추진 프로펠러(Thruster)로 변형, 공중으로 도약합니다.": "When facing ground congestion or needing to cross water during high-speed driving, it switches to flight mode. Under NERVE OS precision control, the 4 wheels deploy outward and transform into independent intelligent thrusters in 1/1000th of a second, leaping into the air.",
    "실시간 난기류 상쇄 소프트웨어 (Active Aero-Stabilizer)": "Real-time Turbulence Offset Software (Active Aero-Stabilizer)",
    "비행 중 예기치 못한 도심 빌딩 숲의 난기류나 고도 변화를 만났을 때, 기체 표면에 배치된 마이크로 에어로 다이내믹 패널과 제트 분사구를 실시간으로 역방향 제어합니다. 이를 통해 탑승자는 하늘 위를 날고 있음에도 흔들림 없는 안락함과 AMG 특유의 날렵한 조향감을 동시에 경험할 수 있습니다.": "When encountering unexpected turbulence or altitude changes in the urban building forest, micro aerodynamic panels and jet nozzles on the surface are reverse-controlled in real-time. This allows passengers to experience unwavering comfort and AMG's agile steering while flying in the sky.",
    
    // Tech Section
    "압도적인 크기의 고해상도 하이퍼스크린과 지능형 AI가 결합된 MBUX 인포테인먼트. 사용자의 습관을 학습하여 드라이빙의 모든 순간을 직관적이고 완벽하게 제어합니다.": "MBUX infotainment combining a massive high-resolution Hyperscreen and intelligent AI. It learns user habits to perfectly control every driving moment.",
    "초개인화된 생체 인식 프로필 로딩": "Hyper-personalized biometric profile loading",
    "헤드업 디스플레이 연동형 AR 내비게이션": "AR navigation linked with Head-up Display",
    "무결점 자율주행 보조 시스템(ADAS)": "Flawless autonomous driving assist system (ADAS)",
    
    // Robotics Software Portfolio
    "'논리의 의도'를 담은": "Flawless control philosophy based on",
    "무결점 제어 철학": "'Logical Intent'",
    "로봇소프트웨어 공학의 전문성을 바탕으로 한 자율주행 모빌리티 제어 알고리즘. 단순한 하드웨어의 움직임을 넘어, 탑승자의 생체 데이터와 도로 환경을 실시간으로 분석하고 예측하는 완벽한 인공지능 협업 시스템을 설계합니다.": "Autonomous mobility control algorithms based on expertise in robotics software engineering. Beyond simple hardware movement, we design perfect AI collaboration systems that analyze and predict passenger biometric data and road environments in real-time.",
    "하드웨어 분석 및 정밀 PLC 제어 시스템": "Hardware analysis and precise PLC control systems",
    "동적 환경에서의 실시간 센서 데이터 퓨전": "Real-time sensor data fusion in dynamic environments",
    "AI 협업을 통한 레벨 5 자율주행 모듈 최적화": "Level 5 autonomous driving module optimization through AI collaboration",
    
    // Philosophy
    "우리의 절대적 가치": "Our Absolute Values",
    "전동화 시대의 기준을 새롭게 정립하는 차세대 기술력과 사용자 중심의 혁신.": "Next-gen technology and user-centric innovation defining new standards for the electrification era.",
    "단 하나의 디테일도 놓치지 않는 장인 정신과 최상의 소재가 결합된 품질.": "Quality combining meticulous craftsmanship and the finest materials.",
    "내일의 세대를 위해 탄소 중립을 실현하는 모빌리티 생태계의 비전.": "A vision of a mobility ecosystem realizing carbon neutrality for tomorrow's generation.",
    
    // Finance
    "맞춤형 금융 프로그램": "Customized Financial Programs",
    "고객님의 라이프스타일에 맞춘 프리미엄 금융 솔루션을 제공합니다. 예상 월 납입금을 확인하시고, 지금 바로 차량 소유의 즐거움을 설계해 보십시오.": "We provide premium financial solutions tailored to your lifestyle. Check the estimated monthly payment and design the joy of car ownership now.",
    "예상 월 납입금": "Estimated Monthly Payment",
    "*위 금액은 단순 참고용이며, 실제 조건에 따라 달라질 수 있습니다.": "*The amount above is for reference only and may vary depending on actual conditions.",
    "차량 선택": "Select Vehicle",
    "선납금 비율 (": "Down Payment (",
    "할부 기간 (": "Installment Term (",
    "개월)": " Months)",
    "예상 금리": "Estimated Interest Rate",
    "E-Class (₩ 80,000,000 ~)": "E-Class (₩ 80,000,000 ~)",
    "S-Class (₩ 150,000,000 ~)": "S-Class (₩ 150,000,000 ~)",
    "EQS (₩ 120,000,000 ~)": "EQS (₩ 120,000,000 ~)",
    "G-Class (₩ 200,000,000 ~)": "G-Class (₩ 200,000,000 ~)",
    "EQ 바이탈 클래스 (₩ 350,000,000 ~)": "EQ Vital Class (₩ 350,000,000 ~)",
    "G 모프 클래스 (₩ 450,000,000 ~)": "G Morph Class (₩ 450,000,000 ~)",
    "마이바흐 크로노스 클래스 (₩ 650,000,000 ~)": "Maybach Chronos Class (₩ 650,000,000 ~)",
    "AMG 에어로 클래스 (₩ 680,000,000 ~)": "AMG Aero Class (₩ 680,000,000 ~)",
    
    // Test Drive
    "시승 신청": "Test Drive Application",
    "가장 진보된 모빌리티를 직접 경험해 보십시오.": "Experience the most advanced mobility yourself.",
    "성명": "Name",
    "홍길동": "John Doe",
    "연락처": "Contact",
    "관심 모델": "Model of Interest",
    "모델을 선택해주세요": "Please select a model",
    "EQ 바이탈 클래스": "EQ Vital Class",
    "G 모프 클래스": "G Morph Class",
    "마이바흐 크로노스 클래스": "Maybach Chronos Class",
    "AMG 에어로 클래스": "AMG Aero Class",
    "희망 시승일": "Preferred Date",
    "시승 신청 완료하기": "Complete Test Drive Application",
    "이미 차량을 출고하신 오너이신가요? 프라이빗 커뮤니티 공간에서 소통해 보세요.": "Are you an owner who has already taken delivery? Communicate in our private community space.",
    
    // Board
    "오너들을 위한 프라이빗 라운지": "Private Lounge for Owners",
    "전체보기": "All",
    "전기차(EQ)": "Electric (EQ)",
    "라이프스타일": "Lifestyle",
    "서비스/관리": "Service/Care",
    "글쓰기": "Write",
    "게시글을 동기화하고 있습니다...": "Synchronizing posts...",
    "등록된 글이 없습니다. 회원님의 첫 이야기를 들려주세요!": "No posts registered. Please tell us your first story!",
    "작성된 게시물이 없습니다. 로컬 테스트 중입니다.": "No posts written. Testing locally.",
    "시승기/리뷰": "Test Drive/Review",
    "정비 팁": "Maintenance Tip",
    "출고 인증": "Delivery Certification",
    "일반": "General",
    "삭제": "Delete",
    "조금 전": "Just now",
    
    // Modals
    "새 글 작성": "Write New Post",
    "카테고리": "Category",
    "제목": "Title",
    "제목을 입력하세요": "Enter the title",
    "작성자": "Author",
    "이름 또는 닉네임": "Name or Nickname",
    "비밀번호 (게시물 삭제 시 필요)": "Password (Required for deletion)",
    "비밀번호 4자리 숫자": "4-digit password",
    "내용": "Content",
    "내용을 입력하세요": "Enter the content",
    "취소": "Cancel",
    "등록하기": "Submit",
    "닫기": "Close",
    
    // Footer
    "차량 안내": "Vehicle Guide",
    "온라인 카탈로그": "Online Catalog",
    "견적 내기": "Get a Quote",
    // E-Class Details
    "시간을 앞서가는 지능형 럭셔리 세단": "Intelligent luxury sedan ahead of its time",
    "새로운 E-Class는 단순한 이동 수단을 넘어, 당신과 완벽하게 교감하는 디지털 파트너입니다. 메르세데스-벤츠 고유의 클래식한 우아함에 시대를 선도하는 최첨단 디지털 혁신을 결합하여, 매 순간 당신에게 꼭 맞춘 특별한 드라이빙 경험을 선사합니다.": "The new E-Class is more than just a means of transportation; it is a digital partner that perfectly interacts with you. Combining Mercedes-Benz's classic elegance with cutting-edge digital innovation, it provides a special driving experience tailored specifically to you at every moment.",
    "MBUX 슈퍼스크린 & 초개인화 경험": "MBUX Superscreen & Hyper-personalized Experience",
    "조수석까지 매끄럽게 이어지는 압도적인 크기의 글래스 디스플레이가 미래지향적인 실내를 완성합니다. 인공지능이 운전자의 습관을 스스로 학습하여 자주 쓰는 기능을 자동화하는 '루틴(Routines)' 기능으로 당신만의 E-Class를 완성해 보세요.": "The overwhelmingly large glass display that seamlessly extends to the passenger seat completes a futuristic interior. Create your own E-Class with the 'Routines' feature, where AI learns driver habits and automates frequently used functions.",
    "시선을 사로잡는 시그니처 디자인": "Eye-catching Signature Design",
    "우아하게 흐르는 루프 라인과 메르세데스-벤츠의 삼각별을 형상화한 독창적인 리어램프가 결합하여 언제 어디서나 독보적인 존재감을 드러냅니다.": "The elegantly flowing roofline and the unique taillamps embodying the Mercedes-Benz three-pointed star combine to reveal an unrivaled presence anytime, anywhere.",
    "공감각적 엔터테인먼트 룸": "Synesthetic Entertainment Room",
    "부메스터® 4D 서라운드 사운드 시스템과 음악의 비트에 맞춰 반응하는 액티브 앰비언트 라이트가 주행의 순간을 하나의 예술 공연으로 탈바꿈시킵니다.": "The Burmester® 4D surround sound system and active ambient lighting that reacts to the beat of the music transform the driving moment into an artistic performance.",
    "효율과 퍼포먼스의 조화": "Harmony of Efficiency and Performance",
    "48V 마일드 하이브리드 시스템이 적용되어 한층 부드러운 엔진 시동과 정숙한 주행은 물론, 뛰어난 연료 효율성까지 제공합니다.": "The 48V mild hybrid system provides smoother engine starts and quiet driving, as well as excellent fuel efficiency.",

    // EQS Details
    "내일을 향한 감각적인 움직임": "Sensuous Movement Towards Tomorrow",
    "전기차 시대가 나아야 할 럭셔리의 새로운 기준을 제시합니다. 공기역학적 디자인의 정수와 혁신적인 전동화 기술이 만나, 고요하면서도 폭발적인 퍼포먼스를 완성했습니다. 내연기관의 한계를 넘어선 진보된 럭셔리를 직접 경험해 보십시오.": "Presents a new standard of luxury for the electric vehicle era. The essence of aerodynamic design meets innovative electrification technology to complete a quiet yet explosive performance. Experience progressive luxury beyond the limits of internal combustion engines.",
    "원-보우(One-Bow) 디자인과 공기역학의 정점": "One-Bow Design and the Pinnacle of Aerodynamics",
    "활을 연상시키는 유려한 곡선의 실루엣은 양산차 최고 수준의 공기저항계수를 달성했습니다. 이는 바람의 저항을 최소화하여 압도적인 1회 충전 주행거리와 경이로운 실내 정숙성을 가능하게 합니다.": "The elegant curved silhouette reminiscent of a bow has achieved the highest level of drag coefficient among mass-produced cars. This minimizes wind resistance, enabling overwhelming single-charge range and phenomenal interior quietness.",
    "MBUX 하이퍼스크린": "MBUX Hyperscreen",
    "실내 전체를 가로지르는 거대한 곡선형 패널이 마치 우주선에 탑승한 듯한 감각을 선사합니다. 제로-레이어(Zero-layer) 인터페이스를 통해 복잡한 메뉴 이동 없이 필요한 기능을 직관적으로 제어할 수 있습니다.": "A massive curved panel crossing the entire interior gives the sensation of boarding a spaceship. The zero-layer interface allows intuitive control of necessary functions without complex menu navigation.",
    "구름 위를 달리는 듯한 승차감": "Ride Comfort Like Driving on Clouds",
    "지능형 에어매틱(AIRMATIC) 서스펜션이 노면 상황을 즉각적으로 파악하여 최적의 승차감을 유지하며, 리어 액슬 스티어링은 대형 세단임에도 콤팩트카처럼 민첩한 코너링과 주차 편의성을 제공합니다.": "The intelligent AIRMATIC suspension instantly grasps road conditions to maintain optimal ride comfort, and rear-axle steering provides agile cornering and parking convenience like a compact car despite being a large sedan.",

    // S-Class Details
    "세상을 이끄는 리더를 위한 궁극의 안식처": "Ultimate Sanctuary for Leaders Guiding the World",
    "S-Class는 단순한 자동차를 넘어선 하나의 상징이자, 성공을 향한 여정에 동행하는 최고의 파트너입니다. 타협하지 않는 장인정신과 최첨단 안전 기술이 빚어낸 독보적인 승차감은 당신에게 완벽한 휴식과 새로운 영감을 제공합니다.": "The S-Class is more than just a car; it's a symbol and the best partner accompanying your journey to success. Unrivaled ride comfort created by uncompromising craftsmanship and cutting-edge safety technology provides you with perfect rest and new inspiration.",
    "퍼스트 클래스의 여유, 뒷좌석 컴포트": "First-Class Relaxation, Rear Seat Comfort",
    "이그제큐티브 시트와 쇼퍼 패키지를 통해 뒷좌석 탑승자에게 넓고 안락한 공간을 제공합니다. 섬세한 마사지 기능과 최상급 나파 가죽의 질감이 이동하는 모든 순간을 완벽한 휴식 시간으로 만들어 줍니다.": "Executive seats and the chauffeur package provide a spacious and comfortable space for rear passengers. Delicate massage functions and the texture of top-grade Nappa leather turn every moment of travel into perfect relaxation time.",
    "오감을 만족시키는 경이로운 정숙성": "Phenomenal Quietness Satisfying the Five Senses",
    "외부의 소음과 진동을 완벽에 가깝게 차단하는 차체 설계로, 속도를 체감하기 어려울 만큼 고요하고 평온한 실내 환경을 유지합니다.": "With a body design that blocks exterior noise and vibration close to perfection, it maintains a quiet and peaceful interior environment where it's hard to feel the speed.",
    "타협 없는 혁신적 안전 기술": "Uncompromising Innovative Safety Technology",
    "찰나의 순간까지 예측하는 드라이빙 어시스턴스 패키지와 100만 개 이상의 픽셀로 야간 시야를 정밀하게 밝히는 디지털 라이트가 당신과 소중한 사람을 가장 안전하게 보호합니다.": "The Driving Assistance Package that predicts even a split second, and Digital Light that precisely illuminates night vision with over 1 million pixels, protect you and your loved ones most safely.",

    // G-Class Details
    "전설은 길을 가리지 않는다": "Legends Don't Choose Their Path",
    "수십 년의 시간 동안 변함없이 지켜온 독보적인 아이덴티티. G-Class는 거친 자연과 도심을 아우르며, 어떠한 험로에서도 한계 없는 퍼포먼스를 발휘합니다. 거친 본성과 럭셔리한 실내가 완벽하게 공존하는 유일무이한 오프로더의 감성을 느껴보십시오.": "Unrivaled identity maintained unchanged over decades. The G-Class encompasses rough nature and the city, unleashing limitless performance on any rough road. Feel the sensibility of a unique off-roader where rough nature and a luxurious interior perfectly coexist.",
    "타협을 모르는 오프로드 DNA": "Uncompromising Off-Road DNA",
    "3개의 100% 디퍼렌셜 락, 로우 레인지 기어, 그리고 견고한 사다리형 프레임 바디가 결합하여 가파른 경사와 험난한 지형도 거침없이 주파하는 궁극의 오프로드 성능을 자랑합니다.": "Three 100% differential locks, a low-range gear, and a solid ladder-type frame body combine to boast ultimate off-road performance that fearlessly conquers steep slopes and rugged terrain.",
    "시간을 초월한 아이코닉 디자인": "Timeless Iconic Design",
    "특유의 각진 실루엣, 외부로 노출된 도어 힌지, 상징적인 스페어타이어 커버 등 G-Class만의 헤리티지 디자인 요소가 현대적인 감각과 만나 강렬한 카리스마를 발산합니다.": "The unique angular silhouette, exposed door hinges, iconic spare tire cover, and other G-Class heritage design elements meet modern sensibility to exude intense charisma.",
    "반전의 럭셔리 인테리어": "Luxurious Interior with a Twist",
    "터프한 외관과 상반되는 실내는 최고급 소재와 장인의 수작업으로 완성되었습니다. 최신 MBUX 인포테인먼트 시스템과 와이드 스크린 콕핏이 오프로더 안에서도 최상의 디지털 편의성을 제공합니다.": "The interior, contrasting with the tough exterior, is completed with top-grade materials and artisan handwork. The latest MBUX infotainment system and widescreen cockpit provide the best digital convenience even within an off-roader.",

    // Vital Class Details
    "교감하는 바이오 에너지 모빌리티": "Interacting Bio-Energy Mobility",
    "지능형 생체 연결 기술을 탑재한 미래형 바이오 컨셉 세단. 운전자의 미세한 생체 파동과 감정 상태를 분석하여 최상의 치유 환경을 제공하며, 레벨 5 완전 자율주행과 연동되는 혁신적인 무결점 탑승자 안심 설계가 적용되었습니다.": "Futuristic bio-concept sedan equipped with intelligent biometric connection technology. Analyzes the driver's subtle bio-waves and emotional state to provide an optimal healing environment, applying innovative flawless passenger safety design linked with Level 5 fully autonomous driving.",
    "바이오 피드백 시트 시스템": "Bio-Feedback Seat System",
    "운전자의 심박수와 호흡, 스트레스 수치를 감지하여 실시간으로 요추 완화 롤러 마사지 및 미세 파동 음악을 매칭 제공합니다.": "Detects the driver's heart rate, breathing, and stress levels to provide real-time matching lumbar relief roller massage and micro-wave music.",
    "인텔리전트 자율 구조 모드": "Intelligent Autonomous Rescue Mode",
    "탑승자의 갑작스러운 의료 응급 사태 시, 차량 스스로 비상 구급 신호를 인근 의료 기관으로 송출하고 완전 자율 주행 상태로 직행 응급실로 긴급 이송합니다.": "During sudden medical emergencies, the vehicle automatically sends distress signals to nearby medical facilities and transports the passenger directly to the emergency room in fully autonomous driving mode.",

    // Morph Class Details
    "지형지물에 능동적으로 반응하는 트랜스포머 SUV": "Transformer SUV Actively Responding to Topography",
    "어떠한 한계도 모르는 능동형 변형 차체 기술이 탑재된 미래 오프로더의 정점. 주행 노면 상태와 기상 조건에 따라 휠베이스와 차체 스포일러 패널의 두께 및 구조가 실시간으로 변하여 극한의 기동성을 발휘합니다.": "The pinnacle of future off-roaders equipped with active transforming body technology that knows no limits. Wheelbase and body spoiler panel thickness and structure change in real-time according to road surface conditions and weather, exhibiting extreme maneuverability.",
    "액티브 에어로 다이내믹 패널": "Active Aerodynamic Panel",
    "고속 도로 진입 시 유선형 형태로 전후면 차체 플랩이 길어지고 넓어져 저항을 최소화하고 주행 효율성을 극대화합니다.": "Upon entering the highway, front and rear body flaps lengthen and widen into a streamlined shape, minimizing resistance and maximizing driving efficiency.",
    "가변 트랙터 오프로드 모드": "Variable Tractor Off-Road Mode",
    "극도로 험난한 진흙, 모래, 사막, 바위 구간 진입 시 휠 바디 지지대가 능동적으로 조율되어 최상의 접지 마찰력을 유지합니다.": "When entering extremely rugged mud, sand, desert, or rocky sections, the wheel body supports actively adjust to maintain optimal traction friction.",
    
    // Chronos Class Details
    'MAYBACH "크로노스(Chronos) 클래스"': 'MAYBACH "Chronos Class"',
    "시간 압축형 럭셔리 무빙 라운지": "Time-compressing Luxury Moving Lounge",
    "탑승자의 '시간적 효율과 완벽한 휴식'을 극대화하는 하이엔드 비즈니스 모델. 예측 자율주행 AI와 양자 컴퓨팅 라우팅 소프트웨어가 도시의 교통 흐름을 5분 앞서 예측하여 정체를 완전히 우회합니다.": "A high-end business model that maximizes the passenger's 'time efficiency and perfect rest'. Predictive autonomous AI and quantum computing routing software predict city traffic flow 5 minutes ahead to completely bypass congestion.",
    "탑승자의 '시간적 효율과 완벽한 휴식'을 극대화하는 하이엔드 비즈니스 모델. 예측 자율주행 AI와 양자 컴퓨팅 라우팅 소프트웨어가 도시의 교통 흐름을 5분 앞서 예측하여 정체를 완전히 우회합니다. 차량 내부는 완벽한 무소음·무진동의 초지향성 제어 공간으로 전환되며, 탑승자의 업무 스케줄과 수면 패턴에 맞춰 실시간으로 최적의 차내 환경을 브레인웨이브(뇌파) 동기화 기술로 제어합니다.": "A high-end business model that maximizes the passenger's 'time efficiency and perfect rest'. Predictive autonomous AI and quantum computing routing software predict city traffic flow 5 minutes ahead to completely bypass congestion. The interior transforms into a perfectly silent, vibration-free, highly directional controlled space, and real-time optimal in-car environment is controlled by brainwave synchronization technology according to the passenger's work schedule and sleep pattern.",
    "예측형 인지 라우팅": "Predictive Cognitive Routing",
    "단순한 내비게이션을 넘어 양자 컴퓨팅 기반의 통계적 흐름 예측 알고리즘이 도시 전체의 교통 인프라 데이터를 실시간 스캐닝합니다. 정체가 시작되기 5분 전 미리 최적의 우회로를 확보하여 도로 위에서 낭비되는 시간을 영(0)으로 수렴시킵니다.": "Beyond simple navigation, quantum computing-based statistical flow prediction algorithms scan city-wide traffic infrastructure data in real-time. It secures the optimal detour 5 minutes before congestion begins, converging time wasted on the road to zero.",
    "뇌파 동기화 ANC 캐빈": "Brainwave Synchronization ANC Cabin",
    "차량 내부에 탑승하는 순간, 최고급 시트에 내장된 생체 센서가 탑승자의 뇌파(Alpha, Beta, Theta 파)를 분석합니다. 업무 모드 시 고도의 집중력을 유도하는 지향성 음향과 홀로그램 스크린을 제어하며, 휴식 모드 시 자이로스코프 기반의 '제로-그라비티 능동 감쇄 알고리즘'이 작동하여 노면의 미세 진동과 소음을 100% 차단, 달리는 특급 호텔룸을 구현합니다.": "The moment you board, bio-sensors embedded in the premium seats analyze the passenger's brainwaves (Alpha, Beta, Theta). In work mode, it controls directional sound and hologram screens to induce high concentration, and in rest mode, gyroscope-based 'zero-gravity active damping algorithm' perfectly blocks micro-vibrations and noise from the road, realizing a moving luxury hotel room.",

    // Aero Class Details
    'AMG "에어로(Aero) 클래스"': 'AMG "Aero Class"',
    "초고속 유체역학 하이퍼 모빌리티": "Ultra-high-speed Fluid Dynamics Hyper Mobility",
    "지상과 상공의 경계를 허무는 하이브리드 수직이착륙(VTOL) 하이퍼 모빌리티. 주행 중 지형적 한계나 정체가 발생하면 4개의 휠이 독립적인 추진 프로펠러로 변형되어 공중으로 도약합니다.": "Hybrid Vertical Take-Off and Landing (VTOL) hyper mobility that blurs the boundary between ground and sky. When encountering topographical limits or congestion during driving, the 4 wheels transform into independent propulsion propellers and leap into the air.",
    "지상과 상공의 경계를 허무는 하이브리드 수직이착륙(VTOL) 하이퍼 모빌리티. NERVE OS의 초고속 유체역학 제어 알고리즘이 적용되어, 지상 고속 주행 중 정체가 발생하거나 지형적 한계에 부딪히면 4개의 휠이 독립적인 추진 프로펠러로 가변 분할되며 공중으로 도약합니다. 비행 중 발생하는 모든 난기류를 실시간 로봇 제어로 상쇄하여 지상과 다름없는 안정적인 비행 성능을 제공합니다.": "Hybrid Vertical Take-Off and Landing (VTOL) hyper mobility that blurs the boundary between ground and sky. NERVE OS's ultra-high-speed fluid dynamics control algorithm is applied, and if congestion occurs or topographical limits are reached during high-speed ground driving, the 4 wheels variably split into independent propulsion propellers and leap into the air. It provides stable flight performance just like on the ground by offsetting all turbulence generated during flight with real-time robotic control.",
    "가변형 로보틱 액추에이션 (Multi-Modal Transformation)": "Variable Robotic Actuation (Multi-Modal Transformation)",
    "고속 주행 중 지상 정체 구간을 만나거나 도강이 필요할 때, 주행 모드를 비행 모드로 전환합니다. NERVE OS의 초정밀 제어 아래 4개의 휠이 외부로 전개되며 1,000분의 1초 만에 각각 독립적인 지능형 추진 프로펠러(Thruster)로 변형, 공중으로 도약합니다.": "When encountering ground congestion during high-speed driving or when river crossing is necessary, the driving mode switches to flight mode. Under the ultra-precise control of NERVE OS, the 4 wheels deploy outward and transform into independent intelligent propulsion propellers (Thrusters) in 1/1,000 of a second, leaping into the air.",
    "실시간 난기류 상쇄 소프트웨어 (Active Aero-Stabilizer)": "Real-time Turbulence Offset Software (Active Aero-Stabilizer)",
    "비행 중 예기치 못한 도심 빌딩 숲의 난기류나 고도 변화를 만났을 때, 기체 표면에 배치된 마이크로 에어로 다이내믹 패널과 제트 분사구를 실시간으로 역방향 제어합니다. 이를 통해 탑승자는 하늘 위를 날고 있음에도 흔들림 없는 안락함과 AMG 특유의 날렵한 조향감을 동시에 경험할 수 있습니다.": "When encountering unexpected turbulence from urban building forests or altitude changes during flight, the micro aerodynamic panels and jet nozzles placed on the body surface are controlled in real-time in reverse direction. Through this, passengers can simultaneously experience unwavering comfort and AMG's signature agile steering feel even while flying in the sky."
};

window.langDict = langDict;

window.applyTranslation = function(lang) {
    const walk = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null, false);
    let node;
    while (node = walk.nextNode()) {
        const text = node.nodeValue;
        if (text && text.trim().length > 0) {
            if (typeof node._ko === 'undefined') {
                node._ko = text;
            }
            
            if (lang === 'EN') {
                const trimmed = node._ko.trim();
                if (langDict[trimmed]) {
                    node.nodeValue = node._ko.replace(trimmed, langDict[trimmed]);
                } else if (trimmed.includes("댓글: ")) {
                    node.nodeValue = node._ko.replace("댓글:", "Comments:");
                } else {
                    node.nodeValue = node._ko;
                }
            } else {
                node.nodeValue = node._ko;
            }
        }
    }

    document.querySelectorAll('input, textarea, select').forEach(el => {
        if (el.placeholder) {
            if (typeof el._ko_placeholder === 'undefined') el._ko_placeholder = el.placeholder;
            el.placeholder = lang === 'EN' && langDict[el._ko_placeholder] ? langDict[el._ko_placeholder] : el._ko_placeholder;
        }
        
        if (el.tagName === 'SELECT') {
            Array.from(el.options).forEach(opt => {
                if (typeof opt._ko_text === 'undefined') opt._ko_text = opt.text;
                const trimmed = opt._ko_text.trim();
                opt.text = lang === 'EN' && langDict[trimmed] ? opt._ko_text.replace(trimmed, langDict[trimmed]) : opt._ko_text;
            });
        }
    });
};
