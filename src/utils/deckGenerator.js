var csvToJson = require('convert-csv-to-json');

var fileInputName = 'Greetings translations.csv';
var fileOutputName = 'greeting.json';

csvToJson.generateJsonFileFromCsv(fileInputName, fileOutputName);
