var classMates = [ "natalie", "charlie", "sam", "zach", "nathan", "paul", "anthony", "liz", "eric", "jeremy", "chris", "brooks", "altamir", "amber", "joe", "kenzie", "matthew", "robby", "mark","scott"]
var groupNumbers = [2,3,4,5,6,7,8,9,10,11];
// var smallArray = classMates.splice(0,10);
var copyClassMates = [];
var test = 0;
var individualGroups = [];
var numberOfGroups = 0


 //var number of people in group = classMates.length() / groupNumber[i]

 $(document).ready(function(){
 	//$('#container').append("<button class = 'groups' >Groups</button");

 	for(var i = 0; i < groupNumbers.length; i++){
 			$('#container').append("<button class = 'groups'>" + groupNumbers[i] + "</button>");
 			$('#container').children().last().data('buttonValue', groupNumbers[i]);
 	}		
 			$('#container').append("<button class = 'refresh' >Refresh</button");
 			$('#container').on('click', '.groups', divideArray);
 			$('#container').on('click', '.refresh', randomArray);
 	
 });

function divideArray (){//by selecting a number you're dividing that number value by the class number
		numberOfGroups = $(this).data('buttonValue');
		test = classMates.length / numberOfGroups;//taking the number clicked and dividing it by the class number
				test = Math.round(test);//rounding out the number from above
				//console.log(numberOfGroups);//Groups to be divided into
				//console.log(test);//The number of people in that group
			}


function randomArray (){
	newArray = [];
	for ( var i = 0; i < classMates.length; i++){
	copyClassMates[i] = classMates[i];

}
	var stop = copyClassMates.length;

    for(var i = 0; i < stop; i++){//looping through 20 times...number of class Mates
		var randArray = Math.floor(Math.random() * copyClassMates.length);//giving us back one random name, but can be similar names
		//console.log(randArray);//in the console, this...consoles a loop of 11 names including 2 matt's. We need to remove the ability for it to go backinto classMates and grab similar names
	
	newArray.push(copyClassMates.splice(randArray,1)[0]);

	
}
//console.log("new arrray",newArray);
newGroups();
console.log("individualGroups array", individualGroups);
}


function newGroups (){
	individualGroups = [];
	//var i = 0;

	//while(i < numberOfGroups){// this causes an infinite loop *DANGER!!!!*

		for (var i = 0; i < test; i++){
			individualGroups[i] = newArray[i];
		}
		console.log("number of groups", numberOfGroups);//user selected number of groups
		console.log(newArray);//array of classmates 
	//}
	//i++;
}







