"use client";

import { useEffect, useRef, useState } from "react";
import { Check, Copy } from "lucide-react";

export function CopyButton({
  text,
  label = "Copy",
  copiedLabel = "Copied",
}: {
  text: string;
  label?: string;
  copiedLabel?: string;
}) {
  const [copied, setCopied] = useState(false);
  const timeoutRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
    };
  }, []);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      timeoutRef.current = window.setTimeout(() => setCopied(false), 2200);
    } catch {
      const textarea = document.createElement("textarea");
      textarea.value = text;
      textarea.style.position = "fixed";
      textarea.style.opacity = "0";
      document.body.appendChild(textarea);
      textarea.select();
      const succeeded = document.execCommand("copy");
      document.body.removeChild(textarea);
      if (succeeded) {
        setCopied(true);
        timeoutRef.current = window.setTimeout(() => setCopied(false), 2200);
      }
    }
  };

  return (
    <button type="button" onClick={copy} className="copy-button" aria-live="polite">
      {copied ? (
        <>
          <Check size={11} strokeWidth={1.8} aria-hidden="true" />
          {copiedLabel}
        </>
      ) : (
        <>
          <Copy size={11} strokeWidth={1.6} aria-hidden="true" />
          {label}
        </>
      )}
    </button>
  );
}
