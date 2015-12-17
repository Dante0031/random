var classMates = [ "natalie", "charlie", "sam", "zach", "nathan", "paul", "anthony", "liz", "eric", "jeremy", "chris", "brooks", "altamir", "amber", "joe", "kenzie", "matthew", "robby", "mark","scott"]
var groupNumbers = [2,3,4,5,6,7,8,9,10,11];
// var smallArray = classMates.splice(0,10);
var newArray = [];


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

		

function divideArray (){
		var test = classMates.length / $(this).data('buttonValue');
				test = Math.round(test);
				console.log($(this).data('buttonValue'));//Groups to be divided into
				console.log(test);//The number of people in that group
			}

















			function randomArray (){
				
			for(var i = 0; i <= classMates.length; i++){
			var randArray = classMates[Math.floor(Math.random() * classMates.length)];
				//console.log(randArray);//in the console, this...consoles a loop of 11 names including 2 matt's. We need to remove the ability for it to go backinto classMates and grab similar names
				classMates.splice(0,1);
				newArray.push(classMates);
				
			}		
				console.log(newArray);//this is what we want to display on the DOM but without quotes and in decending order
 					
 					}

			

// var randArray = smallArray[Math.floor(Math.random() * smallArray.length)];
// 				console.log(randArray);

// var test = classMates.length / $(this).data('buttonValue');
		// 		test = Math.round(Math.random(test)*(i+1));
		// 		//console.log($(this).data('buttonValue'));
		// 		console.log(test);
				// var item = classMates[Math.floor(Math.random()*classMates.length)];
























