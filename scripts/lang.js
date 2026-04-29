const LANGS = {
  id: {
    navHome: 'Home', navAbout: 'About', navSkills: 'Skills', navProjects: 'Projects', navAchievement: 'Achievment', navContact: 'Contact',
    mnav01: 'HOME', mnav02: 'ABOUT', mnav03: 'SKILLS', mnav04: 'PROJECTS', mnav05: 'CERTS', mnav06: 'CONTACT',
    heroBadge: 'Available for Work ✦',
    heroQuote: '"Belajarlah hari ini, berbanggalah di kemudian hari."',
    heroStat1Label: 'Sertifikat', heroStat2Label: 'Client Puas', heroStat3Label: 'Keahlian',
    heroAboutBtn: '✦ ABOUT ME',
    heroCV: 'Unduh CV',
    aboutLabel: '✿ TENTANG SAYA ✿',
    aboutTitle: 'About <span class="highlight">Me</span>',
    aqiLabel1: 'Lokasi', aqiLabel2: 'Pendidikan', aqiLabel3: 'Jurusan',
    aboutDesc1: 'Seorang <b>multitasker</b> di dunia digital yang suka menggabungkan teknik coding dengan kreativitas visual. Memiliki skillset yang cukup luas, mulai dari <b>Front-End Dev</b>, <b>UI/UX Design</b>, <b>Digital Art</b> dan <b>Animasi 2D</b>, serta <b>Editing</b> video dan foto yang berbasis di Bogor, Jawa Barat.',
    aboutDesc2: 'Saat ini, menempuh pendidikan <b>Software and Game Development</b> di <b>SMKN 1 Ciomas</b>. Ketertarikan saya pada teknologi dan seni visual mendorong saya untuk terus bereksperimen dengan berbagai platform kreatif guna menghasilkan karya yang fungsional namun tetap estetis.',
    astLabel1: 'Sertifikat', astLabel2: 'Client Puas', astLabel3: 'Tahun Belajar',
    aboutDownloadCV: 'UNDUH CV',
    skillLabel: '✿ KEAHLIAN ✿',
    skillTitle: 'My <span class="highlight">Skills</span>',
    skillSub: 'Kombinasi kemampuan teknis dan kreatif yang terus berkembang 🌸',
    projLabel: '✿ PORTOFOLIO ✿',
    projTitle: 'My <span class="highlight">Projects</span>',
    projSub: 'Website yang telah saya kerjakan dengan penuh dedikasi 💖',
    proj1Desc: 'Kalkulator interaktif dengan antarmuka yang responsif, mulai dari perhitungan dasar hingga yang kompleks.',
    proj2Desc: 'Website profil company untuk UMKM lokal Bogor — desain elegan dan user friendly.',
    proj3Desc: 'Website profil company untuk UMKM kuliner dengan tampilan modern dan menggugah selera.',
    achievLabel: '✿ PENCAPAIAN ✿',
    achievTitle: 'My <span class="highlight">Achievements</span>',
    achievSub: 'Sertifikat dan penghargaan yang telah saya raih 🏆',
    certBadge: 'SERTIFIKAT', certView: 'Lihat',
    contactLabel: '✿ HUBUNGI SAYA ✿',
    contactTitle: 'Let\'s <span class="highlight">Connect</span>',
    contactSub: 'Terhubung bersama saya — atau kirim pesan langsung! 💌',
    contactCardTitle: 'Siap untuk berkolaborasi? 🌸',
    contactCardDesc: 'Jangan ragu untuk menghubungi saya melalui media sosial atau kirim pesan langsung. Saya terbuka untuk projek baru, diskusi kreatif, atau sekadar menyapa!',
    contactLoc: 'Bogor, Jawa Barat', contactSchool: 'SMKN 1 Ciomas',
    formTitle: '<i class="fa-solid fa-envelope-open-text"></i> Kirim Pesan 💌',
    formSub: 'Pesan kamu akan langsung terkirim ke email saya ✉️',
    formName: 'Nama 🌸', formNamePh: 'Nama kamu...', formEmail: 'Email', formEmailPh: 'contoh: nama@gmail.com',
    formSubject: 'Subjek', formSubjectPh: 'Tentang apa?', formMsg: 'Pesan 💌', formMsgPh: 'Tuliskan pesanmu di sini...',
    formSendBtn: '<i class="fa-solid fa-paper-plane"></i> Kirim Pesan',
    formSendingBtn: '<i class="fa-solid fa-spinner fa-spin"></i> Mengirim...',
    footerText: '© 2025 <span class="highlight">Jayshifa Banyuwana</span>. Made with 💖.',
    audioTitle: 'Musik', themeTitle: 'Toggle tema',
    errRequired: '⚠️ Nama, email, dan pesan wajib diisi!',
    errEmail: '⚠️ Format email tidak valid!',
    successMsg: '✅ Pesan berhasil terkirim! Terima kasih 💖',
    failMsg: '❌ Gagal mengirim. Pastikan access key sudah benar!',
    connErr: '❌ Terjadi kesalahan koneksi. Coba lagi nanti.',
    langTitle: 'Bahasa',
    pillWebDev: 'Web Developer', pillEditor: 'Editor', pillCreator: 'Digital Creator',
    loadingWelcome: 'Welcome', loadingFooter: '© 2025 Jayshifa Banyuwana 🌸',
  },
  en: {
    navHome: 'Home', navAbout: 'About', navSkills: 'Skills', navProjects: 'Projects', navAchievement: 'Achievement', navContact: 'Contact',
    mnav01: 'HOME', mnav02: 'ABOUT', mnav03: 'SKILLS', mnav04: 'PROJECTS', mnav05: 'CERTS', mnav06: 'CONTACT',
    heroBadge: 'Available for Work ✦',
    heroQuote: '"Learn today, be proud tomorrow."',
    heroStat1Label: 'Certificates', heroStat2Label: 'Happy Clients', heroStat3Label: 'Skills',
    heroAboutBtn: '✦ ABOUT ME',
    heroCV: 'Download CV',
    aboutLabel: '✿ ABOUT ME ✿',
    aboutTitle: 'About <span class="highlight">Me</span>',
    aqiLabel1: 'Location', aqiLabel2: 'Education', aqiLabel3: 'Major',
    aboutDesc1: 'A <b>multitasker</b> in the digital world who loves combining coding techniques with visual creativity. Has a wide skillset, ranging from <b>Front-End Dev</b>, <b>UI/UX Design</b>, <b>Digital Art</b> and <b>2D Animation</b>, as well as video and photo <b>Editing</b>, based in Bogor, West Java.',
    aboutDesc2: 'Currently studying <b>Software and Game Development</b> at <b>SMKN 1 Ciomas</b>. My interest in technology and visual arts drives me to continuously experiment with various creative platforms to produce work that is functional yet aesthetic.',
    astLabel1: 'Certificates', astLabel2: 'Happy Clients', astLabel3: 'Years Learning',
    aboutDownloadCV: 'DOWNLOAD CV',
    skillLabel: '✿ SKILLS ✿',
    skillTitle: 'My <span class="highlight">Skills</span>',
    skillSub: 'A combination of technical and creative abilities that keep growing 🌸',
    projLabel: '✿ PORTFOLIO ✿',
    projTitle: 'My <span class="highlight">Projects</span>',
    projSub: 'Websites I have built with full dedication 💖',
    proj1Desc: 'Interactive calculator with a responsive interface, from basic to complex calculations.',
    proj2Desc: 'Company profile website for a local Bogor UMKM — elegant and user-friendly design.',
    proj3Desc: 'Company profile website for a culinary UMKM with a modern and appetizing look.',
    achievLabel: '✿ ACHIEVEMENTS ✿',
    achievTitle: 'My <span class="highlight">Achievements</span>',
    achievSub: 'Certificates and awards I have earned 🏆',
    certBadge: 'CERTIFICATE', certView: 'View',
    contactLabel: '✿ CONTACT ME ✿',
    contactTitle: 'Let\'s <span class="highlight">Connect</span>',
    contactSub: 'Connect with me — or send a message directly! 💌',
    contactCardTitle: 'Ready to collaborate? 🌸',
    contactCardDesc: 'Don\'t hesitate to reach out through social media or send a direct message. I\'m open to new projects, creative discussions, or just saying hello!',
    contactLoc: 'Bogor, West Java', contactSchool: 'SMKN 1 Ciomas',
    formTitle: '<i class="fa-solid fa-envelope-open-text"></i> Send Message 💌',
    formSub: 'Your message will be sent directly to my email ✉️',
    formName: 'Name 🌸', formNamePh: 'Your name...', formEmail: 'Email', formEmailPh: 'example: name@gmail.com',
    formSubject: 'Subject', formSubjectPh: 'What is it about?', formMsg: 'Message 💌', formMsgPh: 'Write your message here...',
    formSendBtn: '<i class="fa-solid fa-paper-plane"></i> Send Message',
    formSendingBtn: '<i class="fa-solid fa-spinner fa-spin"></i> Sending...',
    footerText: '© 2025 <span class="highlight">Jayshifa Banyuwana</span>. Made with 💖.',
    audioTitle: 'Music', themeTitle: 'Toggle theme',
    errRequired: '⚠️ Name, email, and message are required!',
    errEmail: '⚠️ Invalid email format!',
    successMsg: '✅ Message sent successfully! Thank you 💖',
    failMsg: '❌ Failed to send. Please check your access key!',
    connErr: '❌ Connection error occurred. Try again later.',
    langTitle: 'Language',
    pillWebDev: 'Web Developer', pillEditor: 'Editor', pillCreator: 'Digital Creator',
    loadingWelcome: 'Welcome', loadingFooter: '© 2025 Jayshifa Banyuwana 🌸',
  },
  ja: {
    navHome: 'ホーム', navAbout: '自己紹介', navSkills: 'スキル', navProjects: 'プロジェクト', navAchievement: '実績', navContact: 'お問い合わせ',
    mnav01: 'ホーム', mnav02: '自己紹介', mnav03: 'スキル', mnav04: 'プロジェクト', mnav05: '資格', mnav06: 'お問い合わせ',
    heroBadge: '仕事募集中 ✦',
    heroQuote: '"今日学び、明日誇れ。"',
    heroStat1Label: '資格', heroStat2Label: '満足顧客', heroStat3Label: 'スキル',
    heroAboutBtn: '✦ 自己紹介',
    heroCV: 'CVをダウンロード',
    aboutLabel: '✿ 自己紹介 ✿',
    aboutTitle: '自己<span class="highlight">紹介</span>',
    aqiLabel1: '所在地', aqiLabel2: '学校', aqiLabel3: '専攻',
    aboutDesc1: 'コーディング技術とビジュアルクリエイティビティを融合させることが好きな<b>マルチタスク</b>のデジタルクリエイター。<b>フロントエンド開発</b>、<b>UI/UXデザイン</b>、<b>デジタルアート</b>と<b>2Dアニメーション</b>、そして動画・写真の<b>編集</b>まで、幅広いスキルセットを持ち、西ジャワ州ボゴールを拠点に活動しています。',
    aboutDesc2: '現在、<b>SMKN 1 Ciomas</b>で<b>ソフトウェア・ゲーム開発</b>を専攻中。テクノロジーとビジュアルアートへの情熱が、機能的かつ美しい作品を生み出すための実験を後押ししています。',
    astLabel1: '資格', astLabel2: '満足顧客', astLabel3: '年間学習',
    aboutDownloadCV: 'CVをダウンロード',
    skillLabel: '✿ スキル ✿',
    skillTitle: 'スキル<span class="highlight">一覧</span>',
    skillSub: '成長し続ける技術力と創造力の組み合わせ 🌸',
    projLabel: '✿ ポートフォリオ ✿',
    projTitle: '私の<span class="highlight">プロジェクト</span>',
    projSub: '全力で取り組んだウェブサイト 💖',
    proj1Desc: '基本から複雑な計算まで対応した、レスポンシブなインターフェースを持つインタラクティブな電卓。',
    proj2Desc: 'ボゴールの地元UMKMのための会社プロフィールサイト — エレガントでユーザーフレンドリーなデザイン。',
    proj3Desc: 'モダンで食欲をそそる外観を持つ飲食UMKMの会社プロフィールサイト。',
    achievLabel: '✿ 実績 ✿',
    achievTitle: '私の<span class="highlight">実績</span>',
    achievSub: '取得した資格と受賞歴 🏆',
    certBadge: '証明書', certView: '見る',
    contactLabel: '✿ お問い合わせ ✿',
    contactTitle: '一緒に<span class="highlight">繋がろう</span>',
    contactSub: 'SNSでつながるか、直接メッセージを送ってください！ 💌',
    contactCardTitle: 'コラボレーション準備完了？ 🌸',
    contactCardDesc: 'SNSやダイレクトメッセージでお気軽にご連絡ください。新プロジェクト、クリエイティブな議論、または単なる挨拶でも大歓迎です！',
    contactLoc: 'ボゴール、西ジャワ', contactSchool: 'SMKN 1 Ciomas',
    formTitle: '<i class="fa-solid fa-envelope-open-text"></i> メッセージを送る 💌',
    formSub: 'メッセージは私のメールに直接届きます ✉️',
    formName: 'お名前 🌸', formNamePh: 'あなたの名前...', formEmail: 'メール', formEmailPh: '例: name@gmail.com',
    formSubject: '件名', formSubjectPh: '何についてですか？', formMsg: 'メッセージ 💌', formMsgPh: 'ここにメッセージを書いてください...',
    formSendBtn: '<i class="fa-solid fa-paper-plane"></i> 送信する',
    formSendingBtn: '<i class="fa-solid fa-spinner fa-spin"></i> 送信中...',
    footerText: '© 2025 <span class="highlight">Jayshifa Banyuwana</span>. 💖を込めて制作。',
    audioTitle: '音楽', themeTitle: 'テーマ切替',
    errRequired: '⚠️ 名前、メール、メッセージは必須です！',
    errEmail: '⚠️ メール形式が正しくありません！',
    successMsg: '✅ メッセージが送信されました！ありがとう 💖',
    failMsg: '❌ 送信に失敗しました。アクセスキーを確認してください！',
    connErr: '❌ 接続エラーが発生しました。後でもう一度お試しください。',
    langTitle: '言語',
    pillWebDev: 'Webデベロッパー', pillEditor: '動画編集者', pillCreator: 'デジタルクリエイター',
    loadingWelcome: 'ようこそ', loadingFooter: '© 2025 Jayshifa Banyuwana 🌸',
  },
  zh: {
    navHome: '首页', navAbout: '关于我', navSkills: '技能', navProjects: '项目', navAchievement: '成就', navContact: '联系我',
    mnav01: '首页', mnav02: '关于我', mnav03: '技能', mnav04: '项目', mnav05: '证书', mnav06: '联系我',
    heroBadge: '接受工作邀请 ✦',
    heroQuote: '"今日学习，明日自豪。"',
    heroStat1Label: '证书', heroStat2Label: '满意客户', heroStat3Label: '技能',
    heroAboutBtn: '✦ 关于我',
    heroCV: '下载简历',
    aboutLabel: '✿ 关于我 ✿',
    aboutTitle: '关于<span class="highlight">我</span>',
    aqiLabel1: '地点', aqiLabel2: '学校', aqiLabel3: '专业',
    aboutDesc1: '一位热爱将编码技术与视觉创意融合的<b>多任务处理</b>数字创作者。拥有广泛的技能，包括<b>前端开发</b>、<b>UI/UX 设计</b>、<b>数字艺术</b>和<b>2D 动画</b>，以及视频和照片<b>剪辑</b>，现居印度尼西亚西爪哇省茂物。',
    aboutDesc2: '目前就读于 <b>SMKN 1 Ciomas</b>，主修<b>软件与游戏开发</b>。对技术和视觉艺术的热情驱使我不断在各种创意平台上进行实验，创作出功能性与美观兼具的作品。',
    astLabel1: '证书', astLabel2: '满意客户', astLabel3: '学习年数',
    aboutDownloadCV: '下载简历',
    skillLabel: '✿ 技能 ✿',
    skillTitle: '我的<span class="highlight">技能</span>',
    skillSub: '持续成长的技术与创意能力组合 🌸',
    projLabel: '✿ 作品集 ✿',
    projTitle: '我的<span class="highlight">项目</span>',
    projSub: '我用心打造的网站 💖',
    proj1Desc: '具有响应式界面的交互式计算器，支持从基本到复杂的计算。',
    proj2Desc: '为茂物本地中小企业打造的公司主页 — 优雅且用户友好的设计。',
    proj3Desc: '为餐饮中小企业打造的公司主页，外观现代且令人食欲大开。',
    achievLabel: '✿ 成就 ✿',
    achievTitle: '我的<span class="highlight">成就</span>',
    achievSub: '我所获得的证书和奖项 🏆',
    certBadge: '证书', certView: '查看',
    contactLabel: '✿ 联系我 ✿',
    contactTitle: '让我们<span class="highlight">连接</span>',
    contactSub: '通过社交媒体联系我 — 或直接发送消息！ 💌',
    contactCardTitle: '准备好合作了吗？ 🌸',
    contactCardDesc: '欢迎通过社交媒体或直接发送消息与我联系。我欢迎新项目、创意讨论，或只是打个招呼！',
    contactLoc: '茂物，西爪哇', contactSchool: 'SMKN 1 Ciomas',
    formTitle: '<i class="fa-solid fa-envelope-open-text"></i> 发送消息 💌',
    formSub: '您的消息将直接发送到我的邮箱 ✉️',
    formName: '姓名 🌸', formNamePh: '您的姓名...', formEmail: '邮箱', formEmailPh: '示例：name@gmail.com',
    formSubject: '主题', formSubjectPh: '关于什么？', formMsg: '消息 💌', formMsgPh: '在此输入您的消息...',
    formSendBtn: '<i class="fa-solid fa-paper-plane"></i> 发送消息',
    formSendingBtn: '<i class="fa-solid fa-spinner fa-spin"></i> 发送中...',
    footerText: '© 2025 <span class="highlight">Jayshifa Banyuwana</span>。用 💖 制作。',
    audioTitle: '音乐', themeTitle: '切换主题',
    errRequired: '⚠️ 姓名、邮箱和消息为必填项！',
    errEmail: '⚠️ 邮箱格式无效！',
    successMsg: '✅ 消息发送成功！谢谢 💖',
    failMsg: '❌ 发送失败。请检查访问密钥！',
    connErr: '❌ 发生连接错误。请稍后再试。',
    langTitle: '语言',
    pillWebDev: '网页开发者', pillEditor: '剪辑师', pillCreator: '数字创作者',
    loadingWelcome: '欢迎', loadingFooter: '© 2025 Jayshifa Banyuwana 🌸',
  },
  ko: {
    navHome: '홈', navAbout: '소개', navSkills: '기술', navProjects: '프로젝트', navAchievement: '성취', navContact: '연락',
    mnav01: '홈', mnav02: '소개', mnav03: '기술', mnav04: '프로젝트', mnav05: '자격증', mnav06: '연락',
    heroBadge: '구직 중 ✦',
    heroQuote: '"오늘 배우고, 내일 자랑스러워하라."',
    heroStat1Label: '자격증', heroStat2Label: '만족 고객', heroStat3Label: '기술',
    heroAboutBtn: '✦ 소개',
    heroCV: 'CV 다운로드',
    aboutLabel: '✿ 소개 ✿',
    aboutTitle: '나에 <span class="highlight">대해</span>',
    aqiLabel1: '위치', aqiLabel2: '학교', aqiLabel3: '전공',
    aboutDesc1: '코딩 기술과 시각적 창의성을 결합하는 것을 좋아하는 디지털 <b>멀티태스커</b>입니다. <b>프론트엔드 개발</b>, <b>UI/UX 디자인</b>, <b>디지털 아트</b>와 <b>2D 애니메이션</b>, 영상 및 사진 <b>편집</b>에 이르기까지 다양한 기술을 보유하고 있으며 인도네시아 서자바 보고르를 기반으로 활동하고 있습니다.',
    aboutDesc2: '현재 <b>SMKN 1 Ciomas</b>에서 <b>소프트웨어 및 게임 개발</b>을 전공하고 있습니다. 기술과 시각 예술에 대한 관심이 다양한 창의적 플랫폼을 실험하고 기능적이면서도 아름다운 작품을 만들도록 이끌고 있습니다.',
    astLabel1: '자격증', astLabel2: '만족 고객', astLabel3: '학습 연도',
    aboutDownloadCV: 'CV 다운로드',
    skillLabel: '✿ 기술 ✿',
    skillTitle: '나의 <span class="highlight">기술</span>',
    skillSub: '계속 성장하는 기술력과 창의력의 조합 🌸',
    projLabel: '✿ 포트폴리오 ✿',
    projTitle: '나의 <span class="highlight">프로젝트</span>',
    projSub: '열정적으로 만든 웹사이트 💖',
    proj1Desc: '기본부터 복잡한 계산까지 지원하는 반응형 인터페이스의 인터랙티브 계산기.',
    proj2Desc: '보고르 지역 중소기업을 위한 회사 프로필 사이트 — 우아하고 사용자 친화적인 디자인.',
    proj3Desc: '모던하고 식욕을 돋우는 외관을 가진 요식업 중소기업 회사 프로필 사이트.',
    achievLabel: '✿ 성취 ✿',
    achievTitle: '나의 <span class="highlight">성취</span>',
    achievSub: '취득한 자격증과 수상 내역 🏆',
    certBadge: '자격증', certView: '보기',
    contactLabel: '✿ 연락하기 ✿',
    contactTitle: '함께 <span class="highlight">연결해요</span>',
    contactSub: 'SNS로 연결하거나 직접 메시지를 보내세요! 💌',
    contactCardTitle: '협업할 준비가 됐나요? 🌸',
    contactCardDesc: 'SNS나 직접 메시지를 통해 주저 없이 연락하세요. 새 프로젝트, 창의적인 토론, 또는 그냥 인사도 환영합니다!',
    contactLoc: '보고르, 서자바', contactSchool: 'SMKN 1 Ciomas',
    formTitle: '<i class="fa-solid fa-envelope-open-text"></i> 메시지 보내기 💌',
    formSub: '메시지는 내 이메일로 바로 전송됩니다 ✉️',
    formName: '이름 🌸', formNamePh: '이름을 입력하세요...', formEmail: '이메일', formEmailPh: '예: name@gmail.com',
    formSubject: '제목', formSubjectPh: '무엇에 관한 건가요?', formMsg: '메시지 💌', formMsgPh: '여기에 메시지를 입력하세요...',
    formSendBtn: '<i class="fa-solid fa-paper-plane"></i> 메시지 보내기',
    formSendingBtn: '<i class="fa-solid fa-spinner fa-spin"></i> 전송 중...',
    footerText: '© 2025 <span class="highlight">Jayshifa Banyuwana</span>. 💖으로 만들었습니다.',
    audioTitle: '음악', themeTitle: '테마 전환',
    errRequired: '⚠️ 이름, 이메일, 메시지는 필수입니다!',
    errEmail: '⚠️ 유효하지 않은 이메일 형식입니다!',
    successMsg: '✅ 메시지가 성공적으로 전송되었습니다! 감사합니다 💖',
    failMsg: '❌ 전송 실패. 액세스 키를 확인하세요!',
    connErr: '❌ 연결 오류가 발생했습니다. 나중에 다시 시도하세요.',
    langTitle: '언어',
    pillWebDev: '웹 개발자', pillEditor: '에디터', pillCreator: '디지털 크리에이터',
    loadingWelcome: '환영합니다', loadingFooter: '© 2025 Jayshifa Banyuwana 🌸',
  },
  es: {
    navHome: 'Inicio', navAbout: 'Sobre mí', navSkills: 'Habilidades', navProjects: 'Proyectos', navAchievement: 'Logros', navContact: 'Contacto',
    mnav01: 'INICIO', mnav02: 'SOBRE MÍ', mnav03: 'HABILIDADES', mnav04: 'PROYECTOS', mnav05: 'CERTS', mnav06: 'CONTACTO',
    heroBadge: 'Disponible para trabajar ✦',
    heroQuote: '"Aprende hoy, enorgullécete mañana."',
    heroStat1Label: 'Certificados', heroStat2Label: 'Clientes satisfechos', heroStat3Label: 'Habilidades',
    heroAboutBtn: '✦ SOBRE MÍ',
    heroCV: 'Descargar CV',
    aboutLabel: '✿ SOBRE MÍ ✿',
    aboutTitle: 'Sobre <span class="highlight">mí</span>',
    aqiLabel1: 'Ubicación', aqiLabel2: 'Educación', aqiLabel3: 'Especialidad',
    aboutDesc1: 'Una <b>multitarea</b> del mundo digital que ama combinar técnicas de programación con creatividad visual. Cuenta con un amplio conjunto de habilidades, desde <b>desarrollo Front-End</b>, <b>diseño UI/UX</b>, <b>arte digital</b> y <b>animación 2D</b>, hasta <b>edición</b> de videos y fotos, basada en Bogor, Java Occidental.',
    aboutDesc2: 'Actualmente estudia <b>Desarrollo de Software y Juegos</b> en <b>SMKN 1 Ciomas</b>. El interés en tecnología y artes visuales me impulsa a experimentar continuamente con varias plataformas creativas para producir obras funcionales y estéticas.',
    astLabel1: 'Certificados', astLabel2: 'Clientes satisfechos', astLabel3: 'Años aprendiendo',
    aboutDownloadCV: 'DESCARGAR CV',
    skillLabel: '✿ HABILIDADES ✿',
    skillTitle: 'Mis <span class="highlight">habilidades</span>',
    skillSub: 'Una combinación de capacidades técnicas y creativas en constante crecimiento 🌸',
    projLabel: '✿ PORTAFOLIO ✿',
    projTitle: 'Mis <span class="highlight">proyectos</span>',
    projSub: 'Sitios web que he creado con total dedicación 💖',
    proj1Desc: 'Calculadora interactiva con interfaz responsiva, desde cálculos básicos hasta complejos.',
    proj2Desc: 'Sitio web de perfil empresarial para una PYME local de Bogor — diseño elegante y amigable.',
    proj3Desc: 'Sitio web de perfil empresarial para una PYME culinaria con apariencia moderna y apetitosa.',
    achievLabel: '✿ LOGROS ✿',
    achievTitle: 'Mis <span class="highlight">logros</span>',
    achievSub: 'Certificados y premios que he obtenido 🏆',
    certBadge: 'CERTIFICADO', certView: 'Ver',
    contactLabel: '✿ CONTÁCTAME ✿',
    contactTitle: 'Vamos a <span class="highlight">conectar</span>',
    contactSub: '¡Conéctate conmigo — o envía un mensaje directo! 💌',
    contactCardTitle: '¿Listo para colaborar? 🌸',
    contactCardDesc: 'No dudes en contactarme a través de redes sociales o enviando un mensaje directo. Estoy abierta a nuevos proyectos, discusiones creativas o simplemente saludar.',
    contactLoc: 'Bogor, Java Occidental', contactSchool: 'SMKN 1 Ciomas',
    formTitle: '<i class="fa-solid fa-envelope-open-text"></i> Enviar mensaje 💌',
    formSub: 'Tu mensaje se enviará directamente a mi correo ✉️',
    formName: 'Nombre 🌸', formNamePh: 'Tu nombre...', formEmail: 'Correo', formEmailPh: 'ejemplo: nombre@gmail.com',
    formSubject: 'Asunto', formSubjectPh: '¿De qué se trata?', formMsg: 'Mensaje 💌', formMsgPh: 'Escribe tu mensaje aquí...',
    formSendBtn: '<i class="fa-solid fa-paper-plane"></i> Enviar mensaje',
    formSendingBtn: '<i class="fa-solid fa-spinner fa-spin"></i> Enviando...',
    footerText: '© 2025 <span class="highlight">Jayshifa Banyuwana</span>. Hecho con 💖.',
    audioTitle: 'Música', themeTitle: 'Cambiar tema',
    errRequired: '⚠️ ¡El nombre, correo y mensaje son obligatorios!',
    errEmail: '⚠️ ¡Formato de correo inválido!',
    successMsg: '✅ ¡Mensaje enviado con éxito! Gracias 💖',
    failMsg: '❌ Error al enviar. ¡Verifica tu clave de acceso!',
    connErr: '❌ Ocurrió un error de conexión. Inténtalo más tarde.',
    langTitle: 'Idioma',
    pillWebDev: 'Desarrolladora Web', pillEditor: 'Editora', pillCreator: 'Creadora Digital',
    loadingWelcome: 'Bienvenido', loadingFooter: '© 2025 Jayshifa Banyuwana 🌸',
  },
  fr: {
    navHome: 'Accueil', navAbout: 'À propos', navSkills: 'Compétences', navProjects: 'Projets', navAchievement: 'Réalisations', navContact: 'Contact',
    mnav01: 'ACCUEIL', mnav02: 'À PROPOS', mnav03: 'COMPÉTENCES', mnav04: 'PROJETS', mnav05: 'CERTS', mnav06: 'CONTACT',
    heroBadge: 'Disponible pour travailler ✦',
    heroQuote: '"Apprends aujourd\'hui, sois fier demain."',
    heroStat1Label: 'Certificats', heroStat2Label: 'Clients satisfaits', heroStat3Label: 'Compétences',
    heroAboutBtn: '✦ À PROPOS',
    heroCV: 'Télécharger CV',
    aboutLabel: '✿ À PROPOS ✿',
    aboutTitle: 'À propos de <span class="highlight">moi</span>',
    aqiLabel1: 'Lieu', aqiLabel2: 'Éducation', aqiLabel3: 'Spécialité',
    aboutDesc1: 'Une <b>multitâche</b> du monde numérique qui aime combiner les techniques de codage avec la créativité visuelle. Possède de nombreuses compétences, du <b>développement Front-End</b>, du <b>design UI/UX</b>, de l\'<b>art numérique</b> et de l\'<b>animation 2D</b>, ainsi que de l\'<b>édition</b> vidéo et photo, basée à Bogor, Java occidental.',
    aboutDesc2: 'Actuellement étudiante en <b>Développement de Logiciels et de Jeux</b> à <b>SMKN 1 Ciomas</b>. Mon intérêt pour la technologie et les arts visuels me pousse à expérimenter continuellement diverses plateformes créatives pour produire des œuvres à la fois fonctionnelles et esthétiques.',
    astLabel1: 'Certificats', astLabel2: 'Clients satisfaits', astLabel3: 'Années d\'apprentissage',
    aboutDownloadCV: 'TÉLÉCHARGER CV',
    skillLabel: '✿ COMPÉTENCES ✿',
    skillTitle: 'Mes <span class="highlight">compétences</span>',
    skillSub: 'Une combinaison de capacités techniques et créatives en constante évolution 🌸',
    projLabel: '✿ PORTFOLIO ✿',
    projTitle: 'Mes <span class="highlight">projets</span>',
    projSub: 'Sites web réalisés avec toute ma dévotion 💖',
    proj1Desc: 'Calculatrice interactive avec une interface responsive, des calculs simples aux plus complexes.',
    proj2Desc: 'Site de profil d\'entreprise pour une PME locale de Bogor — design élégant et convivial.',
    proj3Desc: 'Site de profil d\'entreprise pour une PME culinaire avec une apparence moderne et appétissante.',
    achievLabel: '✿ RÉALISATIONS ✿',
    achievTitle: 'Mes <span class="highlight">réalisations</span>',
    achievSub: 'Certificats et récompenses obtenus 🏆',
    certBadge: 'CERTIFICAT', certView: 'Voir',
    contactLabel: '✿ ME CONTACTER ✿',
    contactTitle: 'Entrons en <span class="highlight">contact</span>',
    contactSub: 'Connectez-vous avec moi — ou envoyez un message direct ! 💌',
    contactCardTitle: 'Prête à collaborer ? 🌸',
    contactCardDesc: 'N\'hésitez pas à me contacter via les réseaux sociaux ou par message direct. Je suis ouverte à de nouveaux projets, discussions créatives ou simplement pour dire bonjour !',
    contactLoc: 'Bogor, Java occidental', contactSchool: 'SMKN 1 Ciomas',
    formTitle: '<i class="fa-solid fa-envelope-open-text"></i> Envoyer un message 💌',
    formSub: 'Votre message sera envoyé directement à mon e-mail ✉️',
    formName: 'Nom 🌸', formNamePh: 'Votre nom...', formEmail: 'E-mail', formEmailPh: 'exemple : nom@gmail.com',
    formSubject: 'Sujet', formSubjectPh: 'De quoi s\'agit-il ?', formMsg: 'Message 💌', formMsgPh: 'Écrivez votre message ici...',
    formSendBtn: '<i class="fa-solid fa-paper-plane"></i> Envoyer le message',
    formSendingBtn: '<i class="fa-solid fa-spinner fa-spin"></i> Envoi en cours...',
    footerText: '© 2025 <span class="highlight">Jayshifa Banyuwana</span>. Fait avec 💖.',
    audioTitle: 'Musique', themeTitle: 'Changer le thème',
    errRequired: '⚠️ Le nom, l\'e-mail et le message sont obligatoires !',
    errEmail: '⚠️ Format d\'e-mail invalide !',
    successMsg: '✅ Message envoyé avec succès ! Merci 💖',
    failMsg: '❌ Échec de l\'envoi. Vérifiez votre clé d\'accès !',
    connErr: '❌ Une erreur de connexion s\'est produite. Réessayez plus tard.',
    langTitle: 'Langue',
    pillWebDev: 'Développeuse Web', pillEditor: 'Éditrice', pillCreator: 'Créatrice Numérique',
    loadingWelcome: 'Bienvenue', loadingFooter: '© 2025 Jayshifa Banyuwana 🌸',
  },
  ar: {
    navHome: 'الرئيسية', navAbout: 'عني', navSkills: 'مهاراتي', navProjects: 'مشاريعي', navAchievement: 'إنجازاتي', navContact: 'تواصل',
    mnav01: 'الرئيسية', mnav02: 'عني', mnav03: 'المهارات', mnav04: 'المشاريع', mnav05: 'الشهادات', mnav06: 'تواصل',
    heroBadge: 'متاحة للعمل ✦',
    heroQuote: '"تعلّم اليوم، وافتخر غداً."',
    heroStat1Label: 'شهادات', heroStat2Label: 'عملاء راضون', heroStat3Label: 'مهارات',
    heroAboutBtn: '✦ عني',
    heroCV: 'تحميل السيرة الذاتية',
    aboutLabel: '✿ عني ✿',
    aboutTitle: 'نبذة <span class="highlight">عني</span>',
    aqiLabel1: 'الموقع', aqiLabel2: 'التعليم', aqiLabel3: 'التخصص',
    aboutDesc1: 'مبدعة رقمية <b>متعددة المهام</b> تحب دمج مهارات البرمجة مع الإبداع البصري. تمتلك مجموعة واسعة من المهارات تشمل <b>تطوير الواجهة الأمامية</b>، و<b>تصميم UI/UX</b>، و<b>الفن الرقمي</b>، و<b>الرسوم المتحركة ثنائية الأبعاد</b>، فضلاً عن <b>تحرير</b> الفيديو والصور، مقيمة في بوغور، جاوة الغربية.',
    aboutDesc2: 'تدرس حاليًا <b>تطوير البرمجيات والألعاب</b> في <b>SMKN 1 Ciomas</b>. يدفعها اهتمامها بالتكنولوجيا والفنون البصرية إلى التجريب المستمر عبر منصات إبداعية متنوعة لإنتاج أعمال تجمع بين الوظيفية والجمال.',
    astLabel1: 'شهادات', astLabel2: 'عملاء راضون', astLabel3: 'سنوات تعلم',
    aboutDownloadCV: 'تحميل السيرة الذاتية',
    skillLabel: '✿ المهارات ✿',
    skillTitle: '<span class="highlight">مهاراتي</span>',
    skillSub: 'مزيج من القدرات التقنية والإبداعية في تطور مستمر 🌸',
    projLabel: '✿ الأعمال ✿',
    projTitle: '<span class="highlight">مشاريعي</span>',
    projSub: 'مواقع ويب أنجزتها بكل تفانٍ 💖',
    proj1Desc: 'آلة حاسبة تفاعلية بواجهة متجاوبة، من العمليات الأساسية إلى المعقدة.',
    proj2Desc: 'موقع ملف شركة لمشروع محلي صغير في بوغور — تصميم أنيق وسهل الاستخدام.',
    proj3Desc: 'موقع ملف شركة لمشروع طعام بمظهر عصري يفتح الشهية.',
    achievLabel: '✿ الإنجازات ✿',
    achievTitle: '<span class="highlight">إنجازاتي</span>',
    achievSub: 'الشهادات والجوائز التي حققتها 🏆',
    certBadge: 'شهادة', certView: 'عرض',
    contactLabel: '✿ تواصل معي ✿',
    contactTitle: 'لنبدأ <span class="highlight">التواصل</span>',
    contactSub: 'تواصل معي عبر السوشيال ميديا أو أرسل رسالة مباشرة! 💌',
    contactCardTitle: 'مستعدة للتعاون؟ 🌸',
    contactCardDesc: 'لا تتردد في التواصل معي عبر وسائل التواصل الاجتماعي أو بإرسال رسالة مباشرة. أنا منفتحة على المشاريع الجديدة، والنقاشات الإبداعية، أو حتى مجرد التحية!',
    contactLoc: 'بوغور، جاوة الغربية', contactSchool: 'SMKN 1 Ciomas',
    formTitle: '<i class="fa-solid fa-envelope-open-text"></i> إرسال رسالة 💌',
    formSub: 'رسالتك ستصل مباشرة إلى بريدي الإلكتروني ✉️',
    formName: 'الاسم 🌸', formNamePh: 'اسمك...', formEmail: 'البريد الإلكتروني', formEmailPh: 'مثال: name@gmail.com',
    formSubject: 'الموضوع', formSubjectPh: 'عمَّ يدور الأمر؟', formMsg: 'الرسالة 💌', formMsgPh: 'اكتب رسالتك هنا...',
    formSendBtn: '<i class="fa-solid fa-paper-plane"></i> إرسال الرسالة',
    formSendingBtn: '<i class="fa-solid fa-spinner fa-spin"></i> جارٍ الإرسال...',
    footerText: '© 2025 <span class="highlight">Jayshifa Banyuwana</span>. صُنع بـ 💖.',
    audioTitle: 'موسيقى', themeTitle: 'تبديل المظهر',
    errRequired: '⚠️ الاسم والبريد الإلكتروني والرسالة مطلوبة!',
    errEmail: '⚠️ صيغة البريد الإلكتروني غير صالحة!',
    successMsg: '✅ تم إرسال الرسالة بنجاح! شكرًا 💖',
    failMsg: '❌ فشل الإرسال. يرجى التحقق من مفتاح الوصول!',
    connErr: '❌ حدث خطأ في الاتصال. حاول مرة أخرى لاحقًا.',
    langTitle: 'اللغة',
    pillWebDev: 'مطوّرة ويب', pillEditor: 'محررة', pillCreator: 'مبدعة رقمية',
    loadingWelcome: 'مرحباً', loadingFooter: '© 2025 Jayshifa Banyuwana 🌸',
  }
};

