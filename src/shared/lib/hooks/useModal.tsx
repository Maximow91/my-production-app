import { useCallback, useEffect, useRef, useState } from "react";

interface UseModalProps {
  onClose?: () => void;
  isOpen?: boolean;
  delay?: number;
}

export function useModal({ onClose, isOpen, delay }: UseModalProps) {
  const [isClosing, setIsClosing] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  const timerRef = useRef<ReturnType<typeof setTimeout>>();

  const close = useCallback(() => {
    if (onClose) {
      setIsClosing(true);
      timerRef.current = setTimeout(() => {
        onClose();
        setIsClosing(false);
      }, delay);
    }
  }, [onClose, delay]);

  const onKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        close();
      }
    },
    [close],
  );

  useEffect(() => {
    if (isOpen) {
      window.addEventListener("keydown", onKeyDown);
    }
    return () => {
      clearTimeout(timerRef.current);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen, onKeyDown]);

  useEffect(() => {
    setIsMounted(true);
  }, [isOpen]);

  return {
    isClosing,
    isMounted,
    close,
  };
}
