export const locales = ["en", "ru", "tk"] as const;
export type Locale = (typeof locales)[number];

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

export const contacts = {
  email: "farhatbaymuradov3@gmail.com",
  telegram: "https://t.me/al_fara_by",
  telegramHandle: "@al_fara_by",
};

// Turkmen has no dedicated CV yet — falls back to the English PDF.
export const cvPaths: Record<Locale, string> = {
  en: "/cv/Farhat_Baymuradov_CV_en.pdf",
  ru: "/cv/Farhat_Baymuradov_CV_ru.pdf",
  tk: "/cv/Farhat_Baymuradov_CV_en.pdf",
};

export type SkillGroupKey =
  | "languages"
  | "backend"
  | "frontend"
  | "mobile"
  | "databases"
  | "devops"
  | "ai";

export const skillGroups: { key: SkillGroupKey; items: string[] }[] = [
  { key: "languages", items: ["Go", "Dart", "TypeScript", "JavaScript", "SQL"] },
  { key: "backend", items: ["Go (Gin, Echo, net/http)", "NestJS", "REST API", "JWT"] },
  { key: "frontend", items: ["React", "TypeScript", "Next.js", "HTML/CSS", "Tailwind CSS"] },
  { key: "mobile", items: ["Flutter", "BLoC", "Provider", "GetX", "Firebase"] },
  { key: "databases", items: ["PostgreSQL", "SQL", "Migrations", "GORM", "sqlx"] },
  { key: "devops", items: ["Docker", "Docker Compose", "Linux", "VPS", "Git", "GitHub"] },
  { key: "ai", items: ["Claude Code", "Antigravity", "AI-assisted development"] },
];

interface Experience {
  role: string;
  company: string;
  period: string;
  bullets: string[];
}

interface ProjectLink {
  /** "site" | "play" — ties the link to a mockup in `projectShots`. */
  id: string;
  label: string;
  href: string;
}

interface Project {
  /** Key into `projectShots` (lib/projects.ts). Stable across locales. */
  id: string;
  title: string;
  description: string;
  tags: string[];
  links?: ProjectLink[];
}

export interface Dict {
  meta: { title: string; description: string };
  nav: { about: string; skills: string; experience: string; projects: string; contact: string };
  hero: {
    role: string;
    tagline: string;
    location: string;
    downloadCv: string;
    email: string;
    telegram: string;
  };
  about: { heading: string; text: string; stats: { value: string; label: string }[] };
  skills: { heading: string; labels: Record<SkillGroupKey, string> };
  experience: { heading: string; items: Experience[] };
  projects: { heading: string; items: Project[] };
  education: { heading: string; degree: string; school: string; period: string };
  contact: { heading: string; text: string };
  footer: { builtWith: string };
}

