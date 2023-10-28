const fs = require('fs');
const PdfMake = require('../pdfmake/src/printer');
const dd = require('./docDefinition');
const generateFileName = require('./utils');

/**
 * @typedef {"text1"|"text2"|"text3"|"table1"|"table2"|"table3"|"table4"|"complex1"|"complex2"|"complex3"} DataTypeUnion
 * @type {DataTypeUnion}
 */
const DATA_TYPE = 'text1';

const docDefinition = dd[DATA_TYPE];

//docDefinition.content.unshift({
//  text: '•',
//  fontSize: 20,
//  color: 'red',
//  absolutePosition: {
//    x: 40,
//    y: 40,
//  },
//});

//docDefinition.content.push({
//  text: '•',
//  fontSize: 20,
//  color: 'red',
//  absolutePosition: {
//    x: 40,
//    y: 155.375,
//  },
//});

const pdfMake = new PdfMake({
  Roboto: {
    normal: './pdfmake/build/fonts/Roboto/Roboto-Regular.ttf',
    bold: './pdfmake/build/fonts/Roboto/Roboto-Medium.ttf',
    italics: './pdfmake/build/fonts/Roboto/Roboto-Italic.ttf',
    bolditalics: './pdfmake/build/fonts/Roboto/Roboto-MediumItalic.ttf',
  },
});
const pdf = pdfMake.createPdfKitDocument(docDefinition);

pdf.pipe(fs.createWriteStream(`out/history/${generateFileName(DATA_TYPE)}.pdf`));
pdf.pipe(fs.createWriteStream(`out/last.pdf`));
pdf.end();
