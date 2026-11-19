interface WatermarkProps {
  text: string;
}

export default function Watermark({ text }: WatermarkProps) {
  const tiles = Array.from({ length: 24 });

  return (
    <div className="pointer-events-none fixed inset-0 z-[60] overflow-hidden select-none" aria-hidden="true">
      <div className="absolute -inset-1/4 flex flex-wrap content-around justify-around -rotate-[25deg] opacity-[0.08]">
        {tiles.map((_, idx) => (
          <span key={idx} className="whitespace-nowrap text-sm font-semibold text-slate-900 m-10">
            {text}
          </span>
        ))}
      </div>
    </div>
  );
}
