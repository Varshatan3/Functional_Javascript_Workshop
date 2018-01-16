//test case 1
console.log("Return Upper Case",Upper(12)===null)
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