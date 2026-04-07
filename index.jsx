import { useState, useEffect, useRef } from "react";

// ============================================================
// TRANSLATIONS
// ============================================================
const translations = {
  uz: {
    nav: {
      home: "Bosh sahifa",
      services: "Xizmatlar",
      dashboard: "Boshqaruv paneli",
      profile: "Profil",
      order: "Buyurtma",
      startNow: "Boshlash",
    },
    hero: {
      badge: "🌍 #1 Tarjima Platformasi",
      title: "Hamma narsani",
      titleAccent: "Tarjima qiling.",
      subtitle: "Hamma narsani Tushuning.",
      description:
        "Kitoblar, hujjatlar va matnlarni professional sifatda tarjima qiling. Tez, aniq va ishonchli.",
      cta: "Hozir Boshlash",
      ctaSecondary: "Qanday ishlaydi?",
      floating1: "98% Aniqlik",
      floating2: "24/7 Qo'llab-quvvatlash",
      floating3: "50+ Til",
    },
    stats: {
      title: "Raqamlarda Ortola",
      users: "Faol Foydalanuvchilar",
      translations: "Tarjimalar",
      languages: "Qo'llab-quvvatlanadigan Tillar",
      satisfaction: "Mijoz Mamnuniyati",
    },
    services: {
      title: "Bizning Xizmatlar",
      subtitle: "Har bir ehtiyojingiz uchun professional tarjima xizmatlari",
      book: {
        title: "Kitob Tarjimasi",
        desc: "To'liq kitoblarni professional tarjimonlar yordamida tarjima qiling. Uslub va ma'no saqlanadi.",
        price: "dan $0.05/so'z",
        tag: "Mashhur",
      },
      document: {
        title: "Hujjat Tarjimasi",
        desc: "Yuridik, tibbiy va biznes hujjatlarini aniq tarjima qiling.",
        price: "dan $0.04/so'z",
        tag: "Tez",
      },
      text: {
        title: "Matn Tarjimasi",
        desc: "Kichik va o'rta hajmdagi matnlarni tezkor tarjima qiling.",
        price: "dan $0.03/so'z",
        tag: "Eng Tez",
      },
      subtitle_svc: {
        title: "Slayd Tarjimasi",
        desc: "Video subtitrlari va slaydlar uchun maxsus tarjima xizmati.",
        price: "dan $0.06/daqiqa",
        tag: "Yangi",
      },
      cta: "Boshlash",
    },
    testimonials: {
      title: "Mijozlarimiz Fikrlari",
      subtitle: "Minglab mamnun foydalanuvchilardan birini bo'ling",
    },
    cta_section: {
      title: "Tarjimani Boshlashga Tayyormisiz?",
      subtitle: "Bugun ro'yxatdan o'ting va birinchi tarjimangizni bepul oling",
      btn: "Bepul Boshlash",
    },
    dashboard: {
      title: "Boshqaruv Paneli",
      subtitle: "Sizning tarjima sayohatingiz",
      streak: "Kunlik Ketma-ketlik",
      xp: "XP Ball",
      level: "Daraja",
      rank: "Reyting",
      dailyGoal: "Kunlik Maqsad",
      achievements: "Yutuqlar",
      path: "O'rganish Yo'li",
      locked: "Qulflangan",
      complete: "Bajarildi",
      current: "Joriy",
      leaderboard: "Liderlar Jadvali",
    },
    order: {
      title: "Buyurtma Berish",
      subtitle: "Bir necha qadamda professional tarjima",
      step1: "Til Tanlash",
      step2: "Fayl Yuklash",
      step3: "Izohlar",
      step4: "Narx Hisoblash",
      step5: "To'lov",
      fromLang: "Manba Tili",
      toLang: "Maqsad Tili",
      uploadTitle: "Faylni bu yerga tashlang",
      uploadSub: "yoki tanlash uchun bosing",
      notes: "Qo'shimcha Izohlar",
      notesPlaceholder: "Maxsus talablar, uslub ko'rsatmalari...",
      wordCount: "So'z Soni",
      price: "Narx",
      delivery: "Yetkazib Berish",
      days: "kun",
      checkout: "To'lovga O'tish",
      next: "Keyingi",
      back: "Orqaga",
      selectFile: "Fayl Tanlash",
    },
    profile: {
      title: "Mening Profilim",
      joined: "Qo'shilgan",
      translations: "Tarjimalar",
      words: "So'zlar",
      achievements: "Yutuqlar",
      recent: "So'nggi Faoliyat",
      settings: "Sozlamalar",
      logout: "Chiqish",
    },
    ai: {
      title: "AI Tarjima Sinab Ko'ring",
      subtitle: "Matn kiriting va darhol tarjimani ko'ring",
      placeholder: "Tarjima qilmoqchi bo'lgan matningizni kiriting...",
      translate: "Tarjima Qilish",
      result: "Tarjima Natijasi",
      loading: "Tarjima qilinmoqda...",
    },
    footer: {
      tagline: "Dunyoni Tarjima Qilmoqdamiz",
      product: "Mahsulot",
      company: "Kompaniya",
      support: "Yordam",
      about: "Biz Haqimizda",
      blog: "Blog",
      careers: "Karyera",
      help: "Yordam Markazi",
      contact: "Bog'lanish",
      privacy: "Maxfiylik",
      terms: "Shartlar",
      rights: "Barcha huquqlar himoyalangan.",
    },
  },
  ru: {
    nav: {
      home: "Главная",
      services: "Услуги",
      dashboard: "Панель",
      profile: "Профиль",
      order: "Заказ",
      startNow: "Начать",
    },
    hero: {
      badge: "🌍 Платформа Перевода №1",
      title: "Переводите",
      titleAccent: "Всё.",
      subtitle: "Понимайте Всё.",
      description:
        "Переводите книги, документы и тексты профессионально. Быстро, точно и надёжно.",
      cta: "Начать Сейчас",
      ctaSecondary: "Как это работает?",
      floating1: "98% Точность",
      floating2: "Поддержка 24/7",
      floating3: "50+ Языков",
    },
    stats: {
      title: "Ortola в цифрах",
      users: "Активных Пользователей",
      translations: "Переводов",
      languages: "Поддерживаемых языков",
      satisfaction: "Удовлетворённость",
    },
    services: {
      title: "Наши Услуги",
      subtitle:
        "Профессиональные услуги перевода для любых потребностей",
      book: {
        title: "Перевод Книг",
        desc: "Переводите целые книги с помощью профессиональных переводчиков. Стиль и смысл сохраняются.",
        price: "от $0.05/слово",
        tag: "Популярно",
      },
      document: {
        title: "Перевод Документов",
        desc: "Точный перевод юридических, медицинских и деловых документов.",
        price: "от $0.04/слово",
        tag: "Быстро",
      },
      text: {
        title: "Перевод Текстов",
        desc: "Быстрый перевод небольших и средних текстов.",
        price: "от $0.03/слово",
        tag: "Быстрее всего",
      },
      subtitle_svc: {
        title: "Перевод Субтитров",
        desc: "Специальный перевод субтитров к видео и слайдов.",
        price: "от $0.06/мин",
        tag: "Новинка",
      },
      cta: "Начать",
    },
    testimonials: {
      title: "Отзывы Клиентов",
      subtitle: "Присоединитесь к тысячам довольных пользователей",
    },
    cta_section: {
      title: "Готовы Начать Перевод?",
      subtitle:
        "Зарегистрируйтесь сегодня и получите первый перевод бесплатно",
      btn: "Начать Бесплатно",
    },
    dashboard: {
      title: "Панель Управления",
      subtitle: "Ваш путь переводчика",
      streak: "Ежедневная серия",
      xp: "Очки XP",
      level: "Уровень",
      rank: "Рейтинг",
      dailyGoal: "Ежедневная цель",
      achievements: "Достижения",
      path: "Путь обучения",
      locked: "Заблокировано",
      complete: "Выполнено",
      current: "Текущий",
      leaderboard: "Таблица лидеров",
    },
    order: {
      title: "Сделать Заказ",
      subtitle: "Профессиональный перевод за несколько шагов",
      step1: "Выбор языка",
      step2: "Загрузка файла",
      step3: "Примечания",
      step4: "Расчёт цены",
      step5: "Оплата",
      fromLang: "Исходный язык",
      toLang: "Целевой язык",
      uploadTitle: "Перетащите файл сюда",
      uploadSub: "или нажмите для выбора",
      notes: "Дополнительные примечания",
      notesPlaceholder: "Особые требования, стилистические указания...",
      wordCount: "Количество слов",
      price: "Цена",
      delivery: "Доставка",
      days: "дней",
      checkout: "Перейти к оплате",
      next: "Далее",
      back: "Назад",
      selectFile: "Выбрать файл",
    },
    profile: {
      title: "Мой Профиль",
      joined: "Присоединился",
      translations: "Переводов",
      words: "Слов",
      achievements: "Достижений",
      recent: "Недавняя активность",
      settings: "Настройки",
      logout: "Выйти",
    },
    ai: {
      title: "Попробуйте AI Перевод",
      subtitle: "Введите текст и мгновенно увидите перевод",
      placeholder: "Введите текст для перевода...",
      translate: "Перевести",
      result: "Результат перевода",
      loading: "Переводим...",
    },
    footer: {
      tagline: "Переводим мир",
      product: "Продукт",
      company: "Компания",
      support: "Поддержка",
      about: "О нас",
      blog: "Блог",
      careers: "Карьера",
      help: "Центр помощи",
      contact: "Связаться",
      privacy: "Конфиденциальность",
      terms: "Условия",
      rights: "Все права защищены.",
    },
  },
  en: {
    nav: {
      home: "Home",
      services: "Services",
      dashboard: "Dashboard",
      profile: "Profile",
      order: "Order",
      startNow: "Get Started",
    },
    hero: {
      badge: "🌍 #1 Translation Platform",
      title: "Translate Anything.",
      titleAccent: "Understand",
      subtitle: "Everything.",
      description:
        "Translate books, documents, and texts with professional quality. Fast, accurate, and reliable.",
      cta: "Start Now",
      ctaSecondary: "How it works?",
      floating1: "98% Accuracy",
      floating2: "24/7 Support",
      floating3: "50+ Languages",
    },
    stats: {
      title: "Ortola in Numbers",
      users: "Active Users",
      translations: "Translations",
      languages: "Supported Languages",
      satisfaction: "Satisfaction Rate",
    },
    services: {
      title: "Our Services",
      subtitle: "Professional translation services for every need",
      book: {
        title: "Book Translation",
        desc: "Translate complete books with professional translators. Style and meaning preserved.",
        price: "from $0.05/word",
        tag: "Popular",
      },
      document: {
        title: "Document Translation",
        desc: "Accurate translation of legal, medical and business documents.",
        price: "from $0.04/word",
        tag: "Fast",
      },
      text: {
        title: "Text Translation",
        desc: "Quick translation of small and medium-sized texts.",
        price: "from $0.03/word",
        tag: "Fastest",
      },
      subtitle_svc: {
        title: "Subtitle Translation",
        desc: "Specialized translation for video subtitles and slides.",
        price: "from $0.06/min",
        tag: "New",
      },
      cta: "Get Started",
    },
    testimonials: {
      title: "What Our Users Say",
      subtitle: "Join thousands of satisfied users worldwide",
    },
    cta_section: {
      title: "Ready to Start Translating?",
      subtitle: "Sign up today and get your first translation for free",
      btn: "Start for Free",
    },
    dashboard: {
      title: "Dashboard",
      subtitle: "Your translation journey",
      streak: "Daily Streak",
      xp: "XP Points",
      level: "Level",
      rank: "Rank",
      dailyGoal: "Daily Goal",
      achievements: "Achievements",
      path: "Learning Path",
      locked: "Locked",
      complete: "Complete",
      current: "Current",
      leaderboard: "Leaderboard",
    },
    order: {
      title: "Place an Order",
      subtitle: "Professional translation in a few simple steps",
      step1: "Choose Language",
      step2: "Upload File",
      step3: "Add Notes",
      step4: "Price Estimate",
      step5: "Checkout",
      fromLang: "Source Language",
      toLang: "Target Language",
      uploadTitle: "Drop your file here",
      uploadSub: "or click to browse",
      notes: "Additional Notes",
      notesPlaceholder: "Special requirements, style guidelines...",
      wordCount: "Word Count",
      price: "Price",
      delivery: "Delivery",
      days: "days",
      checkout: "Proceed to Checkout",
      next: "Next",
      back: "Back",
      selectFile: "Select File",
    },
    profile: {
      title: "My Profile",
      joined: "Joined",
      translations: "Translations",
      words: "Words",
      achievements: "Achievements",
      recent: "Recent Activity",
      settings: "Settings",
      logout: "Logout",
    },
    ai: {
      title: "Try AI Translation",
      subtitle: "Enter text and see the translation instantly",
      placeholder: "Enter the text you want to translate...",
      translate: "Translate",
      result: "Translation Result",
      loading: "Translating...",
    },
    footer: {
      tagline: "Translating the World",
      product: "Product",
      company: "Company",
      support: "Support",
      about: "About Us",
      blog: "Blog",
      careers: "Careers",
      help: "Help Center",
      contact: "Contact",
      privacy: "Privacy",
      terms: "Terms",
      rights: "All rights reserved.",
    },
  },
};

