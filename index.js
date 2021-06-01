var express = require('express');
var http = require('http');
var app = express();
var fetch = require('node-fetch');
const path = require('path');
var fs = require('fs');


var servers = http.createServer(app).listen(8080, function(req, res){
       console.log('HTTPS listening on 8080');
});

app.use(express.static("page"));



/*fetch("https://api.wazirx.com/api/v2/tickers").then(
		res=>{
			res.json().then(
				data=>{
					console.log(data);
					
					if(data.length > 0){
						var temp = "";
						
						//----star for loop
						
						data.forEach((u)=>{
							temp +="<tr>";
							temp +="<td>"+u.name+"</td>";
							temp +="<td>"+u.name+"</td>";
							temp +="<td>"+u.name+"</td>";
						})
						//---close for loop
						
						document.getElementById("data").innerHTML = temp;
						
					}
					
				}
			)
		}
	)
*/

