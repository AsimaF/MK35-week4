

// //       Higher Order Functions


// example 1: 

// const whichGreeting = (timeOfDay) => {
//     console.log(`Good ${timeOfDay}`);
// }
// const greet = (time, fn) => {
//     if(time < 1200){
//         fn("Morning");
//     }else if (time >= 1200 && time < 1800){
//         fn("Afternoon");
//     }else{
//         fn("Evening");
//     }
// }
// greet(1400, whichGreeting);

////////////////////////////////////////////////////////////////////////

// example 2: Anonymous Functions

// const thisFunction = () => {
//     return "Booya";
// }

// const add = (example) => {
//     add2(example);
// }

// const add2 = (example) => {
//     example();
// }

// add(thisFunction);


//////////////////////////////////////////////////////////////////////////////////


// Example 4: Multidimenstional Arrays

// let myArray = [
//     [1, 2, 3, 4, 5], 
//     [6, 7, 8, 9, 10], 
//     [11, 12, 13, 14, {name: "Jordan"}]
// ];

// console.log(myArray[2][4].name)


//////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////


// Activity 1:

// const loopFunction = (fn) => {
//     for (let i = 0; i < 5; i++){
//         fn();
//     }

// }

// const simpleFunction = () => {
//     console.log ("Hello Code Nation");
// }

// loopFunction(simpleFunction);

//////////////////////////////////////////////////////////////////////////////


// Activity 2:

// const array1 = [1, 2, 3, 4, 5];

// const map1 = array1.map(x => x * 3);

// console.log(map1);

///////////////////////////////////////////////////////////////////////////


// Activity 3:


// doMaths(10)(5,multiply)