const en: Dict = {
  meta: {
    title: "Farhat Baymuradov — Go Backend Developer",
    description:
      "Go backend developer (Gin, PostgreSQL) from Ashgabat. 3+ years building REST APIs, web apps and 10+ published mobile apps.",
  },
  nav: {
    about: "About",
    skills: "Skills",
    experience: "Experience",
    projects: "Projects",
    contact: "Contact",
  },
  hero: {
    role: "Full Stack Developer",
    tagline:
      "I build complete web applications — REST APIs in Go, PostgreSQL databases, React admin panels — and cross-platform mobile apps in Flutter.",
    location: "Ashgabat, Turkmenistan",
    downloadCv: "Download CV",
    email: "Email",
    telegram: "Telegram",
  },
  about: {
    heading: "About",
    text: "Full stack developer with 3+ years of experience. I started in mobile development with Flutter — shipping more than 10 apps to the App Store and Google Play, including payment and banking integrations — and moved into building complete web products: REST APIs in Go, PostgreSQL databases, and React admin panels, containerized with Docker and deployed to VPS and cloud servers. I actively use AI tools (Claude Code, Antigravity) to speed up development.",
    stats: [
      { value: "3+", label: "years of experience" },
      { value: "10+", label: "apps published" },
      { value: "10K+", label: "downloads of Wakant" },
    ],
  },
  skills: {
    heading: "Skills",
    labels: {
      languages: "Programming languages",
      backend: "Backend",
      frontend: "Frontend",
      mobile: "Mobile",
      databases: "Databases",
      devops: "DevOps & Infrastructure",
      ai: "AI tools",
    },
  },
  experience: {
    heading: "Experience",
    items: [
      {
        role: "Go Backend Developer",
        company: "Freelance / Own projects",
        period: "2025 — Present",
        bullets: [
          "Design and build REST APIs in Go (Gin, Echo, net/http)",
          "Ship complete web applications to VPS and cloud servers",
          "Build React admin panels for data management",
          "Design PostgreSQL schemas, write SQL and migrations",
          "Containerize services with Docker and Docker Compose",
          "Build server modules with NestJS where it fits",
        ],
      },
      {
        role: "Flutter Developer",
        company: "AIGAM — IT company, Kazan (remote)",
        period: "Jul 2024 — Apr 2025",
        bullets: [
          "Developed and maintained mobile apps in Flutter",
          "Integrated the Tinkoff payment system",
          "Worked with Firebase (Auth, Firestore, Push)",
          "Published apps to the App Store and Google Play",
        ],
      },
      {
        role: "Flutter Developer",
        company: "Freelance",
        period: "2022 — Jul 2024",
        bullets: [
          "Custom projects end to end: from Figma design to finished app",
          "Built MVPs and production apps for Android and iOS",
          "Store publishing and ongoing support",
        ],
      },
      {
        role: "Junior Flutter Developer",
        company: "Pikir — IT company, Ashgabat",
        period: "Nov 2021 — Mar 2022",
        bullets: [
          "Built UI from design mockups",
          "Integrated REST APIs",
          "Developed apps for couriers and restaurant managers",
        ],
      },
    ],
  },
  projects: {
    heading: "Projects",
    items: [
      {
        id: "yedu",
        title: "Yedu",
        description:
          "Smart taxi and ride-hailing platform with an AI assistant on board: book a ride by typing, speaking or sending a photo, fixed fares with no surge pricing, airport transfers, and earnings and route tracking for drivers. Backend written in Go.",
        tags: ["Flutter", "Go", "REST API", "PostgreSQL"],
        links: [{ id: "site", label: "yedu.ae", href: "https://www.yedu.ae/" }],
      },
      {
        id: "kerwen",
        title: "Kerwen",
        description:
          "Online store for household and personal care goods — website and mobile app: catalog by category and brand, cart, delivery or pickup with time slots, and order tracking. Backend written in Go with Gin.",
        tags: ["Go", "Gin", "REST API", "Web", "Mobile"],
        links: [
          { id: "site", label: "kerwen.online", href: "https://kerwen.online/" },
          {
            id: "play",
            label: "Google Play",
            href: "https://play.google.com/store/apps/details?id=com.meransoft.commerce",
          },
          { id: "appstore", label: "App Store", href: "https://apps.apple.com/tm/app/kerwen/id6788402200" },
        ],
      },
      {
        id: "wakant",
        title: "Wakant",
        description: "Online job platform for Turkmenistan. 10K+ downloads on Google Play.",
        tags: ["Flutter", "REST API", "Firebase"],
        links: [
          {
            id: "play",
            label: "Google Play",
            href: "https://play.google.com/store/apps/details?id=com.my.wakant",
          },
        ],
      },
      {
        id: "rowshen",
        title: "Röwşen",
        description:
          "Website and mobile apps for Röwşen — a Turkmen footwear manufacturer with a chain of 30+ stores: product catalog, store information and orders.",
        tags: ["Flutter", "REST API", "Web"],
        links: [
          { id: "site", label: "Website", href: "https://rowshen.com/tm" },
          {
            id: "play",
            label: "Google Play",
            href: "https://play.google.com/store/apps/details?id=com.rowshen.ayakgap",
          },
        ],
      },
      {
        id: "yovshan",
        title: "Ýowşan dermanhana",
        description:
          "Mobile app for a pharmacy chain: search medicines by name or barcode, check prices and availability, pre-order and delivery across Ashgabat.",
        tags: ["Flutter", "REST API"],
        links: [
          {
            id: "play",
            label: "Google Play",
            href: "https://play.google.com/store/apps/details?id=com.yovshan",
          },
        ],
      },
      {
        id: "tminfo",
        title: "TMINFO",
        description:
          "Retail directory of Turkmenistan: shops, shopping centres and markets with search by category and location.",
        tags: ["Flutter", "REST API"],
        links: [
          {
            id: "play",
            label: "Google Play",
            href: "https://play.google.com/store/apps/details?id=com.citydirectory.citydirectory",
          },
        ],
      },
      {
        id: "fullstack",
        title: "Full Stack Web App",
        description:
          "Complete web application: REST API in Go, PostgreSQL, React frontend and admin panel. Deployed to a VPS with Docker Compose.",
        tags: ["Go", "PostgreSQL", "React", "Docker"],
      },
      {
        id: "admin",
        title: "React Admin Panel",
        description:
          "Administration panel for managing application data: CRUD operations, filtering, JWT authentication.",
        tags: ["React", "TypeScript", "JWT"],
      },
    ],
  },
  education: {
    heading: "Education",
    degree: "B.Sc. in Nanotechnology",
    school: "Engineering and Technology University, Ashgabat",
    period: "2018 — 2022",
  },
  contact: {
    heading: "Contact",
    text: "Open to full-time roles and interesting projects. The fastest way to reach me is Telegram.",
  },
  footer: { builtWith: "Built with Next.js & Tailwind CSS" },
};

