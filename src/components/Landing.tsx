import { useEffect, useState } from "react";
import type { SubjectSummary } from "../types";
import { fetchSubjects } from "../api";

interface LandingProps {
  onEnter: () => void;
}

const FEATURES = [
  {
    icon: "🎯",
    title: "9 ta fan, 270+ savol",
    desc: "Matematika, Fizika, Kimyo, Biologiya, Ingliz tili, Ona tili, Tarix, Geografiya, Informatika — barchasi o'rta va qiyin darajada.",
  },
  {
    icon: "🧠",
    title: "Aralash savol turlari",
    desc: "Variantli, qisqa yozma javob va erkin fikr bildirish (insho) savollari — haqiqiy imtihonga yaqin format.",
  },
  {
    icon: "📊",
    title: "Smart Level Evaluation",
    desc: "Natijangiz asosida A dan D gacha daraja aniqlanadi va qaysi mavzuni takrorlash kerakligi bo'yicha aniq tavsiya beriladi.",
  },
  {
    icon: "🔒",
    title: "Xavfsiz nazorat",
    desc: "To'liq ekran rejimi, nusxalashni bloklash va tab almashtirishni kuzatish — natija ishonchli bo'lishini ta'minlaydi.",
  },
  {
    icon: "🎓",
    title: "Sertifikat",
    desc: "A yoki B daraja olsangiz, istalgan fandan yuklab olinadigan/chop etiladigan sertifikat generatsiya qilinadi.",
  },
  {
    icon: "📈",
    title: "Progress tarixi",
    desc: "Barcha o'tgan urinishlaringiz saqlanadi — vaqt o'tishi bilan qanday rivojlanayotganingizni ko'rasiz.",
  },
];

const STEPS = [
  { n: "01", title: "Ro'yxatdan o'ting", desc: "Ism-familiyangizni kiritib, bir zumda tizimga kiring — parol yoki murakkab ro'yxatdan o'tish shart emas." },
  { n: "02", title: "Fan tanlang", desc: "9 ta fandan birini tanlang — har birida mavzular bo'yicha taqsimlangan real savollar." },
  { n: "03", title: "Testni ishlang", desc: "Belgilangan vaqt ichida variantli, qisqa javobli va erkin fikr savollariga javob bering." },
  { n: "04", title: "Natija va tavsiya oling", desc: "Darajangiz aniqlanadi, xato javoblar izohlanadi va qaysi mavzuni takrorlash kerakligi ko'rsatiladi." },
];

const LEVELS_PREVIEW = [
  { code: "A", range: "86–100%", label: "A'lo, imtihonga tayyor", classes: "bg-green-50 border-green-200 text-green-700" },
  { code: "B", range: "70–85%", label: "Yaxshi, ozgina takrorlash kerak", classes: "bg-blue-50 border-blue-200 text-blue-700" },
  { code: "C", range: "55–69%", label: "Qoniqarli, mustahkamlash lozim", classes: "bg-yellow-50 border-yellow-200 text-yellow-700" },
  { code: "D", range: "< 55%", label: "Jiddiy tayyorgarlik kerak", classes: "bg-red-50 border-red-200 text-red-700" },
];

const FAQ = [
  {
    q: "Test bepulmi?",
    a: "Ha, barcha fanlar va testlar to'liq bepul. Ro'yxatdan o'tish uchun faqat ismingizni kiritishingiz kifoya.",
  },
  {
    q: "Har bir fandan nechta savol bor?",
    a: "Har bir fanda 30 dan ortiq savol bor: variantli, qisqa yozma javobli va erkin fikr bildiruvchi (insho) turlari aralash keladi.",
  },
  {
    q: "Sertifikatni qanday olaman?",
    a: "Test yakunida A yoki B daraja olsangiz, natija sahifasida \"Sertifikatni ko'rish\" tugmasi orqali PDF sifatida saqlashingiz yoki chop etishingiz mumkin.",
  },
  {
    q: "Testni qayta topshirish mumkinmi?",
    a: "Ha, istalgan fandan istalgancha marta qayta test topshirishingiz mumkin — har safar savollar va variantlar tartibi yangilanadi.",
  },
  {
    q: "Test davomida boshqa oynaga o'tsam nima bo'ladi?",
    a: "Tizim buni kuzatib boradi va ogohlantiradi. Uch martadan ortiq buzilsa, test avtomatik yakunlanadi — bu natijaning ishonchliligini ta'minlaydi.",
  },
];

