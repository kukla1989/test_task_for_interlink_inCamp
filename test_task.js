
//before launch you need install node and after this run 'npm i -s csv-parser'
const csv = require('csv-parser');
const fs = require('fs');
var data = [];


fs.createReadStream('acme_worksheet.csv')
  .pipe(csv())
  .on('data', (row) => {
  		//console.log(row['Work Hours']);
 		data.push(row);
  })
  .on('end', () => {
      console.log( data[2]['Work Hours']) //testing
  });
 
  