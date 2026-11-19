import { useEffect, useRef, useState } from "react";

interface ExamSecurityOptions {
  enabled: boolean;
  maxViolations: number;
  onViolation?: (reason: string, count: number) => void;
  onForceSubmit?: (count: number) => void;
}

interface ExamSecurityState {
  violationCount: number;
  lastWarning: string | null;
}

const BLOCKED_SHORTCUT_LABEL = "Taqiqlangan tugmalar/qisqa yo'l ishlatildi";
const TAB_SWITCH_LABEL = "Boshqa oyna yoki bo'limga o'tildi";
const FULLSCREEN_EXIT_LABEL = "To'liq ekran rejimidan chiqildi";

export function useExamSecurity({
  enabled,
  maxViolations,
  onViolation,
  onForceSubmit,
}: ExamSecurityOptions): ExamSecurityState {
  const [violationCount, setViolationCount] = useState(0);
  const [lastWarning, setLastWarning] = useState<string | null>(null);

  const forceSubmittedRef = useRef(false);
  const onViolationRef = useRef(onViolation);
  const onForceSubmitRef = useRef(onForceSubmit);
  onViolationRef.current = onViolation;
  onForceSubmitRef.current = onForceSubmit;

  useEffect(() => {
    if (!enabled) return;

    function registerViolation(reason: string) {
      if (forceSubmittedRef.current) return;
      setViolationCount((prev) => {
        const next = prev + 1;
        setLastWarning(reason);
        onViolationRef.current?.(reason, next);
        if (next >= maxViolations) {
          forceSubmittedRef.current = true;
          onForceSubmitRef.current?.(next);
        }
        return next;
      });
    }

    function handleContextMenu(e: MouseEvent) {
      e.preventDefault();
    }
    function handleCopyOrCut(e: ClipboardEvent) {
      e.preventDefault();
    }
    function handleSelectStart(e: Event) {
      e.preventDefault();
    }
    function handleKeyDown(e: KeyboardEvent) {
      const key = e.key.toUpperCase();
      const isBlocked =
        e.key === "PrintScreen" ||
        key === "F12" ||
        (e.ctrlKey && e.shiftKey && ["I", "J", "C", "S"].includes(key)) ||
        (e.ctrlKey && (key === "U" || key === "P")) ||
        (e.metaKey && e.shiftKey && ["3", "4", "5"].includes(e.key));

      if (isBlocked) {
        e.preventDefault();
        registerViolation(BLOCKED_SHORTCUT_LABEL);
      }
    }
    function handleVisibilityChange() {
      if (document.hidden) {
        registerViolation(TAB_SWITCH_LABEL);
      }
    }
    function handleFullscreenChange() {
      if (!document.fullscreenElement) {
        registerViolation(FULLSCREEN_EXIT_LABEL);
      }
    }

    document.addEventListener("contextmenu", handleContextMenu);
    document.addEventListener("copy", handleCopyOrCut);
    document.addEventListener("cut", handleCopyOrCut);
    document.addEventListener("selectstart", handleSelectStart);
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("visibilitychange", handleVisibilityChange);
    document.addEventListener("fullscreenchange", handleFullscreenChange);

    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("copy", handleCopyOrCut);
      document.removeEventListener("cut", handleCopyOrCut);
      document.removeEventListener("selectstart", handleSelectStart);
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
    };
  }, [enabled, maxViolations]);

  return { violationCount, lastWarning };
}