export default function Landing({ onEnter }: LandingProps) {
  const [subjects, setSubjects] = useState<SubjectSummary[] | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  useEffect(() => {
    fetchSubjects()
      .then(setSubjects)
      .catch(() => setSubjects(null));
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <div className="relative isolate overflow-hidden bg-gradient-to-br from-indigo-700 via-indigo-600 to-violet-700">
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-indigo-600 via-indigo-500 to-violet-600" />
        <div className="absolute inset-0 z-0 opacity-20 [background-image:radial-gradient(circle_at_20%_20%,white,transparent_35%),radial-gradient(circle_at_80%_0%,white,transparent_30%)]" />
        <div aria-hidden="true" className="absolute -right-36 top-16 z-0 h-96 w-96 rounded-full border border-white/10 sm:right-[-5rem] sm:top-20 sm:h-[34rem] sm:w-[34rem]" />
        <div aria-hidden="true" className="absolute -right-20 top-32 z-0 h-64 w-64 rounded-full border border-white/10 sm:right-0 sm:top-36 sm:h-80 sm:w-80" />

        <div className="relative z-10 max-w-6xl mx-auto px-5 pt-7 pb-16 sm:px-8 sm:pt-9 sm:pb-20 lg:pb-24">
          <div className="flex items-center gap-3 mb-14 sm:mb-16">
            <div className="w-10 h-10 rounded-xl bg-white/15 backdrop-blur flex items-center justify-center text-white font-bold border border-white/20 shadow-lg shadow-indigo-950/10">
              S
            </div>
            <span className="font-display font-bold tracking-tight text-white/95">Eduvia</span>
          </div>

          <div className="grid items-center gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:gap-12">
          <div className="min-w-0">
          <div className="max-w-xl">
            <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-wide uppercase text-indigo-50 bg-white/10 border border-white/20 rounded-full px-3.5 py-1.5 mb-6 shadow-sm shadow-indigo-950/10">
              <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-emerald-300" />
              Bilimingizni sinab ko'ring
            </span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.25rem] font-extrabold text-white leading-[1.12] tracking-tight mb-6 max-w-2xl">
              Sertifikatga tayyorgarligingizni bir necha daqiqada aniqlang
            </h1>
            <p className="text-indigo-100/95 text-base sm:text-lg leading-8 mb-8 max-w-xl">
              9 ta fan bo'yicha real formatdagi test topshiring, kuchli va zaif tomonlaringizni ko'ring, shaxsiy
              tavsiyalar oling va sertifikat qo'lga kiriting.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={onEnter}
                className="inline-flex items-center gap-2 bg-white text-indigo-700 font-semibold px-6 py-3.5 rounded-xl shadow-lg shadow-indigo-950/20 hover:-translate-y-0.5 hover:bg-indigo-50 hover:shadow-xl transition-all focus-visible:outline-white"
              >
                Kirish
                <span aria-hidden="true">→</span>
              </button>
              <span className="text-indigo-100 text-sm">Ro'yxatdan o'tish shart emas, bepul va tezkor</span>
            </div>
          </div>



          {/* Stat strip */}
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-x-5 gap-y-5 max-w-xl border-t border-white/20 pt-6">
            {[
              ["9", "fan"],
              ["270+", "savol"],
              ["3", "savol turi"],
              ["4", "daraja"],
            ].map(([num, label]) => (
              <div key={label} className="text-white">
                <p className="font-display text-2xl sm:text-3xl font-extrabold tracking-tight">{num}</p>
                <p className="text-indigo-100/80 text-xs sm:text-sm mt-0.5">{label}</p>
              </div>
            ))}
          </div>
        </div>
          <figure className="relative hidden h-[30rem] min-w-0 overflow-hidden rounded-[2rem] border border-white/20 bg-indigo-950 shadow-2xl shadow-indigo-950/30 lg:block xl:h-[34rem]">
            <img
              src="https://images.unsplash.com/photo-1741699427799-3fbb70fce948?auto=format&fit=crop&w=1400&q=80"
              alt="Talaba kutubxonada noutbuk va daftar bilan tayyorlanmoqda"
              fetchPriority="high"
              decoding="async"
              className="h-full w-full object-cover object-center opacity-90"
            />
            <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-indigo-950/85 via-indigo-950/10 to-indigo-950/5" />
            <figcaption className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6 text-white">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-indigo-100">Maqsad sari</p>
                <p className="font-display mt-1 text-lg font-bold">Har bir urinish — bir qadam oldinga</p>
              </div>
              <a
                href="https://unsplash.com/photos/students-study-in-a-beautiful-large-library-Ma7aOy5mMp0"
                target="_blank"
                rel="noreferrer"
                className="shrink-0 rounded-full border border-white/30 bg-white/10 px-3 py-1.5 text-[11px] font-medium text-white/90 backdrop-blur hover:bg-white/20"
              >
                Foto: Unsplash
              </a>
            </figcaption>
          </figure>
          </div>
        </div>
      </div>

      {/* Feature cards (overlapping hero) */}
      <section className="relative z-10 max-w-6xl mx-auto px-5 pt-10 pb-8 sm:px-8 sm:pt-12 sm:pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {FEATURES.map((f) => (
            <div key={f.title} className="group bg-white rounded-2xl border border-slate-200/80 shadow-[0_2px_12px_rgba(15,23,42,0.035)] p-6 transition-all duration-200 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-lg hover:shadow-indigo-950/5">
              <div className="w-11 h-11 flex items-center justify-center rounded-xl bg-indigo-50 text-2xl mb-4 ring-1 ring-indigo-100/70 transition-colors group-hover:bg-indigo-100">{f.icon}</div>
              <h3 className="font-semibold text-slate-900 mb-2 tracking-tight">{f.title}</h3>
              <p className="text-sm text-slate-500 leading-6">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <div className="max-w-5xl mx-auto px-4 py-16">
        <div className="text-center mb-10">
          <span className="text-xs font-semibold tracking-wide uppercase text-indigo-600">Jarayon</span>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-800 mt-2">Qanday ishlaydi</h2>
          <p className="text-slate-500 text-sm mt-2 max-w-lg mx-auto">
            To'rtta oddiy qadamda testni yakunlaysiz va natijangizni olasiz.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {STEPS.map((s) => (
            <div key={s.n} className="relative bg-white rounded-2xl border border-slate-200/70 p-5">
              <span className="font-display text-3xl font-extrabold text-indigo-100">{s.n}</span>
              <h3 className="font-semibold text-slate-800 mt-1 mb-1.5">{s.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Level system */}
      <div className="bg-white border-y border-slate-200/70">
        <div className="max-w-5xl mx-auto px-4 py-16">
          <div className="text-center mb-10">
            <span className="text-xs font-semibold tracking-wide uppercase text-indigo-600">Baholash</span>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-800 mt-2">Milliy daraja shkalasi</h2>
            <p className="text-slate-500 text-sm mt-2 max-w-lg mx-auto">
              Natijangiz avtomatik ravishda quyidagi to'rt darajadan biriga moslanadi.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {LEVELS_PREVIEW.map((lvl) => (
              <div key={lvl.code} className={`rounded-2xl border p-5 ${lvl.classes}`}>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-display text-2xl font-extrabold">{lvl.code}</span>
                  <span className="text-xs font-semibold">{lvl.range}</span>
                </div>
                <p className="text-sm">{lvl.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Subjects preview */}
      <div className="max-w-5xl mx-auto px-4 py-16">
        <div className="text-center mb-10">
          <span className="text-xs font-semibold tracking-wide uppercase text-indigo-600">Fanlar</span>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-800 mt-2">Mavjud fanlar ro'yxati</h2>
        </div>
        {subjects ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {subjects.map((s) => (
              <div
                key={s.id}
                className="bg-white rounded-xl border border-slate-200/70 p-4 text-center hover:border-indigo-200 hover:-translate-y-0.5 transition-all"
              >
                <div className="text-2xl mb-1.5">{s.icon}</div>
                <p className="text-sm font-medium text-slate-700">{s.name}</p>
                <p className="text-[11px] text-slate-400 mt-0.5">{s.questionCount} savol</p>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {Array.from({ length: 9 }).map((_, i) => (
              <div key={i} className="h-24 rounded-xl bg-slate-100 animate-pulse" />
            ))}
          </div>
        )}
      </div>

      {/* FAQ */}
      <div className="bg-white border-y border-slate-200/70">
        <div className="max-w-3xl mx-auto px-4 py-16">
          <div className="text-center mb-10">
            <span className="text-xs font-semibold tracking-wide uppercase text-indigo-600">Savol-javob</span>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-800 mt-2">Ko'p so'raladigan savollar</h2>
          </div>
          <div className="space-y-3">
            {FAQ.map((item, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={item.q} className="rounded-xl border border-slate-200/70 overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full flex items-center justify-between gap-3 px-4 py-3.5 text-left bg-slate-50/60 hover:bg-slate-50"
                  >
                    <span className="font-medium text-slate-800 text-sm">{item.q}</span>
                    <span className={`text-slate-400 transition-transform ${isOpen ? "rotate-45" : ""}`}>+</span>
                  </button>
                  {isOpen && <div className="px-4 py-3.5 text-sm text-slate-500 leading-relaxed">{item.a}</div>}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div className="max-w-5xl mx-auto px-4 py-16 text-center">
        <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-800 mb-3">Tayyor bo'lsangiz, boshlaymiz</h2>
        <p className="text-slate-500 text-sm mb-7 max-w-md mx-auto">
          Bir necha daqiqada bilim darajangizni bilib oling va sertifikatga tayyorgarligingizni mustahkamlang.
        </p>
        <button
          onClick={onEnter}
          className="inline-flex items-center gap-2 bg-indigo-600 text-white font-semibold px-6 py-3 rounded-xl shadow-sm hover:bg-indigo-700 transition-colors"
        >
          Testni boshlash uchun kiring →
        </button>
      </div>

      {/* Footer */}
      <footer className="border-t border-slate-200/70">
        <div className="max-w-5xl mx-auto px-4 py-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md bg-gradient-to-br from-indigo-600 to-violet-600 flex items-center justify-center text-white text-[11px] font-bold">
              S
            </div>
            <span className="text-sm font-medium text-slate-600">Eduvia</span>
          </div>
          <p className="text-xs text-slate-400">Ta'lim maqsadida yaratilgan platforma · barcha huquqlar himoyalangan emas</p>
        </div>
      </footer>
    </div>
  );
}
