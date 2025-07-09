'use client'

import { useState } from 'react'
import HeroSection from '@/components/HeroSection'
import BenefitsSection from '@/components/BenefitsSection'
import HowItWorksSection from '@/components/HowItWorksSection'
import WhyClarenceSection from '@/components/WhyClarenceSection'
import LeadForm from '@/components/LeadForm'
import AboutSection from '@/components/AboutSection'

export default function Home() {
  const [showSuccessMessage, setShowSuccessMessage] = useState(false)

  const handleFormSubmit = async (formData: any) => {
    try {
      const response = await fetch('/api/submit-lead', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
      
      if (response.ok) {
        setShowSuccessMessage(true)
        setTimeout(() => setShowSuccessMessage(false), 5000)
      }
    } catch (error) {
      console.error('Error submitting form:', error)
    }
  }

  return (
    <main className="min-h-screen bg-white">
      <HeroSection />
      <BenefitsSection />
      <HowItWorksSection />
      <WhyClarenceSection />
      <LeadForm onSubmit={handleFormSubmit} showSuccess={showSuccessMessage} />
      <AboutSection />
    </main>
  )
}