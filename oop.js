
            //// Object Ortientated Principle

            ////focus on code reusability using classes, subclasses and object
            ////class = template    sub-class = change property     
            //// isolated chnages in objects data
            //// better for reusability

            //// 4 pillar of OOP:
            //// 1) Encapsulation - breaking down chunks
            //// 2) Abstraction - anonymous isolation
            //// 3) Polymorphism - changeable
            //// 4) Inheritance - inheriting data



//// revisit activities:

// const name = "asima";
// let myInt = 26 ;
// const FavColor = true;

// const alcohol = ["gin", "vodka", "tequila", "whiskey"];
// alcohol.push ("sambuca , rum");

// for (let i = 0; i < alcohol.length ; i++) {
//     console.log(alcohol[i]);
    
// }

// const withdraw = (amount) => {
//     myInt -= amount; 
//     return "new balance is: ${myInt}";
    
// }

// console.log(withdraw (15));

////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////



// // class - example 1:
// // let is direct identifier

// let rosie = {
//     _name: "rosie",
//     _hops: 0,

//     get name() {
//         return this._name;
//     },
//     get hops () {
//         return this._hops;
//     },
//     increaseHops() {
//         this._hops++;
//     }
//     }

// console.log(rosie)




/////////////////////////////////////////////////////////////////////////////////


////class - example 2:



    ////class created template for lots of bunny objects
    ////can create multiple objects from same template to make it more convenient
    ////constructors
    ////no commas
    ////name on constructer will allow us to create data set (key value pairs) in freer way
    ////class is created, constructer is formed, then data is added on after
    ////can give it multiple arguments
    ////underlinding is best practice to keep track
    ////objects are instances of a class





// class Bunny{
//     constructor(name, theHops){
//         this._name = name;
//         this._hops = theHops;
//     }
//     get name(){
//         return this._name;
//     }
//     get hops(){
//         return this._hops;
//     }
//     increaseHops(){
//         this._hops++;
//     }
//     }




    //// will show that it is a class
    // console.log(Bunny)
    


    //// new keyword to create an instance of our bunny class
    //// new works on class

    // const rosie = new Bunny("rosie", 10);
    // const jim = new Bunny ("Jim");




    //// accesses constructor to change name

    // console.log(rosie);
    // console.log(jim);




    // can use callbacks to recall and change

    // for (let i = 0; i < 100; i++){
    //     const rosie = new Bunny ("Rosie", 10);
    // }

/////////////////////////////////////////////////////////////////////////////

    //// Activity 3:
    //// class for cars. information of car reg, no. of hours parked, total amount charged (!.50 ph)
    //// car parked for 5 hours. display information so the driver can pay their parking fee
    //// enter and exit time
    //// rounding of hours
    //// mark as paid with boolean
    //// car data in object
    //// calc cost in seperate function
    //// rosie is car code



    // class CarPark{
    //         constructor(regNum, arrivalTime, departureTime){
    //             this._reg = regNum;
    //             this._arrival = arrivalTime;
    //             this._departue = departureTime;
    //             this._costPerHour = 1.5;
    //             this._paid = false;
    //         }
    //         get reg(){
    //             return this._reg;
    //         }
    //         get amount(){
    //             return this._departue - this._arrival * this._costPerHour;
    //         }
    //         checkIfPaid(){
    //             if (this._amountPaid === this.amount){
    //                 this._paid = true;
    //             }
    //         }
    //         }

            // const QWERTY123 = new CarPark("QWERTY123", 1, 6);

            // console.log(QWERTY123);
            // console.log(QWERTY123.amount);

/////////////////////////////////////////////////////////////////////////////////////

// class Cars {
//     constructor(regNum, arrivalTime, departureTime) {
//         this._reg = regNum;
//         this._arrival = arrivalTime;
//         this._departure = departureTime;
//         this._amountPaid = 0;
//         this._costPerHour = 1.5;
//         this._hasPaid = false;
//     }
//     get reg() {
//         return this._reg;
//     }
//     get charge() {
//         return (this._departure - this._arrival) * this._costPerHour;
//     }
//     moneyInserted(amountInserted) {
//         this._amountPaid =+ amountInserted;
//     }
//     checkIfPaid() {
//         if (this._amountPaid === this.charge) {
//             this._hasPaid = true;
//         }
//     }
// }
            
            // const AA11AAA = new Cars("AA11AAA", 3, 8);
            
            // console.log(AA11AAA);
            // AA11AAA.moneyInserted(7.5);
            // AA11AAA.checkIfPaid();
            // console.log(AA11AAA);

            // class Example extends Cars{
            //     constructor(colour, regNum, arrivalTime, departureTime){

            //         // super would need to be same parameters of Cars constructor 

            //         super(regNum, arrivalTime, departureTime);
            //             this._CarColour = colour;
            
            //     }
            //     exampleFunction(){
            
            //     }
            // }
            // // new instance created

            // const thisThing = new Example("red", "AA11AAA", 3, 8);
            
            // console.log(thisThing.charge);
            // thisThing.moneyInserted(7.5)
            // thisThing.checkIfPaid();
            // console.log(thisThing)
            
//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////

////           NODE & NPM

////       -module.exports and require();

//// need to import/require from math.js file
//  const {add} = require ("./math.js");

/// to print add function only
//  console.log (add(20,30));

// // can also use direct reference to use all functions in the module
// const math = require("./math.js");

// console.log(math.add(30,40));
// console.log(math.subtract(30,40));
// console.log(math.multiply(30,40));

////////////////////////////////////////////////////

// os and fs modules
// os = operating data
// fs = file system

// const os = require ("os");
// const fs = require ("fs");

// let userDetails = os.userInfo().username;
// // strings the userinfo as a variable

// fs.appendFile('oh-hi.txt', 'hello ${userDetails}' , (err) => {
//     if (err){
//         console.log('oops');
//     }
// })
// read only files: will catch errors for this

// read more on mozilla for os and fs methods and how to use them

// NPM = node package manager
// thirst-party modules in packages; pay attention to their forums for flags. sometimes a risk
// usually validated tho

/////////////////////////////////////////////////////////////////////







 



