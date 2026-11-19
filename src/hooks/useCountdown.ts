import { useEffect, useRef, useState } from "react";

export function useCountdown(totalSeconds: number, onExpire: () => void, active: boolean): number {
  const [secondsLeft, setSecondsLeft] = useState(totalSeconds);
  const onExpireRef = useRef(onExpire);
  onExpireRef.current = onExpire;

  useEffect(() => {
    if (!active || totalSeconds <= 0) return;

    // The quiz first renders before its questions arrive, so totalSeconds is
    // initially 0. Start/reset the countdown once the real duration is known.
    let remaining = totalSeconds;
    setSecondsLeft(totalSeconds);
    const timerId = window.setInterval(() => {
      remaining -= 1;
      setSecondsLeft(remaining);
      if (remaining <= 0) {
        window.clearInterval(timerId);
        onExpireRef.current();
      }
    }, 1000);

    return () => window.clearInterval(timerId);
  }, [totalSeconds, active]);

  return secondsLeft;
}

export function formatSeconds(totalSeconds: number): string {
  const safe = Math.max(0, totalSeconds);
  const minutes = Math.floor(safe / 60)
    .toString()
    .padStart(2, "0");
  const seconds = Math.floor(safe % 60)
    .toString()
    .padStart(2, "0");
  return `${minutes}:${seconds}`;
}
