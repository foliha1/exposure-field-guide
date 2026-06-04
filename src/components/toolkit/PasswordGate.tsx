import { useEffect, useState, type ReactNode, type FormEvent } from "react";
import exposureLight from "@/assets/logos/EXPOSURE_Light.svg.asset.json";

const STORAGE_KEY = "ex-toolkit-unlocked";
const PASSWORD = "EXPOSUREKIT26";

export function PasswordGate({ children }: { children: ReactNode }) {
  const [mounted, setMounted] = useState(false);
  const [unlocked, setUnlocked] = useState(false);
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    setMounted(true);
    try {
      if (localStorage.getItem(STORAGE_KEY) === "1") setUnlocked(true);
    } catch {
      // ignore
    }
  }, []);

  if (!mounted) {
    return <div className="min-h-screen bg-ex-black" aria-hidden="true" />;
  }

  if (unlocked) return <>{children}</>;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (value.trim() === PASSWORD) {
      try {
        localStorage.setItem(STORAGE_KEY, "1");
      } catch {
        // ignore
      }
      setUnlocked(true);
    } else {
      setError(true);
    }
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-ex-black px-6 text-ex-white">
      <div className="w-full max-w-sm">
        <div className="flex justify-center">
          <img
            src={exposureLight.url}
            alt="EXPOSURE"
            className="h-6 w-auto md:h-7"
          />
        </div>

        <p className="mt-10 text-center text-[10px] font-bold uppercase tracking-[0.28em] text-ex-red">
          Restricted · Internal Use
        </p>
        <h1 className="mt-3 text-center font-sans text-xl font-medium tracking-tight">
          Brand Toolkit
        </h1>
        <p className="mt-2 text-center text-sm leading-relaxed text-ex-white/55">
          Enter the access password to continue.
        </p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-3">
          <input
            type="password"
            autoFocus
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
              if (error) setError(false);
            }}
            placeholder="Password"
            aria-label="Access password"
            aria-invalid={error}
            className={`w-full border bg-transparent px-4 py-3 font-sans text-sm tracking-wide text-ex-white placeholder:text-ex-white/30 focus:outline-none transition-colors ${
              error
                ? "border-ex-red"
                : "border-ex-white/20 focus:border-ex-white/60"
            }`}
          />
          {error && (
            <p className="text-[11px] uppercase tracking-[0.22em] text-ex-red">
              Incorrect password
            </p>
          )}
          <button
            type="submit"
            className="w-full bg-ex-red px-4 py-3 text-[11px] font-bold uppercase tracking-[0.22em] text-ex-white transition-colors hover:bg-ex-red/90 active:translate-y-px"
          >
            Enter
          </button>
        </form>

        <p className="mt-10 text-center font-mono text-[10px] uppercase tracking-[0.22em] text-ex-white/30">
          EXPOSURE by 29029
        </p>
      </div>
    </div>
  );
}