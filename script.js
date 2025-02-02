// Replace with your actual spreadsheet ID and sheet name
const SPREADSHEET_ID = "12mpsjoMUCC8Xawm6TugY-Uv46SOzjEzZrAVT2LGsMMM";
const SHEET_NAME = "Sheet1";

function doPost(e) {
  try {
    // Open the spreadsheet and select the sheet
    var ss = SpreadsheetApp.openById(SPREADSHEET_ID);
    var sheet = ss.getSheetByName(SHEET_NAME);
    
    // Get parameters from the form submission
    var params = e.parameter;
    
    // Expected fields from the form:
    // inspectionDate, location, serialNumber, feType, expiredMonth, expiredYear, remark, inspectorName, signature
    var inspectionDate = params.inspectionDate || "";
    var location = params.location || "";
    var serialNumber = params.serialNumber || "";
    var feType = params.feType || "";
    var expiredMonth = params.expiredMonth || "";
    var expiredYear = params.expiredYear || "";
    var kg = params.kg || "";
    var remark = params.remark || "";
    var inspectorName = params.inspectorName || "";
    var signature = params.signature || "";  // Data URL of the signature

    // Append a new row in the spreadsheet with the form data
    sheet.appendRow([inspectionDate, location, serialNumber, feType, kg, expiredMonth, expiredYear, remark, inspectorName, signature]);

    // Return a success message
    return ContentService.createTextOutput("Success").setMimeType(ContentService.MimeType.TEXT);
  } catch (err) {
    // Log the error and return an error message
    Logger.log(err);
    return ContentService.createTextOutput("Error: " + err).setMimeType(ContentService.MimeType.TEXT);
  }
}

