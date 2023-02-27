function sendReminder() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var dataRange = sheet.getDataRange();
  var data = dataRange.getValues();
  var today = new Date();
  var reminderDate = new Date();
  reminderDate.setDate(today.getDate() + 15);
  
  for (var i = 1; i < data.length; i++) {
    var row = data[i];
    var insuranceDate = new Date(row[2]);
    var taxDate = new Date(row[3]);
    var fitnessDate = new Date(row[4]);
    var whatsappNumber = row[5];
    
    if (insuranceDate < reminderDate || taxDate < reminderDate || fitnessDate < reminderDate) {
      // use Twilio or WhatsApp Business API to send a message to whatsappNumber
    }
  }
}
