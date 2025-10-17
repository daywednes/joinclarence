'use client'

import { useState } from "react";

export default function ClarenceLanding() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      {/* Header */}
      <header className="w-full border-b border-gray-100 sticky top-0 z-40 bg-white/80 backdrop-blur">
        <div className="mx-auto max-w-6xl px-6 py-5 grid grid-cols-3 items-center">
          {/* left spacer to allow perfect centering */}
          <div />

          {/* centered logo */}
          <div className="justify-self-center">
            <div className="text-2xl font-bold text-clarence-blue">Clarence</div>
          </div>

          {/* right hamburger */}
          <div className="justify-self-end">
            <button
              aria-label="Open menu"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 hover:bg-gray-50"
              onClick={() => setMenuOpen((v) => !v)}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-800">
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
              <a href="#how" className="block px-5 py-3 text-sm hover:bg-gray-50">How it works</a>
              <a href="#privacy" className="block px-5 py-3 text-sm hover:bg-gray-50">Privacy</a>
              <a href="#start" className="block px-5 py-3 text-sm hover:bg-gray-50">Get started</a>
            </nav>
          </div>
        )}
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 py-24 text-center" id="start">
        <h1 className="text-6xl font-semibold mb-6 tracking-tight">Hey, I'm Clarence</h1>
        <p className="text-2xl text-gray-700 mb-6">Your private, personal AI insurance broker</p>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-10">
          I help you find better coverage, manage renewals, and save time. No calls, no paperwork, no stress.
        </p>
        <div className="mx-auto max-w-3xl">
          <QueryBox />
        </div>
        <p className="mt-3 text-sm text-gray-400">Trusted by brokers and policyholders nationwide</p>
      </section>

      {/* Section 1 – Value Prop */}
      <section id="how" className="mx-auto max-w-6xl px-6 py-24 text-center">
        <h2 className="text-5xl font-semibold mb-6 tracking-tight">Smart coverage made simple</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">
          Clarence compares top carriers, explains coverage in plain English, and keeps everything in one clean dashboard.
        </p>
        <div className="flex justify-center gap-8 flex-wrap">
          {['Travelers','Nationwide','Chubb','Progressive'].map((carrier)=>(
            <div key={carrier} className="px-6 py-3 text-lg font-semibold text-gray-400">{carrier}</div>
          ))}
        </div>
      </section>

      {/* Section 2 – Chat */}
      <section className="mx-auto max-w-6xl px-6 py-24 text-center">
        <h3 className="text-5xl font-semibold mb-6 tracking-tight">Ask. Compare. Save.</h3>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-10">
          Talk to Clarence just like you'd text a friend who happens to be great at insurance.
        </p>
        <div className="mx-auto max-w-md rounded-3xl border border-gray-200 bg-white p-8 shadow-sm text-left">
          <ChatBubble who="user" text="Hey Clarence, am I covered for delivery drivers?" />
          <ChatBubble who="bot" text="Not yet! I found three options that include non-owned auto coverage. Want to see them?" />
        </div>
      </section>

      {/* Section 3 – Human Help */}
      <section className="mx-auto max-w-6xl px-6 py-24 text-center">
        <h4 className="text-5xl font-semibold mb-4 tracking-tight">Humans included</h4>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-10">
          Need to talk it through? I'll connect you with a licensed broker who can finalize quotes or answer questions. Real help, no hold music.
        </p>
        <div className="mx-auto max-w-sm rounded-2xl border border-gray-200 bg-white p-6 text-left">
          <ul className="space-y-3 text-gray-700 text-base">
            <li>✔ Licensed in all 50 states</li>
            <li>✔ Instant quote comparisons</li>
            <li>✔ No hidden fees or commissions</li>
          </ul>
        </div>
      </section>

      {/* Section 4 – Memory */}
      <section className="mx-auto max-w-6xl px-6 py-24 text-center">
        <h5 className="text-5xl font-semibold mb-6 tracking-tight">I remember so you don't have to</h5>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-10">
          Clarence tracks renewals, policies, and coverage details. When something changes, I'll tell you. When you can save, I'll show you.
        </p>
        <div className="mx-auto grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-2xl">
          {['Home','Auto','Business','Life','Claims','Renewals'].map((item)=>(
            <div key={item} className="rounded-xl border border-gray-200 bg-white py-4 text-gray-700 font-medium">{item}</div>
          ))}
        </div>
      </section>

      {/* Section 5 – Privacy */}
      <section id="privacy" className="mx-auto max-w-6xl px-6 py-24 text-center">
        <h6 className="text-5xl font-semibold mb-4 tracking-tight">Private. Secure. Always.</h6>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-10">
          Clarence uses bank-level encryption and only partners with trusted, licensed brokers. Your info is yours — and it stays that way.
        </p>
        <div className="mx-auto h-56 w-80 rounded-3xl border border-gray-200 bg-gray-50 flex items-center justify-center">
          <svg className="w-16 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
            <path d="M7 11V7a5 5 0 0110 0v4"/>
          </svg>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-6 py-24 text-center bg-gray-50 rounded-3xl my-12">
        <h6 className="text-5xl font-semibold mb-6 tracking-tight">Let's make insurance simple</h6>
        <p className="text-lg text-gray-600 mb-10">Start your free coverage check. It takes 60 seconds.</p>
        <div className="mx-auto max-w-xl flex flex-col sm:flex-row gap-4 justify-center">
          <input className="flex-1 rounded-full border border-gray-300 px-5 py-4 text-base focus:outline-none focus:ring-2 focus:ring-clarence-blue" placeholder="Ask me anything about your insurance" />
          <button className="rounded-full bg-clarence-blue px-8 py-4 text-white font-semibold text-base hover:opacity-90">Get Started</button>
        </div>
        <p className="mt-3 text-sm text-gray-400">No fees. No jargon. Just clarity.</p>
      </section>

      {/* Footer */}
      <footer className="mx-auto max-w-6xl px-6 py-16 text-center text-sm text-gray-500">
        <p>© {new Date().getFullYear()} Clarence Insurance Services</p>
        <div className="mt-4 flex items-center justify-center gap-6">
          <a href="#" className="hover:text-gray-700">Licensing</a>
          <a href="#" className="hover:text-gray-700">Privacy</a>
          <a href="#" className="hover:text-gray-700">Terms</a>
        </div>
      </footer>
    </div>
  );
}

