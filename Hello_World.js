//test case 1
console.log("Return Upper Case (Failure)",Upper(12)===null)
//test case 2
console.log("Return Upper Case (Pass)",Upper('hi there')===true)
//test case 3
console.log("Return Upper Case (Blank string)",Upper('')===true)
//test case 4
console.log("Return Upper Case (array)",Upper([1,2,3,4])===null)
function Upper(Input_string)
{
	if(typeof(Input_string)=== 'string')
	{
		Input_string.toUpperCase();
		
		return true
		
	}
	else{
		return null
	}
}