"use client";

import { ShieldCheck } from "lucide-react";
import { useEffect, useState } from "react";

import Link from "next/link";

const COOKIE_NAME = "opencorex_cookie_consent";
const STORAGE_KEY = "opencorex_cookie_preferences";
const COOKIE_MAX_AGE = 60 * 60 * 24 * 180;

type ConsentState = "accepted" | "declined" | null;

const readCookieConsent = () => {
  if (typeof document === "undefined") return null;

  const value = document.cookie
    .split("; ")
    .find((item) => item.startsWith(`${COOKIE_NAME}=`))
    ?.split("=")[1];

  if (value === "accepted" || value === "declined") {
    return value;
  }

  return null;
};

const persistConsent = (value: Exclude<ConsentState, null>) => {
  const payload = JSON.stringify({
    value,
    updatedAt: new Date().toISOString(),
  });

  document.cookie = `${COOKIE_NAME}=${value}; Max-Age=${COOKIE_MAX_AGE}; Path=/; SameSite=Lax`;
  window.localStorage.setItem(STORAGE_KEY, payload);
};

const CookieConsent = () => {
  const [consent, setConsent] = useState<ConsentState>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const cookieValue = readCookieConsent();

    if (cookieValue) {
      setConsent(cookieValue);
      setReady(true);
      return;
    }

    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        const parsed = JSON.parse(stored) as { value?: ConsentState };
        if (parsed.value === "accepted" || parsed.value === "declined") {
          setConsent(parsed.value);
        }
      } catch {
        window.localStorage.removeItem(STORAGE_KEY);
      }
    }

    setReady(true);
  }, []);

  const handleConsent = (value: Exclude<ConsentState, null>) => {
    persistConsent(value);
    setConsent(value);
  };

  if (!ready || consent) {
    return null;
  }

  return (
    <div className="fixed inset-x-4 bottom-4 z-50 mx-auto w-auto max-w-3xl rounded-[1.75rem] border border-[var(--line-strong)] bg-[rgba(8,8,8,0.96)] p-5 shadow-[0_20px_60px_rgba(0,0,0,0.55)] backdrop-blur">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-2xl">
          <p className="eyebrow">
            <ShieldCheck className="h-4 w-4" />
            Cookies and storage
          </p>
          <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
            We use a small consent cookie and local storage entry to remember your cookie choice on
            this site. You can read the storage details in{" "}
            <Link href="/docs#cookies-storage" className="font-semibold text-white underline underline-offset-4">
              Cookies and storage
            </Link>
            .
          </p>
        </div>

        <div className="flex w-full flex-col gap-3 lg:w-[180px]">
          <button
            onClick={() => handleConsent("accepted")}
            className="button-primary w-full justify-center px-4 py-3"
          >
            Accept cookies
          </button>
          <button
            onClick={() => handleConsent("declined")}
            className="button-secondary w-full justify-center px-4 py-3"
          >
            Decline
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