function ChatBubble({ who = 'bot', text = '' }: { who?: 'bot' | 'user'; text: string }) {
  const isUser = who === 'user';
  return (
    <div className={`mb-4 max-w-[85%] rounded-2xl px-5 py-3 text-base ${isUser ? 'ml-auto bg-clarence-blue text-white' : 'bg-gray-50 border border-gray-200 text-gray-800'}`}>{text}</div>
  );
}

function QueryBox() {
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
  }

  return (
    <div className="relative">
      <div className="group rounded-3xl border border-gray-300 bg-white/80 shadow-sm backdrop-blur px-4 py-3 sm:px-5 sm:py-4 flex items-center gap-3">
        {/* left mode icon cluster (like Perplexity) */}
        <div className="flex items-center gap-2">
          <button className="h-9 w-9 rounded-full grid place-items-center border border-gray-200 hover:bg-gray-50" aria-label="Search mode">
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
        />

        {/* right inline tools */}
        <div className="hidden sm:flex items-center gap-3 pr-1 text-gray-600">
          <button className="h-9 w-9 rounded-full grid place-items-center border border-gray-200 hover:bg-gray-50" aria-label="Attach a file">
            <IconPaperclip />
          </button>
          <button className="h-9 w-9 rounded-full grid place-items-center border border-gray-200 hover:bg-gray-50" aria-label="Start dictation">
            <IconMic />
          </button>
          {/* primary CTA changes from voice to arrow when focused or has text */}
          <button
            onMouseDown={(e)=>{e.preventDefault(); submit();}}
            className={`h-10 w-10 rounded-full grid place-items-center ${focused || text ? 'bg-clarence-blue text-white' : 'bg-clarence-cyan text-white'} shadow`}
            aria-label={focused || text ? 'Submit' : 'Start voice'}
          >
            {focused || text ? <IconArrow /> : <IconWave />}
          </button>
        </div>
      </div>

      {/* suggestions */}
      {show && (
        <div className="absolute left-0 right-0 mt-2 rounded-2xl border border-gray-200 bg-white shadow-lg overflow-hidden z-10">
          {prompts.map((p, i) => (
            <button
              key={i}
              className="w-full text-left px-4 py-3 hover:bg-gray-50 flex items-start gap-3 text-gray-700"
              onMouseDown={(e)=>{e.preventDefault(); setText(p); submit(p);}}
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

function IconSearch(){
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
  );
}
function IconPaperclip(){
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21.44 11.05l-9.19 9.19a6 6 0 01-8.49-8.49l9.19-9.19a4 4 0 015.66 5.66l-9.2 9.19a2 2 0 01-2.83-2.83l8.49-8.49"/></svg>
  );
}
function IconMic(){
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 1a3 3 0 00-3 3v6a3 3 0 006 0V4a3 3 0 00-3-3z"/><path d="M19 10a7 7 0 01-14 0"/><line x1="12" y1="19" x2="12" y2="23"/><line x1="8" y1="23" x2="16" y2="23"/></svg>
  );
}
function IconArrow(){
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
  );
}
function IconWave(){
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12s3-3 5-3 4 3 6 3 4-3 6-3 3 3 3 3"/></svg>
  );
}
function IconSpark({className=''}:{className?:string}){
  return (
    <svg className={className} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/></svg>
  );
}