const LANG_META = {
  id: { label: 'Indonesia', flag: '🇮🇩', dir: 'ltr' },
  en: { label: 'English', flag: '🇬🇧', dir: 'ltr' },
  ja: { label: '日本語', flag: '🇯🇵', dir: 'ltr' },
  zh: { label: '中文', flag: '🇨🇳', dir: 'ltr' },
  ko: { label: '한국어', flag: '🇰🇷', dir: 'ltr' },
  es: { label: 'Español', flag: '🇪🇸', dir: 'ltr' },
  fr: { label: 'Français', flag: '🇫🇷', dir: 'ltr' },
  ar: { label: 'العربية', flag: '🇸🇦', dir: 'rtl' }
};

function applyLang(code) {
  const t = LANGS[code];
  if (!t) return;

  const meta = LANG_META[code];
  document.documentElement.lang = code;
  document.documentElement.dir = meta.dir;

  const set = (id, val) => { const el = document.getElementById(id); if (el) el.innerHTML = val; };
  const setAttr = (id, attr, val) => { const el = document.getElementById(id); if (el) el.setAttribute(attr, val); };
  const setTxt = (id, val) => { const el = document.getElementById(id); if (el) el.textContent = val; };

  setTxt('nav-home', t.navHome);
  setTxt('nav-about', t.navAbout);
  setTxt('nav-skills', t.navSkills);
  setTxt('nav-projects', t.navProjects);
  setTxt('nav-achievement', t.navAchievement);
  setTxt('nav-contact', t.navContact);

  setTxt('mnav-01', t.mnav01);
  setTxt('mnav-02', t.mnav02);
  setTxt('mnav-03', t.mnav03);
  setTxt('mnav-04', t.mnav04);
  setTxt('mnav-05', t.mnav05);
  setTxt('mnav-06', t.mnav06);

  set('hero-badge-text', t.heroBadge);
  set('hero-quote', t.heroQuote);
  setTxt('hero-stat1-label', t.heroStat1Label);
  setTxt('hero-stat2-label', t.heroStat2Label);
  setTxt('hero-stat3-label', t.heroStat3Label);
  set('hero-about-btn-text', t.heroAboutBtn);
  set('hero-cv-btn', t.heroCV);

  set('about-label', t.aboutLabel);
  set('about-title', t.aboutTitle);
  setTxt('aqi-label-1', t.aqiLabel1);
  setTxt('aqi-label-2', t.aqiLabel2);
  setTxt('aqi-label-3', t.aqiLabel3);
  set('about-desc-1', t.aboutDesc1);
  set('about-desc-2', t.aboutDesc2);
  setTxt('ast-label-1', t.astLabel1);
  setTxt('ast-label-2', t.astLabel2);
  setTxt('ast-label-3', t.astLabel3);
  set('about-download-cv', t.aboutDownloadCV);

  set('skill-label', t.skillLabel);
  set('skill-title', t.skillTitle);
  set('skill-sub', t.skillSub);

  set('proj-label', t.projLabel);
  set('proj-title', t.projTitle);
  set('proj-sub', t.projSub);
  set('proj1-desc', t.proj1Desc);
  set('proj2-desc', t.proj2Desc);
  set('proj3-desc', t.proj3Desc);

  set('achiev-label', t.achievLabel);
  set('achiev-title', t.achievTitle);
  set('achiev-sub', t.achievSub);
  document.querySelectorAll('.cert-badge').forEach(el => { if (el.dataset.type !== 'ACHIEVEMENT') el.textContent = t.certBadge; });
  document.querySelectorAll('.cert-link-hint').forEach(el => { el.innerHTML = '<i class="fa-brands fa-google-drive"></i> ' + t.certView; });

  set('contact-label', t.contactLabel);
  set('contact-title', t.contactTitle);
  set('contact-sub', t.contactSub);
  set('contact-card-title', t.contactCardTitle);
  set('contact-card-desc', t.contactCardDesc);
  setTxt('contact-loc', t.contactLoc);
  set('form-title', t.formTitle);
  set('form-sub', t.formSub);
  set('form-name-label', t.formName);
  setAttr('cf-name', 'placeholder', t.formNamePh);
  set('form-email-label', t.formEmail);
  setAttr('cf-email', 'placeholder', t.formEmailPh);
  set('form-subject-label', t.formSubject);
  setAttr('cf-subject', 'placeholder', t.formSubjectPh);
  set('form-msg-label', t.formMsg);
  setAttr('cf-message', 'placeholder', t.formMsgPh);
  set('btn-send-text-inner', t.formSendBtn);
  set('btn-sending-text-inner', t.formSendingBtn);

  set('footer-text', t.footerText);

  setAttr('audioToggle', 'title', t.audioTitle);
  setAttr('themeToggle', 'title', t.themeTitle);
  setAttr('langToggle', 'title', t.langTitle);

  set('pill-webdev', t.pillWebDev);
  set('pill-editor', t.pillEditor);
  set('pill-creator', t.pillCreator);

  set('loading-welcome', t.loadingWelcome);
  setTxt('mobile-nav-footer', t.loadingFooter);

  window.__currentLangErrors = { errRequired: t.errRequired, errEmail: t.errEmail, successMsg: t.successMsg, failMsg: t.failMsg, connErr: t.connErr };

  // Reset slider ke posisi 0 saat RTL/LTR berganti
  requestAnimationFrame(() => {
    ['projectSlider', 'certSlider'].forEach(id => {
      const el = document.getElementById(id);
      if (el) el.style.transform = 'translateX(0%)';
    });
  });

  const langBtn = document.getElementById('langToggle');
  if (langBtn) {
    langBtn.querySelector('.lang-flag').textContent = meta.flag;
  }

  localStorage.setItem('jb-lang', code);
}

document.addEventListener('DOMContentLoaded', () => {
  const saved = localStorage.getItem('jb-lang') || 'id';
  applyLang(saved);

  const langToggle = document.getElementById('langToggle');
  const langDropdown = document.getElementById('langDropdown');

  langToggle?.addEventListener('click', (e) => {
    e.stopPropagation();
    langDropdown?.classList.toggle('open');
  });

  document.addEventListener('click', () => {
    langDropdown?.classList.remove('open');
  });

  langDropdown?.addEventListener('click', (e) => {
    e.stopPropagation();
    const item = e.target.closest('[data-lang]');
    if (item) {
      applyLang(item.dataset.lang);
      langDropdown.classList.remove('open');
      document.querySelectorAll('[data-lang]').forEach(el => el.classList.remove('active'));
      item.classList.add('active');
    }
  });
});
