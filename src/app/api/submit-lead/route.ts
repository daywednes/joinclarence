import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const formData = await request.json()
    
    // Add timestamp
    const timestamp = new Date().toISOString()
    
    // Prepare data for Google Sheets
    const rowData = {
      timestamp,
      agencyName: formData.agencyName,
      contactName: formData.contactName,
      annualRevenue: formData.annualRevenue,
      region: formData.region,
      email: formData.email
    }

    // Google Apps Script Web App URL (you'll need to replace this with your actual URL)
    const GOOGLE_SCRIPT_URL = process.env.GOOGLE_SCRIPT_URL || 'https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec'
    
    // Send data to Google Sheets via Apps Script
    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(rowData)
    })

    if (!response.ok) {
      throw new Error('Failed to submit to Google Sheets')
    }

    return NextResponse.json({ success: true, message: 'Lead submitted successfully' })
  } catch (error) {
    console.error('Error submitting lead:', error)
    return NextResponse.json(
      { success: false, message: 'Failed to submit lead' },
      { status: 500 }
    )
  }
}