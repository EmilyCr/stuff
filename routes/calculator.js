//link to http
var http = require('http');
var url = require('url');

//start http request / response
http.createServer(function(req, res) {
    
    //perform user requested action
    var queryString = new String(request.url)

	// expected urls
    //http://localhost:3000/calculator?method=add&x=15&y=3
    //http://localhost:3000/calculator?method=subtract&x=15&y=3
    //http://localhost:3000/calculator?method=multiply&x=15&y=3
    //http://localhost:3000/calculator?method=divide&x=15&y=3

    //split the query string - based on delimiter
	var xy = queryString.split("&"); 
    
    //xy[0] now contains our action
    var action = xy[0].replace("/","").split("=")[1];
    
    //extract x variable 
    var x = new String(xy[1].split("&")).split("=")[1] || "0"; 
    
    //extract y variable
    var y = new String(xy[2].split("&")).split("=")[1] || "0";
    
    //calling the method to get bthe result
    var result = getResuLt(action.toLowerCase(), Number(x) , Number(y));
    
    //html which we be displayed
    var htmlContent= "<html><b>" +action+ "(" +x+"," +y+") = <b>"+result+"</b></html>";
    
    //write the response
    response.end(htmlContent);
    }
    ).listen(3000);	//listen on port 3000 for browser requests


//REVIEW
//Utility method to perform an operation on 2 numbers. Helps to modularize code
function getResult(operation, x, y)
{
    var result = 0;

    if(operation == "add")
    result = number1 + number2;

    else if(operation == "subtract")
    result = number1 - number2;

    else if(operation == "multiply")
    result = number1 * number2;

    else if(operation == "divide" && number2 != 0)
    result = number1 / number2;

 return result;
}