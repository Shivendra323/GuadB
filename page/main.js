fetch("https://api.wazirx.com/api/v2/tickers").then(
		res=>{
			res.json().then(
				data=>{
					
					console.log(data);
					/*if(data.length > 0){
						console.log(data);
						
					}*/
					var a=data.btcinr.base_unit;
					var totalMessages = Object.keys(data).length;
					
					var total_count=0
					for (var key in data) {
					  if (data.hasOwnProperty(key)) {
					    //var val = data[key].base_unit;
					    //document.getElementById("demo").innerHTML = val;
					  var table = document.getElementById("jdata");
					  var row = table.insertRow();
					  var cell1 = row.insertCell(0);
					  var cell2 = row.insertCell(1);
					  var cell3 = row.insertCell(2);
					  var cell4 = row.insertCell(3);
					  var cell5 = row.insertCell(4);
					  var cell6 = row.insertCell(5);
					  cell1.innerHTML = total_count+1;
					  cell2.innerHTML = data[key].name;
					  cell3.innerHTML = "&#8377; "+data[key].last;
					  cell4.innerHTML = "&#8377; "+data[key].buy +" / "+"&#8377; "+data[key].sell ;
					  cell5.innerHTML = data[key].volume;
					  cell6.innerHTML = data[key].base_unit;					    
					  }
					  total_count +=1
					  if (total_count==10){
					  break;
					  }
					}
				    
				}
			)
		}
		
	)
	
	

