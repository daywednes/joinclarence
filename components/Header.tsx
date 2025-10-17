"use client";

import { useState } from "react";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full border-b border-gray-100 sticky top-0 z-40 bg-white/80 backdrop-blur">
      <div className="mx-auto max-w-6xl px-6 py-5 grid grid-cols-3 items-center">
        {/* left spacer to allow perfect centering */}
        <div />

        {/* centered logo */}
        <div className="justify-self-center">
          <div className="h-8 flex items-center justify-center text-2xl font-bold text-[#0057d9]">
            Clarence
          </div>
        </div>

        {/* right hamburger */}
        <div className="justify-self-end">
          <button
            aria-label="Open menu"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 hover:bg-gray-50"
            onClick={() => setMenuOpen((v) => !v)}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-gray-800"
            >
              {menuOpen ? (
                <path d="M18 6L6 18M6 6l12 12" />
              ) : (
                <>
                  <line x1="3" y1="7" x2="21" y2="7" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="17" x2="21" y2="17" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* flyout menu */}
      {menuOpen && (
        <div className="mx-auto max-w-6xl px-6 pb-6">
          <nav className="rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden">
            <a
              href="#how"
              className="block px-5 py-3 text-sm hover:bg-gray-50"
              onClick={() => setMenuOpen(false)}
            >
              How it works
            </a>
            <a
              href="#privacy"
              className="block px-5 py-3 text-sm hover:bg-gray-50"
              onClick={() => setMenuOpen(false)}
            >
              Privacy
            </a>
            <a
              href="#start"
              className="block px-5 py-3 text-sm hover:bg-gray-50"
              onClick={() => setMenuOpen(false)}
            >
              Get started
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

