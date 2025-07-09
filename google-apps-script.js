// Google Apps Script code to handle form submissions
// Deploy this as a web app in Google Apps Script and use the URL in your Next.js API route

function doPost(e) {
  try {
    // Get the active spreadsheet (or create a new one)
    const sheet = SpreadsheetApp.getActiveSheet();
    
    // If this is the first submission, add headers
    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        'Timestamp',
        'Agency Name',
        'Contact Name',
        'Annual Revenue',
        'Region',
        'Email'
      ]);
    }
    
    // Parse the JSON data from the request
    const data = JSON.parse(e.postData.contents);
    
    // Append the new row with the form data
    sheet.appendRow([
      data.timestamp,
      data.agencyName,
      data.contactName,
      data.annualRevenue,
      data.region,
      data.email
    ]);
    
    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({ success: true }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    // Return error response
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, error: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Instructions for deployment:
// 1. Go to script.google.com
// 2. Create a new project
// 3. Paste this code
// 4. Save the project
// 5. Deploy as web app:
//    - Execute as: Me
//    - Who has access: Anyone
// 6. Copy the web app URL and add it to your .env.local file as GOOGLE_SCRIPT_URL
// 7. Make sure to create or link a Google Sheet to this script