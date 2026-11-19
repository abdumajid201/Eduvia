import { useState } from "react";

interface LoginProps {
  onLogin: (fullName: string) => void;
}

export default function Login({ onLogin }: LoginProps) {
  const [fullName, setFullName] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const trimmed = fullName.trim();
    if (trimmed.length < 3) {
      setError("Ism familiyangizni to'liq kiriting (kamida 3 ta belgi).");
      return;
    }
    setError("");
    onLogin(trimmed);
  }

  return (
    <div className="min-h-[calc(100vh-64px)] flex items-center justify-center px-4 py-12 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-100/70 via-transparent to-transparent">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white rounded-3xl border border-slate-200/80 shadow-xl shadow-slate-300/30 p-7 sm:p-9"
      >
        <div className="text-center mb-6">
          <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-indigo-600 to-violet-600 flex items-center justify-center text-2xl mb-5 shadow-lg shadow-indigo-200">
            🎓
          </div>
          <h1 className="font-display text-2xl font-bold tracking-tight text-slate-900">Xush kelibsiz</h1>
          <p className="text-sm text-slate-500 mt-2">Davom etish uchun ismingizni kiriting</p>
        </div>

        <label className="block text-sm font-medium text-slate-700 mb-1">Ism familiya</label>
        <input
          type="text"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          placeholder="Masalan: Nazarova Mukhlisa"
          className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-slate-50/60 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
          autoFocus
        />
        {error && <p className="text-xs text-red-600 mt-2">{error}</p>}

        <button
          type="submit"
          className="w-full mt-6 py-3 rounded-xl bg-indigo-600 text-white text-sm font-semibold hover:bg-indigo-700 shadow-md shadow-indigo-200 transition-all hover:-translate-y-0.5"
        >
          Davom etish
        </button>
      </form>
    </div>
  );
}
