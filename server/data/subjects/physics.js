export const meta = {
  id: "physics",
  name: "Fizika",
  icon: "⚛️",
  description: "Mexanika, elektr, termodinamika va optika"
};

export const questions = [
  {
    id: 1,
    topic: "Mexanika",
    type: "mcq",
    difficulty: "medium",
    question: "Balandligi h = 5 m bo'lgan ishqalanishsiz qiya tekislikning tepasidan tinch holatdan siljiy boshlagan jism pastki uchiga qanday tezlik bilan yetib keladi? (g = 10 m/s^2 deb oling, energiya saqlanish qonunidan foydalaning)",
    options: ["7.07 m/s", "10 m/s", "50 m/s", "5 m/s"],
    correctAnswerIndex: 1,
    explanation: "Energiya saqlanish qonuniga ko'ra mgh = (1/2)mv^2, bundan v = sqrt(2gh) = sqrt(2*10*5) = sqrt(100) = 10 m/s."
  },
  {
    id: 2,
    topic: "Mexanika",
    type: "mcq",
    difficulty: "hard",
    question: "Massasi m = 2 kg bo'lgan jism balandligi h = 5 m bo'lgan qiyalikdan tinch holatdan pastga siljiydi. Ishqalanish natijasida Q = 36 J issiqlik ajraladi. Jismning qiyalik oxiridagi tezligini toping (g = 10 m/s^2).",
    options: ["6 m/s", "10 m/s", "8 m/s", "4 m/s"],
    correctAnswerIndex: 2,
    explanation: "Energiya balansi: mgh = (1/2)mv^2 + Q. mgh = 2*10*5 = 100 J. Kinetik energiya = 100 - 36 = 64 J = (1/2)*2*v^2 = v^2, bundan v^2 = 64, v = 8 m/s."
  },
  {
    id: 3,
    topic: "Mexanika",
    type: "mcq",
    difficulty: "medium",
    question: "Massasi m = 4 kg, radiusi r = 0.5 m bo'lgan bir jinsli disk aylanma o'qi atrofida M = 2 N*m moment ta'sirida aylanadi. Diskning burchak tezlanishini toping (disk uchun inertsiya momenti I = (1/2)mr^2).",
    options: ["2 rad/s^2", "4 rad/s^2", "8 rad/s^2", "1 rad/s^2"],
    correctAnswerIndex: 1,
    explanation: "I = (1/2)*4*0.5^2 = 0.5 kg*m^2. Aylanma harakat uchun asosiy qonun: M = I*alfa, bundan alfa = M/I = 2/0.5 = 4 rad/s^2."
  },
  {
    id: 4,
    topic: "Mexanika",
    type: "mcq",
    difficulty: "hard",
    question: "Massasi m, radiusi r bo'lgan bir jinsli disk (I = (1/2)mr^2) balandligi h = 2.7 m bo'lgan qiyalikdan sirpanmasdan (dumalab), ishqalanish yo'qotishlarisiz, tinch holatdan pastga tushadi. Diskning pastdagi chiziqli tezligini toping (g = 10 m/s^2).",
    options: ["7.35 m/s", "9 m/s", "6 m/s", "3 m/s"],
    correctAnswerIndex: 2,
    explanation: "Energiya saqlanishi: mgh = (1/2)mv^2 + (1/2)I*omega^2, va omega = v/r bo'lgani uchun mgh = (3/4)mv^2. Bundan v^2 = (4gh)/3 = (4*10*2.7)/3 = 36, v = 6 m/s."
  },
  {
    id: 5,
    topic: "Mexanika",
    type: "mcq",
    difficulty: "medium",
    question: "Yengil richagning bir tomonida F1 = 60 N kuch tayanch nuqtasidan d1 = 1 m masofada, ikkinchi tomondan F2 kuch tayanch nuqtasidan d2 = 3 m masofada qo'yilgan. Richag muvozanatda bo'lishi uchun F2 qanday bo'lishi kerak?",
    options: ["60 N", "20 N", "180 N", "40 N"],
    correctAnswerIndex: 1,
    explanation: "Kuchlar momentlari muvozanati: F1*d1 = F2*d2. 60*1 = F2*3, bundan F2 = 20 N."
  },
  {
    id: 6,
    topic: "Mexanika",
    type: "mcq",
    difficulty: "hard",
    question: "Uzunligi L = 2.5 m bo'lgan matematik mayatnik muvozanat holatidan 60 gradusga og'dirilib, tinch holatdan qo'yib yuboriladi. Mayatnikning eng past nuqtadagi tezligini toping (g = 10 m/s^2, cos60 = 0.5).",
    options: ["7.07 m/s", "2.5 m/s", "5 m/s", "25 m/s"],
    correctAnswerIndex: 2,
    explanation: "Balandlik pasayishi h = L(1 - cos60) = 2.5*0.5 = 1.25 m. Energiya saqlanishidan v = sqrt(2gh) = sqrt(2*10*1.25) = sqrt(25) = 5 m/s."
  },
  {
    id: 7,
    topic: "Mexanika",
    type: "mcq",
    difficulty: "medium",
    question: "Massasi m = 1000 kg avtomobil v0 = 20 m/s tezlik bilan harakatlanayotganda tormozlanadi va F = 5000 N doimiy tormozlash kuchi ta'sirida to'xtaydi. Avtomobil qancha masofada to'xtaydi? (ish-energiya teoremasidan foydalaning)",
    options: ["20 m", "40 m", "80 m", "10 m"],
    correctAnswerIndex: 1,
    explanation: "Kinetik energiya KE = (1/2)*1000*20^2 = 200000 J. Ish-energiya teoremasiga ko'ra F*d = KE, bundan d = 200000/5000 = 40 m."
  },
  {
    id: 8,
    topic: "Mexanika",
    type: "mcq",
    difficulty: "hard",
    question: "Aylanuvchi platformada turgan odamning qo'llari yozilganda uning inertsiya momenti I1 = 4 kg*m^2 va burchak tezligi omega1 = 3 rad/s. Qo'llarini yig'ganda inertsiya momenti I2 = 1 kg*m^2 gacha kamayadi. Burchak momenti saqlanish qonunidan foydalanib yangi burchak tezlikni toping.",
    options: ["3 rad/s", "6 rad/s", "0.75 rad/s", "12 rad/s"],
    correctAnswerIndex: 3,
    explanation: "Burchak momenti saqlanadi: I1*omega1 = I2*omega2. 4*3 = 1*omega2, bundan omega2 = 12 rad/s."
  },
  {
    id: 9,
    topic: "Elektr va magnetizm",
    type: "mcq",
    difficulty: "medium",
    question: "Zanjirda R1 = 2 Om rezistor manbaga ketma-ket ulangan, unga esa R2 = 3 Om va R3 = 6 Om rezistorlar parallel ravishda ulangan. Manba EYUKi (elektr yurituvchi kuchi) 12 V (ichki qarshilik hisobga olinmaydi). Zanjirdagi umumiy tokni toping.",
    options: ["2 A", "3 A", "6 A", "1.5 A"],
    correctAnswerIndex: 1,
    explanation: "Parallel qism: Rparallel = (3*6)/(3+6) = 2 Om. Umumiy qarshilik Rtotal = 2 + 2 = 4 Om. Umumiy tok I = 12/4 = 3 A."
  },
  {
    id: 10,
    topic: "Elektr va magnetizm",
    type: "mcq",
    difficulty: "hard",
    question: "Zanjirda R1 = 2 Om rezistor manbaga ketma-ket ulangan, unga esa R2 = 3 Om va R3 = 6 Om rezistorlar parallel ravishda ulangan. Manba EYUKi 12 V (ichki qarshilik hisobga olinmaydi). R3 rezistor orqali oqadigan tokni toping.",
    options: ["2 A", "0.5 A", "1 A", "3 A"],
    correctAnswerIndex: 2,
    explanation: "Rparallel = 2 Om, Rtotal = 4 Om, umumiy tok I = 12/4 = 3 A. Parallel qism uchidagi kuchlanish U = I*Rparallel = 3*2 = 6 V. R3 orqali tok I3 = U/R3 = 6/6 = 1 A."
  },
  {
    id: 11,
    topic: "Elektr va magnetizm",
    type: "mcq",
    difficulty: "medium",
    question: "R1 = 5 Om, R2 = 10 Om va R3 = 15 Om rezistorlar manbaga ketma-ket ulangan. Manba EYUKi 60 V. Zanjirdagi tokni toping.",
    options: ["3 A", "1 A", "2 A", "6 A"],
    correctAnswerIndex: 2,
    explanation: "Ketma-ket ulanishda Rtotal = 5+10+15 = 30 Om. Om qonuniga ko'ra I = U/Rtotal = 60/30 = 2 A."
  },
  {
    id: 12,
    topic: "Elektr va magnetizm",
    type: "mcq",
    difficulty: "hard",
    question: "R1 = 6 Om, R2 = 6 Om va R3 = 3 Om rezistorlar U = 12 V kuchlanish manbaiga parallel ulangan. Zanjirda ajraladigan umumiy quvvatni toping.",
    options: ["48 W", "96 W", "144 W", "24 W"],
    correctAnswerIndex: 1,
    explanation: "Parallel ulanishda 1/Rtotal = 1/6+1/6+1/3 = 2/3, bundan Rtotal = 1.5 Om. Quvvat P = U^2/Rtotal = 144/1.5 = 96 W."
  },
  {
    id: 13,
    topic: "Elektr va magnetizm",
    type: "mcq",
    difficulty: "medium",
    question: "Zanjirda R1 = 8 Om rezistor manbaga ketma-ket ulangan, unga esa R2 = 12 Om va R3 = 24 Om rezistorlar parallel ravishda ulangan. Zanjirdagi umumiy tok I = 2 A bo'lsa, manba EYUKini toping.",
    options: ["16 V", "32 V", "64 V", "8 V"],
    correctAnswerIndex: 1,
    explanation: "Rparallel = (12*24)/(12+24) = 8 Om. Rtotal = 8+8 = 16 Om. EYUK epsilon = I*Rtotal = 2*16 = 32 V."
  },
  {
    id: 14,
    topic: "Elektr va magnetizm",
    type: "mcq",
    difficulty: "hard",
    question: "Zanjirda R1 = 8 Om rezistor manbaga ketma-ket ulangan, unga esa R2 = 12 Om va R3 = 24 Om rezistorlar parallel ravishda ulangan. Zanjirdagi umumiy tok I = 2 A. R1 rezistorda ajraladigan quvvatni toping.",
    options: ["16 W", "64 W", "32 W", "8 W"],
    correctAnswerIndex: 2,
    explanation: "R1 ketma-ket ulangani uchun undan umumiy tok o'tadi: I = 2 A. Quvvat P1 = I^2*R1 = 2^2*8 = 32 W."
  },
  {
    id: 15,
    topic: "Elektr va magnetizm",
    type: "mcq",
    difficulty: "hard",
    question: "Manbaning EYUKi epsilon = 10 V, ichki qarshiligi r = 1 Om. Tashqi zanjirga R = 4 Om rezistor ulangan. Rezistor uchidagi kuchlanishni toping.",
    options: ["10 V", "2 V", "8 V", "5 V"],
    correctAnswerIndex: 2,
    explanation: "To'liq zanjir uchun Om qonuni: I = epsilon/(R+r) = 10/(4+1) = 2 A. Rezistor uchidagi kuchlanish U = I*R = 2*4 = 8 V."
  },
  {
    id: 16,
    topic: "Termodinamika",
    type: "mcq",
    difficulty: "medium",
    question: "Gazga Q = 500 J issiqlik miqdori beriladi va gaz tashqi muhitga A = 200 J ish bajaradi. Termodinamikaning birinchi qonuniga ko'ra gazning ichki energiyasining o'zgarishini toping.",
    options: ["700 J", "300 J", "200 J", "500 J"],
    correctAnswerIndex: 1,
    explanation: "Termodinamikaning birinchi qonuni: deltaU = Q - A = 500 - 200 = 300 J."
  },
  {
    id: 17,
    topic: "Termodinamika",
    type: "mcq",
    difficulty: "hard",
    question: "Doimiy P = 2*10^5 Pa bosimda gaz V1 = 2 m^3 dan V2 = 5 m^3 gacha kengaydi. Gaz tomonidan bajarilgan ishni toping.",
    options: ["200 kJ", "1000 kJ", "600 kJ", "400 kJ"],
    correctAnswerIndex: 2,
    explanation: "Izobarik jarayonda bajarilgan ish A = P*deltaV = 2*10^5*(5-2) = 6*10^5 J = 600 kJ."
  },
  {
    id: 18,
    topic: "Termodinamika",
    type: "mcq",
    difficulty: "medium",
    question: "Issiqlik dvigateli har siklda qizdirgichdan Q1 = 800 J issiqlik oladi va sovutgichga Q2 = 600 J issiqlik beradi. Dvigatelning foydali ish koeffitsiyentini (FIK) toping.",
    options: ["75%", "25%", "33%", "20%"],
    correctAnswerIndex: 1,
    explanation: "FIK: eta = (Q1-Q2)/Q1 = (800-600)/800 = 200/800 = 0.25, ya'ni 25%."
  },
  {
    id: 19,
    topic: "Termodinamika",
    type: "mcq",
    difficulty: "hard",
    question: "Karno mashinasi qizdirgich harorati T1 = 600 K va sovutgich harorati T2 = 300 K oralig'ida ishlaydi. Uning maksimal FIKini toping.",
    options: ["25%", "75%", "50%", "33%"],
    correctAnswerIndex: 2,
    explanation: "Karno sikli uchun maksimal FIK: eta = 1 - T2/T1 = 1 - 300/600 = 1 - 0.5 = 0.5, ya'ni 50%."
  },
  {
    id: 20,
    topic: "Termodinamika",
    type: "mcq",
    difficulty: "hard",
    question: "Ideal gaz P1 = 2*10^5 Pa, V1 = 4 m^3, T1 = 300 K holatidan P2 = 3*10^5 Pa, V2 = 2 m^3 holatiga o'tadi. Klapeyron-Mendeleyev tenglamasidan (P1*V1/T1 = P2*V2/T2) foydalanib T2 haroratni toping.",
    options: ["300 K", "450 K", "150 K", "225 K"],
    correctAnswerIndex: 3,
    explanation: "P1*V1/T1 = (2*10^5*4)/300. T2 = (P2*V2*T1)/(P1*V1) = (3*10^5*2*300)/(2*10^5*4) = 1.8*10^8/8*10^5 = 225 K."
  },
  {
    id: 21,
    topic: "Optika va to'lqinlar",
    type: "mcq",
    difficulty: "medium",
    question: "Yosh tajribasida (ikki tirqishli interferentsiya) tirqishlar orasidagi masofa d = 0.5 mm, ekrangacha masofa L = 2 m, yorug'lik to'lqin uzunligi lambda = 500 nm. Ekrandagi interferentsion chiziqlar orasidagi masofa (deltaX) ni toping.",
    options: ["1 mm", "4 mm", "2 mm", "0.5 mm"],
    correctAnswerIndex: 2,
    explanation: "Chiziqlar orasidagi masofa deltaX = lambda*L/d = (500*10^-9*2)/(0.5*10^-3) = 2*10^-3 m = 2 mm."
  },
  {
    id: 22,
    topic: "Optika va to'lqinlar",
    type: "mcq",
    difficulty: "hard",
    question: "Difraksion panjara davri d = 1.8 mkm. Unga normal tushayotgan lambda = 400 nm to'lqin uzunlikli yorug'lik uchun (d*sin(teta) = m*lambda, sin(teta) <= 1 shartidan) eng katta difraksiya tartibi m nechaga teng?",
    options: ["5", "3", "4", "9"],
    correctAnswerIndex: 2,
    explanation: "m_max = d/lambda = 1800/400 = 4.5. sin(teta) <= 1 shartidan m butun son bo'lishi kerak, shuning uchun eng katta tartib m = 4."
  },
  {
    id: 23,
    topic: "Optika va to'lqinlar",
    type: "mcq",
    difficulty: "medium",
    question: "Sindirish ko'rsatkichi n = 1.4 bo'lgan yupqa parda ustiga normal tushayotgan lambda = 560 nm to'lqin uzunlikli yorug'lik uchun kuchayish (konstruktiv interferentsiya) sodir bo'ladigan eng kichik parda qalinligini toping (2nt = lambda/4 dan emas, t = lambda/(4n) shartidan foydalaning).",
    options: ["200 nm", "50 nm", "100 nm", "400 nm"],
    correctAnswerIndex: 2,
    explanation: "Eng kichik qalinlik t = lambda/(4n) = 560/(4*1.4) = 560/5.6 = 100 nm."
  },
  {
    id: 24,
    topic: "Optika va to'lqinlar",
    type: "mcq",
    difficulty: "hard",
    question: "Bitta tirqishli difraksiyada tirqish kengligi a = 0.02 mm, ekrangacha masofa L = 1 m, lambda = 600 nm. Kichik burchaklar taqribida (y = lambda*L/a) birinchi minimum ekranda markazdan qanday masofada hosil bo'ladi?",
    options: ["1.5 cm", "6 cm", "3 cm", "0.3 cm"],
    correctAnswerIndex: 2,
    explanation: "y = lambda*L/a = (600*10^-9*1)/(0.02*10^-3) = 600*10^-9/2*10^-5 = 0.03 m = 3 cm."
  },
  {
    id: 25,
    topic: "Mexanika",
    type: "short",
    difficulty: "medium",
    question: "Massasi 3 kg bo'lgan jism 4 m/s tezlik bilan harakatlanmoqda. Uning kinetik energiyasini (Joulda) hisoblang.",
    acceptedAnswers: ["24", "24 J", "24J", "24 joul", "24 jоul"],
    explanation: "Kinetik energiya KE = (1/2)*m*v^2 = (1/2)*3*4^2 = (1/2)*3*16 = 24 J."
  },
  {
    id: 26,
    topic: "Elektr va magnetizm",
    type: "short",
    difficulty: "medium",
    question: "R1 = 4 Om va R2 = 12 Om rezistorlar parallel ulangan. Ularning umumiy (ekvivalent) qarshiligini Omda hisoblang.",
    acceptedAnswers: ["3", "3 Om", "3Om", "3 om", "3 ohm"],
    explanation: "Parallel ulanishda Rekv = (R1*R2)/(R1+R2) = (4*12)/(4+12) = 48/16 = 3 Om."
  },
  {
    id: 27,
    topic: "Termodinamika",
    type: "short",
    difficulty: "hard",
    question: "Ideal gaz izotermik jarayonda V1 = 3 m^3 dan V2 = 1 m^3 gacha siqiladi, dastlabki bosim P1 = 2*10^5 Pa edi. Boyl-Mariott qonunidan foydalanib gazning yakuniy bosimini Paskalda hisoblang.",
    acceptedAnswers: ["600000", "6*10^5", "6x10^5", "600000 Pa", "6*10^5 Pa", "6 * 10^5"],
    explanation: "Boyl-Mariott qonuni: P1*V1 = P2*V2. P2 = (P1*V1)/V2 = (2*10^5*3)/1 = 6*10^5 Pa."
  },
  {
    id: 28,
    topic: "Optika va to'lqinlar",
    type: "short",
    difficulty: "hard",
    question: "Yosh tajribasida tirqishlar orasidagi masofa d = 1 mm, ekrangacha masofa L = 3 m. Ekranda hosil bo'lgan interferentsion chiziqlar orasidagi masofa deltaX = 1.8 mm bo'lsa, ishlatilgan yorug'likning to'lqin uzunligini nanometrda hisoblang.",
    acceptedAnswers: ["600", "600 nm", "600nm"],
    explanation: "deltaX = lambda*L/d formulasidan lambda = deltaX*d/L = (1.8*10^-3*1*10^-3)/3 = 0.6*10^-6 m = 600 nm."
  },
  {
    id: 29,
    topic: "Mexanika",
    type: "essay",
    difficulty: "hard",
    question: "Massasi m = 5 kg bo'lgan chana balandligi h = 10 m bo'lgan, qiyalik bo'ylab uzunligi l = 20 m bo'lgan muzlik tepalikdan tinch holatdan pastga siljiydi. Ishqalanish koeffitsiyenti qiyalik bo'ylab mu = 0.1 ga teng. g = 10 m/s^2 deb olib, chananing tepalik etagidagi tezligini toping. Yechimni to'liq bosqichlar bilan (qiyalik burchagini topish, ishqalanish kuchi ishini hisoblash, energiya balansini tuzish) yozing.",
    modelAnswer: "1) Qiyalik burchagini topamiz: sin(teta) = h/l = 10/20 = 0.5, demak teta = 30 gradus, cos(teta) = sqrt(3)/2 = 0.866.\n2) Ishqalanish kuchi: Ftr = mu*m*g*cos(teta) = 0.1*5*10*0.866 = 4.33 N.\n3) Ishqalanish kuchining bajargan (yo'qotilgan) ishi: Atr = Ftr*l = 4.33*20 = 86.6 J.\n4) Boshlang'ich potensial energiya: Ep = m*g*h = 5*10*10 = 500 J.\n5) Energiya balansi: Ep = KE + Atr, bundan KE = 500 - 86.6 = 413.4 J.\n6) KE = (1/2)*m*v^2 = (1/2)*5*v^2 = 2.5*v^2, bundan v^2 = 413.4/2.5 = 165.36, v = sqrt(165.36) = 12.86 m/s.\nJavob: chananing tepalik etagidagi tezligi taxminan 12.9 m/s ga teng."
  },
  {
    id: 30,
    topic: "Elektr va magnetizm",
    type: "essay",
    difficulty: "hard",
    question: "Manbaning EYUKi epsilon = 36 V, ichki qarshiligi r = 1 Om. Tashqi zanjirda R1 = 4 Om rezistor manbaga ketma-ket ulangan, unga esa R2 = 8 Om va R3 = 8 Om rezistorlar parallel ravishda ulangan. Quyidagilarni toping: a) zanjirdagi umumiy tokni; b) R2 va R3 orqali oqadigan toklarni; c) manba tomonidan ishlab chiqarilgan umumiy quvvatni va ichki qarshilikda yo'qolgan quvvatni. Yechimni to'liq bosqichlar bilan yozing.",
    modelAnswer: "1) Parallel qismning ekvivalent qarshiligi: Rparallel = (R2*R3)/(R2+R3) = (8*8)/(8+8) = 64/16 = 4 Om.\n2) Zanjirning to'liq qarshiligi: Rtotal = R1 + Rparallel + r = 4 + 4 + 1 = 9 Om.\n3) To'liq zanjir uchun Om qonuni bo'yicha umumiy tok: I = epsilon/Rtotal = 36/9 = 4 A.\n4) Parallel qism uchidagi kuchlanish: Uparallel = I*Rparallel = 4*4 = 16 V.\n5) R2 va R3 teng qarshilikka ega bo'lgani uchun ulardan oqadigan tok teng taqsimlanadi: I2 = Uparallel/R2 = 16/8 = 2 A, I3 = Uparallel/R3 = 16/8 = 2 A. Tekshiruv: I2+I3 = 2+2 = 4 A, bu umumiy tokka teng.\n6) Manba ishlab chiqargan umumiy quvvat: Ptotal = epsilon*I = 36*4 = 144 W.\n7) Ichki qarshilikda yo'qolgan quvvat: Pr = I^2*r = 4^2*1 = 16 W. Demak tashqi zanjirga uzatilgan foydali quvvat Pfoydali = 144 - 16 = 128 W."
  },
  {
    id: 31,
    topic: "Elektr va magnetizm",
    type: "mcq",
    difficulty: "medium",
    question: "Rasmda tasvirlangan elektr zanjiri qanday ulanish turiga misol bo'la oladi?",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Series_circuit.svg",
    options: ["Ketma-ket ulanish", "Parallel ulanish", "Aralash ulanish", "Qisqa tutashuv"],
    correctAnswerIndex: 0,
    explanation: "Rasmda barcha elementlar bitta yagona kontur bo'ylab ketma-ket ulangan, ya'ni ketma-ket ulanish tasvirlangan.",
  }
];
