var pdfFiller = require('pdffiller');
const path = require('path');
var sourcePDF = path.join(__dirname, 'forms', 'sample_pdf.pdf');
var destinationPDF = path.join(__dirname, 'output', 'sample_pdf.pdf');
var data = {
  "name": "John",
  "last_name": "John",
  "first_name": "Doe",
  "date": "Jan 1, 2013",
  "football": "Off",
  "baseball": "Yes",
  "basketball": "Off",
  "hockey": "Yes",
  "nascar": "Off"
};

pdfFiller.fillForm(sourcePDF, destinationPDF, data, function (err) {
  if (err) throw err;
  console.log("In callback (we're done).");
});