function getCards() {
  var spreadsheetId = '1DOP2T7m6aZF7LiVZnwag_6e6bx53nYnHpiIF2VyIJZ0'; // Replace with your spreadsheet ID.
  var sheetName = 'Sheet1'; // Replace with your sheet name.
  var sheet = SpreadsheetApp.openById(spreadsheetId).getSheetByName(sheetName);
  var data = sheet.getDataRange().getValues();
  var headers = data[0];
  var cardData = [];

  for (var i = 1; i < data.length; i++) {
    var card = {};
    for (var j = 0; j < headers.length; j++) {
      // Use the header names to create keys without extra whitespace.
      card[headers[j].trim()] = data[i][j];
    }
    cardData.push(card);
  }

  return ContentService.createTextOutput(JSON.stringify({ cards: cardData }))
    .setMimeType(ContentService.MimeType.JSON);
}


function doGet(e) {
  if (e.parameter.action == "getCards") {
    return getCards();
  } else {
    return ContentService.createTextOutput("Invalid action");
  }
}
