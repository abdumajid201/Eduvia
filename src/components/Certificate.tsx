import type { LevelInfo } from "../types";

interface CertificateProps {
  userName: string;
  subjectName: string;
  scorePercent: number;
  level: LevelInfo;
  onBack: () => void;
}

export default function Certificate({ userName, subjectName, scorePercent, level, onBack }: CertificateProps) {
  const issueDate = new Date().toLocaleDateString("uz-UZ", { year: "numeric", month: "long", day: "numeric" });

  return (
    <div className="min-h-screen py-10 px-4">
      <div className="max-w-2xl mx-auto no-print mb-4 flex justify-between items-center">
        <button onClick={onBack} className="text-sm text-slate-500 hover:text-slate-700">
          ← Orqaga
        </button>
        <button
          onClick={() => window.print()}
          className="px-4 py-2 rounded-lg bg-indigo-600 text-white text-sm font-medium hover:bg-indigo-700"
        >
          🖨️ PDF sifatida saqlash
        </button>
      </div>

      <div className="max-w-2xl mx-auto bg-white border-8 border-double border-amber-300 rounded-2xl p-10 text-center shadow-sm">
        <p className="text-xs tracking-[0.3em] uppercase text-slate-400 mb-2">Sertifikat</p>
        <h1 className="font-display text-2xl font-bold text-slate-800 mb-1">Bilim darajasi sertifikati</h1>
        <div className="w-16 h-1 bg-amber-400 mx-auto my-4 rounded" />

        <p className="text-sm text-slate-500">Ushbu sertifikat quyidagi shaxsga topshiriladi:</p>
        <p className="text-2xl font-semibold text-slate-900 my-3">{userName}</p>

        <p className="text-sm text-slate-600 leading-relaxed max-w-md mx-auto">
          <span className="font-medium">{subjectName}</span> fanidan o'tkazilgan sertifikatlashtiruvchi testda{" "}
          <span className="font-semibold">{scorePercent}%</span> natija bilan{" "}
          <span className="font-semibold">{level.title}</span> darajasiga erishganligini tasdiqlaydi.
        </p>

        <div className="flex items-center justify-center gap-8 mt-8">
          <div className="text-center">
            <p className="text-lg font-bold text-slate-800">{scorePercent}%</p>
            <p className="text-xs text-slate-400">Natija</p>
          </div>
          <div className="text-center">
            <p className="text-lg font-bold text-slate-800">{level.code}</p>
            <p className="text-xs text-slate-400">Daraja</p>
          </div>
          <div className="text-center">
            <p className="text-lg font-bold text-slate-800">{issueDate}</p>
            <p className="text-xs text-slate-400">Sana</p>
          </div>
        </div>

        <p className="text-[11px] text-slate-300 mt-10">Eduvia platformasi · avtomatik generatsiya qilingan</p>
      </div>
    </div>
  );
}
