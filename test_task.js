
//before launch you need install node and after this run install csv-parser && csv-writer
const csv = require('csv-parser');
const fs = require('fs');
var data = [];
var newData = [];
const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const csvWriter = createCsvWriter({
  path: ' outputTabel.csv',
  header: [
    {id: 'Employee Name', title: 'Employee Name'},
    {id: 'Jun 29 2020', title: 'Jun 29 2020'},
    {id: 'Jun 30 2020', title: 'Jun 30 2020'},
    {id: 'Jul 01 2020', title: 'Jul 01 2020'},
    {id: 'Jul 02 2020', title: 'Jul 02 2020'},
    {id: 'Jul 03 2020', title: 'Jul 03 2020'},
    {id: 'Jul 03 2020', title: 'Jul 03 2020'},
    {id: 'Jul 05 2020', title: 'Jul 05 2020'},
  ]
});



 
fs.createReadStream('acme_worksheet.csv')
  .pipe(csv())
  .on('data', (row) => {
 		data.push(row);
  })
  .on('end', () => {	
      var transformedData = transformData(data)  //here we get data from csv file
      csvWriter.writeRecords(transformedData)
  });




  function transformData(data){
 	let firstIteration = true;
 	data.forEach((object, index)=>{
 		if(firstIteration || typeof findObjectbyName(object['Employee Name'], newData) == 'undefined'){  //only after first iteration we need add property emloyee name
			newData.push({
				"Employee Name": object["Employee Name"],
				[object['Date']]: object["Work Hours"] 
				});
			 if (object["Employee Name"]  == 'Luann Cooper') firstIteration = false;
 		} else {
 		 	findObjectbyName(Object.values(object)[0], newData)[object.Date] = object['Work Hours'];
 		 	console.log(newData.find(obj => {return obj["Employee Name"] === Object.values(object)[0]}));
 		}

 	})
 	return inputOInData(newData);   //put 0 hours  if there are not record
  }




 function findObjectbyName(name, data){
 	return data.find(obj => {
 		return obj["Employee Name"] === name
 	})
 }




 function inputOInData(data){
 	data.forEach(object => {
 		if(Object.values(object).length < 7){
 			if (typeof object['Jun 29 2020'] == 'undefined')  object['Jun 29 2020'] = 0;
 			if (typeof object['Jun 30 2020'] == 'undefined')  object['Jun 30 2020'] = 0;
 			if (typeof object['Jul 01 2020'] == 'undefined')  object['Jul 01 2020'] = 0;
 			if (typeof object['Jul 02 2020'] == 'undefined')  object['Jul 02 2020'] = 0;
 			if (typeof object['Jul 03 2020'] == 'undefined')  object['Jul 03 2020'] = 0;
 			if (typeof object["Jul 04 2020"] == 'undefined')  object["Jul 04 2020"] = 0;
 			if (typeof object['Jul 05 2020'] == 'undefined')  object['Jul 05 2020'] = 0;
 		} 		
 	})
 	return data;
 }
 
  