// ============================================================
// MOCK DATA
// ============================================================
const testimonials_data = [
  {
    name: "Aziz Karimov",
    role: "Yozuvchi / Writer",
    avatar: "AK",
    color: "#1e40af",
    text_uz: "Ortola yordamida kitobimni 3 tilda nashr etdim. Sifat ajoyib!",
    text_ru: "С Ortola я опубликовал свою книгу на 3 языках. Качество отличное!",
    text_en: "With Ortola I published my book in 3 languages. Quality is amazing!",
    rating: 5,
  },
  {
    name: "Maria Sokolova",
    role: "Юрист / Lawyer",
    avatar: "MS",
    color: "#0369a1",
    text_uz: "Yuridik hujjatlarimni tez va aniq tarjima qilishdi. Tavsiya qilaman!",
    text_ru: "Мои юридические документы перевели быстро и точно. Рекомендую!",
    text_en: "My legal documents were translated quickly and accurately. Highly recommend!",
    rating: 5,
  },
  {
    name: "James Wilson",
    role: "Content Creator",
    avatar: "JW",
    color: "#0e7490",
    text_uz: "Subtitrlari tarjimasi juda professional. Mening kanalim uchun ideal.",
    text_ru: "Перевод субтитров очень профессиональный. Идеально для моего канала.",
    text_en: "Subtitle translation is very professional. Perfect for my channel.",
    rating: 5,
  },
];

const leaderboard_data = [
  { rank: 1, name: "Dilnoza T.", xp: 12400, avatar: "DT", streak: 45 },
  { rank: 2, name: "Rustam K.", xp: 11200, avatar: "RK", streak: 38 },
  { rank: 3, name: "Malika N.", xp: 9800, avatar: "MN", streak: 31 },
  { rank: 4, name: "Bobur A.", xp: 8600, avatar: "BA", streak: 27 },
  { rank: 5, name: "Feruza I.", xp: 7400, avatar: "FI", streak: 22 },
];

const achievements_data = [
  { icon: "🔥", label: "7-Day Streak", unlocked: true },
  { icon: "📚", label: "First Book", unlocked: true },
  { icon: "⚡", label: "Speed Demon", unlocked: true },
  { icon: "🌍", label: "Polyglot", unlocked: false },
  { icon: "💎", label: "Diamond Tier", unlocked: false },
  { icon: "🏆", label: "Top 10", unlocked: false },
];

const learning_path = [
  { id: 1, label: "Short Text", icon: "📝", status: "complete", xp: 100 },
  { id: 2, label: "Paragraphs", icon: "📄", status: "complete", xp: 250 },
  { id: 3, label: "Articles", icon: "📰", status: "current", xp: 500 },
  { id: 4, label: "Documents", icon: "📋", status: "locked", xp: 750 },
  { id: 5, label: "Books", icon: "📚", status: "locked", xp: 1000 },
];

const recent_activity = [
  { file: "Contract_EN.pdf", from: "EN", to: "UZ", words: 1240, date: "2 hours ago", status: "done" },
  { file: "Article_RU.docx", from: "RU", to: "EN", words: 890, date: "Yesterday", status: "done" },
  { file: "Book_Chapter1.pdf", from: "EN", to: "RU", words: 5600, date: "3 days ago", status: "done" },
];

const languages = ["🇺🇿 Uzbek", "🇷🇺 Russian", "🇬🇧 English", "🇩🇪 German", "🇫🇷 French", "🇨🇳 Chinese", "🇯🇵 Japanese", "🇦🇪 Arabic"];

