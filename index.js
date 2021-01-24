function formatInput() {
	
	var input = document.getElementById("inputJSON").value; 
	console.log(input);
	
	var parsedJSON = JSON.parse(input);
	
	console.log(parsedJSON);
	
    const values = Object.values(parsedJSON);
   
    console.log(values);
    
    var a = values.flat();
    
    for(let i = 0; i < a.length; i++){
      for(let j = 0; j < a.length; j++){
        if(a[i].id === a[j].parent_id ){
        a[i].children.push(a[j]);
      }
      }
    }

    let arrFinal = [a[0]];
    console.log(arrFinal);   
	
	document.getElementById("outputJSON").value = JSON.stringify(arrFinal, undefined, 4);
 }