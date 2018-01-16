//test case 1 for recurr()
//console.log("Test recurr",recurr())
//test case 2
//console.log("The function is executed ",repeat(recurr,3)===true)
//console.log("# of times executed - ",i)
//test case 3
console.log("The function is not executed ",repeat(recurr,-3)===0)
console.log("# of times executed - ",repeat(recurr,-3))

let value=0;
function recurr()
{	
	value++;
	
}
function repeat(recurr,num)
{
	for (i=0;i<num;i++)
	{
		recurr();
	}
	if (i===num){
		return true;
		}
	else{
		return 0;
		}
	}