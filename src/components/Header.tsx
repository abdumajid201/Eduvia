interface HeaderProps {
  userName?: string;
  right?: React.ReactNode;
}

export default function Header({ userName, right }: HeaderProps) {
  return (
    <header className="no-print sticky top-0 z-40 border-b border-slate-200/70 bg-white/90 backdrop-blur-xl">
      <div className="max-w-6xl mx-auto px-5 py-3.5 sm:px-8 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-600 to-violet-600 flex items-center justify-center text-white text-sm font-bold shadow-md shadow-indigo-200">
            S
          </div>
          <span className="font-display font-bold tracking-tight text-slate-800 text-sm sm:text-base">Eduvia</span>
        </div>
        <div className="flex items-center gap-3">
          {userName && (
            <span className="hidden sm:flex items-center gap-1.5 text-xs text-slate-500">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              {userName}
            </span>
          )}
          {right}
        </div>
      </div>
    </header>
  );
}
