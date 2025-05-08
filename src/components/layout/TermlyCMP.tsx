"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useMemo, useRef } from "react";

const SCRIPT_SRC_BASE = "https://app.termly.io";

interface TermlyCMPProps {
  autoBlock?: boolean;
  masterConsentsOrigin?: string;
  websiteUUID: string;
}

declare global {
  interface Window {
    Termly?: {
      initialize: () => void;
    };
  }
}

export default function TermlyCMP({
  autoBlock,
  masterConsentsOrigin,
  websiteUUID,
}: TermlyCMPProps) {
  const scriptSrc = useMemo(() => {
    const src = new URL(SCRIPT_SRC_BASE);
    src.pathname = `/resource-blocker/${websiteUUID}`;
    if (autoBlock) {
      src.searchParams.set("autoBlock", "on");
    }
    if (masterConsentsOrigin) {
      src.searchParams.set("masterConsentsOrigin", masterConsentsOrigin);
    }
    return src.toString();
  }, [autoBlock, masterConsentsOrigin, websiteUUID]);

  const isScriptAdded = useRef(false);

  useEffect(() => {
    if (isScriptAdded.current) return;
    const script = document.createElement("script");
    script.src = scriptSrc;
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);
    isScriptAdded.current = true;
  }, [scriptSrc]);

  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    window.Termly?.initialize();
  }, [pathname, searchParams]);

  return null;
}
