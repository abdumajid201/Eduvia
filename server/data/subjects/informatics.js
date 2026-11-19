export const meta = {
  id: "informatics",
  name: "Informatika",
  icon: "💻",
  description: "Algoritmlar, sonlar sistemasi va dasturlash asoslari"
};

export const questions = [
  {
    id: 1,
    topic: "Sonlar sistemasi",
    type: "mcq",
    difficulty: "medium",
    question: "101101 ikkilik (binar) sonini oʼnlik sanoq sistemasiga oʼgiring.",
    options: ["43", "45", "46", "53"],
    correctAnswerIndex: 1,
    explanation: "101101(2) = 1*32 + 0*16 + 1*8 + 1*4 + 0*2 + 1*1 = 32+8+4+1 = 45."
  },
  {
    id: 2,
    topic: "Sonlar sistemasi",
    type: "mcq",
    difficulty: "medium",
    question: "2A oʼn oltilik (heksadesimal) sonini oʼnlik sanoq sistemasiga oʼgiring.",
    options: ["40", "42", "44", "52"],
    correctAnswerIndex: 1,
    explanation: "2A(16) = 2*16 + 10 = 32 + 10 = 42."
  },
  {
    id: 3,
    topic: "Sonlar sistemasi",
    type: "mcq",
    difficulty: "hard",
    question: "77 oʼnlik sonini ikkilik sanoq sistemasiga oʼgiring.",
    options: ["1001101", "1001111", "1011001", "1101001"],
    correctAnswerIndex: 0,
    explanation: "77 = 64+8+4+1, demak 77(10) = 1001101(2)."
  },
  {
    id: 4,
    topic: "Sonlar sistemasi",
    type: "mcq",
    difficulty: "medium",
    question: "8 xonali ikkilik sonning barcha razryadlari 1 boʼlsa (11111111), uning oʼnlik qiymati nechaga teng?",
    options: ["128", "255", "256", "254"],
    correctAnswerIndex: 1,
    explanation: "11111111(2) = 2^8 - 1 = 255."
  },
  {
    id: 5,
    topic: "Sonlar sistemasi",
    type: "mcq",
    difficulty: "hard",
    question: "0.625 oʼnlik kasr sonini ikkilik sanoq sistemasiga oʼgiring.",
    options: ["0.101", "0.110", "0.011", "0.100"],
    correctAnswerIndex: 0,
    explanation: "0.625 = 0.5 + 0.125 = 2^(-1) + 2^(-3), demak 0.625(10) = 0.101(2)."
  },
  {
    id: 6,
    topic: "Sonlar sistemasi",
    type: "mcq",
    difficulty: "hard",
    question: "1010(2) va 0110(2) ikkilik sonlarini qoʼshing. Natija qanday boʼladi?",
    options: ["1111", "10000", "1100", "10010"],
    correctAnswerIndex: 1,
    explanation: "1010(2)=10, 0110(2)=6, ularning yigʼindisi 16 ga teng, 16(10) = 10000(2)."
  },
  {
    id: 7,
    topic: "Sonlar sistemasi",
    type: "mcq",
    difficulty: "medium",
    question: "Sakkizlik (oktal) sanoq sistemasidagi 17 sonini oʼnlik sistemaga oʼgiring.",
    options: ["13", "15", "17", "19"],
    correctAnswerIndex: 1,
    explanation: "17(8) = 1*8 + 7 = 15(10)."
  },
  {
    id: 8,
    topic: "Algoritmlar",
    type: "mcq",
    difficulty: "medium",
    question: "Tartiblanmagan massivda elementni ketma-ket (chiziqli) qidirish algoritmining eng yomon holatdagi vaqt murakkabligi qanday?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n^2)"],
    correctAnswerIndex: 2,
    explanation: "Chiziqli qidiruvda eng yomon holatda barcha n ta element koʼrib chiqiladi, shuning uchun murakkablik O(n)."
  },
  {
    id: 9,
    topic: "Algoritmlar",
    type: "mcq",
    difficulty: "medium",
    question: "Tartiblangan massivda ikkilik qidiruv (binary search) algoritmining vaqt murakkabligi qanday?",
    options: ["O(n)", "O(log n)", "O(n log n)", "O(n^2)"],
    correctAnswerIndex: 1,
    explanation: "Ikkilik qidiruv har qadamda qidiruv sohasini ikkiga boʼladi, shuning uchun murakkablik O(log n)."
  },
  {
    id: 10,
    topic: "Algoritmlar",
    type: "mcq",
    difficulty: "hard",
    question: "Pufakchali saralash (bubble sort) algoritmining eng yomon holatdagi vaqt murakkabligi qanday?",
    options: ["O(n)", "O(n log n)", "O(n^2)", "O(2^n)"],
    correctAnswerIndex: 2,
    explanation: "Pufakchali saralashda har bir element uchun qolgan barcha elementlar bilan taqqoslash talab etilishi mumkin, shuning uchun eng yomon holatda O(n^2)."
  },
  {
    id: 11,
    topic: "Algoritmlar",
    type: "mcq",
    difficulty: "medium",
    question: "Algoritmdagi \"rekursiya\" tushunchasi nimani anglatadi?",
    options: [
      "Massivni tartiblash usuli",
      "Funksiyaning oʼz-oʼzini chaqirishi",
      "Ikki oʼzgaruvchi qiymatini almashtirish",
      "Kompyuter xotirasini tozalash jarayoni"
    ],
    correctAnswerIndex: 1,
    explanation: "Rekursiya - bu funksiya yoki algoritmning oʼz vazifasini bajarish uchun oʼzini-oʼzi (kichikroq masala uchun) chaqirishidir."
  },
  {
    id: 12,
    topic: "Algoritmlar",
    type: "mcq",
    difficulty: "hard",
    question: "8 ta elementdan iborat tartiblangan massivda ikkilik qidiruv algoritmi eng yomon holatda nechta taqqoslashni talab qilishi mumkin?",
    options: ["2", "3", "4", "8"],
    correctAnswerIndex: 1,
    explanation: "log2(8) = 3, demak eng yomon holatda 3 marta taqqoslash yetarli boʼladi."
  },
  {
    id: 13,
    topic: "Algoritmlar",
    type: "mcq",
    difficulty: "hard",
    question: "Ikkita ichma-ich joylashgan (nested) sikl boʼlib, har biri n marta bajarilsa, umumiy vaqt murakkabligi qanday boʼladi?",
    options: ["O(n)", "O(2n)", "O(n^2)", "O(log n)"],
    correctAnswerIndex: 2,
    explanation: "Har bir tashqi sikl qadamida ichki sikl n marta bajarilgani uchun umumiy amallar soni n*n = n^2, demak murakkablik O(n^2)."
  },
  {
    id: 14,
    topic: "Dasturlash asoslari",
    type: "mcq",
    difficulty: "medium",
    question: "Dasturlashda \"oʼzgaruvchi\" (variable) tushunchasi nimani anglatadi?",
    options: [
      "Dasturdagi xatolik turi",
      "Qiymatni saqlash va nomi orqali murojaat qilish uchun xotiradagi joy",
      "Faqat sikl ichida ishlatiladigan buyruq",
      "Dastur bajarilishini toʼxtatuvchi operator"
    ],
    correctAnswerIndex: 1,
    explanation: "Oʼzgaruvchi - bu dastur ishlash jarayonida qiymatni saqlash va shu qiymatga nom orqali murojaat qilish imkonini beruvchi xotira boʼlagi."
  },
  {
    id: 15,
    topic: "Dasturlash asoslari",
    type: "mcq",
    difficulty: "medium",
    question: "for (i = 0; i < 5; i++) sikli tanasi nechi marta bajariladi?",
    options: ["4 marta", "5 marta", "6 marta", "Cheksiz"],
    correctAnswerIndex: 1,
    explanation: "i qiymati 0,1,2,3,4 boʼlganda shart (i<5) rost boʼladi, demak sikl tanasi 5 marta bajariladi."
  },
  {
    id: 16,
    topic: "Dasturlash asoslari",
    type: "mcq",
    difficulty: "medium",
    question: "Koʼpchilik zamonaviy dasturlash tillarida (masalan, JavaScript, Python, C) massiv indekslari odatda qaysi raqamdan boshlanadi?",
    options: ["-1 dan", "0 dan", "1 dan", "2 dan"],
    correctAnswerIndex: 1,
    explanation: "Bu tillarning aksariyatida massiv elementlariga murojaat 0-indeksdan boshlanadi."
  },
  {
    id: 17,
    topic: "Dasturlash asoslari",
    type: "mcq",
    difficulty: "hard",
    question: "x = 5; while (x > 0) { x--; } kodi bajarilgandan soʼng x oʼzgaruvchisining qiymati nechaga teng boʼladi?",
    options: ["-1", "0", "1", "5"],
    correctAnswerIndex: 1,
    explanation: "Sikl x qiymati 0 dan katta boʼlmaguncha ishlaydi, har qadamda x bittaga kamayadi, shuning uchun sikl tugaganda x = 0."
  },
  {
    id: 18,
    topic: "Dasturlash asoslari",
    type: "mcq",
    difficulty: "hard",
    question: "Ikki oʼzgaruvchi (a va b) qiymatini vaqtinchalik oʼzgaruvchi yordamida almashtirish (swap) uchun standart usulda kamida nechta qoʼshimcha oʼzgaruvchi kerak boʼladi?",
    options: ["0 ta", "1 ta", "2 ta", "3 ta"],
    correctAnswerIndex: 1,
    explanation: "Standart swap: temp=a; a=b; b=temp; usulida bitta vaqtinchalik oʼzgaruvchi (temp) yetarli."
  },
  {
    id: 19,
    topic: "Dasturlash asoslari",
    type: "mcq",
    difficulty: "hard",
    question: "Massiv (array) va bogʼlangan roʼyxat (linked list) maʼlumotlar tuzilmalari orasidagi asosiy farq nimada?",
    options: [
      "Massiv elementlari xotirada ketma-ket joylashadi va hajmi odatda statik, linked list esa koʼrsatkichlar orqali bogʼlangan dinamik tuzilma",
      "Linked list faqat sonlarni saqlaydi, massiv esa matnlarni",
      "Massiv faqat bitta element saqlaydi, linked list esa cheksiz koʼp element",
      "Ular orasida hech qanday farq yoʼq"
    ],
    correctAnswerIndex: 0,
    explanation: "Massiv xotirada ketma-ket joylashadi va oʼlchami koʼpincha oldindan belgilanadi, linked list esa har bir element (tugun) keyingisiga koʼrsatkich orqali bogʼlangan dinamik tuzilma."
  },
  {
    id: 20,
    topic: "Mantiq va maʼlumotlar tuzilmalari",
    type: "mcq",
    difficulty: "medium",
    question: "A = 1, B = 0 boʼlsa, A AND B mantiqiy amalining natijasi nechaga teng?",
    options: ["0", "1", "-1", "Aniqlanmagan"],
    correctAnswerIndex: 0,
    explanation: "AND amali faqat ikkala operand ham 1 boʼlganda 1 qaytaradi, aks holda 0. 1 AND 0 = 0."
  },
  {
    id: 21,
    topic: "Mantiq va maʼlumotlar tuzilmalari",
    type: "mcq",
    difficulty: "medium",
    question: "A = 1, B = 0 boʼlsa, A OR B mantiqiy amalining natijasi nechaga teng?",
    options: ["0", "1", "2", "Aniqlanmagan"],
    correctAnswerIndex: 1,
    explanation: "OR amali kamida bitta operand 1 boʼlsa 1 qaytaradi. 1 OR 0 = 1."
  },
  {
    id: 22,
    topic: "Mantiq va maʼlumotlar tuzilmalari",
    type: "mcq",
    difficulty: "hard",
    question: "A = 1, B = 1 boʼlsa, A XOR B (mos kelmaslik) mantiqiy amalining natijasi nechaga teng?",
    options: ["0", "1", "2", "Aniqlanmagan"],
    correctAnswerIndex: 0,
    explanation: "XOR amali operandlar bir xil boʼlganda 0, har xil boʼlganda 1 qaytaradi. 1 XOR 1 = 0."
  },
  {
    id: 23,
    topic: "Mantiq va maʼlumotlar tuzilmalari",
    type: "mcq",
    difficulty: "medium",
    question: "Stek (stack) maʼlumotlar tuzilmasi qaysi prinsipda ishlaydi?",
    options: [
      "FIFO - birinchi kirgan birinchi chiqadi",
      "LIFO - oxirgi kirgan birinchi chiqadi",
      "Tasodifiy tartibda",
      "Har doim alfavit tartibida"
    ],
    correctAnswerIndex: 1,
    explanation: "Stek LIFO (Last In, First Out) prinsipida ishlaydi - oxirgi qoʼshilgan element birinchi boʼlib olib tashlanadi."
  },
  {
    id: 24,
    topic: "Mantiq va maʼlumotlar tuzilmalari",
    type: "mcq",
    difficulty: "hard",
    question: "Navbat (queue) maʼlumotlar tuzilmasi qaysi prinsipda ishlaydi?",
    options: [
      "LIFO - oxirgi kirgan birinchi chiqadi",
      "FIFO - birinchi kirgan birinchi chiqadi",
      "Faqat oʼrtadagi elementga murojaat qiladi",
      "Elementlar tasodifiy tartibda chiqariladi"
    ],
    correctAnswerIndex: 1,
    explanation: "Navbat FIFO (First In, First Out) prinsipida ishlaydi - birinchi qoʼshilgan element birinchi boʼlib olib tashlanadi."
  },
  {
    id: 25,
    topic: "Sonlar sistemasi",
    type: "short",
    difficulty: "medium",
    question: "111 ikkilik (binar) sonini oʼnlik sanoq sistemasiga oʼgiring. Javobni faqat raqam shaklida yozing.",
    acceptedAnswers: ["7", "yetti"],
    explanation: "111(2) = 1*4 + 1*2 + 1*1 = 7."
  },
  {
    id: 26,
    topic: "Algoritmlar",
    type: "short",
    difficulty: "hard",
    question: "Tartiblangan massivda ikkilik qidiruv (binary search) algoritmining vaqt murakkabligini Big O belgisida yozing.",
    acceptedAnswers: ["o(log n)", "o(logn)", "o(log2 n)", "o(log2n)", "log n", "logn", "o(log(n))"],
    explanation: "Ikkilik qidiruv har bosqichda qidiruv sohasini yarmiga qisqartiradi, shuning uchun murakkablik O(log n) ga teng."
  },
  {
    id: 27,
    topic: "Dasturlash asoslari",
    type: "short",
    difficulty: "medium",
    question: "Koʼpchilik dasturlash tillarida massivning birinchi elementiga murojaat qilish uchun ishlatiladigan indeks raqamini yozing.",
    acceptedAnswers: ["0", "nol", "nol indeks", "0 indeks"],
    explanation: "Koʼpchilik tillarda (JavaScript, Python, C va boshqalar) massiv indeksatsiyasi 0 dan boshlanadi."
  },
  {
    id: 28,
    topic: "Mantiq va maʼlumotlar tuzilmalari",
    type: "short",
    difficulty: "hard",
    question: "LIFO (oxirgi kirgan birinchi chiqadi) prinsipida ishlaydigan maʼlumotlar tuzilmasining nomini yozing.",
    acceptedAnswers: ["stek", "stack", "stek (stack)"],
    explanation: "LIFO prinsipida ishlaydigan asosiy maʼlumotlar tuzilmasi - stek (stack)."
  },
  {
    id: 29,
    topic: "Algoritmlar",
    type: "essay",
    difficulty: "hard",
    question: "Saralash algoritmlarini (masalan, pufakchali saralash va tez saralash - quicksort) samaradorlik nuqtai nazaridan solishtiring. Ularning vaqt murakkabligi qanday farqlanadi va amaliyotda qaysi holatlarda qaysi birini tanlash maqsadga muvofiq?",
    modelAnswer: "Pufakchali saralash (bubble sort) sodda, lekin samarasiz algoritm boʼlib, oʼrtacha va eng yomon holatda O(n^2) vaqt murakkabligiga ega, chunki u elementlarni juftlab taqqoslab, kerak boʼlsa oʼrinlarini almashtirib, bir necha marta massiv boʼylab yuradi. Tez saralash (quicksort) esa \"boʼl va hukmronlik qil\" (divide and conquer) strategiyasiga asoslanadi: massivdan tayanch element (pivot) tanlanadi, undan kichik va katta elementlar ikki guruhga ajratiladi va har bir guruh rekursiv tarzda saralanadi. Quicksortning oʼrtacha vaqt murakkabligi O(n log n) boʼlib, bu katta hajmdagi maʼlumotlar uchun ancha samarali, biroq noqulay tanlangan pivot tufayli eng yomon holatda (masalan, allaqachon tartiblangan massivda yomon pivot tanlanganda) O(n^2) gacha yomonlashishi mumkin. Amaliyotda kichik hajmdagi yoki deyarli tartiblangan massivlar uchun sodda algoritmlar (masalan, insertion sort) yetarli boʼlishi mumkin, biroq katta hajmdagi tasodifiy maʼlumotlar uchun quicksort yoki merge sort kabi O(n log n) murakkablikka ega algoritmlar afzal qilinadi. Shuningdek, xotira chegaralari, barqarorlik (stability) talabi va maʼlumotlarning oldindan qisman tartiblangan boʼlishi kabi omillar ham algoritm tanlovida hisobga olinadi."
  },
  {
    id: 30,
    topic: "Mantiq va maʼlumotlar tuzilmalari",
    type: "essay",
    difficulty: "hard",
    question: "Massiv (array) va bogʼlangan roʼyxat (linked list) maʼlumotlar tuzilmalarining afzallik va kamchiliklarini taqqoslang hamda qaysi holatlarda qaysi birini ishlatish maqsadga muvofiq ekanligini asoslab tushuntiring.",
    modelAnswer: "Massiv - bu xotirada ketma-ket joylashgan elementlar toʼplami boʼlib, indeks orqali istalgan elementga bevosita (O(1) vaqtda) murojaat qilish mumkin, biroq oʼrtaga yangi element qoʼshish yoki oʼchirish qolgan elementlarni siljitishni talab qiladi (O(n)) va koʼpchilik tillarda massiv hajmi statik yoki qayta oʼlchamlash qimmatga tushadi. Bogʼlangan roʼyxat (linked list) esa har biri qiymat va keyingi tugunga koʼrsatkichdan iborat tugunlar zanjiridan tashkil topgan boʼlib, boshiga yoki oʼrtasiga element qoʼshish/oʼchirish (agar koʼrsatkich mavjud boʼlsa) tezroq (O(1)) amalga oshadi, biroq maʼlum indeksdagi elementga murojaat qilish uchun boshidan boshlab yurish kerak boʼladi (O(n)) va har bir tugun qoʼshimcha xotirani (koʼrsatkich uchun) talab qiladi. Shuning uchun, agar dasturda elementlarga tez-tez indeks boʼyicha murojaat qilish (masalan, tasodifiy kirish) muhim boʼlsa, massiv afzalroq; agar roʼyxatning boshiga yoki oʼrtasiga tez-tez element qoʼshish/oʼchirish kerak boʼlsa va oʼlchami oldindan noaniq boʼlsa, bogʼlangan roʼyxat maqsadga muvofiqroq boʼladi."
  },
  {
    id: 31,
    topic: "Mantiq va maʼlumotlar tuzilmalari",
    type: "mcq",
    difficulty: "medium",
    question: "Rasmda tasvirlangan mantiqiy element qaysi amalni bajaradi?",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/AND_gate.svg",
    options: ["OR (YOKI)", "AND (VA)", "NOT (EMAS)", "XOR"],
    correctAnswerIndex: 1,
    explanation: "Rasmda AND (VA) mantiqiy elementining belgisi tasvirlangan — chiqishda faqat ikkala kirish ham 1 bo'lganda 1 hosil bo'ladi.",
  }
];
