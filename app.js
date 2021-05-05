// // we can create arrays 3 ways

// // array literal
// var number= [3, 66 ,68];
// console.log(number);

// // create with a new keword
// var strings= new Array("lime", "lemon", "strawberry", "cherry");
// console.log(strings);

// // create with keyword 

// var booleans= new Array()
// booleans[0]= 9<10;
// booleans[1]= 11===11.5;
// booleans[2]= 12 >8;
// booleans[3]= "sky" == "Sky";
// console.log(booleans);

// // create an array of classmnates names
// var classNames= new Array("Danielle", "Trent","Katie", "Heather", "Sky");
// console.log(classNames);

// // check index

// console.log(classNames[2]);

// // .length nethod(gives index of array)
// console.log(classNames.length);

// // built in methods .methodnames(data);
// // .push 
// classNames.push("Mara", "John", "Mark");
// console.log(classNames);

// // .pop removes last index of array
// classNames.pop();
// console.log(classNames);

// // .shift removes the first index in array

// classNames.shift();
// console.log(classNames);

// // .unshift adds the the begining of an array

// classNames.unshift("Kevin");
// console.log(classNames);

// // splice method add or remove index in array
// // replace 1 elelmet ar a certian index
// // read backwards
// // index number, changes at index, 

// classNames.splice(2,1,"Eli");
// console.log(classNames);

// classNames.splice(3, 2, "New student");
// console.log(classNames);

// // loop in array
// // for loop 
// // when to start, stop, and hoe to get tho the next item
// for (i=0; i<classNames.length; i++){
//     console.log(classNames[i]);
// }

// // finding an index
// // locate an array locates the specific index of item

// console.log(classNames.indexOf("Trent"));

// Array Assignments
//Create an Array called "donuts" that list 7-10 different items
var donut=  new Array("vanilla", "chocolate", "coffee", "strawberry", "glazed", "cinnamon", "jelly", "kreme");
console.log(donut);
//1 Using a loop, iterate through this array and console.log all the donuts
for (i=0; i<donut.length; i++){
    console.log(donut[i]);
}
    
//2 Write the command to remove the first donut fron the array
donut.shift();
console.log(donut);


//3 Write the command to remove the last donuts from the array
donut.pop();
console.log(donut);

//4 Write the command to add a new donut "lime zest" to the front of the array
donut.splice(0, 0, "lime zest" );
console.log(donut);

//5 Write the command to add another donut "lemon pie" to the end of the array
donut.splice(8,0,"lemon pie" );
console.log(donut);

//6 Use either the join() or toString() method to convert an array to a string.
console.log(donut.toString());
//7 Write the command to make a copy of the array using slice. 
// The copy should NOT include two donuts.
console.log(donut.slice(2, 4));

//8 Write the command that gives the indexOf where "chocolate" is located.
console.log(donut.indexOf("chocolate"));

//9 Write the command that gives the indexOf where "glazed" is located (You may get a negative number).
console.log(donut.indexOf("glazed"));

//10 **Using the splice method, remove one donut from the array and add another.
donut.splice("lime zest",1,"blueberry" );
console.log(donut);

//11 **Create a new variable called withSyed and set it equal to the people array concatenated with the string of "Bob".
var withSyed= donut.concat("Bob");
console.log(donut.concat("Bob"));




//12 **Create a function called getdonuts() that will display all the donuts in your array and display on your page.

function getdonuts () {
    document.write(donut);}
     getdonuts ();