const ru: Dict = {
  meta: {
    title: "Фархат Баймурадов — Go Backend разработчик",
    description:
      "Go backend-разработчик (Gin, PostgreSQL) из Ашхабада. 3+ года опыта: REST API, веб-приложения и 10+ опубликованных мобильных приложений.",
  },
  nav: {
    about: "Обо мне",
    skills: "Навыки",
    experience: "Опыт",
    projects: "Проекты",
    contact: "Контакты",
  },
  hero: {
    role: "Full Stack разработчик",
    tagline:
      "Создаю полноценные веб-приложения — REST API на Go, базы данных PostgreSQL, React-панели администратора — и кроссплатформенные мобильные приложения на Flutter.",
    location: "Ашхабад, Туркменистан",
    downloadCv: "Скачать CV",
    email: "Почта",
    telegram: "Telegram",
  },
  about: {
    heading: "Обо мне",
    text: "Full stack разработчик с опытом более 3 лет. Начинал с мобильной разработки на Flutter — опубликовал более 10 приложений в App Store и Google Play, включая интеграции с платёжными и банковскими сервисами. Сейчас создаю полноценные веб-продукты: REST API на Go, базы данных PostgreSQL и React-панели администратора, с контейнеризацией в Docker и деплоем на VPS и облачные серверы. Активно применяю AI-инструменты (Claude Code, Antigravity) для ускорения разработки.",
    stats: [
      { value: "3+", label: "года опыта" },
      { value: "10+", label: "приложений опубликовано" },
      { value: "10K+", label: "скачиваний Wakant" },
    ],
  },
  skills: {
    heading: "Навыки",
    labels: {
      languages: "Языки программирования",
      backend: "Бэкенд",
      frontend: "Фронтенд",
      mobile: "Мобильная разработка",
      databases: "Базы данных",
      devops: "DevOps и инфраструктура",
      ai: "AI-инструменты",
    },
  },
  experience: {
    heading: "Опыт работы",
    items: [
      {
        role: "Go Backend разработчик",
        company: "Фриланс / собственные проекты",
        period: "2025 — настоящее время",
        bullets: [
          "Проектирую и разрабатываю REST API на Go (Gin, Echo, net/http)",
          "Деплою полноценные веб-приложения на VPS и облачные серверы",
          "Разрабатываю React-панели администратора для управления данными",
          "Проектирую базы данных PostgreSQL, пишу SQL-запросы и миграции",
          "Контейнеризирую сервисы с помощью Docker и Docker Compose",
          "Пишу серверные модули на NestJS, где это уместно",
        ],
      },
      {
        role: "Flutter-разработчик",
        company: "АИГАМ — IT-компания, Казань (удалённо)",
        period: "Июль 2024 — Апрель 2025",
        bullets: [
          "Разрабатывал и поддерживал мобильные приложения на Flutter",
          "Интегрировал платёжную систему Тинькофф",
          "Работал с Firebase (Auth, Firestore, Push)",
          "Публиковал приложения в App Store и Google Play",
        ],
      },
      {
        role: "Flutter-разработчик",
        company: "Фриланс",
        period: "2022 — Июль 2024",
        bullets: [
          "Индивидуальные заказы под ключ: от Figma-дизайна до готового приложения",
          "Разрабатывал MVP и продакшн-версии под Android и iOS",
          "Публикация в сторы и техническая поддержка",
        ],
      },
      {
        role: "Junior Flutter-разработчик",
        company: "Пикир — IT-компания, Ашхабад",
        period: "Ноябрь 2021 — Март 2022",
        bullets: [
          "Верстал UI по макетам",
          "Интегрировал REST API",
          "Разрабатывал приложения для курьеров и ресторанных менеджеров",
        ],
      },
    ],
  },
  projects: {
    heading: "Проекты",
    items: [
      {
        id: "yedu",
        title: "Yedu",
        description:
          "Умная платформа такси с AI-ассистентом на борту: заказ поездки текстом, голосом или фотографией, фиксированные тарифы без наценок, трансферы в аэропорт, учёт заработка и маршрутов для водителей. Бэкенд написан на Go.",
        tags: ["Flutter", "Go", "REST API", "PostgreSQL"],
        links: [{ id: "site", label: "yedu.ae", href: "https://www.yedu.ae/" }],
      },
      {
        id: "kerwen",
        title: "Kerwen",
        description:
          "Интернет-магазин бытовой химии и товаров для ухода — сайт и мобильное приложение: каталог по категориям и брендам, корзина, доставка или самовывоз с выбором времени, отслеживание заказов. Бэкенд написан на Go (Gin).",
        tags: ["Go", "Gin", "REST API", "Web", "Mobile"],
        links: [
          { id: "site", label: "kerwen.online", href: "https://kerwen.online/" },
          {
            id: "play",
            label: "Google Play",
            href: "https://play.google.com/store/apps/details?id=com.meransoft.commerce",
          },
          { id: "appstore", label: "App Store", href: "https://apps.apple.com/tm/app/kerwen/id6788402200" },
        ],
      },
      {
        id: "wakant",
        title: "Wakant",
        description: "Онлайн-платформа поиска работы в Туркменистане. 10K+ скачиваний в Google Play.",
        tags: ["Flutter", "REST API", "Firebase"],
        links: [
          {
            id: "play",
            label: "Google Play",
            href: "https://play.google.com/store/apps/details?id=com.my.wakant",
          },
        ],
      },
      {
        id: "rowshen",
        title: "Röwşen",
        description:
          "Сайт и мобильные приложения для Röwşen — туркменского производителя обуви с сетью из 30+ магазинов: каталог товаров, информация о магазинах и заказы.",
        tags: ["Flutter", "REST API", "Web"],
        links: [
          { id: "site", label: "Сайт", href: "https://rowshen.com/tm" },
          {
            id: "play",
            label: "Google Play",
            href: "https://play.google.com/store/apps/details?id=com.rowshen.ayakgap",
          },
        ],
      },
      {
        id: "yovshan",
        title: "Ýowşan dermanhana",
        description:
          "Мобильное приложение для сети аптек: поиск лекарств по названию и штрих-коду, цены и наличие, предзаказ и доставка по Ашхабаду.",
        tags: ["Flutter", "REST API"],
        links: [
          {
            id: "play",
            label: "Google Play",
            href: "https://play.google.com/store/apps/details?id=com.yovshan",
          },
        ],
      },
      {
        id: "tminfo",
        title: "TMINFO",
        description:
          "Справочник торговых точек Туркменистана: магазины, торговые центры и рынки с поиском по категориям и расположению.",
        tags: ["Flutter", "REST API"],
        links: [
          {
            id: "play",
            label: "Google Play",
            href: "https://play.google.com/store/apps/details?id=com.citydirectory.citydirectory",
          },
        ],
      },
      {
        id: "fullstack",
        title: "Full Stack веб-приложение",
        description:
          "Полноценное веб-приложение: REST API на Go, PostgreSQL, React-фронтенд и панель администратора. Задеплоено на VPS с Docker Compose.",
        tags: ["Go", "PostgreSQL", "React", "Docker"],
      },
      {
        id: "admin",
        title: "React Admin Panel",
        description:
          "Административная панель для управления данными приложения: CRUD-операции, фильтрация, аутентификация через JWT.",
        tags: ["React", "TypeScript", "JWT"],
      },
    ],
  },
  education: {
    heading: "Образование",
    degree: "Бакалавр нанотехнологий",
    school: "Инженерно-технологический университет, Ашхабад",
    period: "2018 — 2022",
  },
  contact: {
    heading: "Контакты",
    text: "Открыт к предложениям о работе и интересным проектам. Быстрее всего со мной связаться в Telegram.",
  },
  footer: { builtWith: "Сделано на Next.js и Tailwind CSS" },
};