// ============================================================
// STYLES
// ============================================================
const GlobalStyle = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Clash+Display:wght@400;500;600;700&family=Sora:wght@300;400;500;600;700&display=swap');

    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

    :root {
      --blue-950: #0a1628;
      --blue-900: #0f2040;
      --blue-800: #1a3a6e;
      --blue-700: #1d4ed8;
      --blue-600: #2563eb;
      --blue-500: #3b82f6;
      --blue-400: #60a5fa;
      --blue-300: #93c5fd;
      --blue-200: #bfdbfe;
      --blue-100: #dbeafe;
      --blue-50: #eff6ff;
      --cyan-500: #06b6d4;
      --cyan-400: #22d3ee;
      --white: #ffffff;
      --gray-50: #f8fafc;
      --gray-100: #f1f5f9;
      --gray-200: #e2e8f0;
      --gray-300: #cbd5e1;
      --gray-400: #94a3b8;
      --gray-500: #64748b;
      --gray-600: #475569;
      --gray-700: #334155;
      --gray-800: #1e293b;
      --gray-900: #0f172a;
      --success: #10b981;
      --warning: #f59e0b;
      --error: #ef4444;
      --gold: #f59e0b;
    }

    body {
      font-family: 'Sora', sans-serif;
      background: var(--white);
      color: var(--gray-900);
      overflow-x: hidden;
    }

    .dark body, body.dark {
      background: var(--blue-950);
      color: var(--white);
    }

    h1, h2, h3, h4 { font-family: 'Clash Display', sans-serif; }

    .ortola-app {
      min-height: 100vh;
      transition: background 0.3s, color 0.3s;
    }

    .ortola-app.dark {
      background: var(--blue-950);
      color: var(--white);
    }

    /* SCROLLBAR */
    ::-webkit-scrollbar { width: 6px; }
    ::-webkit-scrollbar-track { background: transparent; }
    ::-webkit-scrollbar-thumb { background: var(--blue-300); border-radius: 99px; }

    /* ANIMATIONS */
    @keyframes fadeUp {
      from { opacity: 0; transform: translateY(30px); }
      to { opacity: 1; transform: translateY(0); }
    }
    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }
    @keyframes float {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-12px); }
    }
    @keyframes pulse-glow {
      0%, 100% { box-shadow: 0 0 0 0 rgba(59,130,246,0.4); }
      50% { box-shadow: 0 0 0 16px rgba(59,130,246,0); }
    }
    @keyframes shimmer {
      0% { background-position: -200% 0; }
      100% { background-position: 200% 0; }
    }
    @keyframes spin {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }
    @keyframes wave {
      0%, 100% { transform: scaleY(0.5); }
      50% { transform: scaleY(1.5); }
    }
    @keyframes countUp {
      from { opacity: 0; transform: translateY(10px); }
      to { opacity: 1; transform: translateY(0); }
    }
    @keyframes pathPulse {
      0%, 100% { transform: scale(1); }
      50% { transform: scale(1.05); }
    }
    @keyframes slideInRight {
      from { opacity: 0; transform: translateX(40px); }
      to { opacity: 1; transform: translateX(0); }
    }
    @keyframes orbMove {
      0% { transform: translate(0,0) scale(1); }
      33% { transform: translate(30px,-20px) scale(1.05); }
      66% { transform: translate(-20px,15px) scale(0.97); }
      100% { transform: translate(0,0) scale(1); }
    }
    @keyframes drawLine {
      from { stroke-dashoffset: 400; }
      to { stroke-dashoffset: 0; }
    }

    .animate-fadeUp { animation: fadeUp 0.6s ease forwards; }
    .animate-float { animation: float 3s ease-in-out infinite; }
    .animate-pulse-glow { animation: pulse-glow 2s ease-in-out infinite; }

    /* NAV */
    .nav {
      position: fixed; top: 0; left: 0; right: 0; z-index: 1000;
      height: 68px;
      display: flex; align-items: center; justify-content: space-between;
      padding: 0 24px;
      backdrop-filter: blur(20px);
      background: rgba(255,255,255,0.85);
      border-bottom: 1px solid rgba(59,130,246,0.1);
      transition: all 0.3s;
    }
    .dark .nav {
      background: rgba(10,22,40,0.9);
      border-bottom-color: rgba(59,130,246,0.2);
    }
    .nav-logo {
      display: flex; align-items: center; gap: 10px;
      font-family: 'Clash Display', sans-serif;
      font-size: 24px; font-weight: 700;
      color: var(--blue-700);
      cursor: pointer; user-select: none;
    }
    .dark .nav-logo { color: var(--blue-300); }
    .logo-icon {
      width: 38px; height: 38px; border-radius: 10px;
      background: linear-gradient(135deg, var(--blue-600), var(--cyan-500));
      display: flex; align-items: center; justify-content: center;
      color: white; font-size: 18px; font-weight: 800;
      box-shadow: 0 4px 12px rgba(37,99,235,0.3);
    }
    .nav-links {
      display: flex; align-items: center; gap: 4px;
    }
    .nav-link {
      padding: 8px 14px; border-radius: 8px;
      font-size: 14px; font-weight: 500;
      color: var(--gray-600); cursor: pointer;
      transition: all 0.2s; border: none; background: none;
    }
    .nav-link:hover { background: var(--blue-50); color: var(--blue-700); }
    .dark .nav-link { color: var(--blue-200); }
    .dark .nav-link:hover { background: rgba(59,130,246,0.1); color: white; }
    .nav-link.active { color: var(--blue-700); background: var(--blue-50); }
    .dark .nav-link.active { color: white; background: rgba(59,130,246,0.2); }
    .nav-actions {
      display: flex; align-items: center; gap: 10px;
    }
    .lang-switcher {
      display: flex; align-items: center; gap: 2px;
      background: var(--blue-50); border-radius: 10px; padding: 3px;
    }
    .dark .lang-switcher { background: rgba(59,130,246,0.1); }
    .lang-btn {
      padding: 5px 10px; border-radius: 7px;
      font-size: 12px; font-weight: 600;
      color: var(--gray-500); cursor: pointer;
      border: none; background: none; transition: all 0.2s;
    }
    .lang-btn.active {
      background: var(--blue-600); color: white;
      box-shadow: 0 2px 8px rgba(37,99,235,0.3);
    }
    .dark .lang-btn { color: var(--blue-300); }
    .dark .lang-btn.active { background: var(--blue-600); color: white; }
    .dark-toggle {
      width: 36px; height: 36px; border-radius: 10px;
      display: flex; align-items: center; justify-content: center;
      background: var(--blue-50); border: none; cursor: pointer;
      font-size: 18px; transition: all 0.2s;
    }
    .dark .dark-toggle { background: rgba(59,130,246,0.15); }
    .dark-toggle:hover { transform: scale(1.1); }
    .nav-cta {
      padding: 9px 20px; border-radius: 10px;
      background: linear-gradient(135deg, var(--blue-600), var(--blue-700));
      color: white; font-size: 14px; font-weight: 600;
      border: none; cursor: pointer;
      box-shadow: 0 4px 12px rgba(37,99,235,0.25);
      transition: all 0.2s;
    }
    .nav-cta:hover { transform: translateY(-1px); box-shadow: 0 6px 20px rgba(37,99,235,0.35); }

    /* HERO */
    .hero {
      min-height: 100vh;
      display: flex; align-items: center;
      padding: 100px 24px 60px;
      position: relative; overflow: hidden;
    }
    .hero-orb {
      position: absolute; border-radius: 50%;
      filter: blur(80px); pointer-events: none;
      animation: orbMove 12s ease-in-out infinite;
    }
    .hero-orb-1 {
      width: 600px; height: 600px;
      background: radial-gradient(circle, rgba(37,99,235,0.15), transparent);
      top: -100px; right: -100px;
    }
    .hero-orb-2 {
      width: 400px; height: 400px;
      background: radial-gradient(circle, rgba(6,182,212,0.12), transparent);
      bottom: -50px; left: -50px;
      animation-delay: -6s;
    }
    .hero-inner {
      max-width: 1200px; margin: 0 auto; width: 100%;
      display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: center;
    }
    .hero-badge {
      display: inline-flex; align-items: center; gap: 8px;
      background: var(--blue-50); border: 1px solid var(--blue-200);
      color: var(--blue-700); border-radius: 99px;
      padding: 6px 16px; font-size: 13px; font-weight: 600;
      margin-bottom: 24px; animation: fadeUp 0.5s ease forwards;
    }
    .dark .hero-badge { background: rgba(59,130,246,0.1); border-color: rgba(59,130,246,0.3); color: var(--blue-300); }
    .hero-title {
      font-size: clamp(40px, 5vw, 64px); line-height: 1.05;
      font-weight: 700; margin-bottom: 8px;
      animation: fadeUp 0.6s ease 0.1s both;
    }
    .hero-title-accent {
      background: linear-gradient(135deg, var(--blue-600), var(--cyan-400));
      -webkit-background-clip: text; -webkit-text-fill-color: transparent;
      background-clip: text;
    }
    .hero-subtitle {
      font-size: clamp(32px, 4vw, 52px); line-height: 1.1;
      font-weight: 700; margin-bottom: 24px;
      animation: fadeUp 0.6s ease 0.15s both;
    }
    .hero-desc {
      font-size: 18px; color: var(--gray-500); line-height: 1.7;
      margin-bottom: 36px; max-width: 480px;
      animation: fadeUp 0.6s ease 0.2s both;
    }
    .dark .hero-desc { color: var(--blue-200); }
    .hero-btns {
      display: flex; gap: 14px; flex-wrap: wrap;
      animation: fadeUp 0.6s ease 0.25s both;
    }
    .btn-primary {
      padding: 15px 32px; border-radius: 14px;
      background: linear-gradient(135deg, var(--blue-600), var(--blue-700));
      color: white; font-size: 16px; font-weight: 700;
      border: none; cursor: pointer;
      box-shadow: 0 6px 24px rgba(37,99,235,0.3);
      transition: all 0.25s; font-family: 'Sora', sans-serif;
    }
    .btn-primary:hover { transform: translateY(-2px); box-shadow: 0 10px 32px rgba(37,99,235,0.4); }
    .btn-primary:active { transform: translateY(0); }
    .btn-secondary {
      padding: 15px 32px; border-radius: 14px;
      background: transparent;
      color: var(--blue-700); font-size: 16px; font-weight: 600;
      border: 2px solid var(--blue-200); cursor: pointer;
      transition: all 0.25s; font-family: 'Sora', sans-serif;
    }
    .btn-secondary:hover { background: var(--blue-50); border-color: var(--blue-400); }
    .dark .btn-secondary { color: var(--blue-300); border-color: rgba(59,130,246,0.3); }
    .dark .btn-secondary:hover { background: rgba(59,130,246,0.1); }

    /* HERO VISUAL */
    .hero-visual {
      position: relative; display: flex; align-items: center; justify-content: center;
      animation: fadeIn 0.8s ease 0.3s both;
    }
    .hero-card {
      background: white; border-radius: 24px;
      box-shadow: 0 24px 80px rgba(37,99,235,0.15), 0 4px 16px rgba(0,0,0,0.08);
      padding: 28px; width: 100%; max-width: 380px;
      border: 1px solid rgba(59,130,246,0.1);
      animation: float 4s ease-in-out infinite;
    }
    .dark .hero-card {
      background: var(--blue-900);
      border-color: rgba(59,130,246,0.2);
      box-shadow: 0 24px 80px rgba(0,0,0,0.4);
    }
    .hero-card-header {
      display: flex; align-items: center; gap: 12px; margin-bottom: 20px;
    }
    .hc-avatar {
      width: 44px; height: 44px; border-radius: 12px;
      background: linear-gradient(135deg, var(--blue-500), var(--cyan-500));
      display: flex; align-items: center; justify-content: center;
      color: white; font-size: 20px;
    }
    .hc-name { font-weight: 700; font-size: 15px; }
    .hc-status { font-size: 12px; color: var(--success); font-weight: 500; }
    .translate-box {
      background: var(--blue-50); border-radius: 14px; padding: 16px;
      margin-bottom: 12px;
    }
    .dark .translate-box { background: rgba(59,130,246,0.08); }
    .tb-label { font-size: 11px; color: var(--gray-400); font-weight: 600; margin-bottom: 6px; text-transform: uppercase; letter-spacing: 0.5px; }
    .tb-text { font-size: 14px; color: var(--gray-700); line-height: 1.5; }
    .dark .tb-text { color: var(--blue-100); }
    .translate-arrow {
      text-align: center; color: var(--blue-500); font-size: 20px; margin: 4px 0;
    }
    .floating-badges {
      position: absolute;
    }
    .floating-badge {
      position: absolute; background: white; border-radius: 12px;
      padding: 10px 14px; font-size: 13px; font-weight: 600;
      box-shadow: 0 8px 24px rgba(37,99,235,0.12);
      border: 1px solid rgba(59,130,246,0.1);
      white-space: nowrap; color: var(--blue-800);
    }
    .dark .floating-badge {
      background: var(--blue-800);
      color: var(--blue-100);
      border-color: rgba(59,130,246,0.3);
    }
    .fb-1 { top: -20px; right: -40px; animation: float 3.5s ease-in-out infinite; }
    .fb-2 { bottom: 20px; left: -60px; animation: float 4s ease-in-out infinite 0.5s; }
    .fb-3 { top: 50%; left: -50px; animation: float 3s ease-in-out infinite 1s; }

    /* STATS */
    .stats-section {
      padding: 80px 24px;
      background: linear-gradient(135deg, var(--blue-950) 0%, var(--blue-900) 100%);
      position: relative; overflow: hidden;
    }
    .stats-grid {
      max-width: 1000px; margin: 0 auto;
      display: grid; grid-template-columns: repeat(4, 1fr); gap: 32px;
    }
    .stat-card {
      text-align: center; padding: 32px 16px;
      border-radius: 20px;
      background: rgba(255,255,255,0.05);
      border: 1px solid rgba(255,255,255,0.1);
      backdrop-filter: blur(10px);
      transition: transform 0.3s;
    }
    .stat-card:hover { transform: translateY(-4px); }
    .stat-number {
      font-family: 'Clash Display', sans-serif;
      font-size: 48px; font-weight: 700;
      background: linear-gradient(135deg, white, var(--blue-300));
      -webkit-background-clip: text; -webkit-text-fill-color: transparent;
      background-clip: text;
      line-height: 1;
    }
    .stat-label { color: var(--blue-300); font-size: 14px; font-weight: 500; margin-top: 8px; }
    .stats-title {
      text-align: center; color: white;
      font-size: 32px; font-weight: 700; margin-bottom: 48px;
    }

    /* SERVICES */
    .services-section { padding: 100px 24px; }
    .section-header { text-align: center; margin-bottom: 60px; }
    .section-badge {
      display: inline-block;
      background: var(--blue-50); color: var(--blue-700);
      padding: 6px 16px; border-radius: 99px;
      font-size: 13px; font-weight: 600; margin-bottom: 16px;
    }
    .dark .section-badge { background: rgba(59,130,246,0.15); color: var(--blue-300); }
    .section-title {
      font-size: 40px; font-weight: 700; margin-bottom: 16px;
    }
    .section-sub { font-size: 17px; color: var(--gray-500); max-width: 500px; margin: 0 auto; }
    .dark .section-sub { color: var(--blue-300); }
    .services-grid {
      max-width: 1100px; margin: 0 auto;
      display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px;
    }
    .service-card {
      background: white; border-radius: 20px; padding: 28px;
      border: 1px solid var(--blue-100);
      box-shadow: 0 4px 24px rgba(37,99,235,0.06);
      transition: all 0.3s; position: relative; overflow: hidden;
    }
    .dark .service-card {
      background: var(--blue-900);
      border-color: rgba(59,130,246,0.15);
    }
    .service-card::before {
      content: ''; position: absolute; inset: 0;
      background: linear-gradient(135deg, rgba(37,99,235,0.04), transparent);
      opacity: 0; transition: opacity 0.3s;
    }
    .service-card:hover { transform: translateY(-6px); box-shadow: 0 16px 48px rgba(37,99,235,0.12); }
    .service-card:hover::before { opacity: 1; }
    .service-card.featured { border-color: var(--blue-400); }
    .service-icon {
      width: 52px; height: 52px; border-radius: 14px;
      background: var(--blue-50); display: flex; align-items: center; justify-content: center;
      font-size: 24px; margin-bottom: 18px;
    }
    .dark .service-icon { background: rgba(59,130,246,0.15); }
    .service-tag {
      display: inline-block; padding: 4px 10px; border-radius: 99px;
      font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px;
      margin-bottom: 14px;
    }
    .tag-popular { background: rgba(37,99,235,0.1); color: var(--blue-700); }
    .tag-fast { background: rgba(16,185,129,0.1); color: var(--success); }
    .tag-fastest { background: rgba(245,158,11,0.1); color: var(--warning); }
    .tag-new { background: rgba(6,182,212,0.1); color: var(--cyan-500); }
    .service-title { font-size: 18px; font-weight: 700; margin-bottom: 10px; }
    .service-desc { font-size: 14px; color: var(--gray-500); line-height: 1.6; margin-bottom: 20px; }
    .dark .service-desc { color: var(--blue-200); }
    .service-price { font-size: 16px; font-weight: 700; color: var(--blue-700); margin-bottom: 18px; }
    .dark .service-price { color: var(--blue-400); }
    .service-cta {
      width: 100%; padding: 11px; border-radius: 10px;
      background: var(--blue-600); color: white;
      font-size: 14px; font-weight: 600;
      border: none; cursor: pointer; font-family: 'Sora', sans-serif;
      transition: all 0.2s;
    }
    .service-cta:hover { background: var(--blue-700); transform: translateY(-1px); }

    /* TESTIMONIALS */
    .testimonials-section {
      padding: 100px 24px;
      background: var(--blue-50);
    }
    .dark .testimonials-section { background: rgba(15,32,64,0.5); }
    .testimonials-grid {
      max-width: 1100px; margin: 0 auto;
      display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px;
    }
    .testimonial-card {
      background: white; border-radius: 20px; padding: 28px;
      box-shadow: 0 4px 20px rgba(37,99,235,0.07);
      border: 1px solid var(--blue-100);
      transition: transform 0.3s;
    }
    .dark .testimonial-card {
      background: var(--blue-900);
      border-color: rgba(59,130,246,0.15);
    }
    .testimonial-card:hover { transform: translateY(-4px); }
    .t-stars { color: var(--gold); font-size: 18px; margin-bottom: 14px; }
    .t-text { font-size: 15px; color: var(--gray-600); line-height: 1.7; margin-bottom: 20px; font-style: italic; }
    .dark .t-text { color: var(--blue-200); }
    .t-author { display: flex; align-items: center; gap: 12px; }
    .t-avatar {
      width: 44px; height: 44px; border-radius: 12px;
      display: flex; align-items: center; justify-content: center;
      color: white; font-size: 14px; font-weight: 700;
    }
    .t-name { font-weight: 700; font-size: 15px; }
    .t-role { font-size: 13px; color: var(--gray-400); }

    /* CTA BANNER */
    .cta-banner {
      padding: 100px 24px;
      background: linear-gradient(135deg, var(--blue-700), var(--blue-900));
      text-align: center; position: relative; overflow: hidden;
    }
    .cta-title { font-size: 44px; font-weight: 700; color: white; margin-bottom: 16px; }
    .cta-sub { font-size: 18px; color: var(--blue-200); margin-bottom: 36px; }
    .cta-btn {
      padding: 17px 48px; border-radius: 14px;
      background: white; color: var(--blue-700);
      font-size: 17px; font-weight: 700;
      border: none; cursor: pointer; font-family: 'Sora', sans-serif;
      box-shadow: 0 8px 32px rgba(0,0,0,0.2);
      transition: all 0.25s;
    }
    .cta-btn:hover { transform: translateY(-2px); box-shadow: 0 12px 40px rgba(0,0,0,0.3); }

    /* AI SECTION */
    .ai-section { padding: 100px 24px; }
    .ai-inner {
      max-width: 800px; margin: 0 auto;
      background: white; border-radius: 28px;
      padding: 48px; box-shadow: 0 8px 48px rgba(37,99,235,0.08);
      border: 1px solid var(--blue-100);
    }
    .dark .ai-inner { background: var(--blue-900); border-color: rgba(59,130,246,0.2); }
    .ai-controls {
      display: flex; gap: 12px; margin-bottom: 20px; align-items: center;
    }
    .ai-select {
      padding: 10px 14px; border-radius: 10px;
      border: 1px solid var(--blue-200); background: var(--blue-50);
      color: var(--gray-700); font-size: 14px; font-family: 'Sora', sans-serif;
      cursor: pointer;
    }
    .dark .ai-select { background: rgba(59,130,246,0.1); border-color: rgba(59,130,246,0.3); color: white; }
    .ai-arrow { font-size: 20px; color: var(--blue-500); }
    .ai-textarea {
      width: 100%; min-height: 120px; padding: 16px;
      border-radius: 14px; border: 1px solid var(--blue-200);
      font-size: 15px; font-family: 'Sora', sans-serif;
      resize: vertical; outline: none; color: var(--gray-700);
      background: var(--blue-50); transition: border-color 0.2s;
    }
    .dark .ai-textarea { background: rgba(59,130,246,0.05); border-color: rgba(59,130,246,0.3); color: white; }
    .ai-textarea:focus { border-color: var(--blue-500); }
    .ai-btn {
      margin-top: 14px; padding: 13px 28px; border-radius: 12px;
      background: linear-gradient(135deg, var(--blue-600), var(--cyan-500));
      color: white; font-size: 15px; font-weight: 700;
      border: none; cursor: pointer; font-family: 'Sora', sans-serif;
      transition: all 0.25s; box-shadow: 0 4px 16px rgba(37,99,235,0.25);
    }
    .ai-btn:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(37,99,235,0.35); }
    .ai-btn:disabled { opacity: 0.6; cursor: not-allowed; transform: none; }
    .ai-result {
      margin-top: 24px; padding: 20px;
      background: linear-gradient(135deg, var(--blue-50), rgba(6,182,212,0.05));
      border-radius: 14px; border: 1px solid var(--blue-200);
      animation: fadeUp 0.4s ease;
    }
    .dark .ai-result { background: rgba(59,130,246,0.08); border-color: rgba(59,130,246,0.3); }
    .ai-result-label { font-size: 12px; color: var(--blue-500); font-weight: 600; text-transform: uppercase; margin-bottom: 10px; }
    .ai-result-text { font-size: 15px; color: var(--gray-700); line-height: 1.7; }
    .dark .ai-result-text { color: var(--blue-100); }
    .ai-loading {
      display: flex; align-items: center; gap: 10px; color: var(--blue-500);
    }
    .loading-dots span {
      display: inline-block; width: 6px; height: 6px;
      background: var(--blue-500); border-radius: 50%;
      animation: wave 1s ease-in-out infinite;
    }
    .loading-dots span:nth-child(2) { animation-delay: 0.15s; }
    .loading-dots span:nth-child(3) { animation-delay: 0.3s; }

    /* DASHBOARD */
    .dashboard-page { padding: 100px 24px 60px; }
    .page-inner { max-width: 1100px; margin: 0 auto; }
    .page-header { margin-bottom: 36px; }
    .page-title { font-size: 36px; font-weight: 700; }
    .page-sub { color: var(--gray-500); font-size: 16px; margin-top: 6px; }
    .dark .page-sub { color: var(--blue-300); }

    .dash-stats {
      display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; margin-bottom: 32px;
    }
    .dash-stat {
      background: white; border-radius: 16px; padding: 20px;
      border: 1px solid var(--blue-100);
      box-shadow: 0 2px 12px rgba(37,99,235,0.06);
      display: flex; flex-direction: column; gap: 8px;
      transition: transform 0.2s;
    }
    .dark .dash-stat { background: var(--blue-900); border-color: rgba(59,130,246,0.2); }
    .dash-stat:hover { transform: translateY(-2px); }
    .ds-icon { font-size: 28px; }
    .ds-number { font-family: 'Clash Display', sans-serif; font-size: 28px; font-weight: 700; color: var(--blue-700); }
    .dark .ds-number { color: var(--blue-300); }
    .ds-label { font-size: 12px; color: var(--gray-400); font-weight: 500; }

    .dash-main {
      display: grid; grid-template-columns: 1fr 340px; gap: 24px;
    }
    .dash-card {
      background: white; border-radius: 20px; padding: 28px;
      border: 1px solid var(--blue-100);
      box-shadow: 0 2px 16px rgba(37,99,235,0.05);
    }
    .dark .dash-card { background: var(--blue-900); border-color: rgba(59,130,246,0.2); }
    .dash-card-title { font-size: 18px; font-weight: 700; margin-bottom: 20px; }

    /* LEARNING PATH */
    .path-container {
      display: flex; flex-direction: column; align-items: center; gap: 0;
      position: relative;
    }
    .path-item {
      display: flex; flex-direction: column; align-items: center; position: relative; z-index: 1;
    }
    .path-node {
      width: 72px; height: 72px; border-radius: 50%;
      display: flex; align-items: center; justify-content: center;
      font-size: 28px; font-weight: 700; cursor: pointer;
      transition: all 0.3s; position: relative;
      border: 4px solid transparent;
    }
    .path-node.complete {
      background: linear-gradient(135deg, var(--blue-600), var(--blue-500));
      box-shadow: 0 6px 20px rgba(37,99,235,0.3);
    }
    .path-node.current {
      background: linear-gradient(135deg, var(--blue-500), var(--cyan-500));
      box-shadow: 0 6px 20px rgba(37,99,235,0.4);
      animation: pathPulse 2s ease-in-out infinite;
      border-color: rgba(255,255,255,0.5);
    }
    .path-node.locked {
      background: var(--gray-100); color: var(--gray-400);
      box-shadow: none; cursor: not-allowed;
    }
    .dark .path-node.locked { background: rgba(59,130,246,0.1); color: var(--blue-400); }
    .path-label {
      font-size: 13px; font-weight: 600; margin-top: 8px; margin-bottom: 4px;
      color: var(--gray-700);
    }
    .dark .path-label { color: var(--blue-200); }
    .path-xp { font-size: 11px; color: var(--blue-500); font-weight: 600; margin-bottom: 16px; }
    .path-connector {
      width: 3px; height: 24px;
      background: linear-gradient(to bottom, var(--blue-300), var(--blue-100));
      border-radius: 99px; margin: 0 auto;
    }
    .path-connector.locked { background: var(--gray-200); }
    .dark .path-connector.locked { background: rgba(59,130,246,0.1); }

    /* PROGRESS */
    .progress-bar-wrap {
      background: var(--blue-50); border-radius: 99px; height: 10px; overflow: hidden;
      margin: 8px 0;
    }
    .dark .progress-bar-wrap { background: rgba(59,130,246,0.1); }
    .progress-bar-fill {
      height: 100%; border-radius: 99px;
      background: linear-gradient(90deg, var(--blue-500), var(--cyan-400));
      transition: width 1s ease;
    }

    /* LEADERBOARD */
    .leaderboard-list { display: flex; flex-direction: column; gap: 10px; }
    .lb-item {
      display: flex; align-items: center; gap: 12px; padding: 12px;
      border-radius: 12px; background: var(--blue-50);
      transition: background 0.2s;
    }
    .dark .lb-item { background: rgba(59,130,246,0.08); }
    .lb-item:hover { background: var(--blue-100); }
    .dark .lb-item:hover { background: rgba(59,130,246,0.15); }
    .lb-rank {
      width: 28px; height: 28px; border-radius: 8px;
      display: flex; align-items: center; justify-content: center;
      font-weight: 700; font-size: 13px;
    }
    .lb-rank.gold { background: rgba(245,158,11,0.15); color: var(--gold); }
    .lb-rank.silver { background: rgba(148,163,184,0.2); color: var(--gray-500); }
    .lb-rank.bronze { background: rgba(161,91,64,0.15); color: #a15b40; }
    .lb-rank.other { background: var(--blue-100); color: var(--blue-600); }
    .lb-avatar {
      width: 36px; height: 36px; border-radius: 10px;
      background: linear-gradient(135deg, var(--blue-500), var(--cyan-500));
      display: flex; align-items: center; justify-content: center;
      color: white; font-size: 12px; font-weight: 700; flex-shrink: 0;
    }
    .lb-name { font-weight: 600; font-size: 14px; flex: 1; }
    .lb-xp { font-size: 12px; color: var(--blue-500); font-weight: 600; }
    .lb-streak { font-size: 12px; color: var(--warning); }

    /* ACHIEVEMENTS */
    .achievements-grid {
      display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px;
    }
    .achievement {
      padding: 14px; border-radius: 14px; text-align: center;
      border: 1px solid var(--blue-100); transition: all 0.2s;
    }
    .dark .achievement { border-color: rgba(59,130,246,0.15); }
    .achievement.unlocked {
      background: linear-gradient(135deg, rgba(37,99,235,0.05), rgba(6,182,212,0.05));
      border-color: var(--blue-200);
    }
    .achievement.locked { opacity: 0.4; filter: grayscale(1); }
    .achievement-icon { font-size: 28px; margin-bottom: 6px; }
    .achievement-label { font-size: 11px; font-weight: 600; color: var(--gray-600); }
    .dark .achievement-label { color: var(--blue-300); }

    /* ORDER FLOW */
    .order-page { padding: 100px 24px 60px; }
    .order-inner { max-width: 720px; margin: 0 auto; }
    .step-progress {
      display: flex; align-items: center; margin-bottom: 48px;
    }
    .step-dot {
      width: 36px; height: 36px; border-radius: 50%;
      display: flex; align-items: center; justify-content: center;
      font-size: 14px; font-weight: 700; flex-shrink: 0;
      transition: all 0.3s;
    }
    .step-dot.done { background: var(--blue-600); color: white; }
    .step-dot.active {
      background: var(--blue-600); color: white;
      box-shadow: 0 0 0 6px rgba(37,99,235,0.15);
      animation: pulse-glow 2s ease-in-out infinite;
    }
    .step-dot.pending { background: var(--gray-100); color: var(--gray-400); }
    .dark .step-dot.pending { background: rgba(59,130,246,0.1); color: var(--blue-400); }
    .step-line {
      flex: 1; height: 3px; border-radius: 99px;
      background: var(--gray-100); transition: background 0.5s;
    }
    .step-line.done { background: var(--blue-400); }
    .dark .step-line { background: rgba(59,130,246,0.1); }
    .dark .step-line.done { background: var(--blue-600); }
    .order-card {
      background: white; border-radius: 24px; padding: 40px;
      box-shadow: 0 8px 40px rgba(37,99,235,0.08);
      border: 1px solid var(--blue-100);
      animation: fadeUp 0.4s ease;
    }
    .dark .order-card { background: var(--blue-900); border-color: rgba(59,130,246,0.2); }
    .order-card-title { font-size: 24px; font-weight: 700; margin-bottom: 8px; }
    .order-card-sub { color: var(--gray-500); margin-bottom: 32px; }
    .dark .order-card-sub { color: var(--blue-300); }
    .lang-grid {
      display: grid; grid-template-columns: 1fr auto 1fr; gap: 16px; align-items: center;
    }
    .lang-select-box {
      padding: 14px; border-radius: 14px;
      border: 1.5px solid var(--blue-200); background: var(--blue-50);
      font-size: 14px; font-family: 'Sora', sans-serif; color: var(--gray-700);
      width: 100%; cursor: pointer; outline: none; transition: border-color 0.2s;
    }
    .dark .lang-select-box { background: rgba(59,130,246,0.08); border-color: rgba(59,130,246,0.3); color: white; }
    .lang-select-box:focus { border-color: var(--blue-500); }
    .lang-select-label { font-size: 12px; color: var(--blue-500); font-weight: 600; margin-bottom: 6px; text-transform: uppercase; }
    .swap-btn {
      width: 44px; height: 44px; border-radius: 12px;
      background: var(--blue-100); border: none; cursor: pointer;
      font-size: 20px; transition: all 0.2s; display: flex; align-items: center; justify-content: center;
    }
    .dark .swap-btn { background: rgba(59,130,246,0.15); }
    .swap-btn:hover { background: var(--blue-200); transform: rotate(180deg); }
    .upload-zone {
      border: 2.5px dashed var(--blue-300); border-radius: 18px;
      padding: 48px; text-align: center; cursor: pointer;
      transition: all 0.2s; background: var(--blue-50);
    }
    .dark .upload-zone { background: rgba(59,130,246,0.05); border-color: rgba(59,130,246,0.3); }
    .upload-zone:hover { border-color: var(--blue-500); background: rgba(37,99,235,0.04); }
    .upload-zone.dragging { border-color: var(--blue-600); background: rgba(37,99,235,0.08); }
    .upload-icon { font-size: 48px; margin-bottom: 16px; }
    .upload-title { font-size: 18px; font-weight: 600; margin-bottom: 6px; }
    .upload-sub { font-size: 14px; color: var(--gray-400); }
    .upload-sub span { color: var(--blue-600); font-weight: 600; }
    .uploaded-file {
      display: flex; align-items: center; gap: 14px;
      background: linear-gradient(135deg, var(--blue-50), rgba(6,182,212,0.05));
      border: 1px solid var(--blue-200); border-radius: 14px; padding: 16px;
      animation: fadeUp 0.3s ease;
    }
    .dark .uploaded-file { background: rgba(59,130,246,0.1); border-color: rgba(59,130,246,0.3); }
    .file-icon { font-size: 32px; }
    .file-name { font-weight: 600; font-size: 15px; }
    .file-size { font-size: 13px; color: var(--gray-400); }
    .remove-btn { margin-left: auto; background: none; border: none; cursor: pointer; font-size: 18px; color: var(--gray-400); transition: color 0.2s; }
    .remove-btn:hover { color: var(--error); }
    .notes-textarea {
      width: 100%; min-height: 120px; padding: 16px;
      border-radius: 14px; border: 1.5px solid var(--blue-200);
      font-size: 15px; font-family: 'Sora', sans-serif; resize: vertical;
      outline: none; background: var(--blue-50); color: var(--gray-700);
      transition: border-color 0.2s;
    }
    .dark .notes-textarea { background: rgba(59,130,246,0.05); border-color: rgba(59,130,246,0.3); color: white; }
    .notes-textarea:focus { border-color: var(--blue-500); }
    .price-breakdown {
      display: flex; flex-direction: column; gap: 14px;
    }
    .price-row {
      display: flex; justify-content: space-between; align-items: center;
      padding: 14px 18px; border-radius: 12px;
      background: var(--blue-50); border: 1px solid var(--blue-100);
    }
    .dark .price-row { background: rgba(59,130,246,0.08); border-color: rgba(59,130,246,0.15); }
    .price-row.total {
      background: linear-gradient(135deg, var(--blue-600), var(--blue-700));
      border: none;
    }
    .price-row.total .pr-label, .price-row.total .pr-value { color: white; }
    .pr-label { font-size: 14px; color: var(--gray-500); }
    .dark .pr-label { color: var(--blue-300); }
    .pr-value { font-weight: 700; font-size: 16px; color: var(--gray-800); }
    .dark .pr-value { color: white; }
    .order-nav {
      display: flex; justify-content: space-between; margin-top: 32px;
    }
    .btn-back {
      padding: 13px 24px; border-radius: 12px;
      border: 1.5px solid var(--blue-200); background: transparent;
      color: var(--gray-600); font-size: 15px; font-weight: 600;
      cursor: pointer; font-family: 'Sora', sans-serif; transition: all 0.2s;
    }
    .btn-back:hover { background: var(--blue-50); }
    .dark .btn-back { border-color: rgba(59,130,246,0.3); color: var(--blue-300); }
    .btn-next {
      padding: 13px 32px; border-radius: 12px;
      background: linear-gradient(135deg, var(--blue-600), var(--blue-700));
      color: white; font-size: 15px; font-weight: 700;
      border: none; cursor: pointer; font-family: 'Sora', sans-serif;
      box-shadow: 0 4px 16px rgba(37,99,235,0.25); transition: all 0.25s;
    }
    .btn-next:hover { transform: translateY(-1px); box-shadow: 0 8px 24px rgba(37,99,235,0.35); }
    .btn-checkout {
      padding: 13px 32px; border-radius: 12px;
      background: linear-gradient(135deg, var(--success), #059669);
      color: white; font-size: 15px; font-weight: 700;
      border: none; cursor: pointer; font-family: 'Sora', sans-serif;
      box-shadow: 0 4px 16px rgba(16,185,129,0.3); transition: all 0.25s;
    }
    .btn-checkout:hover { transform: translateY(-1px); }

    /* PROFILE */
    .profile-page { padding: 100px 24px 60px; }
    .profile-hero {
      background: linear-gradient(135deg, var(--blue-700), var(--blue-900));
      border-radius: 24px; padding: 40px; margin-bottom: 24px;
      display: flex; align-items: center; gap: 28px; position: relative; overflow: hidden;
    }
    .profile-avatar {
      width: 90px; height: 90px; border-radius: 24px;
      background: linear-gradient(135deg, var(--blue-400), var(--cyan-500));
      display: flex; align-items: center; justify-content: center;
      color: white; font-size: 36px; font-weight: 700;
      border: 3px solid rgba(255,255,255,0.2); flex-shrink: 0;
    }
    .profile-info { flex: 1; }
    .profile-name { font-size: 28px; font-weight: 700; color: white; }
    .profile-email { color: var(--blue-200); font-size: 14px; margin-top: 4px; }
    .profile-joined { color: var(--blue-300); font-size: 13px; margin-top: 8px; }
    .profile-badge {
      background: rgba(255,255,255,0.15); backdrop-filter: blur(10px);
      border-radius: 99px; padding: 8px 18px;
      color: white; font-size: 14px; font-weight: 600;
      border: 1px solid rgba(255,255,255,0.2);
    }
    .profile-stats {
      display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px;
      margin-bottom: 24px;
    }
    .profile-stat {
      background: white; border-radius: 16px; padding: 20px; text-align: center;
      border: 1px solid var(--blue-100);
      box-shadow: 0 2px 12px rgba(37,99,235,0.05);
    }
    .dark .profile-stat { background: var(--blue-900); border-color: rgba(59,130,246,0.15); }
    .ps-icon { font-size: 24px; margin-bottom: 8px; }
    .ps-number { font-family: 'Clash Display', sans-serif; font-size: 28px; font-weight: 700; color: var(--blue-700); }
    .dark .ps-number { color: var(--blue-300); }
    .ps-label { font-size: 12px; color: var(--gray-400); margin-top: 4px; }
    .profile-grid {
      display: grid; grid-template-columns: 1fr 340px; gap: 24px;
    }
    .activity-list { display: flex; flex-direction: column; gap: 12px; }
    .activity-item {
      display: flex; align-items: center; gap: 14px; padding: 16px;
      border-radius: 14px; border: 1px solid var(--blue-100);
      background: var(--blue-50); transition: background 0.2s;
    }
    .dark .activity-item { background: rgba(59,130,246,0.06); border-color: rgba(59,130,246,0.15); }
    .activity-item:hover { background: var(--blue-100); }
    .dark .activity-item:hover { background: rgba(59,130,246,0.12); }
    .act-icon { font-size: 28px; }
    .act-file { font-weight: 600; font-size: 14px; }
    .act-meta { font-size: 12px; color: var(--gray-400); margin-top: 2px; }
    .act-date { margin-left: auto; font-size: 12px; color: var(--gray-400); white-space: nowrap; }
    .act-status {
      padding: 4px 10px; border-radius: 99px;
      background: rgba(16,185,129,0.1); color: var(--success);
      font-size: 11px; font-weight: 700;
    }

    /* FOOTER */
    .footer {
      background: var(--blue-950); color: var(--blue-200);
      padding: 60px 24px 32px;
    }
    .footer-inner {
      max-width: 1100px; margin: 0 auto;
    }
    .footer-top {
      display: grid; grid-template-columns: 2fr 1fr 1fr 1fr; gap: 48px;
      margin-bottom: 48px;
    }
    .footer-brand { }
    .footer-logo { font-family: 'Clash Display', sans-serif; font-size: 28px; font-weight: 700; color: white; margin-bottom: 12px; display: flex; align-items: center; gap: 10px; }
    .footer-tagline { color: var(--blue-400); font-size: 14px; }
    .footer-col-title { color: white; font-weight: 700; font-size: 14px; margin-bottom: 16px; }
    .footer-link { display: block; color: var(--blue-400); font-size: 14px; margin-bottom: 10px; cursor: pointer; transition: color 0.2s; }
    .footer-link:hover { color: white; }
    .footer-bottom {
      border-top: 1px solid rgba(255,255,255,0.08);
      padding-top: 24px; display: flex; justify-content: space-between; align-items: center;
    }
    .footer-copy { font-size: 13px; color: var(--blue-500); }

    /* HAMBURGER */
    .hamburger { display: none; flex-direction: column; gap: 4px; cursor: pointer; padding: 4px; }
    .hamburger span { display: block; width: 22px; height: 2px; background: var(--blue-700); border-radius: 99px; transition: all 0.3s; }
    .dark .hamburger span { background: var(--blue-300); }
    .mobile-menu {
      display: none; position: fixed; top: 68px; left: 0; right: 0;
      background: white; z-index: 999; padding: 16px 24px;
      border-bottom: 1px solid var(--blue-100);
      box-shadow: 0 8px 24px rgba(0,0,0,0.1);
      flex-direction: column; gap: 4px;
    }
    .dark .mobile-menu { background: var(--blue-950); border-color: rgba(59,130,246,0.2); }
    .mobile-menu.open { display: flex; animation: fadeUp 0.2s ease; }

    /* RESPONSIVE */
    @media (max-width: 1024px) {
      .hero-inner { grid-template-columns: 1fr; gap: 40px; }
      .hero-visual { display: none; }
      .services-grid { grid-template-columns: repeat(2, 1fr); }
      .stats-grid { grid-template-columns: repeat(2, 1fr); }
      .testimonials-grid { grid-template-columns: 1fr 1fr; }
      .dash-stats { grid-template-columns: repeat(2, 1fr); }
      .dash-main { grid-template-columns: 1fr; }
      .profile-stats { grid-template-columns: repeat(2, 1fr); }
      .profile-grid { grid-template-columns: 1fr; }
      .footer-top { grid-template-columns: 1fr 1fr; gap: 32px; }
    }
    @media (max-width: 768px) {
      .nav-links { display: none; }
      .hamburger { display: flex; }
      .services-grid { grid-template-columns: 1fr; }
      .testimonials-grid { grid-template-columns: 1fr; }
      .stats-grid { grid-template-columns: 1fr 1fr; }
      .hero-title { font-size: 36px; }
      .section-title { font-size: 30px; }
      .cta-title { font-size: 30px; }
      .achievements-grid { grid-template-columns: repeat(3, 1fr); }
      .footer-top { grid-template-columns: 1fr; }
      .footer-bottom { flex-direction: column; gap: 12px; }
      .lang-grid { grid-template-columns: 1fr; }
      .swap-btn { display: none; }
      .profile-hero { flex-direction: column; text-align: center; }
      .profile-stats { grid-template-columns: repeat(2, 1fr); }
      .profile-grid { grid-template-columns: 1fr; }
      .dash-stats { grid-template-columns: 1fr 1fr; }
    }
  `}</style>
);

// ============================================================
// COMPONENTS
// ============================================================

const OrtolLogo = () => (
  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
    <div className="logo-icon">O</div>
    <span style={{ fontFamily: "'Clash Display', sans-serif", fontWeight: 700, fontSize: 22 }}>
      ORTOLA
    </span>
  </div>
);

const StarRating = ({ count }) => (
  <div className="t-stars">{"★".repeat(count)}</div>
);

// ---- NAV ----
function Nav({ page, setPage, lang, setLang, dark, setDark, t }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const navItems = [
    { key: "home", label: t.nav.home },
    { key: "services", label: t.nav.services },
    { key: "dashboard", label: t.nav.dashboard },
    { key: "order", label: t.nav.order },
    { key: "profile", label: t.nav.profile },
  ];
  return (
    <>
      <nav className="nav">
        <div className="nav-logo" onClick={() => setPage("home")}>
          <OrtolLogo />
        </div>
        <div className="nav-links">
          {navItems.map((item) => (
            <button
              key={item.key}
              className={`nav-link ${page === item.key ? "active" : ""}`}
              onClick={() => setPage(item.key)}
            >
              {item.label}
            </button>
          ))}
        </div>
        <div className="nav-actions">
          <div className="lang-switcher">
            {["uz", "ru", "en"].map((l) => (
              <button
                key={l}
                className={`lang-btn ${lang === l ? "active" : ""}`}
                onClick={() => setLang(l)}
              >
                {l.toUpperCase()}
              </button>
            ))}
          </div>
          <button className="dark-toggle" onClick={() => setDark(!dark)}>
            {dark ? "☀️" : "🌙"}
          </button>
          <button className="nav-cta" onClick={() => setPage("order")}>
            {t.nav.startNow}
          </button>
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span /><span /><span />
          </div>
        </div>
      </nav>
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        {navItems.map((item) => (
          <button
            key={item.key}
            className={`nav-link ${page === item.key ? "active" : ""}`}
            style={{ textAlign: "left" }}
            onClick={() => { setPage(item.key); setMenuOpen(false); }}
          >
            {item.label}
          </button>
        ))}
      </div>
    </>
  );
}

// ---- AI MOCK ----
const MOCK_TRANSLATIONS = {
  uz: {
    en: "The quick brown fox jumps over the lazy dog.",
    ru: "Быстрая коричневая лиса перепрыгивает через ленивую собаку.",
    de: "Der schnelle braune Fuchs springt über den faulen Hund.",
  },
  en: {
    uz: "Tez jigarrang tulki dangasa it ustidan sakrab o'tadi.",
    ru: "Быстрая коричневая лиса перепрыгивает через ленивую собаку.",
    de: "Der schnelle braune Fuchs springt über den faulen Hund.",
  },
  ru: {
    uz: "Tez jigarrang tulki dangasa it ustidan sakrab o'tadi.",
    en: "The quick brown fox jumps over the lazy dog.",
    de: "Der schnelle braune Fuchs springt über den faulen Hund.",
  },
};

function AISection({ t, lang }) {
  const [inputText, setInputText] = useState("");
  const [fromLang, setFromLang] = useState("uz");
  const [toLang, setToLang] = useState("en");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const handleTranslate = async () => {
    if (!inputText.trim()) return;
    setLoading(true);
    setResult("");
    // Call real Claude API
    try {
      const response = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "claude-sonnet-4-20250514",
          max_tokens: 1000,
          messages: [{
            role: "user",
            content: `Translate the following text from ${fromLang} to ${toLang}. Return ONLY the translation, no explanations or extra text:\n\n${inputText}`
          }]
        })
      });
      const data = await response.json();
      const text = data.content?.map(b => b.text || "").join("") || "Translation unavailable.";
      setResult(text);
    } catch {
      setResult("Translation error. Please try again.");
    }
    setLoading(false);
  };

  return (
    <section className="ai-section">
      <div className="section-header">
        <div className="section-badge">✨ AI Powered</div>
        <h2 className="section-title">{t.ai.title}</h2>
        <p className="section-sub">{t.ai.subtitle}</p>
      </div>
      <div className="ai-inner">
        <div className="ai-controls">
          <select className="ai-select" value={fromLang} onChange={e => setFromLang(e.target.value)}>
            <option value="uz">🇺🇿 Uzbek</option>
            <option value="ru">🇷🇺 Russian</option>
            <option value="en">🇬🇧 English</option>
            <option value="de">🇩🇪 German</option>
            <option value="fr">🇫🇷 French</option>
          </select>
          <div className="ai-arrow">→</div>
          <select className="ai-select" value={toLang} onChange={e => setToLang(e.target.value)}>
            <option value="en">🇬🇧 English</option>
            <option value="uz">🇺🇿 Uzbek</option>
            <option value="ru">🇷🇺 Russian</option>
            <option value="de">🇩🇪 German</option>
            <option value="fr">🇫🇷 French</option>
          </select>
        </div>
        <textarea
          className="ai-textarea"
          placeholder={t.ai.placeholder}
          value={inputText}
          onChange={e => setInputText(e.target.value)}
        />
        <br />
        <button className="ai-btn" onClick={handleTranslate} disabled={loading || !inputText.trim()}>
          {loading ? t.ai.loading : t.ai.translate}
        </button>
        {loading && (
          <div className="ai-result">
            <div className="ai-loading">
              <div className="loading-dots">
                <span /><span /><span />
              </div>
              <span style={{ fontSize: 14, marginLeft: 8 }}>{t.ai.loading}</span>
            </div>
          </div>
        )}
        {result && !loading && (
          <div className="ai-result">
            <div className="ai-result-label">{t.ai.result}</div>
            <div className="ai-result-text">{result}</div>
          </div>
        )}
      </div>
    </section>
  );
}

// ---- HOME ----
function HomePage({ t, lang, setPage }) {
  const [counts, setCounts] = useState({ users: 0, translations: 0, languages: 0, satisfaction: 0 });

  useEffect(() => {
    const targets = { users: 50000, translations: 2000000, languages: 50, satisfaction: 98 };
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;
    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      const ease = 1 - Math.pow(1 - progress, 3);
      setCounts({
        users: Math.floor(targets.users * ease),
        translations: Math.floor(targets.translations * ease),
        languages: Math.floor(targets.languages * ease),
        satisfaction: Math.floor(targets.satisfaction * ease),
      });
      if (step >= steps) clearInterval(timer);
    }, interval);
    return () => clearInterval(timer);
  }, []);

  const services = [
    { icon: "📚", key: "book", tag: "popular" },
    { icon: "📄", key: "document", tag: "fast" },
    { icon: "💬", key: "text", tag: "fastest" },
    { icon: "🎬", key: "subtitle_svc", tag: "new" },
  ];

  const getTestimonialText = (t) => {
    if (lang === "uz") return t.text_uz;
    if (lang === "ru") return t.text_ru;
    return t.text_en;
  };

  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="hero-orb hero-orb-1" />
        <div className="hero-orb hero-orb-2" />
        <div className="hero-inner">
          <div className="hero-left">
            <div className="hero-badge">
              {t.hero.badge}
            </div>
            <h1 className="hero-title">{t.hero.title}</h1>
            <h1 className="hero-title">
              <span className="hero-title-accent">{t.hero.titleAccent}</span>
            </h1>
            <h2 className="hero-subtitle">{t.hero.subtitle}</h2>
            <p className="hero-desc">{t.hero.description}</p>
            <div className="hero-btns">
              <button className="btn-primary" onClick={() => setPage("order")}>
                🚀 {t.hero.cta}
              </button>
              <button className="btn-secondary" onClick={() => setPage("services")}>
                {t.hero.ctaSecondary}
              </button>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-card">
              <div className="hero-card-header">
                <div className="hc-avatar">🌍</div>
                <div>
                  <div className="hc-name">ORTOLA</div>
                  <div className="hc-status">● Active Translation</div>
                </div>
              </div>
              <div className="translate-box">
                <div className="tb-label">🇺🇿 Uzbek</div>
                <div className="tb-text">Dunyoni tarjima qilmoqdamiz</div>
              </div>
              <div className="translate-arrow">⬇</div>
              <div className="translate-box">
                <div className="tb-label">🇬🇧 English</div>
                <div className="tb-text">We are translating the world</div>
              </div>
              <div style={{ marginTop: 14, display: "flex", alignItems: "center", gap: 8 }}>
                <div className="progress-bar-wrap" style={{ flex: 1 }}>
                  <div className="progress-bar-fill" style={{ width: "78%" }} />
                </div>
                <span style={{ fontSize: 13, fontWeight: 700, color: "var(--blue-600)" }}>78%</span>
              </div>
            </div>
            <div className="floating-badges">
              <div className="floating-badge fb-1">⚡ {t.hero.floating1}</div>
              <div className="floating-badge fb-2">🎧 {t.hero.floating2}</div>
              <div className="floating-badge fb-3">🌐 {t.hero.floating3}</div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="stats-section">
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <h2 className="stats-title">{t.stats.title}</h2>
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-number">{counts.users.toLocaleString()}+</div>
              <div className="stat-label">{t.stats.users}</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">{(counts.translations / 1000000).toFixed(1)}M+</div>
              <div className="stat-label">{t.stats.translations}</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">{counts.languages}+</div>
              <div className="stat-label">{t.stats.languages}</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">{counts.satisfaction}%</div>
              <div className="stat-label">{t.stats.satisfaction}</div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="services-section">
        <div className="section-header">
          <div className="section-badge">🛠 Services</div>
          <h2 className="section-title">{t.services.title}</h2>
          <p className="section-sub">{t.services.subtitle}</p>
        </div>
        <div className="services-grid" style={{ maxWidth: 1100, margin: "0 auto" }}>
          {services.map((svc) => {
            const sd = t.services[svc.key];
            return (
              <div key={svc.key} className={`service-card ${svc.key === "book" ? "featured" : ""}`}>
                <div className="service-icon">{svc.icon}</div>
                <div className={`service-tag tag-${svc.tag}`}>{sd.tag}</div>
                <h3 className="service-title">{sd.title}</h3>
                <p className="service-desc">{sd.desc}</p>
                <div className="service-price">{sd.price}</div>
                <button className="service-cta" onClick={() => setPage("order")}>
                  {t.services.cta} →
                </button>
              </div>
            );
          })}
        </div>
      </section>

      {/* AI SECTION */}
      <AISection t={t} lang={lang} />

      {/* TESTIMONIALS */}
      <section className="testimonials-section">
        <div className="section-header">
          <div className="section-badge">💬 Testimonials</div>
          <h2 className="section-title">{t.testimonials.title}</h2>
          <p className="section-sub">{t.testimonials.subtitle}</p>
        </div>
        <div className="testimonials-grid" style={{ maxWidth: 1100, margin: "0 auto" }}>
          {testimonials_data.map((tm, i) => (
            <div key={i} className="testimonial-card">
              <StarRating count={tm.rating} />
              <p className="t-text">"{getTestimonialText(tm)}"</p>
              <div className="t-author">
                <div className="t-avatar" style={{ background: `linear-gradient(135deg, ${tm.color}, var(--cyan-500))` }}>
                  {tm.avatar}
                </div>
                <div>
                  <div className="t-name">{tm.name}</div>
                  <div className="t-role">{tm.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="cta-banner">
        <h2 className="cta-title">{t.cta_section.title}</h2>
        <p className="cta-sub">{t.cta_section.subtitle}</p>
        <button className="cta-btn" onClick={() => setPage("order")}>
          🚀 {t.cta_section.btn}
        </button>
      </section>
    </>
  );
}

// ---- SERVICES PAGE ----
function ServicesPage({ t, setPage }) {
  const services = [
    { icon: "📚", key: "book", tag: "popular", color: "#2563eb" },
    { icon: "📄", key: "document", tag: "fast", color: "#10b981" },
    { icon: "💬", key: "text", tag: "fastest", color: "#f59e0b" },
    { icon: "🎬", key: "subtitle_svc", tag: "new", color: "#06b6d4" },
  ];
  return (
    <div className="dashboard-page">
      <div className="page-inner">
        <div className="page-header">
          <div className="section-badge">🛠 Services</div>
          <h1 className="page-title">{t.services.title}</h1>
          <p className="page-sub">{t.services.subtitle}</p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 24 }}>
          {services.map((svc) => {
            const sd = t.services[svc.key];
            return (
              <div key={svc.key} className="service-card" style={{ border: `1.5px solid ${svc.color}22` }}>
                <div className="service-icon" style={{ background: `${svc.color}15`, fontSize: 32 }}>{svc.icon}</div>
                <div className={`service-tag tag-${svc.tag}`}>{sd.tag}</div>
                <h3 className="service-title">{sd.title}</h3>
                <p className="service-desc">{sd.desc}</p>
                <div className="service-price" style={{ color: svc.color }}>{sd.price}</div>
                <button className="service-cta" style={{ background: `linear-gradient(135deg, ${svc.color}, ${svc.color}cc)` }} onClick={() => setPage("order")}>
                  {t.services.cta} →
                </button>
              </div>
            );
          })}
        </div>
        <AISection t={t} />
      </div>
    </div>
  );
}

// ---- DASHBOARD ----
function DashboardPage({ t }) {
  const [activeTab, setActiveTab] = useState("path");
  return (
    <div className="dashboard-page">
      <div className="page-inner">
        <div className="page-header">
          <h1 className="page-title">{t.dashboard.title}</h1>
          <p className="page-sub">{t.dashboard.subtitle}</p>
        </div>

        {/* STATS ROW */}
        <div className="dash-stats">
          <div className="dash-stat">
            <div className="ds-icon">🔥</div>
            <div className="ds-number">23</div>
            <div className="ds-label">{t.dashboard.streak}</div>
          </div>
          <div className="dash-stat">
            <div className="ds-icon">⚡</div>
            <div className="ds-number">4,280</div>
            <div className="ds-label">{t.dashboard.xp}</div>
          </div>
          <div className="dash-stat">
            <div className="ds-icon">🏅</div>
            <div className="ds-number">12</div>
            <div className="ds-label">{t.dashboard.level}</div>
          </div>
          <div className="dash-stat">
            <div className="ds-icon">🏆</div>
            <div className="ds-number">#48</div>
            <div className="ds-label">{t.dashboard.rank}</div>
          </div>
        </div>

        {/* DAILY GOAL */}
        <div className="dash-card" style={{ marginBottom: 24 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
            <div className="dash-card-title" style={{ margin: 0 }}>🎯 {t.dashboard.dailyGoal}</div>
            <span style={{ fontSize: 14, fontWeight: 700, color: "var(--blue-600)" }}>620 / 1000 XP</span>
          </div>
          <div className="progress-bar-wrap" style={{ height: 14 }}>
            <div className="progress-bar-fill" style={{ width: "62%" }} />
          </div>
        </div>

        <div className="dash-main">
          {/* LEFT */}
          <div>
            {/* TABS */}
            <div style={{ display: "flex", gap: 8, marginBottom: 20 }}>
              {["path", "achievements"].map(tab => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  style={{
                    padding: "9px 20px", borderRadius: 10, fontWeight: 600, fontSize: 14,
                    border: "none", cursor: "pointer", fontFamily: "'Sora', sans-serif",
                    background: activeTab === tab ? "var(--blue-600)" : "var(--blue-50)",
                    color: activeTab === tab ? "white" : "var(--gray-600)",
                    transition: "all 0.2s"
                  }}
                >
                  {tab === "path" ? `🗺 ${t.dashboard.path}` : `🏆 ${t.dashboard.achievements}`}
                </button>
              ))}
            </div>

            {activeTab === "path" && (
              <div className="dash-card">
                <div className="path-container">
                  {learning_path.map((item, i) => (
                    <div key={item.id} className="path-item">
                      <div className={`path-node ${item.status}`}>
                        {item.status === "complete" ? "✓" : item.status === "locked" ? "🔒" : item.icon}
                      </div>
                      <div className="path-label">{item.label}</div>
                      <div className="path-xp">+{item.xp} XP</div>
                      {i < learning_path.length - 1 && (
                        <div className={`path-connector ${item.status === "locked" ? "locked" : ""}`} />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "achievements" && (
              <div className="dash-card">
                <div className="achievements-grid">
                  {achievements_data.map((ach, i) => (
                    <div key={i} className={`achievement ${ach.unlocked ? "unlocked" : "locked"}`}>
                      <div className="achievement-icon">{ach.icon}</div>
                      <div className="achievement-label">{ach.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* RIGHT: LEADERBOARD */}
          <div className="dash-card">
            <div className="dash-card-title">🏆 {t.dashboard.leaderboard}</div>
            <div className="leaderboard-list">
              {leaderboard_data.map((item, i) => (
                <div key={i} className="lb-item">
                  <div className={`lb-rank ${i === 0 ? "gold" : i === 1 ? "silver" : i === 2 ? "bronze" : "other"}`}>
                    {i === 0 ? "🥇" : i === 1 ? "🥈" : i === 2 ? "🥉" : item.rank}
                  </div>
                  <div className="lb-avatar">{item.avatar}</div>
                  <div className="lb-name">{item.name}</div>
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 2 }}>
                    <div className="lb-xp">⚡ {item.xp.toLocaleString()}</div>
                    <div className="lb-streak">🔥 {item.streak}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ---- ORDER FLOW ----
function OrderPage({ t }) {
  const [step, setStep] = useState(1);
  const [fromLang, setFromLang] = useState(languages[1]);
  const [toLang, setToLang] = useState(languages[2]);
  const [file, setFile] = useState(null);
  const [dragging, setDragging] = useState(false);
  const [notes, setNotes] = useState("");
  const fileRef = useRef();

  const wordCount = 2500;
  const pricePerWord = 0.04;
  const price = (wordCount * pricePerWord).toFixed(2);

  const handleDrop = (e) => {
    e.preventDefault(); setDragging(false);
    const f = e.dataTransfer.files[0];
    if (f) setFile(f);
  };

  const stepLabels = [t.order.step1, t.order.step2, t.order.step3, t.order.step4, t.order.step5];
  const totalSteps = 5;

  return (
    <div className="order-page">
      <div className="order-inner">
        <div className="page-header" style={{ textAlign: "center", marginBottom: 48 }}>
          <div className="section-badge">📦 Order</div>
          <h1 className="page-title">{t.order.title}</h1>
          <p className="page-sub">{t.order.subtitle}</p>
        </div>

        {/* STEP PROGRESS */}
        <div className="step-progress">
          {Array.from({ length: totalSteps }).map((_, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", flex: i < totalSteps - 1 ? "1" : "0" }}>
              <div
                className={`step-dot ${i + 1 < step ? "done" : i + 1 === step ? "active" : "pending"}`}
                title={stepLabels[i]}
              >
                {i + 1 < step ? "✓" : i + 1}
              </div>
              {i < totalSteps - 1 && (
                <div className={`step-line ${i + 1 < step ? "done" : ""}`} />
              )}
            </div>
          ))}
        </div>

        <div className="order-card">
          {/* STEP 1 */}
          {step === 1 && (
            <>
              <h2 className="order-card-title">🌐 {t.order.step1}</h2>
              <p className="order-card-sub">{t.order.fromLang} → {t.order.toLang}</p>
              <div className="lang-grid">
                <div>
                  <div className="lang-select-label">{t.order.fromLang}</div>
                  <select className="lang-select-box" value={fromLang} onChange={e => setFromLang(e.target.value)}>
                    {languages.map(l => <option key={l} value={l}>{l}</option>)}
                  </select>
                </div>
                <button className="swap-btn" onClick={() => { const tmp = fromLang; setFromLang(toLang); setToLang(tmp); }}>⇄</button>
                <div>
                  <div className="lang-select-label">{t.order.toLang}</div>
                  <select className="lang-select-box" value={toLang} onChange={e => setToLang(e.target.value)}>
                    {languages.map(l => <option key={l} value={l}>{l}</option>)}
                  </select>
                </div>
              </div>
            </>
          )}

          {/* STEP 2 */}
          {step === 2 && (
            <>
              <h2 className="order-card-title">📁 {t.order.step2}</h2>
              <p className="order-card-sub">{t.order.fromLang}: {fromLang} → {toLang}</p>
              {!file ? (
                <div
                  className={`upload-zone ${dragging ? "dragging" : ""}`}
                  onDragOver={e => { e.preventDefault(); setDragging(true); }}
                  onDragLeave={() => setDragging(false)}
                  onDrop={handleDrop}
                  onClick={() => fileRef.current.click()}
                >
                  <div className="upload-icon">📂</div>
                  <div className="upload-title">{t.order.uploadTitle}</div>
                  <div className="upload-sub">{t.order.uploadSub}: <span>PDF, DOCX, TXT</span></div>
                  <input ref={fileRef} type="file" style={{ display: "none" }} onChange={e => setFile(e.target.files[0])} />
                </div>
              ) : (
                <div className="uploaded-file">
                  <div className="file-icon">📄</div>
                  <div>
                    <div className="file-name">{file.name}</div>
                    <div className="file-size">{(file.size / 1024).toFixed(1)} KB</div>
                  </div>
                  <button className="remove-btn" onClick={() => setFile(null)}>✕</button>
                </div>
              )}
            </>
          )}

          {/* STEP 3 */}
          {step === 3 && (
            <>
              <h2 className="order-card-title">📝 {t.order.step3}</h2>
              <p className="order-card-sub">{t.order.notes}</p>
              <textarea
                className="notes-textarea"
                placeholder={t.order.notesPlaceholder}
                value={notes}
                onChange={e => setNotes(e.target.value)}
              />
            </>
          )}

          {/* STEP 4 */}
          {step === 4 && (
            <>
              <h2 className="order-card-title">💰 {t.order.step4}</h2>
              <p className="order-card-sub" style={{ marginBottom: 24 }}>{fromLang} → {toLang}</p>
              <div className="price-breakdown">
                <div className="price-row">
                  <span className="pr-label">{t.order.wordCount}</span>
                  <span className="pr-value">{wordCount.toLocaleString()}</span>
                </div>
                <div className="price-row">
                  <span className="pr-label">Rate</span>
                  <span className="pr-value">${pricePerWord}/word</span>
                </div>
                <div className="price-row">
                  <span className="pr-label">{t.order.delivery}</span>
                  <span className="pr-value">3 {t.order.days}</span>
                </div>
                <div className="price-row total">
                  <span className="pr-label">{t.order.price}</span>
                  <span className="pr-value">${price}</span>
                </div>
              </div>
            </>
          )}

          {/* STEP 5 */}
          {step === 5 && (
            <>
              <h2 className="order-card-title">✅ {t.order.step5}</h2>
              <div style={{ textAlign: "center", padding: "32px 0" }}>
                <div style={{ fontSize: 64, marginBottom: 16 }}>🎉</div>
                <h3 style={{ fontSize: 22, fontWeight: 700, marginBottom: 8 }}>Order Confirmed!</h3>
                <p style={{ color: "var(--gray-500)", marginBottom: 24 }}>
                  {fromLang} → {toLang} · {wordCount.toLocaleString()} words · ${price}
                </p>
                <div style={{ background: "var(--blue-50)", borderRadius: 14, padding: 20, marginBottom: 24 }}>
                  <div style={{ fontSize: 14, color: "var(--gray-500)" }}>Order ID</div>
                  <div style={{ fontSize: 20, fontWeight: 800, color: "var(--blue-700)", fontFamily: "monospace" }}>
                    ORT-{Math.random().toString(36).slice(2, 8).toUpperCase()}
                  </div>
                </div>
              </div>
            </>
          )}

          {/* NAV BUTTONS */}
          <div className="order-nav">
            {step > 1 && step < 5 ? (
              <button className="btn-back" onClick={() => setStep(step - 1)}>← {t.order.back}</button>
            ) : <div />}
            {step < 4 && (
              <button className="btn-next" onClick={() => setStep(step + 1)}>{t.order.next} →</button>
            )}
            {step === 4 && (
              <button className="btn-checkout" onClick={() => setStep(5)}>💳 {t.order.checkout}</button>
            )}
            {step === 5 && (
              <button className="btn-next" onClick={() => setStep(1)}>New Order</button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// ---- PROFILE ----
function ProfilePage({ t }) {
  return (
    <div className="profile-page">
      <div className="page-inner">
        <div className="profile-hero">
          <div className="profile-avatar">U</div>
          <div className="profile-info">
            <div className="profile-name">Umid Karimov</div>
            <div className="profile-email">umid@example.com</div>
            <div className="profile-joined">📅 {t.profile.joined}: January 2024</div>
          </div>
          <div className="profile-badge">🏅 Level 12 · Pro</div>
        </div>

        <div className="profile-stats">
          <div className="profile-stat">
            <div className="ps-icon">📝</div>
            <div className="ps-number">48</div>
            <div className="ps-label">{t.profile.translations}</div>
          </div>
          <div className="profile-stat">
            <div className="ps-icon">💬</div>
            <div className="ps-number">124K</div>
            <div className="ps-label">{t.profile.words}</div>
          </div>
          <div className="profile-stat">
            <div className="ps-icon">🏆</div>
            <div className="ps-number">3</div>
            <div className="ps-label">{t.profile.achievements}</div>
          </div>
          <div className="profile-stat">
            <div className="ps-icon">🔥</div>
            <div className="ps-number">23</div>
            <div className="ps-label">Streak</div>
          </div>
        </div>

        <div className="profile-grid">
          <div className="dash-card">
            <div className="dash-card-title">📋 {t.profile.recent}</div>
            <div className="activity-list">
              {recent_activity.map((act, i) => (
                <div key={i} className="activity-item">
                  <div className="act-icon">📄</div>
                  <div>
                    <div className="act-file">{act.file}</div>
                    <div className="act-meta">{act.from} → {act.to} · {act.words.toLocaleString()} words</div>
                  </div>
                  <div style={{ marginLeft: "auto", display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 4 }}>
                    <div className="act-date">{act.date}</div>
                    <div className="act-status">✓ {act.status}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="dash-card">
              <div className="dash-card-title">🏆 {t.profile.achievements}</div>
              <div className="achievements-grid">
                {achievements_data.map((ach, i) => (
                  <div key={i} className={`achievement ${ach.unlocked ? "unlocked" : "locked"}`}>
                    <div className="achievement-icon">{ach.icon}</div>
                    <div className="achievement-label">{ach.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ---- FOOTER ----
function Footer({ t }) {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="footer-logo">
              <div className="logo-icon" style={{ width: 32, height: 32, fontSize: 15 }}>O</div>
              ORTOLA
            </div>
            <div className="footer-tagline">{t.footer.tagline}</div>
          </div>
          <div>
            <div className="footer-col-title">{t.footer.product}</div>
            <a className="footer-link">{t.footer.about}</a>
            <a className="footer-link">{t.footer.blog}</a>
            <a className="footer-link">{t.footer.privacy}</a>
            <a className="footer-link">{t.footer.terms}</a>
          </div>
          <div>
            <div className="footer-col-title">{t.footer.company}</div>
            <a className="footer-link">{t.footer.about}</a>
            <a className="footer-link">{t.footer.careers}</a>
            <a className="footer-link">Press</a>
          </div>
          <div>
            <div className="footer-col-title">{t.footer.support}</div>
            <a className="footer-link">{t.footer.help}</a>
            <a className="footer-link">{t.footer.contact}</a>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-copy">© 2025 Ortola. {t.footer.rights}</div>
          <div style={{ display: "flex", gap: 20 }}>
            <a className="footer-link" style={{ margin: 0 }}>Twitter</a>
            <a className="footer-link" style={{ margin: 0 }}>LinkedIn</a>
            <a className="footer-link" style={{ margin: 0 }}>Telegram</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

// ============================================================
// MAIN APP
// ============================================================
export default function App() {
  const [page, setPage] = useState("home");
  const [lang, setLang] = useState("uz");
  const [dark, setDark] = useState(false);

  const t = translations[lang];

  return (
    <>
      <GlobalStyle />
      <div className={`ortola-app ${dark ? "dark" : ""}`}>
        <Nav page={page} setPage={setPage} lang={lang} setLang={setLang} dark={dark} setDark={setDark} t={t} />
        {page === "home" && <HomePage t={t} lang={lang} setPage={setPage} />}
        {page === "services" && <ServicesPage t={t} setPage={setPage} />}
        {page === "dashboard" && <DashboardPage t={t} />}
        {page === "order" && <OrderPage t={t} />}
        {page === "profile" && <ProfilePage t={t} />}
        <Footer t={t} />
      </div>
    </>
  );
}
