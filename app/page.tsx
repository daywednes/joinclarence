"use client";

import { useState } from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ValueProp } from "@/components/ValueProp";
import { ChatSection } from "@/components/ChatSection";
import { HumanHelp } from "@/components/HumanHelp";
import { Memory } from "@/components/Memory";
import { Privacy } from "@/components/Privacy";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      <Header />
      <Hero />
      <ValueProp />
      <ChatSection />
      <HumanHelp />
      <Memory />
      <Privacy />
      <CTA />
      <Footer />
    </div>
  );
}

