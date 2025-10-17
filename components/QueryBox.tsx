"use client";

import { useState } from "react";
import {
  IconSearch,
  IconPaperclip,
  IconMic,
  IconArrow,
  IconWave,
  IconSpark,
} from "./Icons";

export function QueryBox() {
  const [focused, setFocused] = useState(false);
  const [text, setText] = useState("");
  const [show, setShow] = useState(false);

  const prompts = [
    "Can you check my home and auto bundle?",
    "Am I underinsured on my business liability?",
    "What should I ask before renewing?",
  ];

  function onFocus() {
    setFocused(true);
    setShow(true);
  }

  function onBlur() {
    // small delay so clicks on suggestions still register
    setTimeout(() => setShow(false), 120);
    setFocused(false);
  }

  function submit(v?: string) {
    const query = (v ?? text).trim();
    if (!query) return;
    // TODO: wire to backend
    console.log("submit:", query);
    alert(`Searching for: "${query}"`);
  }

  return (
    <div className="relative">
      <div className="group rounded-3xl border border-gray-300 bg-white/80 shadow-sm backdrop-blur px-4 py-3 sm:px-5 sm:py-4 flex items-center gap-3">
        {/* left mode icon cluster */}
        <div className="flex items-center gap-2">
          <button
            className="h-9 w-9 rounded-full grid place-items-center border border-gray-200 hover:bg-gray-50"
            aria-label="Search mode"
          >
            <IconSearch />
          </button>
        </div>

        {/* input */}
        <input
          className="flex-1 bg-transparent outline-none text-base placeholder:text-gray-400"
          placeholder="Ask me anything about your coverage"
          value={text}
          onChange={(e) => setText(e.target.value)}
          onFocus={onFocus}
          onBlur={onBlur}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              submit();
            }
          }}
        />

        {/* right inline tools */}
        <div className="hidden sm:flex items-center gap-3 pr-1 text-gray-600">
          <button
            className="h-9 w-9 rounded-full grid place-items-center border border-gray-200 hover:bg-gray-50"
            aria-label="Attach a file"
          >
            <IconPaperclip />
          </button>
          <button
            className="h-9 w-9 rounded-full grid place-items-center border border-gray-200 hover:bg-gray-50"
            aria-label="Start dictation"
          >
            <IconMic />
          </button>
          {/* primary CTA changes from voice to arrow when focused or has text */}
          <button
            onMouseDown={(e) => {
              e.preventDefault();
              submit();
            }}
            className={`h-10 w-10 rounded-full grid place-items-center ${
              focused || text
                ? "bg-[#0057d9] text-white"
                : "bg-[#00bcd4] text-white"
            } shadow`}
            aria-label={focused || text ? "Submit" : "Start voice"}
          >
            {focused || text ? <IconArrow /> : <IconWave />}
          </button>
        </div>
      </div>

      {/* suggestions */}
      {show && (
        <div className="absolute left-0 right-0 mt-2 rounded-2xl border border-gray-200 bg-white shadow-lg overflow-hidden">
          {prompts.map((p, i) => (
            <button
              key={i}
              className="w-full text-left px-4 py-3 hover:bg-gray-50 flex items-start gap-3 text-gray-700"
              onMouseDown={(e) => {
                e.preventDefault();
                setText(p);
                submit(p);
              }}
            >
              <IconSpark className="mt-0.5" />
              <span className="text-sm">{p}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

