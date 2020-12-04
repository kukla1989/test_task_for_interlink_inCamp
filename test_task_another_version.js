var fs = require('fs');

fs.readFile('acme_worksheet.csv', 'utf8', function(err, data) {
	console.log(formattingData(transformDataToArray(data)))



});




function transformDataToArray(data){
		var numberChOfNextLine;
	var switcher = true;
    [...data].forEach((ch ,index) => {
    	if (ch == '\n' && switcher) {
    		numberChOfNextLine = index;
    		switcher = false;
    	}
    })
    var element;
    var arrayData = [];
    var arrayLine = [];
    var property = '';
    numberChOfNextLine += 1;
    for (var i = numberChOfNextLine; i <= data.length; i++){
    	if(i == data.length)	{				
      	    arrayLine.push(property);   		
    		property = '';
    		arrayData.push(arrayLine);
    		arrayLine = [];
      
	    	} else if (data[i] == '\n'){
	    		arrayLine.push(property);
	    		arrayLine[2] = arrayLine[2].slice(0, -1);    		
	    		property = '';
	    		arrayData.push(arrayLine);
	    		arrayLine = [];
		   		 }	else if (data[i] == ','){
		   		 		arrayLine.push(property);
		   		 		property = '';
		   			 } else{
		   		 			property = property + data[i]   		
		   				}

   	 }
   	 return arrayData;
}



function formattingData(data){
	var newData = []
	for(var i = 0; i <= data.length; i++){
		
	}

	return "nope"
}