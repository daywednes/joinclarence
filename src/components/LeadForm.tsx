'use client'

import { useState } from 'react'

interface LeadFormProps {
  onSubmit: (data: any) => void
  showSuccess: boolean
}

export default function LeadForm({ onSubmit, showSuccess }: LeadFormProps) {
  const [formData, setFormData] = useState({
    agencyName: '',
    contactName: '',
    annualRevenue: '',
    region: '',
    email: ''
  })

  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const revenueOptions = [
    { value: '', label: 'Select Revenue Range' },
    { value: 'under-100k', label: 'Under $100K' },
    { value: '100k-500k', label: '$100K - $500K' },
    { value: '500k-1m', label: '$500K - $1M' },
    { value: '1m-5m', label: '$1M - $5M' },
    { value: '5m-10m', label: '$5M - $10M' },
    { value: 'over-10m', label: 'Over $10M' }
  ]

  const regions = [
    { value: '', label: 'Select Region' },
    { value: 'northeast', label: 'Northeast' },
    { value: 'southeast', label: 'Southeast' },
    { value: 'midwest', label: 'Midwest' },
    { value: 'southwest', label: 'Southwest' },
    { value: 'west', label: 'West Coast' },
    { value: 'other', label: 'Other' }
  ]

  const validateForm = () => {
    const newErrors: Record<string, string> = {}
    
    if (!formData.agencyName.trim()) newErrors.agencyName = 'Agency name is required'
    if (!formData.contactName.trim()) newErrors.contactName = 'Your name is required'
    if (!formData.annualRevenue) newErrors.annualRevenue = 'Annual revenue is required'
    if (!formData.region) newErrors.region = 'Region is required'
    if (!formData.email.trim()) newErrors.email = 'Email is required'
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid'

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) return

    setIsSubmitting(true)
    try {
      await onSubmit(formData)
      setFormData({
        agencyName: '',
        contactName: '',
        annualRevenue: '',
        region: '',
        email: ''
      })
    } catch (error) {
      console.error('Form submission error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  return (
    <section id="lead-form" className="py-20 px-4 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Get Your Offer</h2>
          <p className="text-xl text-gray-600">Tell us about your agency and receive a personalized valuation</p>
        </div>

        {showSuccess && (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6 text-center">
            Thank you! We've received your information and will contact you within 24 hours.
          </div>
        )}

        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg">
          <div className="mb-6">
            <label htmlFor="agencyName" className="block text-sm font-medium text-gray-700 mb-2">
              Agency Name *
            </label>
            <input
              type="text"
              id="agencyName"
              name="agencyName"
              value={formData.agencyName}
              onChange={handleChange}
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                errors.agencyName ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="Enter your agency name"
            />
            {errors.agencyName && <p className="mt-1 text-sm text-red-500">{errors.agencyName}</p>}
          </div>

          <div className="mb-6">
            <label htmlFor="contactName" className="block text-sm font-medium text-gray-700 mb-2">
              Your Name *
            </label>
            <input
              type="text"
              id="contactName"
              name="contactName"
              value={formData.contactName}
              onChange={handleChange}
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                errors.contactName ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="Enter your full name"
            />
            {errors.contactName && <p className="mt-1 text-sm text-red-500">{errors.contactName}</p>}
          </div>

          <div className="mb-6">
            <label htmlFor="annualRevenue" className="block text-sm font-medium text-gray-700 mb-2">
              Annual Revenue *
            </label>
            <select
              id="annualRevenue"
              name="annualRevenue"
              value={formData.annualRevenue}
              onChange={handleChange}
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                errors.annualRevenue ? 'border-red-500' : 'border-gray-300'
              }`}
            >
              {revenueOptions.map(option => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            {errors.annualRevenue && <p className="mt-1 text-sm text-red-500">{errors.annualRevenue}</p>}
          </div>

          <div className="mb-6">
            <label htmlFor="region" className="block text-sm font-medium text-gray-700 mb-2">
              Region *
            </label>
            <select
              id="region"
              name="region"
              value={formData.region}
              onChange={handleChange}
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                errors.region ? 'border-red-500' : 'border-gray-300'
              }`}
            >
              {regions.map(region => (
                <option key={region.value} value={region.value}>
                  {region.label}
                </option>
              ))}
            </select>
            {errors.region && <p className="mt-1 text-sm text-red-500">{errors.region}</p>}
          </div>

          <div className="mb-6">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                errors.email ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="Enter your email address"
            />
            {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-semibold py-4 px-6 rounded-lg text-lg transition-colors"
          >
            {isSubmitting ? 'Submitting...' : 'Get My Valuation'}
          </button>
        </form>
      </div>
    </section>
  )
}