const tk: Dict = {
  meta: {
    title: "Farhat Baýmuradow — Go Backend Developer",
    description:
      "Aşgabatly Go backend programmaçy (Gin, PostgreSQL). 3+ ýyl tejribe: REST API-ler, web programmalar we 10+ çap edilen mobil programma.",
  },
  nav: {
    about: "Men barada",
    skills: "Başarnyklar",
    experience: "Tejribe",
    projects: "Taslamalar",
    contact: "Habarlaşmak",
  },
  hero: {
    role: "Full Stack Developer",
    tagline:
      "Doly web programmalaryny döredýärin — Go-da REST API, PostgreSQL maglumat bazalary, React admin panelleri — we Flutter-de kross-platforma mobil programmalary.",
    location: "Aşgabat, Türkmenistan",
    downloadCv: "CV ýükläp al",
    email: "E-poçta",
    telegram: "Telegram",
  },
  about: {
    heading: "Men barada",
    text: "3 ýyldan gowrak tejribeli full stack programmaçy. Flutter bilen mobil programmirlemeden başladym — App Store we Google Play-de 10-dan gowrak programma çap etdim, şol sanda töleg we bank hyzmatlarynyň integrasiýalary bilen. Häzir doly web önümlerini gurýaryn: Go-da REST API, PostgreSQL maglumat bazalary we React admin panelleri, Docker bilen konteýnerleşdirip, VPS we bulut serwerlerine ýerleşdirýärin. Işläp düzmegi çaltlandyrmak üçin AI gurallaryny (Claude Code, Antigravity) işjeň ulanýaryn.",
    stats: [
      { value: "3+", label: "ýyl tejribe" },
      { value: "10+", label: "çap edilen programma" },
      { value: "10K+", label: "Wakant ýüklemeleri" },
    ],
  },
  skills: {
    heading: "Başarnyklar",
    labels: {
      languages: "Programmirleme dilleri",
      backend: "Backend",
      frontend: "Frontend",
      mobile: "Mobil programmirleme",
      databases: "Maglumat bazalary",
      devops: "DevOps we infrastruktura",
      ai: "AI gurallary",
    },
  },
  experience: {
    heading: "Iş tejribesi",
    items: [
      {
        role: "Go Backend Developer",
        company: "Frilans / öz taslamalarym",
        period: "2025 — häzirki wagt",
        bullets: [
          "Go-da REST API-leri taslaýaryn we ýazýaryn (Gin, Echo, net/http)",
          "Doly web programmalaryny VPS we bulut serwerlerine ýerleşdirýärin",
          "Maglumatlary dolandyrmak üçin React admin panellerini gurýaryn",
          "PostgreSQL bazalaryny taslaýaryn, SQL we migrasiýalary ýazýaryn",
          "Hyzmatlary Docker we Docker Compose bilen konteýnerleşdirýärin",
          "Gerek ýerinde NestJS-de serwer modullaryny ýazýaryn",
        ],
      },
      {
        role: "Flutter Developer",
        company: "AIGAM — IT kompaniýasy, Kazan (uzakdan)",
        period: "Iýul 2024 — Aprel 2025",
        bullets: [
          "Flutter-de mobil programmalary işläp düzdüm we goldadym",
          "Tinkoff töleg ulgamyny integrirledim",
          "Firebase bilen işledim (Auth, Firestore, Push)",
          "Programmalary App Store we Google Play-de çap etdim",
        ],
      },
      {
        role: "Flutter Developer",
        company: "Frilans",
        period: "2022 — Iýul 2024",
        bullets: [
          "Aýry-aýry sargytlar: Figma dizaýnyndan taýýar programma çenli",
          "Android we iOS üçin MVP we önümçilik wersiýalaryny ýasadym",
          "Storlarda çap etmek we tehniki goldaw",
        ],
      },
      {
        role: "Junior Flutter Developer",
        company: "Pikir — IT kompaniýasy, Aşgabat",
        period: "Noýabr 2021 — Mart 2022",
        bullets: [
          "Makete görä UI ýasadym",
          "REST API integrirledim",
          "Kurýerler we restoran menejerleri üçin programmalar işläp düzdüm",
        ],
      },
    ],
  },
  projects: {
    heading: "Taslamalar",
    items: [
      {
        id: "yedu",
        title: "Yedu",
        description:
          "AI kömekçili akylly taksi platformasy: sargydy ýazyp, aýdyp ýa-da surat iberip etmek, üýtgemeýän nyrhlar, aeroport transferleri, sürüjiler üçin girdeji we ugur hasabaty. Backend Go-da ýazyldy.",
        tags: ["Flutter", "Go", "REST API", "PostgreSQL"],
        links: [{ id: "site", label: "yedu.ae", href: "https://www.yedu.ae/" }],
      },
      {
        id: "kerwen",
        title: "Kerwen",
        description:
          "Hojalyk we şahsy ideg harytlarynyň onlaýn dükany — web sahypa we mobil programma: kategoriýa we brend boýunça katalog, sebet, wagt saýlap eltip bermek ýa-da alyp gitmek, sargydy yzarlamak. Backend Go-da (Gin) ýazyldy.",
        tags: ["Go", "Gin", "REST API", "Web", "Mobile"],
        links: [
          { id: "site", label: "kerwen.online", href: "https://kerwen.online/" },
          {
            id: "play",
            label: "Google Play",
            href: "https://play.google.com/store/apps/details?id=com.meransoft.commerce",
          },
          { id: "appstore", label: "App Store", href: "https://apps.apple.com/tm/app/kerwen/id6788402200" },
        ],
      },
      {
        id: "wakant",
        title: "Wakant",
        description: "Türkmenistanda onlaýn iş gözleg platformasy. Google Play-de 10K+ ýükleme.",
        tags: ["Flutter", "REST API", "Firebase"],
        links: [
          {
            id: "play",
            label: "Google Play",
            href: "https://play.google.com/store/apps/details?id=com.my.wakant",
          },
        ],
      },
      {
        id: "rowshen",
        title: "Röwşen",
        description:
          "Röwşen üçin websaýt we mobil programmalar — türkmen aýakgap öndürijisi we 30-dan gowrak dükan zynjyry: haryt katalogy, dükan maglumatlary we sargytlar.",
        tags: ["Flutter", "REST API", "Web"],
        links: [
          { id: "site", label: "Websaýt", href: "https://rowshen.com/tm" },
          {
            id: "play",
            label: "Google Play",
            href: "https://play.google.com/store/apps/details?id=com.rowshen.ayakgap",
          },
        ],
      },
      {
        id: "yovshan",
        title: "Ýowşan dermanhana",
        description:
          "Dermanhanalar zynjyry üçin mobil programma: dermanlary ady ýa-da ştrih-kody boýunça gözlemek, nyrhlar we bar-ýoklugy, öňünden sargyt we Aşgabat boýunça eltip bermek.",
        tags: ["Flutter", "REST API"],
        links: [
          {
            id: "play",
            label: "Google Play",
            href: "https://play.google.com/store/apps/details?id=com.yovshan",
          },
        ],
      },
      {
        id: "tminfo",
        title: "TMINFO",
        description:
          "Türkmenistanyň söwda nokatlarynyň sprawoçnigi: dükanlar, söwda merkezleri we bazarlar, kategoriýa hem ýerleşiş boýunça gözleg.",
        tags: ["Flutter", "REST API"],
        links: [
          {
            id: "play",
            label: "Google Play",
            href: "https://play.google.com/store/apps/details?id=com.citydirectory.citydirectory",
          },
        ],
      },
      {
        id: "fullstack",
        title: "Full Stack web programmasy",
        description:
          "Doly web programmasy: Go-da REST API, PostgreSQL, React frontend we admin panel. Docker Compose bilen VPS-e ýerleşdirildi.",
        tags: ["Go", "PostgreSQL", "React", "Docker"],
      },
      {
        id: "admin",
        title: "React Admin Panel",
        description:
          "Programmanyň maglumatlaryny dolandyrmak üçin admin panel: CRUD amallary, filtrlemek, JWT arkaly autentifikasiýa.",
        tags: ["React", "TypeScript", "JWT"],
      },
    ],
  },
  education: {
    heading: "Bilim",
    degree: "Nanotehnologiýa boýunça bakalawr",
    school: "Inžener-tehnologiýa uniwersiteti, Aşgabat",
    period: "2018 — 2022",
  },
  contact: {
    heading: "Habarlaşmak",
    text: "Doly iş orunlaryna we gyzykly taslamalara açyk. Meniň bilen iň çalt Telegram arkaly habarlaşyp bilersiňiz.",
  },
  footer: { builtWith: "Next.js we Tailwind CSS bilen ýasaldy" },
};

const dictionaries: Record<Locale, Dict> = { en, ru, tk };

export function getDict(locale: Locale): Dict {
  return dictionaries[locale];
}
