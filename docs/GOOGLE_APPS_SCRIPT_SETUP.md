# Google Apps Script Setup for Application Form

This guide will help you set up Google Apps Script to receive application form submissions and store them in Google Sheets with CV files in Google Drive.

## Prerequisites

- Google account
- Google Drive access
- Google Sheets access

## Step 1: Create Google Apps Script

1. Go to [script.google.com](https://script.google.com)
2. Click "New Project"
3. Replace the default code with the following:

```javascript
function doPost(e) {
  try {
    // Parse the incoming JSON data
    const data = JSON.parse(e.postData.contents);
    
    // Get the Google Drive folder for CVs
    // Replace 'FOLDER_ID' with your actual Google Drive folder ID
    const folder = DriveApp.getFolderById('FOLDER_ID');
    
    // Decode Base64 file and create blob
    const fileBlob = Utilities.newBlob(
      Utilities.base64Decode(data.file.split(',')[1]),
      data.file.split(';')[0].split(':')[1],
      data.fileName
    );
    
    // Upload file to Google Drive
    const file = folder.createFile(fileBlob);
    const fileUrl = file.getUrl();
    
    // Get the Google Sheet
    // Replace 'SHEET_ID' with your actual Google Sheet ID
    const sheet = SpreadsheetApp.openById('SHEET_ID').getSheetByName('Applications');
    
    // Append data to the sheet
    sheet.appendRow([
      new Date(),
      data.name,
      data.email,
      data.subject,
      data.message,
      fileUrl
    ]);
    
    // Return success response
    return ContentService.createTextOutput(JSON.stringify({success: true}))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    // Return error response
    return ContentService.createTextOutput(JSON.stringify({
      success: false, 
      error: error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}
```

## Step 2: Set Up Google Drive Folder

1. Go to [drive.google.com](https://drive.google.com)
2. Create a new folder called "Website CVs"
3. Right-click the folder and select "Share"
4. Copy the folder ID from the URL (the long string after `/folders/`)
5. Replace `'FOLDER_ID'` in the script with your actual folder ID
https://drive.google.com/drive/folders/1RKaNNxHAfQhGkcUdAMaYKCrG7ZinMD_P?usp=drive_link


## Step 3: Set Up Google Sheet

1. Go to [sheets.google.com](https://sheets.google.com)
2. Create a new spreadsheet called "KQS Applications"
3. Create a sheet named "Applications" (or modify the script to use your preferred name)
4. Add headers in row 1:
   - A1: Timestamp
   - B1: Name
   - C1: Email
   - D1: Subject
   - E1: Message
   - F1: CV Link
5. Copy the Sheet ID from the URL (the long string between `/d/` and `/edit`)
6. Replace `'SHEET_ID'` in the script with your actual Sheet ID

## Step 4: Deploy the Script

1. In Google Apps Script, click "Deploy" > "New deployment"
2. Choose type: "Web app"
3. Set the following options:
   - Execute as: "Me"
   - Who has access: "Anyone"
4. Click "Deploy"
5. Copy the Web App URL (this is what you'll use in your frontend)
https://script.google.com/home/projects/1l0Q1ZrSH5OE3ITVenSeEmtNLxUafQ-JD0TcjDBh89eFr8AiAn_Xlvz02/edit

## Step 5: Update Frontend Configuration

1. Open `client/src/components/ApplyNow.tsx`
2. Find the line: `const GOOGLE_SCRIPT_URL = 'YOUR_GOOGLE_APPS_SCRIPT_URL_HERE';`
3. Replace `'YOUR_GOOGLE_APPS_SCRIPT_URL_HERE'` with your actual Web App URL

## Step 6: Test the Integration

1. Fill out the application form on your website
2. Upload a CV file
3. Submit the form
4. Check your Google Sheet for the new entry
5. Check your Google Drive folder for the uploaded CV

## Troubleshooting

### Common Issues

1. **"Script not found" error**: Make sure the Web App URL is correct and the script is deployed
2. **"Permission denied" error**: Ensure the script has access to Drive and Sheets
3. **"Folder not found" error**: Verify the folder ID is correct
4. **"Sheet not found" error**: Verify the sheet ID and sheet name are correct

### Required Permissions

The script needs the following permissions:
- Google Drive access (to upload CV files)
- Google Sheets access (to write application data)

These permissions will be requested when you first run the script.

### File Size Limits

- Google Apps Script has a 6MB limit for POST requests
- Individual files in Google Drive have a 5TB limit
- The frontend already limits CV uploads to 5MB

## Data Flow Summary

1. **Frontend**: User fills form and uploads CV
2. **Frontend**: CV is converted to Base64 and sent with form data
3. **Google Apps Script**: Receives the data via doPost function
4. **Google Apps Script**: Decodes Base64 and saves CV to Google Drive
5. **Google Apps Script**: Gets Drive file URL and saves all data to Google Sheet
6. **Frontend**: Receives success/error response and shows appropriate message

## Security Notes

- The Web App URL is public, but only accepts POST requests
- File uploads are validated on the frontend (file type and size)
- Consider adding additional validation in the Google Apps Script if needed
- The script runs with your Google account permissions

## Maintenance

- Monitor the Google Sheet for new applications
- Check Google Drive folder for uploaded CVs
- Consider setting up email notifications for new applications
- Regularly backup your Google Sheet data
