export const meta = {
  id: "native",
  name: "Ona tili va adabiyot",
  icon: "📖",
  description: "Grammatika, imlo qoidalari va o'zbek adabiyoti"
};

export const questions = [
  {
    id: 1,
    topic: "Grammatika (morfologiya)",
    type: "mcq",
    difficulty: "hard",
    question: "Kelishik va uning qo'shimchasi noto'g'ri ko'rsatilgan qatorni toping.",
    options: [
      "Qaratqich kelishigi — -ning",
      "Tushum kelishigi — -ni",
      "O'rin-payt kelishigi — -dan",
      "Chiqish kelishigi — -dan"
    ],
    correctAnswerIndex: 2,
    explanation: "O'rin-payt kelishigi -da qo'shimchasi bilan yasaladi (masalan: uyda, maktabda). -dan qo'shimchasi esa chiqish kelishigiga xos."
  },
  {
    id: 2,
    topic: "Grammatika (morfologiya)",
    type: "mcq",
    difficulty: "hard",
    question: "\"Beshtadan daftar tarqatildi\" gapidagi \"beshtadan\" so'zi son turkumining qaysi turiga kiradi?",
    options: [
      "Miqdor son",
      "Dona son",
      "Taqsim son",
      "Jamlovchi son"
    ],
    correctAnswerIndex: 2,
    explanation: "Taqsim son narsalarning teng bo'laklarga taqsimlanishini bildiradi va -tadan, -dan qo'shimchalari bilan yasaladi: beshtadan, o'ntadan."
  },
  {
    id: 3,
    topic: "Grammatika (morfologiya)",
    type: "mcq",
    difficulty: "medium",
    question: "\"U ishni sekin-asta bajardi\" gapidagi \"sekin-asta\" so'zi ravishning qaysi turiga mansub?",
    options: [
      "Payt ravishi",
      "Tarz-holat ravishi",
      "Miqdor-daraja ravishi",
      "Maqsad ravishi"
    ],
    correctAnswerIndex: 1,
    explanation: "\"Sekin-asta\" harakatning qanday bajarilganligini, ya'ni tarzini bildiradi, shuning uchun tarz-holat (ravish-harakat) ravishiga kiradi."
  },
  {
    id: 4,
    topic: "Grammatika (morfologiya)",
    type: "mcq",
    difficulty: "hard",
    question: "\"Kimdir eshikni taqillatdi\" gapidagi \"kimdir\" olmoshi qaysi turga kiradi?",
    options: [
      "So'roq olmoshi",
      "Gumon olmoshi",
      "Bo'lishsizlik olmoshi",
      "Belgilash olmoshi"
    ],
    correctAnswerIndex: 1,
    explanation: "\"Kimdir\", \"allakim\", \"birov\" kabi olmoshlar shaxs yoki narsaning aniq bo'lmaganligini, ya'ni gumonni bildiradi va gumon olmoshi deb ataladi."
  },
  {
    id: 5,
    topic: "Grammatika (morfologiya)",
    type: "mcq",
    difficulty: "hard",
    question: "\"Kitob tez orada o'qildi\" gapidagi fe'l qaysi nisbatda qo'llangan?",
    options: [
      "Aniq nisbat",
      "Majhul nisbat",
      "O'zlik nisbat",
      "Orttirma nisbat"
    ],
    correctAnswerIndex: 1,
    explanation: "\"O'qi-l-di\" so'zidagi -il qo'shimchasi majhul nisbat ko'rsatkichi bo'lib, ish-harakat bajaruvchisi noma'lum yoki muhim bo'lmagan holatlarda ishlatiladi."
  },
  {
    id: 6,
    topic: "Grammatika (morfologiya)",
    type: "mcq",
    difficulty: "medium",
    question: "\"Ertaga shaharga bormoqchiman\" gapidagi \"bormoqchi\" so'zi fe'lning qaysi shaklini ifodalaydi?",
    options: [
      "Sifatdosh",
      "Ravishdosh",
      "Harakat nomi",
      "Maqsad fe'li"
    ],
    correctAnswerIndex: 3,
    explanation: "-moqchi qo'shimchasi fe'lga qo'shilib, harakatni bajarish niyati, ya'ni maqsad fe'li shaklini yasaydi."
  },
  {
    id: 7,
    topic: "Sintaksis",
    type: "mcq",
    difficulty: "medium",
    question: "\"Kuz keldi, yaproqlar sarg'aydi\" gapi qo'shma gapning qaysi turiga kiradi?",
    options: [
      "Ergashgan qo'shma gap",
      "Bog'lovchisiz qo'shma gap",
      "Bog'langan qo'shma gap",
      "Aralash qo'shma gap"
    ],
    correctAnswerIndex: 1,
    explanation: "Sodda gaplar orasida bog'lovchi yoki bog'lovchi so'z qatnashmay, faqat intonatsiya va vergul orqali bog'langani uchun bu bog'lovchisiz qo'shma gap hisoblanadi."
  },
  {
    id: 8,
    topic: "Sintaksis",
    type: "mcq",
    difficulty: "hard",
    question: "\"Agar yomg'ir yog'masa, ekinlar qurib qoladi\" gapidagi ergash gap turini aniqlang.",
    options: [
      "Sabab ergash gap",
      "Shart ergash gap",
      "Natija ergash gap",
      "Maqsad ergash gap"
    ],
    correctAnswerIndex: 1,
    explanation: "\"Agar...bo'lsa (yog'masa)\" konstruksiyasi bosh gapdagi ish-harakat amalga oshishi uchun zarur shart-sharoitni bildiradi, shu sababli shart ergash gap deyiladi."
  },
  {
    id: 9,
    topic: "Sintaksis",
    type: "mcq",
    difficulty: "hard",
    question: "\"U shu qadar tez yugurdiki, hamma hayratda qoldi\" gapidagi ergash gap turini aniqlang.",
    options: [
      "Qiyos ergash gap",
      "Natija ergash gap",
      "O'rin ergash gap",
      "Sabab ergash gap"
    ],
    correctAnswerIndex: 1,
    explanation: "\"Shu qadar...ki\" qurilmasi bosh gapdagi harakat natijasida yuzaga kelgan holatni ifodalaydi, shuning uchun natija ergash gap hisoblanadi."
  },
  {
    id: 10,
    topic: "Sintaksis",
    type: "mcq",
    difficulty: "medium",
    question: "\"Charchagan, lekin xursand bolalar uyga qaytishdi\" gapida vergul bilan ajratilgan so'zlar qanday bo'lak hisoblanadi?",
    options: [
      "Ajratilgan aniqlovchi",
      "Ajratilgan hol",
      "Kirish so'z",
      "Undalma"
    ],
    correctAnswerIndex: 0,
    explanation: "\"Charchagan, lekin xursand\" so'zlari \"bolalar\" otiga bog'lanib, uning belgisini bildiradi va ega bilan bevosita bog'lanmagani uchun ajratilgan aniqlovchi vazifasini bajaradi."
  },
  {
    id: 11,
    topic: "Sintaksis",
    type: "mcq",
    difficulty: "hard",
    question: "\"Kitob — bilim manbai\" gapida tire nima uchun qo'yilgan?",
    options: [
      "Ega va kesim ot bilan ifodalanib, orasida bog'lovchi yo'qligi uchun",
      "Ega olmosh, kesim fe'l bo'lgani uchun",
      "Gap undov gap bo'lgani uchun",
      "Kesim ergash gap bo'lgani uchun"
    ],
    correctAnswerIndex: 0,
    explanation: "Ega va otlashgan kesim orasida \"bu\", \"ham\", \"emas\" kabi so'zlar qatnashmasa va ikkalasi ham bosh kelishikdagi ot bilan ifodalansa, orasiga tire qo'yiladi."
  },
  {
    id: 12,
    topic: "Sintaksis",
    type: "mcq",
    difficulty: "hard",
    question: "\"Bozordan olma, uzum va nok sotib oldim\" gapida qaysi bo'lak uyushib kelgan?",
    options: [
      "Ega",
      "To'ldiruvchi",
      "Aniqlovchi",
      "Hol"
    ],
    correctAnswerIndex: 1,
    explanation: "\"Olma, uzum, nok\" so'zlari \"sotib oldim\" kesimiga tushum kelishigi ma'nosida bog'lanib, bir xil so'roqqa javob beradigan uyushiq to'ldiruvchilardir."
  },
  {
    id: 13,
    topic: "Imlo qoidalari",
    type: "mcq",
    difficulty: "hard",
    question: "Quyidagi qatorlardan qaysi birida \"bilan\" ko'makchisining yozilishida xatolik bor?",
    options: [
      "Do'stim bilan bordim",
      "Sen bilan gaplashaman",
      "Uzoqdanbilan kelayotgan edim",
      "Mashina bilan yetib bordik"
    ],
    correctAnswerIndex: 2,
    explanation: "\"Bilan\" ko'makchisi o'zi bog'langan so'zdan doim alohida (ajratib) yoziladi. \"Uzoqdanbilan\" emas, \"uzoqdan bilan\" emas balki bunday holatda \"uzoqdan\" so'zi mustaqil qo'llanadi va ko'makchi qo'shib yozilmaydi."
  },
  {
    id: 14,
    topic: "Imlo qoidalari",
    type: "mcq",
    difficulty: "hard",
    question: "Qaysi qatorda chiziqcha (defis) noto'g'ri qo'llangan?",
    options: [
      "katta-kichik",
      "taq-tuq",
      "uy-ro'zg'or",
      "kelajak-yaxshi"
    ],
    correctAnswerIndex: 3,
    explanation: "Chiziqcha juft so'zlar (katta-kichik, uy-ro'zg'or) va taqlidiy takroriy so'zlar (taq-tuq) orasiga qo'yiladi. \"Kelajak\" va \"yaxshi\" so'zlari juft yoki takroriy so'z hosil qilmaydi, shuning uchun ular orasiga chiziqcha qo'yish noto'g'ri."
  },
  {
    id: 15,
    topic: "Imlo qoidalari",
    type: "mcq",
    difficulty: "hard",
    question: "\"-mi\" so'roq yuklamasi qaysi qatorda to'g'ri yozilgan?",
    options: [
      "kelding-mi",
      "keldingmi",
      "kelding mi",
      "kelding'mi"
    ],
    correctAnswerIndex: 1,
    explanation: "\"-mi\" so'roq yuklamasi so'zga qo'shimcha sifatida qo'shib yoziladi, na chiziqcha, na bo'sh joy qo'yiladi: \"keldingmi\"."
  },
  {
    id: 16,
    topic: "Imlo qoidalari",
    type: "mcq",
    difficulty: "medium",
    question: "Bosh harf qoidasi to'g'ri qo'llangan qatorni toping.",
    options: [
      "navro'z bayrami",
      "O'zbekiston Respublikasi",
      "amir Temur",
      "qur'on"
    ],
    correctAnswerIndex: 1,
    explanation: "Davlat nomlari va rasmiy muassasa nomlarining barcha mustaqil so'zlari bosh harf bilan yoziladi: O'zbekiston Respublikasi. Bayram nomlari (Navro'z), unvon bilan kelgan shaxs nomlari (Amir Temur) va diniy kitob nomi (Qur'on) ham bosh harf bilan yozilishi shart."
  },
  {
    id: 17,
    topic: "Imlo qoidalari",
    type: "mcq",
    difficulty: "medium",
    question: "Qaysi qatordagi ravish noto'g'ri yozilgan?",
    options: [
      "birdan",
      "ko'pincha",
      "yaqinda",
      "asta sekin"
    ],
    correctAnswerIndex: 3,
    explanation: "\"Asta-sekin\" juft so'z bo'lib, chiziqcha bilan yoziladi. Uni ajratib \"asta sekin\" tarzida yozish imlo xatosi hisoblanadi."
  },
  {
    id: 18,
    topic: "Imlo qoidalari",
    type: "mcq",
    difficulty: "medium",
    question: "\"Yigirma besh\" son so'zi qanday yozilishi to'g'ri hisoblanadi?",
    options: [
      "yigirma-besh",
      "yigirma besh",
      "yigirmabesh",
      "yigirma, besh"
    ],
    correctAnswerIndex: 1,
    explanation: "O'nlik va birlik sonlardan tuzilgan qo'shma sonlar bir-biridan ajratib, alohida so'zlar tarzida yoziladi: yigirma besh, uch yuz qirq."
  },
  {
    id: 19,
    topic: "Adabiyot (mumtoz va zamonaviy)",
    type: "mcq",
    difficulty: "medium",
    question: "Alisher Navoiyning \"Xamsa\" tarkibiga kirmaydigan asarni toping.",
    options: [
      "Hayrat ul-abror",
      "Farhod va Shirin",
      "Lison ut-tayr",
      "Sab'ai Sayyor"
    ],
    correctAnswerIndex: 2,
    explanation: "\"Xamsa\" beshta dostondan iborat: Hayrat ul-abror, Farhod va Shirin, Layli va Majnun, Sab'ai Sayyor, Saddi Iskandariy. \"Lison ut-tayr\" esa Navoiyning alohida, Xamsadan tashqaridagi dostonidir."
  },
  {
    id: 20,
    topic: "Adabiyot (mumtoz va zamonaviy)",
    type: "mcq",
    difficulty: "hard",
    question: "Alisher Navoiy forsiy tilda yozgan she'riy asarlarida qanday taxallus ishlatgan?",
    options: [
      "Foniy",
      "Xazoyin ul-maoniy",
      "Muhokamat ul-lug'atayn",
      "Xamsat ul-mutahayyirin"
    ],
    correctAnswerIndex: 0,
    explanation: "Navoiy o'zbek (turkiy) tilidagi asarlarida \"Navoiy\", forsiy tilidagi she'rlarida esa \"Foniy\" taxallusidan foydalangan."
  },
  {
    id: 21,
    topic: "Adabiyot (mumtoz va zamonaviy)",
    type: "mcq",
    difficulty: "medium",
    question: "\"O'tkan kunlar\" romani va uning muallifi haqida to'g'ri fikrni toping.",
    options: [
      "Abdulla Qodiriy — birinchi o'zbek romani",
      "Cho'lpon — birinchi o'zbek romani",
      "Oybek — birinchi o'zbek dostoni",
      "Abdulla Qahhor — birinchi o'zbek qissasi"
    ],
    correctAnswerIndex: 0,
    explanation: "\"O'tkan kunlar\" (1925) Abdulla Qodiriy qalamiga mansub bo'lib, o'zbek adabiyotshunosligida birinchi o'zbek romani sifatida e'tirof etiladi."
  },
  {
    id: 22,
    topic: "Adabiyot (mumtoz va zamonaviy)",
    type: "mcq",
    difficulty: "hard",
    question: "Cho'lponning \"Kecha va kunduz\" romani haqida qaysi fikr to'g'ri?",
    options: [
      "Roman to'liq ikki qismdan iborat holda nashr etilgan",
      "Romanning faqat birinchi qismi (\"Kecha\") muallif hayotligida nashr etilgan, ikkinchi qismi tugallanmagan",
      "Roman Sadriddin Ayniy tomonidan yozilgan",
      "Roman 1960-yillarda yozilgan"
    ],
    correctAnswerIndex: 1,
    explanation: "Cho'lpon 1936 yilda romanning \"Kecha\" deb nomlangan birinchi kitobini nashr ettirgan, biroq \"Kunduz\" deb rejalashtirilgan ikkinchi qismini muallif qatag'on qurboni bo'lgani sababli yakunlay olmagan."
  },
  {
    id: 23,
    topic: "Adabiyot (mumtoz va zamonaviy)",
    type: "mcq",
    difficulty: "hard",
    question: "Zahiriddin Muhammad Boburning \"Boburnoma\" asari qaysi janrga mansub?",
    options: [
      "Doston",
      "Xotira-tarixiy asar (memuar)",
      "G'azallar to'plami",
      "Drama"
    ],
    correctAnswerIndex: 1,
    explanation: "\"Boburnoma\" Boburning o'z boshidan kechirgan voqealari, davr tarixi va geografiyasini tasvirlovchi xotira-tarixiy (memuar) asardir, chig'atoy (eski o'zbek) tilida yozilgan."
  },
  {
    id: 24,
    topic: "Adabiyot (mumtoz va zamonaviy)",
    type: "mcq",
    difficulty: "hard",
    question: "\"Qutlug' qon\" va \"Navoiy\" romanlari muallifini toping.",
    options: [
      "Oybek",
      "Abdulla Qahhor",
      "Said Ahmad",
      "Pirimqul Qodirov"
    ],
    correctAnswerIndex: 0,
    explanation: "Oybek \"Qutlug' qon\" (1940) va Alisher Navoiy hayotiga bag'ishlangan \"Navoiy\" (1944) romanlarining muallifidir."
  },
  {
    id: 25,
    topic: "Adabiyot (mumtoz va zamonaviy)",
    type: "short",
    difficulty: "hard",
    question: "Alisher Navoiyning \"Xamsa\"siga kiruvchi, Farhod bilan Shirin muhabbatini tasvirlovchi doston nomini yozing.",
    acceptedAnswers: ["farhod va shirin"],
    explanation: "\"Farhod va Shirin\" — \"Xamsa\"ning ikkinchi dostoni bo'lib, Farhod bilan Shirinning fidokorona muhabbati tasvirlangan."
  },
  {
    id: 26,
    topic: "Grammatika (morfologiya)",
    type: "short",
    difficulty: "hard",
    question: "O'zbek tilida otning nechta kelishigi bor? Sonini so'z bilan yozing.",
    acceptedAnswers: ["olti", "oltita", "olti kelishik", "6"],
    explanation: "O'zbek tilida ot oltita kelishikda o'zgaradi: bosh, qaratqich, tushum, jo'nalish, o'rin-payt va chiqish kelishigi."
  },
  {
    id: 27,
    topic: "Imlo qoidalari",
    type: "short",
    difficulty: "hard",
    question: "\"Bilan\" ko'makchisi o'zi bog'langan otdan qanday yoziladi — qo'shibmi yoki ajratibmi? Bir so'z bilan javob bering.",
    acceptedAnswers: ["ajratib", "ajratib yoziladi", "alohida", "alohida yoziladi"],
    explanation: "\"Bilan\" ko'makchisi qaysi so'zga bog'lanmasin, doimo ajratib (alohida) yoziladi: do'stim bilan, mashina bilan."
  },
  {
    id: 28,
    topic: "Sintaksis",
    type: "short",
    difficulty: "hard",
    question: "Ergashgan qo'shma gapda bosh gap bilan ergash gapni bog'lab, \"agar\", \"toki\", \"garchi\" kabi so'zlar orqali ifodalanadigan grammatik vosita umumiy nom bilan qanday ataladi? Bir so'z bilan javob bering.",
    acceptedAnswers: ["bog'lovchi", "ergashtiruvchi bog'lovchi", "bog'lovchilar"],
    explanation: "\"Agar\", \"toki\", \"garchi\", \"chunki\" kabi so'zlar ergash gapni bosh gapga bog'lovchi ergashtiruvchi bog'lovchilar hisoblanadi."
  },
  {
    id: 29,
    topic: "Adabiyot (mumtoz va zamonaviy)",
    type: "essay",
    difficulty: "hard",
    question: "Alisher Navoiy ijodining o'zbek adabiy tili rivojidagi ahamiyati haqida o'z fikringizni bildiring.",
    modelAnswer: "Alisher Navoiy XV asrda turkiy tilning fors tili bilan teng darajada boy va nafis til ekanligini isbotlab, o'zbek (chig'atoy) adabiy tilining asoschisi sifatida tarixga kirdi. U \"Muhokamat ul-lug'atayn\" asarida turkiy va forsiy tillarni qiyoslab, turkiy tilning lug'aviy boyligi va ifoda imkoniyatlari jihatidan fors tilidan kam bo'lmasligini ilmiy asoslab berdi. \"Xamsa\"si orqali sharq adabiyotidagi eng murakkab janr va syujetlarni turkiy tilda yaratib, keyingi asrlar mobaynida O'rta Osiyo, Eron, Turkiya va Hindistondagi ko'plab shoirlarga ustoz bo'ldi. Uning ijodi natijasida turkiy til nafaqat kundalik muloqot, balki yuksak badiiy va ilmiy ijod tili sifatida ham mustahkam o'rin egalladi, bu esa keyinchalik o'zbek adabiy tilining shakllanishida hal qiluvchi ahamiyat kasb etdi."
  },
  {
    id: 30,
    topic: "Adabiyot (mumtoz va zamonaviy)",
    type: "essay",
    difficulty: "hard",
    question: "Cho'lponning \"Kecha va kunduz\" romanida davr ziddiyatlari qanday aks etgan? Fikringizni asoslab yozing.",
    modelAnswer: "\"Kecha va kunduz\" romanida Cho'lpon XX asr boshlaridagi Turkiston jamiyatining chuqur ijtimoiy tabaqalanishi va milliy ongning uyg'onish jarayonini badiiy tasvirlaydi. Romondagi \"kecha\" obrazi eski turmush tarzi, jaholat va zulmni, \"kunduz\" esa yangilanish va milliy uyg'onish umidini ramziy ifodalaydi. Muallif Zebi, Miryoqub, Akbarali kabi qahramonlar taqdiri orqali ayollarning huquqsizligi, boylar va mansabdorlarning xalq ustidan hukmronligi, shuningdek mustamlaka tuzumining og'ir oqibatlarini ochib beradi. Asar tugallanmagan bo'lsa-da, unda aks etgan ziddiyatlar — eskilik va yangilik, adolat va zulm, shaxsiy erkinlik va ijtimoiy bosim o'rtasidagi kurash — davr voqeligini teran va haqqoniy aks ettirgani uchun o'zbek nasrining eng muhim namunalaridan biri sanaladi."
  },
  {
    id: 31,
    topic: "Adabiyot (mumtoz va zamonaviy)",
    type: "mcq",
    difficulty: "medium",
    question: "Rasmda (100 so'mlik banknotada) tasvirlangan bu buyuk shaxs o'zbek mumtoz adabiyotining qaysi vakili?",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/UZ-2001sum100-Alisher-Navoiy-rev.png",
    options: ["Bobur", "Alisher Navoiy", "Cho'lpon", "Abdulla Qodiriy"],
    correctAnswerIndex: 1,
    explanation: "O'zbekiston 100 so'mlik banknotasida buyuk mutafakkir shoir Alisher Navoiy tasvirlangan.",
  }
];
