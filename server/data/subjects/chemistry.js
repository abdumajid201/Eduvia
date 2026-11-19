export const meta = {
  id: "chemistry",
  name: "Kimyo",
  icon: "🧪",
  description: "Anorganik, organik kimyo va kimyoviy reaksiyalar"
};

export const questions = [
  {
    id: 1,
    topic: "Anorganik kimyo",
    type: "mcq",
    difficulty: "hard",
    question: "Alyuminiy metali natriy gidroksidning konsentrlangan suvli eritmasi bilan reaksiyaga kirishganda qanday gaz ajralib chiqadi?",
    options: ["Kislorod", "Vodorod", "Xlor", "Ammiak"],
    correctAnswerIndex: 1,
    explanation: "2Al + 2NaOH + 6H2O = 2Na[Al(OH)4] + 3H2 reaksiyasida alyuminiy suv bilan ishqor ishtirokida oksidlanib, vodorod gazi ajratadi."
  },
  {
    id: 2,
    topic: "Anorganik kimyo",
    type: "mcq",
    difficulty: "medium",
    question: "Temir(III) xlorid (FeCl3) ning suvdagi eritmasi qanday muhitga ega bo'ladi?",
    options: ["Neytral", "Kuchsiz ishqoriy", "Kislotali", "Amfoter"],
    correctAnswerIndex: 2,
    explanation: "FeCl3 kuchsiz asos (Fe(OH)3) va kuchli kislota (HCl) hosil qiluvchi tuz bo'lgani uchun gidrolizlanib, eritma kislotali muhitga ega bo'ladi."
  },
  {
    id: 3,
    topic: "Anorganik kimyo",
    type: "mcq",
    difficulty: "medium",
    question: "Quyidagi oksidlardan qaysi biri amfoter oksid hisoblanadi?",
    options: ["Al2O3", "Na2O", "SO3", "CaO"],
    correctAnswerIndex: 0,
    explanation: "Al2O3 ham kislotalar, ham ishqorlar bilan reaksiyaga kirisha oladigan amfoter oksiddir."
  },
  {
    id: 4,
    topic: "Anorganik kimyo",
    type: "mcq",
    difficulty: "hard",
    question: "Mis(II) sulfat kristallogidrati CuSO4 · 5H2O tarkibida kristallizatsion suv necha foizni tashkil qiladi? (Ar: Cu=64, S=32, O=16, H=1)",
    options: ["25%", "36%", "45%", "20%"],
    correctAnswerIndex: 1,
    explanation: "M(CuSO4 · 5H2O)=250 g/mol, M(5H2O)=90 g/mol, 90/250 · 100% = 36%."
  },
  {
    id: 5,
    topic: "Anorganik kimyo",
    type: "mcq",
    difficulty: "hard",
    question: "Ammiakning katalitik oksidlanishi (Ostvald usuli, Pt katalizatori, t ≈ 800°C) natijasida asosiy mahsulot sifatida nima hosil bo'ladi?",
    options: ["N2", "NO", "NO2", "N2O"],
    correctAnswerIndex: 1,
    explanation: "4NH3 + 5O2 = 4NO + 6H2O reaksiyasi natriy kislotasi ishlab chiqarishning birinchi bosqichi bo'lib, azot(II)-oksid hosil qiladi."
  },
  {
    id: 6,
    topic: "Anorganik kimyo",
    type: "mcq",
    difficulty: "medium",
    question: "Quyidagi tuzlardan qaysi biri suvda eriganda gidroliz natijasida kuchli ishqoriy muhit hosil qiladi?",
    options: ["NaCl", "Na2CO3", "NH4Cl", "Al2(SO4)3"],
    correctAnswerIndex: 1,
    explanation: "Na2CO3 kuchli asos (NaOH) va kuchsiz kislota (H2CO3) tuzi bo'lgani uchun gidrolizlanib, eritma ishqoriy muhitga ega bo'ladi."
  },
  {
    id: 7,
    topic: "Organik kimyo",
    type: "mcq",
    difficulty: "hard",
    question: "Kucherov reaksiyasida (Hg2+ katalizatori ishtirokida) etin (atsetilen) suv bilan reaksiyaga kirishganda qaysi modda hosil bo'ladi?",
    options: ["Etanol", "Sirka kislota", "Asetaldegid", "Etilenglikol"],
    correctAnswerIndex: 2,
    explanation: "CH≡CH + H2O → CH3CHO reaksiyasi Kucherov reaksiyasi deyiladi va natijada asetaldegid hosil bo'ladi."
  },
  {
    id: 8,
    topic: "Organik kimyo",
    type: "mcq",
    difficulty: "medium",
    question: "Benzol molekulasidagi uglerod atomlari orasidagi kimyoviy bog' tabiati qanday tavsiflanadi?",
    options: ["Faqat oddiy (sigma) bog'lar", "Faqat qo'sh bog'lar", "Delokallashgan yagona pi-elektron tizimi bilan oraliq bog'", "Uch bog'lar"],
    correctAnswerIndex: 2,
    explanation: "Benzol halqasida barcha C-C bog'lar bir xil uzunlikka ega bo'lib, delokallashgan pi-elektron buluti hisobiga oraliq xarakterga ega."
  },
  {
    id: 9,
    topic: "Organik kimyo",
    type: "mcq",
    difficulty: "medium",
    question: "C4H10 formulasiga ega uglevodorod uchun nechta struktura izomeri mavjud?",
    options: ["1", "2", "3", "4"],
    correctAnswerIndex: 1,
    explanation: "C4H10 formulasiga n-butan va izobutan (2-metilpropan) bo'lgan ikkita struktura izomeri to'g'ri keladi."
  },
  {
    id: 10,
    topic: "Organik kimyo",
    type: "mcq",
    difficulty: "medium",
    question: "Sirka kislota (CH3COOH) bilan etanol (C2H5OH) o'rtasidagi kislota katalizatorli reaksiya natijasida hosil bo'lgan murakkab efirning nomi qanday?",
    options: ["Metil atsetat", "Etil atsetat", "Propil atsetat", "Etil format"],
    correctAnswerIndex: 1,
    explanation: "Esterlanish reaksiyasida CH3COOH + C2H5OH → CH3COOC2H5 (etil atsetat) + H2O hosil bo'ladi."
  },
  {
    id: 11,
    topic: "Organik kimyo",
    type: "mcq",
    difficulty: "hard",
    question: "Etilendan (CH2=CH2) polietilen olish jarayoni qanday reaksiya turiga kiradi?",
    options: ["Polikondensatlanish", "Additsion (birikish) polimerlanish", "Gidroliz", "Izomerlanish"],
    correctAnswerIndex: 1,
    explanation: "Polietilen qo'sh bog' ochilib, monomerlarning bir-biriga birikishi orqali hosil bo'ladi, bu additsion polimerlanish deyiladi."
  },
  {
    id: 12,
    topic: "Organik kimyo",
    type: "mcq",
    difficulty: "hard",
    question: "Glyukoza (C6H12O6) molekulasi ochiq zanjir (aldegid) shaklida nechta gidroksil (-OH) guruhiga ega?",
    options: ["4", "5", "6", "3"],
    correctAnswerIndex: 1,
    explanation: "Glyukozaning ochiq zanjirli shaklida C1 atomida aldegid guruhi, C2-C6 atomlarida esa beshta gidroksil guruhi joylashgan."
  },
  {
    id: 13,
    topic: "Kimyoviy reaksiyalar va stexiometriya",
    type: "mcq",
    difficulty: "medium",
    question: "200 g 20% li NaOH eritmasini tayyorlash uchun necha gramm sof NaOH kerak bo'ladi?",
    options: ["20 g", "40 g", "60 g", "80 g"],
    correctAnswerIndex: 1,
    explanation: "m(NaOH) = 200 g · 0,20 = 40 g."
  },
  {
    id: 14,
    topic: "Kimyoviy reaksiyalar va stexiometriya",
    type: "mcq",
    difficulty: "medium",
    question: "5 mol H2SO4 ni to'liq neytrallash uchun necha mol NaOH talab qilinadi?",
    options: ["5 mol", "10 mol", "15 mol", "20 mol"],
    correctAnswerIndex: 1,
    explanation: "H2SO4 + 2NaOH = Na2SO4 + 2H2O tenglamasiga ko'ra, 1 mol kislotaga 2 mol ishqor kerak, demak 5 mol uchun 10 mol NaOH kerak."
  },
  {
    id: 15,
    topic: "Kimyoviy reaksiyalar va stexiometriya",
    type: "mcq",
    difficulty: "hard",
    question: "CH4 + 2O2 = CO2 + 2H2O tenglamasiga ko'ra, 5 mol metan to'liq yonganda normal sharoitda necha litr CO2 hosil bo'ladi?",
    options: ["22,4 L", "56 L", "112 L", "224 L"],
    correctAnswerIndex: 2,
    explanation: "5 mol CH4 dan 5 mol CO2 hosil bo'ladi, V = 5 mol · 22,4 L/mol = 112 L."
  },
  {
    id: 16,
    topic: "Kimyoviy reaksiyalar va stexiometriya",
    type: "mcq",
    difficulty: "medium",
    question: "40 g CaCO3 (M = 100 g/mol) qizdirilganda to'liq parchalansa, necha mol CaO hosil bo'ladi?",
    options: ["0,2 mol", "0,4 mol", "0,6 mol", "0,8 mol"],
    correctAnswerIndex: 1,
    explanation: "n(CaCO3) = 40/100 = 0,4 mol, CaCO3 = CaO + CO2 tenglamasiga ko'ra n(CaO) = 0,4 mol."
  },
  {
    id: 17,
    topic: "Kimyoviy reaksiyalar va stexiometriya",
    type: "mcq",
    difficulty: "hard",
    question: "Van't-Goff qoidasiga ko'ra, harorat koeffitsienti γ=2 bo'lgan reaksiyada harorat 30°C dan 60°C ga ko'tarilsa, reaksiya tezligi necha marta ortadi?",
    options: ["2 marta", "4 marta", "8 marta", "16 marta"],
    correctAnswerIndex: 2,
    explanation: "Δt=30°C, n=Δt/10=3, tezlik γ^n=2^3=8 marta ortadi."
  },
  {
    id: 18,
    topic: "Kimyoviy reaksiyalar va stexiometriya",
    type: "mcq",
    difficulty: "medium",
    question: "N2(g) + 3H2(g) ⇌ 2NH3(g) (ekzotermik) muvozanat reaksiyasida bosim oshirilsa, Le Shatelye printsipiga ko'ra muvozanat qaysi tomonga siljiydi?",
    options: ["Chapga (boshlang'ich moddalar tomonga)", "O'ngga (ammiak hosil bo'lish tomoniga)", "Muvozanat o'zgarmaydi", "Avval chapga, so'ng o'ngga"],
    correctAnswerIndex: 1,
    explanation: "Bosim oshganda muvozanat gaz molekulalari soni kamroq bo'lgan tomonga, ya'ni ammiak hosil bo'lish tomoniga siljiydi."
  },
  {
    id: 19,
    topic: "Davriy jadval",
    type: "mcq",
    difficulty: "hard",
    question: "Zamonaviy talqinda davriy qonun elementlarning xossalari nimaga davriy ravishda bog'liqligini ifodalaydi?",
    options: ["Atom massasiga", "Atom yadrosining zaryadiga (tartib raqamiga)", "Izotoplar soniga", "Moddaning agregat holatiga"],
    correctAnswerIndex: 1,
    explanation: "D.I.Mendeleyev vaqtida atom massasiga asoslangan bo'lsa-da, zamonaviy davriy qonun elementlar xossalarining atom yadrosi zaryadiga (tartib raqamiga) davriy bog'liqligini ifodalaydi."
  },
  {
    id: 20,
    topic: "Davriy jadval",
    type: "mcq",
    difficulty: "medium",
    question: "Davriy jadvalda elementning davri (period) raqami nimani ko'rsatadi?",
    options: ["Valentlik elektronlar sonini", "Atomdagi energetik qatlamlar (elektron qavatlar) sonini", "Guruh raqamini", "Atom massasini"],
    correctAnswerIndex: 1,
    explanation: "Davr raqami atomdagi to'ldirilgan energetik qatlamlar (elektron qavatlar) soniga to'g'ri keladi."
  },
  {
    id: 21,
    topic: "Davriy jadval",
    type: "mcq",
    difficulty: "medium",
    question: "Bosh guruhchada yuqoridan pastga qarab siljiganda atom radiusi qanday o'zgaradi?",
    options: ["Kamayadi", "Ortadi", "O'zgarmaydi", "Avval ortadi, keyin kamayadi"],
    correctAnswerIndex: 1,
    explanation: "Guruh ichida pastga tushgan sari elektron qavatlar soni ortadi, natijada atom radiusi kattalashadi."
  },
  {
    id: 22,
    topic: "Davriy jadval",
    type: "mcq",
    difficulty: "hard",
    question: "Xlor elementi (Cl, tartib raqami 17) atomining elektron konfiguratsiyasi qaysi qatorda to'g'ri ko'rsatilgan?",
    options: ["1s2 2s2 2p6 3s2 3p5", "1s2 2s2 2p6 3s2 3p6", "1s2 2s2 2p5", "1s2 2s2 2p6 3s2 3p4"],
    correctAnswerIndex: 0,
    explanation: "Xlorning 17 elektroni 1s2 2s2 2p6 3s2 3p5 tartibida joylashadi, tashqi qatlamda 7 ta valentlik elektron bo'ladi."
  },
  {
    id: 23,
    topic: "Davriy jadval",
    type: "mcq",
    difficulty: "hard",
    question: "Davriy jadvalning bir davri ichida chapdan o'ngga qarab siljiganda elementlarning elektrmanfiyligi (elektronegativligi) qanday o'zgaradi?",
    options: ["Kamayadi", "Ortadi", "O'zgarmaydi", "Tasodifiy o'zgaradi"],
    correctAnswerIndex: 1,
    explanation: "Davr bo'ylab yadro zaryadi ortib, atom radiusi kichraygani sababli elektronlarni o'ziga tortish kuchi, ya'ni elektrmanfiylik ortadi."
  },
  {
    id: 24,
    topic: "Davriy jadval",
    type: "mcq",
    difficulty: "hard",
    question: "IA guruh (ishqoriy metallar) da yuqoridan pastga qarab metallik xossalar (reaktivlik) qanday o'zgaradi va buning sababi nima?",
    options: [
      "Kuchayadi, chunki atom radiusi ortib, tashqi elektron yadrodan uzoqlashib, osonroq ajraladi",
      "Kamayadi, chunki elektrmanfiylik ortadi",
      "O'zgarmaydi, chunki barchasi bir xil valentlikka ega",
      "Kuchayadi, chunki ionlanish energiyasi ortadi"
    ],
    correctAnswerIndex: 0,
    explanation: "Guruh ichida pastga tushgan sari atom radiusi ortadi va tashqi elektronni ushlab turish kuchi zaiflashadi, natijada metallik xossalar (elektron berish qobiliyati) kuchayadi."
  },
  {
    id: 25,
    topic: "Kimyoviy reaksiyalar va stexiometriya",
    type: "short",
    difficulty: "hard",
    question: "Suvning (H2O) molyar massasi necha gramm/mol ekanligini faqat son bilan yozing (Ar: H=1, O=16).",
    acceptedAnswers: ["18", "18 g/mol", "18g/mol"],
    explanation: "M(H2O) = 2·1 + 16 = 18 g/mol."
  },
  {
    id: 26,
    topic: "Davriy jadval",
    type: "short",
    difficulty: "medium",
    question: "Davriy jadvalning VIIIA guruhiga kiruvchi, tashqi elektron qavati to'liq bo'lgani uchun deyarli reaksiyaga kirishmaydigan elementlar umumiy nomini yozing.",
    acceptedAnswers: ["inert gazlar", "nodir gazlar", "asil gazlar", "zart gazlar"],
    explanation: "Geliy, neon, argon kabi elementlar tashqi elektron qavati to'liq bo'lgani uchun kimyoviy jihatdan faol emas va inert (nodir) gazlar deb ataladi."
  },
  {
    id: 27,
    topic: "Organik kimyo",
    type: "short",
    difficulty: "medium",
    question: "CH4 formulasiga ega bo'lgan eng oddiy to'yingan uglevodorodning nomini yozing.",
    acceptedAnswers: ["metan"],
    explanation: "CH4 - to'yingan uglevodorodlar (alkanlar) qatorining birinchi vakili bo'lgan metandir."
  },
  {
    id: 28,
    topic: "Anorganik kimyo",
    type: "short",
    difficulty: "hard",
    question: "Vodorod peroksid (H2O2) molekulasida kislorod atomining oksidlanish darajasini son va ishorasi bilan yozing (masalan: -2 shaklida).",
    acceptedAnswers: ["-1"],
    explanation: "H2O2 da kislorod-kislorod bog'i mavjudligi sababli har bir kislorod atomining oksidlanish darajasi odatdagi -2 emas, balki -1 ga teng bo'ladi."
  },
  {
    id: 29,
    topic: "Kimyoviy reaksiyalar va stexiometriya",
    type: "essay",
    difficulty: "hard",
    question: "Le Shatelye printsipiga asoslanib, kimyoviy muvozanatga harorat, bosim va reagentlar kontsentratsiyasining ta'sirini konkret reaksiya misolida (masalan, N2 + 3H2 ⇌ 2NH3) tushuntiring.",
    modelAnswer: "Le Shatelye printsipiga ko'ra, muvozanatdagi sistemaga tashqi ta'sir ko'rsatilsa, muvozanat shu ta'sirni kamaytiruvchi tomonga siljiydi. N2 + 3H2 ⇌ 2NH3 (ekzotermik) reaksiyasida: harorat oshirilsa, muvozanat issiqlik yutuvchi teskari reaksiya tomoniga, ya'ni chapga siljiydi va NH3 miqdori kamayadi; bosim oshirilsa, muvozanat gaz molekulalari soni kamroq bo'lgan tomonga, ya'ni o'ngga (NH3 hosil bo'lish tomoniga) siljiydi; boshlang'ich moddalar (N2 yoki H2) kontsentratsiyasi oshirilsa, muvozanat mahsulot hosil bo'lish tomoniga, kontsentratsiyasi kamaytirilsa aksincha yo'nalishga siljiydi. Shuning uchun sanoatda ammiak yuqori bosim va katalizator ishtirokida, nisbatan past haroratda olinadi."
  },
  {
    id: 30,
    topic: "Organik kimyo",
    type: "essay",
    difficulty: "hard",
    question: "Organik va anorganik moddalarning tarkibi, tuzilishi va xossalari bo'yicha asosiy farqlarini kamida uchta jihat bo'yicha misollar bilan tushuntiring.",
    modelAnswer: "Birinchidan, organik moddalar tarkibida majburiy ravishda uglerod (ko'pincha vodorod, kislorod, azot bilan birga) bo'ladi va uglerod atomlari bir-biri bilan zanjir yoki halqa hosil qilib bog'lanadi (masalan, etan C2H6, benzol C6H6), anorganik moddalarda esa bunday umumiy talab yo'q (masalan, NaCl, H2SO4). Ikkinchidan, organik birikmalarda asosan kovalent bog' ustunlik qiladi va shu sababli ular past erish/qaynash haroratiga ega, suvda yomon eriydi hamda yonuvchan bo'ladi, anorganik birikmalarning ko'pchiligida (masalan, tuzlar) ion bog' bo'lib, ular yuqori erish haroratiga ega va suvda yaxshi eriydi. Uchinchidan, organik birikmalar uchun izomeriya hodisasi (bir xil formula, turlicha tuzilish, masalan C4H10 ning ikki izomeri) juda xarakterli va ular soni millionlab bo'lsa, anorganik birikmalarda izomeriya kamdan-kam uchraydi va ularning umumiy soni ancha kamroq."
  },
  {
    id: 31,
    topic: "Davriy jadval",
    type: "mcq",
    difficulty: "medium",
    question: "Rasmdagi davriy jadvalda gorizontal qatorlar (satrlar) nima deb ataladi?",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Simple_Periodic_Table_Chart-en.svg",
    options: ["Guruhlar", "Davrlar", "Bloklar", "Seriyalar"],
    correctAnswerIndex: 1,
    explanation: "Davriy jadvalda gorizontal qatorlar davrlar, vertikal ustunlar esa guruhlar deb ataladi.",
  }
];
