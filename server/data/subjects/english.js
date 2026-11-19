export const meta = {
  id: "english",
  name: "Ingliz tili",
  icon: "🇬🇧",
  description: "Reading, writing, listening va speaking"
};

export const questions = [
  {
    id: 1,
    topic: "Advanced Grammar",
    type: "mcq",
    difficulty: "medium",
    question: "If she ___ harder at university, she ___ a better job now.",
    options: [
      "studied / would get",
      "had studied / would have",
      "had studied / would get",
      "studies / will get"
    ],
    correctAnswerIndex: 2,
    explanation: "Bu aralash shart gap (mixed conditional): birinchi qism o'tmishga (3-tip, had studied), ikkinchi qism hozirgi natijaga (2-tip, would get) ishora qiladi. Shu sababli javob had studied / would get bo'ladi."
  },
  {
    id: 2,
    topic: "Advanced Grammar",
    type: "mcq",
    difficulty: "hard",
    question: "Had I known about the traffic, I ___ earlier.",
    options: [
      "would leave",
      "would have left",
      "left",
      "will leave"
    ],
    correctAnswerIndex: 1,
    explanation: "Had I known... — bu inversiya orqali tuzilgan 3-tip shart gap (If I had known...). Natija qismida would have + Participle II ishlatiladi, ya`ni would have left."
  },
  {
    id: 3,
    topic: "Advanced Grammar",
    type: "mcq",
    difficulty: "hard",
    question: "The report ___ by the committee before it was released to the public.",
    options: [
      "reviewed",
      "was reviewing",
      "had been reviewed",
      "has reviewed"
    ],
    correctAnswerIndex: 2,
    explanation: "Gap majhul nisbatda (passive) va o'tmishdagi ikki harakatdan birinchisi ekanligini ko'rsatish uchun Past Perfect Passive (had been reviewed) qo'llanadi."
  },
  {
    id: 4,
    topic: "Advanced Grammar",
    type: "mcq",
    difficulty: "medium",
    question: "She said, \"By next Friday, I will have finished the project.\" Later, she told me that she ___ it by the following Friday.",
    options: [
      "will finish",
      "would finish",
      "would have finished",
      "finishes"
    ],
    correctAnswerIndex: 2,
    explanation: "Reported speech (ko'chirma nutq) qoidasiga ko'ra, kelasi zamondagi tugallangan harakat (will have finished) o'tmishga o'tkazilganda would have finished ko'rinishiga aylanadi."
  },
  {
    id: 5,
    topic: "Advanced Grammar",
    type: "mcq",
    difficulty: "medium",
    question: "The manager asked the employees ___ late for meetings.",
    options: [
      "not be",
      "to not be",
      "not to be",
      "do not be"
    ],
    correctAnswerIndex: 2,
    explanation: "Reported speech da buyruq yoki iltimosning inkor shakli to + infinitivdan oldin not qo'yish orqali hosil qilinadi: not to be."
  },
  {
    id: 6,
    topic: "Advanced Grammar",
    type: "mcq",
    difficulty: "hard",
    question: "Rarely ___ such a compelling argument in a debate.",
    options: [
      "I have heard",
      "have I heard",
      "I heard",
      "did I hear"
    ],
    correctAnswerIndex: 1,
    explanation: "Salbiy ma'noli qo'shimchalar (rarely, seldom, never) gap boshida kelganda inversiya qo'llanadi, ya'ni yordamchi fe'l egadan oldin keladi: have I heard."
  },
  {
    id: 7,
    topic: "Advanced Grammar",
    type: "mcq",
    difficulty: "medium",
    question: "By the time the guests arrive, we ___ the dinner.",
    options: [
      "will finish",
      "will have finished",
      "finish",
      "are finishing"
    ],
    correctAnswerIndex: 1,
    explanation: "By the time iborasi kelasi zamondagi ikkinchi harakatdan oldin tugallanadigan harakatni bildiradi, shu sababli Future Perfect (will have finished) ishlatiladi."
  },
  {
    id: 8,
    topic: "Advanced Grammar",
    type: "mcq",
    difficulty: "hard",
    question: "It is essential that every candidate ___ the exam rules before starting.",
    options: [
      "reads",
      "read",
      "will read",
      "is reading"
    ],
    correctAnswerIndex: 1,
    explanation: "It is essential/important/necessary that kabi iboralardan keyin subjunctive mood (bare infinitive shakli) ishlatiladi, shaxs va sonidan qat'i nazar: read."
  },
  {
    id: 9,
    topic: "Advanced Grammar",
    type: "mcq",
    difficulty: "hard",
    question: "Not only ___ the deadline, but she also exceeded expectations.",
    options: [
      "she met",
      "did she meet",
      "she did meet",
      "met she"
    ],
    correctAnswerIndex: 1,
    explanation: "Not only gap boshida kelganda inversiya talab qilinadi: did she meet. Bu qoida rarely, never, not only kabi so'zlar uchun umumiy."
  },
  {
    id: 10,
    topic: "Advanced Grammar",
    type: "mcq",
    difficulty: "medium",
    question: "The new policy, ___ was announced yesterday, has caused controversy.",
    options: [
      "that",
      "which",
      "what",
      "who"
    ],
    correctAnswerIndex: 1,
    explanation: "Vergul bilan ajratilgan aniqlovchi ergash gaplarda (non-defining relative clause) faqat which ishlatiladi, that emas."
  },
  {
    id: 11,
    topic: "Advanced Grammar",
    type: "mcq",
    difficulty: "hard",
    question: "I would rather you ___ me before making such a big decision.",
    options: [
      "consult",
      "consulted",
      "will consult",
      "had consulted"
    ],
    correctAnswerIndex: 1,
    explanation: "Would rather + ega + fe'l tuzilishida hozirgi yoki kelasi vaqtga nisbatan istak bildirilganda fe'l Past Simple shaklida bo'ladi: consulted."
  },
  {
    id: 12,
    topic: "Advanced Grammar",
    type: "mcq",
    difficulty: "medium",
    question: "The bridge, construction of ___ began in 2019, will open next year.",
    options: [
      "that",
      "which",
      "it",
      "whose"
    ],
    correctAnswerIndex: 1,
    explanation: "Construction of which — bu of which tuzilishi predlogdan keyingi relative pronoun sifatida faqat which bilan ishlatiladi."
  },
  {
    id: 13,
    topic: "Reading Comprehension",
    skill: "reading",
    type: "mcq",
    difficulty: "medium",
    question: "Passage: \"Although the company posted record profits this quarter, its stock price fell sharply after executives hinted at slowing growth in emerging markets.\" What can be inferred from this passage?",
    options: [
      "Investors were more concerned about future growth than current profits.",
      "The company lost money this quarter.",
      "Emerging markets are no longer important to the company.",
      "The stock price rose because of the profits."
    ],
    correctAnswerIndex: 0,
    explanation: "Matnda profit rekord darajada bo'lishiga qaramay, aksiya narxi tushib ketgani aytilgan, chunki kelajakdagi o'sish sekinlashishi haqida signal berilgan. Demak, investorlar hozirgi foydadan ko'ra kelajakdagi o'sishga ko'proq ahamiyat bergan."
  },
  {
    id: 14,
    topic: "Reading Comprehension",
    skill: "reading",
    type: "mcq",
    difficulty: "hard",
    question: "Passage: \"Critics argue that the new regulation, while well-intentioned, places a disproportionate burden on small businesses, which lack the resources larger corporations have to comply with complex reporting requirements.\" The word disproportionate is closest in meaning to:",
    options: [
      "equal",
      "unfairly large",
      "insignificant",
      "temporary"
    ],
    correctAnswerIndex: 1,
    explanation: "Disproportionate so'zi matn kontekstida kichik biznesga nisbatan adolatsiz darajada katta yukni bildiradi, ya'ni unfairly large ma'nosiga mos keladi."
  },
  {
    id: 15,
    topic: "Reading Comprehension",
    skill: "reading",
    type: "mcq",
    difficulty: "hard",
    question: "Passage: \"Despite decades of research, scientists have yet to fully understand why some patients respond to the treatment while others show no improvement at all.\" What is the main idea of this sentence?",
    options: [
      "The treatment does not work for anyone.",
      "There is an unresolved mystery about individual differences in treatment response.",
      "Scientists have stopped researching the treatment.",
      "The treatment was recently discovered."
    ],
    correctAnswerIndex: 1,
    explanation: "Gapda ko'p yillik tadqiqotlarga qaramay, nima uchun ba'zi bemorlar davolanishga javob berishi, boshqalari esa bermasligi hali tushunilmagani ta'kidlangan — bu individual farqlar bo'yicha hal qilinmagan sir ekanligini bildiradi."
  },
  {
    id: 16,
    topic: "Reading Comprehension",
    skill: "reading",
    type: "mcq",
    difficulty: "medium",
    question: "Passage: \"The committee reluctantly approved the budget cuts, acknowledging that the decision would likely face backlash from employees.\" What does reluctantly suggest about the committee's attitude?",
    options: [
      "They were enthusiastic about the cuts.",
      "They were indifferent to the outcome.",
      "They approved the decision unwillingly.",
      "They rejected the proposal."
    ],
    correctAnswerIndex: 2,
    explanation: "Reluctantly so'zi biror ishni xohlamay, ichki qarshilik bilan bajarishni anglatadi, ya'ni qo'mita byudjet qisqartirishni istamagan holda ma'qulladi."
  },
  {
    id: 17,
    topic: "Phrasal Verbs",
    type: "mcq",
    difficulty: "medium",
    question: "The meeting had to be ___ due to unforeseen circumstances.",
    options: [
      "called off",
      "called up",
      "called in",
      "called out"
    ],
    correctAnswerIndex: 0,
    explanation: "Call off frazal fe'li biror tadbirni bekor qilish ma'nosini bildiradi. Kutilmagan holatlar tufayli yig'ilish bekor qilinganligi haqida gapirilmoqda."
  },
  {
    id: 18,
    topic: "Phrasal Verbs",
    type: "mcq",
    difficulty: "hard",
    question: "After months of negotiations, the two companies finally ___ an agreement.",
    options: [
      "came to",
      "came across",
      "came down with",
      "came up with"
    ],
    correctAnswerIndex: 0,
    explanation: "Come to an agreement — kelishuvga erishmoq degan to'g'ri va tabiiy birikma."
  },
  {
    id: 19,
    topic: "Phrasal Verbs",
    type: "mcq",
    difficulty: "hard",
    question: "The new evidence completely ___ the original theory scientists had proposed.",
    options: [
      "brought about",
      "called into question",
      "put up with",
      "looked into"
    ],
    correctAnswerIndex: 1,
    explanation: "Call something into question — biror fikrning to'g'riligiga shubha tug'dirmoq. Yangi dalillar avvalgi nazariyani shubha ostiga qo'yadi."
  },
  {
    id: 20,
    topic: "Phrasal Verbs",
    type: "mcq",
    difficulty: "medium",
    question: "She had to ___ several job offers before finding the right one.",
    options: [
      "turn down",
      "turn up",
      "turn into",
      "turn out"
    ],
    correctAnswerIndex: 0,
    explanation: "Turn down frazal fe'li taklifni rad etish ma'nosini bildiradi. To'g'ri ishni topguncha bir nechta taklifni rad etganligi haqida gapirilmoqda."
  },
  {
    id: 21,
    topic: "Phrasal Verbs",
    type: "mcq",
    difficulty: "hard",
    question: "The investigation ___ several irregularities in the company's financial records.",
    options: [
      "brought up",
      "brought to light",
      "brought about",
      "brought back"
    ],
    correctAnswerIndex: 1,
    explanation: "Bring something to light — yashirin yoki avval noma'lum bo'lgan narsani fosh qilmoq. Tekshiruv moliyaviy hujjatlardagi kamchiliklarni aniqladi."
  },
  {
    id: 22,
    topic: "Academic Vocabulary",
    type: "mcq",
    difficulty: "hard",
    question: "The researcher's conclusions were criticized for being based on a highly ___ sample that did not represent the general population.",
    options: [
      "arbitrary",
      "meticulous",
      "comprehensive",
      "unbiased"
    ],
    correctAnswerIndex: 0,
    explanation: "Arbitrary so'zi tasodifiy, asossiz tanlangan ma'nosini bildiradi. Tadqiqot namunasi aholini to'liq ifodalamagani sababli arbitrary (asossiz tanlangan) deb tanqid qilingan."
  },
  {
    id: 23,
    topic: "Academic Vocabulary",
    type: "mcq",
    difficulty: "hard",
    question: "The professor's argument was so ___ that even experts in the field struggled to find any flaws in it.",
    options: [
      "cogent",
      "trivial",
      "ambiguous",
      "redundant"
    ],
    correctAnswerIndex: 0,
    explanation: "Cogent so'zi ishonarli, mantiqan puxta asoslangan degan ma'noni bildiradi. Professorning argumenti shu qadar puxta ediki, hatto mutaxassislar ham unda kamchilik topa olmagan."
  },
  {
    id: 24,
    topic: "Academic Vocabulary",
    type: "mcq",
    difficulty: "medium",
    question: "Choose the word closest in meaning to \"ubiquitous\" as used in: \"Smartphones have become ubiquitous in modern society.\"",
    options: [
      "rare",
      "expensive",
      "omnipresent",
      "outdated"
    ],
    correctAnswerIndex: 2,
    explanation: "Ubiquitous so'zi hamma joyda mavjud, keng tarqalgan ma'nosini bildiradi, ya'ni omnipresent so'ziga eng yaqin sinonimdir."
  },
  {
    id: 25,
    topic: "Advanced Grammar",
    type: "short",
    difficulty: "medium",
    question: "Complete using the future perfect passive: \"The new bridge ___ (build) by the end of next year.\"",
    acceptedAnswers: [
      "will have been built"
    ],
    explanation: "By the end of next year kelasi zamondagi aniq muddatgacha tugallanadigan ishni bildiradi, shuning uchun Future Perfect Passive (will have been built) qo'llaniladi."
  },
  {
    id: 26,
    topic: "Phrasal Verbs",
    type: "short",
    difficulty: "medium",
    question: "Fill in the phrasal verb: \"The salesman tried to ___ the damaged goods on an unsuspecting customer.\" (Meaning: to persuade someone to accept something unwanted)",
    acceptedAnswers: [
      "palm off",
      "fob off"
    ],
    explanation: "Palm off yoki fob off something on someone — keraksiz yoki sifatsiz narsani birovga qabul qildirishga urinish."
  },
  {
    id: 27,
    topic: "Academic Vocabulary",
    type: "short",
    difficulty: "hard",
    question: "Write a past-tense verb meaning \"to state something as a fact without giving proof\": \"The author simply ___ that the theory was correct without providing any supporting evidence.\"",
    acceptedAnswers: [
      "asserted",
      "posited"
    ],
    explanation: "Assert yoki posit fe'llari biror fikrni dalilsiz, qat'iy tarzda bayon qilishni anglatadi."
  },
  {
    id: 28,
    topic: "Advanced Grammar",
    type: "short",
    difficulty: "hard",
    question: "Transform into reported speech: He said, \"I have been working on this report since Monday.\" Complete: He said that he ___ working on that report since Monday.",
    acceptedAnswers: ["had been"],
    explanation: "Ko'chirma nutqda Present Perfect Continuous (have been working) o'tmishga o'tkazilganda Past Perfect Continuous (had been working) ga aylanadi."
  },
  {
    id: 29,
    topic: "Writing: Opinion Essay",
    skill: "writing",
    type: "essay",
    difficulty: "hard",
    question: "Some people believe that technology has made communication between people less personal, while others argue it has brought people closer together. Discuss both views and give your own opinion. Write at least 120 words.",
    modelAnswer: "There are two opposing views regarding the impact of technology on human communication. On one hand, some argue that technology has made communication less personal, since messaging apps and social media often replace face-to-face conversations, reducing emotional depth. On the other hand, others believe technology has brought people closer by allowing instant contact across long distances, regardless of location or time zone. In my opinion, while technology has certainly changed the nature of communication, it has not necessarily made it worse. Instead, it has added new dimensions, such as video calls, which help maintain close relationships despite physical distance. Ultimately, the quality of communication depends more on how people use these tools than on the technology itself."
  },
  {
    id: 30,
    topic: "Academic Vocabulary",
    skill: "writing",
    type: "essay",
    difficulty: "hard",
    question: "In your opinion, should governments invest more in renewable energy even if it is initially more expensive than fossil fuels? Support your answer with reasons and examples. Write at least 120 words.",
    modelAnswer: "In my view, governments should prioritize investment in renewable energy despite the higher initial costs, because the long-term benefits far outweigh the short-term financial burden. Fossil fuels contribute significantly to environmental degradation and climate change, which ultimately result in far greater economic and social costs, such as natural disasters and public health issues. Renewable energy sources, such as solar and wind power, not only reduce carbon emissions but also create new industries and jobs over time. Furthermore, as technology advances, the cost of renewable energy continues to decrease, making it increasingly competitive with traditional energy sources. Therefore, although the upfront investment may be substantial, the environmental and economic advantages make renewable energy a wise and necessary choice for governments to pursue."
  },
  {
    id: 31,
    topic: "Academic Vocabulary",
    type: "mcq",
    difficulty: "medium",
    question: "What is the structure shown in the picture called in English?",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Lighthouse_public_domain.jpg",
    options: ["Bridge", "Lighthouse", "Windmill", "Tower block"],
    correctAnswerIndex: 1,
    explanation: "Bu rasmda kemalarga yo'l ko'rsatish uchun qurilgan 'lighthouse' (mayoq) tasvirlangan.",
  },
  {
    id: 32,
    topic: "Listening: Campus Conversation",
    skill: "listening",
    type: "mcq",
    difficulty: "medium",
    question: "Why does the student go to the library?",
    listeningScript: "Student: Excuse me, is the second floor open? Librarian: Yes, but it closes at six today. Student: Great. I need to find a quiet place to prepare for tomorrow's biology exam. Librarian: The study rooms are on the second floor. You can book one at the desk.",
    options: ["To meet a friend", "To study for an exam", "To return a laptop", "To ask about a biology class"],
    correctAnswerIndex: 1,
    explanation: "The student says they need a quiet place to prepare for a biology exam."
  },
  {
    id: 33,
    topic: "Listening: Travel Announcement",
    skill: "listening",
    type: "mcq",
    difficulty: "medium",
    question: "What should passengers on the 10:15 train to York do?",
    listeningScript: "Attention, please. The 10:15 train to York will now depart from platform six instead of platform four. The train is running approximately ten minutes late. Passengers should keep their tickets ready and listen for further announcements.",
    options: ["Go to platform six", "Take the 10:30 train", "Buy a new ticket", "Wait at platform four"],
    correctAnswerIndex: 0,
    explanation: "The announcement says the train to York will leave from platform six."
  },
  {
    id: 34,
    topic: "Listening: Class Instructions",
    skill: "listening",
    type: "mcq",
    difficulty: "hard",
    question: "When must students submit the report?",
    listeningScript: "Teacher: Your project reports are due on Thursday, not Wednesday as I said last week. Please upload the final version before five in the afternoon. I will give you feedback by email over the weekend. Student: Should we include the survey results? Teacher: Yes, include them in an appendix.",
    options: ["Wednesday before 5 p.m.", "Thursday before 5 p.m.", "Thursday over the weekend", "Friday by email"],
    correctAnswerIndex: 1,
    explanation: "The teacher corrects the deadline to Thursday and says to upload it before 5 p.m."
  },
  {
    id: 35,
    topic: "Listening: Everyday Conversation",
    skill: "listening",
    type: "mcq",
    difficulty: "medium",
    question: "What will the speakers probably do this afternoon?",
    listeningScript: "A: Are we still going to the park this afternoon? B: I checked the forecast. It will rain until about three, but then it should clear up. A: In that case, let's meet at the park entrance at half past three. B: Perfect. I'll bring the sandwiches.",
    options: ["Cancel their plans", "Meet at the park at 3:30", "Have lunch at a restaurant", "Wait until tomorrow"],
    correctAnswerIndex: 1,
    explanation: "They agree to meet at the park entrance at half past three, after the rain stops."
  },
  {
    id: 36,
    topic: "Listening: Workplace Message",
    skill: "listening",
    type: "mcq",
    difficulty: "hard",
    question: "Why has the team meeting been moved?",
    listeningScript: "Hi team, this is a message from Daniel. Our weekly meeting has been moved from room 12 to the small conference room beside reception because the projector in room 12 is being repaired. The meeting will still begin at eleven. Please bring the printed budget summaries.",
    options: ["The meeting time has changed", "The projector is being repaired", "The budget summaries are missing", "Reception is closed"],
    correctAnswerIndex: 1,
    explanation: "The meeting was moved because the projector in room 12 is being repaired."
  },
  {
    id: 37,
    topic: "Listening: Short Interview",
    skill: "listening",
    type: "mcq",
    difficulty: "hard",
    question: "What did the speaker find most useful about the course?",
    listeningScript: "Interviewer: What did you enjoy most about the writing course? Speaker: The lectures were interesting, but the weekly peer reviews helped me most. Reading my classmates' drafts showed me different ways to organize an argument. I also became more confident giving constructive feedback.",
    options: ["The weekly peer reviews", "The final examination", "The computer lessons", "The guest lectures"],
    correctAnswerIndex: 0,
    explanation: "The speaker says the weekly peer reviews helped the most."
  },
  {
    id: 38,
    topic: "Speaking: Personal Experience",
    skill: "speaking",
    type: "speaking",
    difficulty: "medium",
    question: "Speak for about one minute: describe a skill you learned recently. Explain why you learned it and how you practise it."
  },
  {
    id: 39,
    topic: "Speaking: Giving an Opinion",
    skill: "speaking",
    type: "speaking",
    difficulty: "hard",
    question: "Speak for one to two minutes: should university students be required to do volunteer work? Give your opinion and support it with reasons and an example."
  },
  {
    id: 40,
    topic: "Speaking: Comparing Options",
    skill: "speaking",
    type: "speaking",
    difficulty: "medium",
    question: "Speak for about one minute: compare studying alone with studying in a group. Which works better for you, and why?"
  },
  {
    id: 41,
    topic: "Speaking: Future Plans",
    skill: "speaking",
    type: "speaking",
    difficulty: "hard",
    question: "Speak for one to two minutes about a change you would like to see in your town or city. Describe the change and explain how it would help people."
  }
];
