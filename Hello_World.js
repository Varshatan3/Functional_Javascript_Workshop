//test case 1
//console.log("Return Upper Case (Failure)",upper(12)===null)
//test case 2
console.log("Return Upper Case",upper('varsha')==='VARSHA')
//test case 3
//console.log("Return Upper Case (Blank string)",upper('')===true)
//test case 4
//console.log("Return Upper Case (array)",upper([1,2,3,4])===null)
function upper(Input_string)
{
	if(typeof(Input_string)=== 'string')
	{
		let result = Input_string.toUpperCase();
		console.log(result);
		return(result);
		
		
	}
	else{
		return null
	}
}