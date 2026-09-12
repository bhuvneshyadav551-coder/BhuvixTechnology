/**
 * ============================================================================
 * BHUVIXTECHNOLOGIES - GOOGLE APPS SCRIPT WEB APP
 * ============================================================================
 * 
 * PURPOSE:
 * Securely logs contact and project inquiry form submissions from the
 * BhuvixTechnologies website directly into your dedicated Google Sheet.
 * 
 * SECURITY & PRIVACY NOTICE:
 * This script is bound strictly to the active spreadsheet. It only interacts
 * with the spreadsheet it is attached to (SpreadsheetApp.getActiveSpreadsheet())
 * and CANNOT access, read, or modify any other files or folders in your Google Drive.
 * 
 * INSTRUCTIONS TO SET UP:
 * 1. Open Google Drive (https://drive.google.com).
 * 2. Create a NEW dedicated folder named: "BhuvixTechnologies_Data"
 *    (This keeps your website data completely isolated from your personal files).
 * 3. Open that folder and create a new Google Sheet named: "BhuvixTechnologies_Database"
 * 4. In the Google Sheet, go to Extensions > Apps Script.
 * 5. Replace any code in the editor with this ENTIRE file.
 * 6. Click Save (Ctrl+S).
 * 7. Click Deploy > New deployment.
 * 8. Select type: "Web app".
 * 9. Set Configuration:
 *    - Description: "BhuvixTechnologies Inquiry Endpoint"
 *    - Execute as: "Me"
 *    - Who has access: "Anyone" (required for public website form submission)
 * 10. Click "Deploy" and copy the Web App URL.
 * 11. Paste that Web App URL into `js/config.js` -> `GOOGLE_APPS_SCRIPT_URL`.
 * ============================================================================
 */

function doPost(e) {
  try {
    var sheetName = "Inquiries";
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getSheetByName(sheetName);

    // If sheet doesn't exist, create it with header columns
    if (!sheet) {
      sheet = ss.insertSheet(sheetName);
      var headers = [
        "Timestamp",
        "Full Name",
        "Email",
        "Phone",
        "Company",
        "Service Requested",
        "Estimated Budget",
        "Timeline",
        "Message",
        "Source"
      ];
      sheet.appendRow(headers);
      sheet.setFrozenRows(1);
      
      // Style headers
      var headerRange = sheet.getRange(1, 1, 1, headers.length);
      headerRange.setFontWeight("bold");
      headerRange.setBackground("#0055ff");
      headerRange.setFontColor("#ffffff");
    }

    var data;
    if (e.postData && e.postData.contents) {
      try {
        data = JSON.parse(e.postData.contents);
      } catch (jsonErr) {
        data = e.parameter;
      }
    } else {
      data = e.parameter || {};
    }

    var timestamp = new Date();
    var row = [
      timestamp,
      data.fullName || data.name || "",
      data.email || "",
      data.phone || "",
      data.company || "",
      data.service || "",
      data.budget || "",
      data.timeline || "",
      data.message || "",
      data.source || "BhuvixTechnologies Website"
    ];

    sheet.appendRow(row);

    // Return JSON response with CORS headers
    return ContentService
      .createTextOutput(JSON.stringify({
        status: "success",
        message: "Inquiry successfully recorded in BhuvixTechnologies database",
        timestamp: timestamp.toISOString()
      }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({
        status: "error",
        message: error.toString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({
      status: "active",
      message: "BhuvixTechnologies Google Sheets Webhook is running."
    }))
    .setMimeType(ContentService.MimeType.JSON);
}
