declare var require: any;
let csvToJson = require('convert-csv-to-json');

let fileInputName = 'Greetings translations.csv';
let fileOutputName = 'greeting.json';

csvToJson.generateJsonFileFromCsv(fileInputName, fileOutputName);
