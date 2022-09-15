// IN JAVASCRIPT :
//1. BLUE COLOURED OUTPUT : IT IS  A NUMBER 
//2. BLACK COLOURED OUTPUT : IT IS  A STRING 
//3. NULL IS AN INTENTIONAL EMPTY VALUE INITIALIZED TO A VAR BUT UNDEFINED IS A DEFAULT EMPTY VALUE ASSIGNED TO A VAR WHEN IT IS NOT INITIALIZED A VALUE.In JavaScript, Null is considered as 0 when used with numbers. Arithmetic operation of undefined with number, boolean or null returns NaN
//4. Javascript is case sensitive which means alert and Alert are different variables
//5. Types of cases in Javascript:
// 1. let camelCases =5;
// 2. let PascalCases=50;
// 3. let snake_cases= 500;
// LET and CONST HAS A BLOCK LEVEL SCOPE WHILE VAR DEFINED OUTSIDE A FUNCTION HAS A GLOBAL LEVEL SCOPE WHILE WHEN VAR IS DEFINED WITHIN A FUNCTION THEN IT HAS A FUNCTION LEVEL SCOPE


//1 WAYS TO PRINT IN JAVASCRIPT
// prints on the console window
// console.log("hello world", 4 + 6, "ITS JUST A CODE");
//prints on the output window
//document.write("hello ji kaise ho saare")

//2. JAVASCRIPT CONSOLE API
//console.log("hello world");

// warning logging

// console.warn("this is a warning");
// error logging

// console.error("this is an error");

//clearing the console window

//console.clear();
// to do assertions(true or false checking)
// console.assert(conditions);

//3. JAVASCRIPT VARIABLES
//containers to store data values.
// var number1 =10;
// var number2= 11;
// console.log(number1+number2);

//4. DATATYPES IN JAVASCRIPT

// Primitive data types

// 1.STRING FUNCTIONS

// let Firstname = "harry";
// let lastname = "basu";
// console.log("My string is " + Firstname + lastname); // concatination of strings
// let name= Firstname+lastname;
// console.log("Data type is " + (typeof name));
//let string= "rishiraj"
// console.log(string.length) // returns the length of the string
// console.log(string[0]) // returns the first character
// console.log(string[7]) // returns the last[n-1] character
// console.log(string.indexOf(2)) //returns the first character of the sub-string and first occurence is given in case of multiple occurences and -1 in case if the character isnot present
// console.log(string.lastIndexOf['r']) //returns the last occurence is given in case of multiple occurences and -1 in case if the character isnot present
// console.log(string.charAt[0]) //returns the character in the index
// console.log(string.endsWith['raj']) //returns a boolean value checking if the string ends with the characters given or not
// console.log(string.includes['raj']) //returns a boolean value checking if the characters are present in the string or not
//  console.log(string.slice(0,3)) //returns the first character and last [n-1] character of the sub-string as per the index specified but on giving negative indices it returns the string from the right. 
//  console.log(string.substring(0,3)) //returns the first character and last [n-1] character of the sub-string as per the index specified but on giving negative indices it returns the entire string 
// console.log(string.toUpperCase()); //returns the string in the uppercase  //original string is retained in its original form ie uppercase or lowercase
// console.log(string.toLowerCase()); //returns the string in the lowercase  //original string is retained in its original form ie uppercase or lowercase

// let html ="rishi"
// let css=" raj"
// console.log(html.concat(css))   //rishiraj     // adds the string to the existing string
// console.log(html.concat(' raj'))   //rishi raj

// console.log(string.split('')) // returns the entire string in the form of an array splitting particularly at the given character.
// console.log(string.split('r','p')) // returns the entire string replacing all the 'r' with 'p'.
// Numbers

// let marks = 34.4;
// console.log("Data type is " + (typeof marks));

// // 2.Boolean
// let isDriver = true;
// console.log("Data type is " + (typeof isDriver));

// // 3.Null

// IT HAS A WASTE RETURN VALUE AND SO EVEN IF IT IS A PRIMITIVE DATATYPE IT STILL GIVES OBJECT RETURN TYPE WHEN USED TYPEOF .

// let nullVar = null;
// console.log("Data type is " + (typeof nullVar));

// // 4.Undefined
// let undef = undefined;
// console.log("Data type is " + (typeof undef));

// // Reference Data Types

// // Arrays
// let myarr = [1, 2, 3, 4, false, "string"];
// console.log("Data type is " + (typeof myarr));

// // Object Literals
// let stMarks = {
//     harry: 89,
//     Shubham: 36,
// //     Rohan: 34

// //OR
//   //    'ROHAN DAS': 56
//  }
// console.log( typeof stMarks);

// function findName() {
    
// }
// console.log( typeof findName);

// let date = new Date();
// console.log( typeof date);



//numbers
var num=10;
var num2=10.0;

//strings
var str="this is a string";
var str='this is also a string';
//objects
var marks = {
    debopriya: 10,
    riya: 8,
    sayak:20
}
// console.log(marks);
//booleans
var a = true;
var b= false;
console.log(a , b);
//undefined - one whose value isnot defined or given by the user by mistake
var und;
// console.log(und);
//or
// this still will print undefined
var und2= undefined;
console.log(und2);
//NULL value-   one whose value is defined or given by the user as NULL and hence it is done intentionally by the user.
var und3 = null;
// console.log(und3);

// AT A VERY HIGH LEVEL , THERE ARE TWO TYPES OF DATA TYPES IN JAVASCRIPT 
//1. PRIMITIVE DATATYPES : undefined , null, number, string, boolean, symbol
//2. REFERENCE DATATYPES : arrays , objects

// TYPE CONVERSIONS IN JS
// let res;
// // string to number
// res = Number('100');
// console.log(res); // 100
// // boolean to number
// res = Number(false);
// console.log(res); // 0 is returned 
//  res2 = Number(true);
// console.log(res); // 1 is returned 
// res = Number(' ')
// console.log(res); // 0
// res = Number('hello');
// console.log(res); // NaN
// res = Number(undefined);
// console.log(res); // NaN

// BOOLEAN CONVERSIONS

// res=Boolean(1); // true
// res= Boolean(0); // false
// res= Boolean("hello"); // true
// res= Boolean(""); // false

//STRING CONVERSION

// let res
// let a=90
// res= String(a) // returns a string from a number variable a
// String(378009) // returns a string from a number literal 378009
// a.toString() 
// (378009).toString()

//The in-built method parseInt() and parseFloat() return numbers from strings that start with numeric data. Here is an examples:
// console.log( parseInt('$100 dollars') ); // NaN
// console.log( parseInt('+10.25990 kg') ); // 10
// console.log( parseFloat(' +10.25 kg') ); // 10.25
// console.log( parseFloat('ABC’) );      // NaN

// let num565 = parseFloat('34.5689');
// console.log(num565.toFixed(3),(typeof(num565))); // this .toFixed(num) function defines the number of digits we want to keep after the decimal.
//IMPLICIT CONVERSIONS
 
//Conversion To String:- When we add a number into a string, JavaScript converts the number to a string before concatenation. Here is an example:
// let res;
// res = '3' + 4; 
// console.log(res) // "34" // number 4 is converted to string in JS and concatinated with the given string
// res = '9' + true; 
// console.log(res); // "9true"
// res= '0' + null; 
// console.log(res); // "0null"

//Conversion To Number:- Numeric string used with operators like +, - , / , * returns number type
// let res
// res = '4' - '4'; 
// console.log(res); // 0
// res = '4' * 5;
// console.log(res); // 20

//Boolean Conversion to Number:- If we use Boolean, true is considered as 1 and false is considered as 0.

// let res;
// res = '5' - true;
// console.log(res); // 4
// res = 10 + false;
// console.log(res); // 10

//In JavaScript, Null is considered as 0 when used with numbers. Arithmetic operation of undefined with number, boolean or null returns NaN

// res = 4 + null; // 4
// res = 4 - undefined;// NaN

//Type COERCION 
// let mystr= "695"
// let mi= 56;
// console.log(mystr+mi); // here JS will convert mi into string and will add to mystr as string: string concatination.
//ARRAYS 
var arr=[1,2,3,4, "rishi"];                                                                                                                                  
// console.log(arr);
// console.log(arr[0]);
// console.log(arr[3]);

// HARRY KA NOTES HAS BEEN PASTED FROM HERE ON :
// Operators in JavaScript
// Arithmetic Operators
var a = 100;
var b = 10;
// console.log("The value of a + b is ", a+b);
// console.log("The value of a - b is ", a-b);
// console.log("The value of a * b is ", a*b);
// console.log("The value of a / b is ", a/b);

// Assignment Operators
var c = b;
// c += 2;
// c -= 2; // c = c - 2;
// c *= 2;
// c /= 2;
// console.log(c);

// Comparison Operators - IT GIVES A BOOLEAN VALUE IN RETURN
var x = 34;
var y = 56;
// console.log(x == y);
// console.log(x >= y);
// console.log(x <= y);
// console.log(x > y);
// console.log(x < y);

// Logical Operators - BOOLEAN ALGEBRA

// Logical and
// console.log(true && true)
// console.log(true && false)
// console.log(false && true)
// console.log(false && false)

// Logical or
// console.log(true || true)
// console.log(true || false)
// console.log(false || true)
// console.log(false || false)

// Logical not
// console.log(!false);
// console.log(!true);

//OPERATORS: THE OPERATIONS (+,-,*,/)

//ASSIGNMENT OPERATOR :
// 1. == : CHECKS THE VALUES
// var x= 3 =='3'
//output: true 
// 2. === : CHECKS THE VALUES AS WELL AS TYPE
// var x= 3 === '3'
// output: false
// 3. var x= 3 !=='3' // checks the value and type of the arguments
// 3. var x= 3 !='3' // checks the value and type of the arguments
//output: false
// 4. unary operator
// var x='3'
// x=-x
//output: -3 // changes the string into number
//var x=true
// x=+x
//output: 1 // changes the boolean  into number

//OPERANDS: THE NUMBERS ON WHICH THE OPERATIONS ARE DONE.

// Function in JavaScript
function avg(a, b) {
    c = (a + b) / 2;
    return c;
}
// DRY = Do not repeat yourself
c1 = avg(4, 6);
c2 = avg(14, 16);
// console.log(c1, c2);

// Conditionals in JavaScript
// if-if-else : all the if-statements are evaluated
// if-else if-else : one of all the if-statements is evaluated
// var age = 41;
// // Single if statement
// if(age > 18){
//     console.log('You can drink rasna water');
// }
// // if - else statement
// // if(age > 18){
// //     console.log('You can drink rasna water');
// // }
// // else{
// //     console.log('You cannot drink rasna water');
// // }

// age = 25;
// // if-else Ladder
// if(age > 32){
//     console.log("You are not a kid");
// }
// else if(age >26){
//     console.log("Bachhe nahi rahe");
// }
// else if(age >22){
//     console.log("Yes Bachhe nahi rahe");
// }
// else if(age >18){
//     console.log("18 Bachhe nahi rahe");
// }
// else{
//     console.log("Bachhe rahe");
// }
// console.log("End of ladder");

// SWITCH CASES :

//var pyaar = prompt("Hey are u in love ?? ");
// switch(pyaar){
//     case 'yes':
//         alert("congrats bro....u have nailed it");
//         break;
//     case 'no':
//         alert("nvm bro....maybe someone more special is waiting for you!!!...so wait for it man...all the best");
//         break;
//     default:
//         alert('Tu iss duniya ka hain hi nahi');    
// }

//TERNARY OPERATOR

//alert(pyaar=='yes'?"congrats bro....u have nailed it":"nvm bro....maybe someone more special is waiting for you!!!...so wait for it man...all the best");


// LOOPS IN JAVASCRIPT
var arr = [1, 2, 3, 4, 5, 6, 7];
// console.log(arr);
// for(var i=0;i<arr.length;i++){
//     if(i==2){
//         // break; //THIS MEANS THAT THE FOR LOOP SHOULD RUN UNTIL THIS STATEMENT IS REACHED
//         continue; // THIS MEANS THAT ALL THE STATEMENTS OF THE FOR LOOP SHOULD RUN EXCEPT THIS STATEMENT 
//     }
//     console.log(arr[i])
// }
// THIS IS A SHORTCUT FUNC FOR TRAVERSING THE ENTIRE LOOP

arr.forEach(function( element,index,array){
    console.log( element,index,array );
})

//VAR IS AN OLD STANDARD JS AND THE SCOPE OF THE VARIABLE REMAINS GLOBAL IE EVEN OUTSIDE THE FUNCTION IN WHICH THE VARIABLE IS DECLARED

//LET IS AN NEW STANDARD JS AND THE SCOPE OF THE VARIABLE REMAINS BLOCK LEVEL IE ONLY INSIDE THE FUNCTION IN WHICH THE VARIABLE IS DECLARED

// const ac = 0; //HERE THE VAL OF THE VARIABLE REMAINS CONSTANT ALL THORUGHOUT THE CODE AND CANT BE OVERIDDEN.
// ac++; // AN ERROR WILL BE THROWN IN RETURN AS THE VARIABLE TYPE IS CONST
// ac = ac +1; // AN ERROR WILL BE THROWN IN RETURN AS THE VARIABLE TYPE IS CONST
// let j = 0;
// while(j<arr.length){
//     console.log(arr[j]);
//     j ++;
// }

// do{
//     console.log(arr[j]);
//     j++;
// } while (j < arr.length);

// LOOPS FOR OBJECTS 
// let animal = {
//     name: "Panda",
//     leg:4,
//     species: "mammal"
// }
// console.log(animal.name)  // way to print in JS
// console.log(animal['name'])  // way to print in JS
// for(let key in animal){
//     console.log(key, animal[key]);
// }
// for .....of loop
// let rishi = ["Fan", "Camera", 34, null, true];
// for(let obj in rishi){
//     console.log(obj)
// }



//let myArr = ["Fan", "Camera", 34, null, true];
// Array Methods
// Array.from(name) // name is being transformed into an array
// console.log(myArr.length); // LENGTH OF THE ARRAY IS GIVEN
// myArr.pop(); // LAST ELEMENT FROM THE ARRAY IS POPPED OUT
// myArr.push("harry") // AN ELEMENT IS PUSHED FROM THE END
// myArr.shift()  //AN ELEMENT FROM THE FRONT IS DELETED 
// const newLen = myArr.unshift("Harry") //AN ELEMENT AT THE FRONT IS INSERTED
// console.log(newLen); // NEW LENGTH OF THE ARRAY IS PRINTED AFTER ALL THE OPERATIONS BEEN DONE ON IT
// console.log(myArr);
// OTHER METHODS IN JAVASCRIPT:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

// String Methods in JavaScript
let myLovelyString = "Harry is a good boy good good Harry";
// console.log(myLovelyString.length) // STRING LENGTH
// console.log(myLovelyString.indexOf("good")) //THE STARTING INDEX IS GIVEN FOR THE STRING VALUE
// console.log(myLovelyString.lastIndexOf("good")) //THE INDEX OF THE LAST ELEMENT OF THE LAST OCCURRENCE FORM THE BACK IS GIVEN

// console.log(myLovelyString.slice(1,4)) // 0 TO N-1 CHARACTERS ARE RETURNED
d = myLovelyString.replace("Harry", "Rohan");
// d = d.replace("good", "bad"); // THE FIRST OCURENCE OF THE CHARACTER IS REPLACED
// console.log(d, myLovelyString)

let myDate = new Date();
// console.log(myDate.getTime());
// console.log(myDate.getFullYear());
// console.log(myDate.getDay());
// console.log(myDate.getMinutes());
// console.log(myDate.getHours());
 
// APNA COLLEGE - EVERYTHING ABOUT OBJECTS IN JAVASCRIPT :
// way 1 of creating an object
//  let demo = {
//     lecture: 10,
//     video: 15,
//     title: 'javascript',
//     notes:{
//         fill: 21,
//         unfill:10
//     },
//     enroll(){
//         console.log('they are done');
//     }

//  }
// demo.enroll()
// console.log(demo)

//way 2 of creating an object : factory function -creating an object within a function

// camelcasing is used for declaring the function name
// function is called without a new keyword
// function createObj(title, videos, lecture){
//     return{
//         title: title,
//         vlogs: videos,
//         study: lecture
//     }
// }
// let obj = createObj('javascript' , 15 , 20);
// console.log(obj)
// console.log (obj.title);

//way 3 of creating an object : constructor function
 // pascal casing is used for declaring the function name
 // THIS keyword with in the function is returned as soon as NEW KEYWORD is encountered or it can also be done  mannuly but then NEW keyword isnot required anymore to be used
// function CreateObj(title, videos, lecture){
//     this. title= title,
//     this.vlogs  = videos,
//     this.study  = lecture
//     this. enroll = function(){
//           console.log('they are done');
//             }
//            // return this   // -- alternative for using the new keyword
// }
// let obj= new CreateObj('javascript' , 15 , 20);
// obj.enroll()
// console.log(obj)
// // delete keyword -- to remove an object property
// delete obj.title;
// console.log(obj)
// obj.checktitle=function(){
//     console.log('javascript')
//    }
//    console.log(obj)
//    console.log(obj.checktitle())
//    console.log(obj.constructor)
//    console.log(obj.constructor)
// adding object keys

// IN CASE OF OBJECTS MADE BY THE CONSTRUCTOR FUNC , THE FUNC HAPPENS TO BE ITS CONSTRUCTOR OBJ
// IN CASE OF OBJECTS MADE BY THE FACTORY FUNC , AN OBJECT MADE BY THE NATIVE JAVASCRIPT ENGINE HAPPENS TO BE ITS CONSTRUCTOR OBJ BECOZ OF THE USAGE OF OBJECT LITERALS WHERE THE FUNCTION IS BY DEFAULT CHANGED TO AN OBJECT BY THE JAVASCRIPT ENIGNE

// ALL THE PRIMITVE DATATYPES ARE ALSO MADE INTO OBJECT DUE TO THE USAGE OF OBJECT LITERALS AND UNLIKE REFERENCE DATATYES THESE PRIMITVE DATATYPES WHICH ARE ALTHOUGH AN OBJECT IS INMUTABLE WHICH MEANS NO NEW PROPERTIES CAN BE DECLARED AT THE USER END EXCEPT THOSE ALREADY DEFINED UNLIKE REFEERENCE DATATYPES LIKE OBJECTS

// ALL THE FUNCS [REFERENCE DATATYPES] MADE IS CHANGED INTO CONSTRUCTOR FUNCTION WITH THE NAME FUNCTION BY DEFAULT BY THE JAVASCIPT ENGINE
// Ways to copy object in Javascript

//1. '...' - SPREAD OPERATOR IN OBJECT - USED TO COPY VALUES

// let obj = {
//      title: 'Javascipt',
//      vlogs: 10,
//      study: 50
// }
// let obj2={ ...obj } // '...' - SPREAD OPERATOR IN OBJECT-USED TO COPY VALUES
// console.log(obj)
// console.log(obj2)

//2. .assign({},object_name)
// let obj = {
        //  title: 'Javascipt',
        //  vlogs: 10,
        //  study: 50
// }
// let obj2 = Object.assign({}, obj)
// console.log(obj)
// obj2.title = 'para'
// console.log(obj2)

//3. for..of loop
// let obj = {
//     title: 'Javascipt',
//     vlogs: 10,
//     study: 50
// }
// let obj2={}
// for(let  key of Object.keys(obj)){
//     obj2[key]=obj[key]
// }
// console.log(obj)
// console.log(obj2)
// console.log(obj2.title)



// CLASSES IN JAVASCRIPT

// Declaring a class:

// class Apni{
//     constructor(title, videos, lecture){
//         this. title= title,
//         this.vlogs  = videos,
//         this.study  = lecture
//         this. enroll = function(){
//               console.log('they are done');
//                 }
// }
// };
// let classes = new Apni('javascript', 200, 10);
// console.log(classes.enroll)

// Declaring a class: by class expression method


// const kaksha= class Apni{  // here the class name [kaksha.name] is shown Apni

// const kaksha= class {  // here the class name [kaksha.name] is shown kaksha
//     constructor(title,  videos, lecture ){
//         this. title= title,
//         this.vlogs  = videos,
//         this.study  = lecture
//         this. enroll = function(){
//               console.log('they are done');
//                 } //here a function is also created like getter n setter but here to call the function we need to call it like 'eleven.enroll()' and then only its value will be printed on the console log
// }
// };
// let eleven= new kaksha('javascript',20, 10);

//GETTER AND SETTER
// GETTER: A FUNCTION USED WITHIN A CLASS IS USED TO GET A  VALUE OF A PARTICULAR PROPERTY LIKE this.vlogs
// SETTER: A FUNCTION USED WITHIN A CLASS IS USED TO SET A  VALUE OF A PARTICULAR PROPERTY LIKE this.vlogs
// const kaksha= class {  // here the class name [kaksha.name] is shown kaksha
//     constructor(title,  lecture ,videos){
//         this. title= title,
//         this.vlogs  = videos,
//         this.study  = lecture
//         this. enroll = function(){
//               console.log('they are done');
//                 } //here a function is also created like getter n setter but here to call the function we need to call it like 'eleven.enroll()' and then only its value will be printed on the console log
// }
// get getvlogs(){
//     return this.vlogs; // here the value is returned 
// }
// set setvlogs(number){
//      this.vlogs = number; // here the value is set which was undefined on function parameter passes
// }
// };
// let eleven= new kaksha('javascript',20);

// EXTENDING CLASSES: THIS IS ONLY APPLICABLE FOR OOPS PROGRAMMING
//ERROR
// const kaksha = class kaks{  // here the class name [kaksha.name] is shown kaksha
//     constructor( videos ){    
//         this.vlogs  = videos
//     }
// get getvlogs(){
//     return this.vlogs +" this is a part of the kaksha class"; // here the value is returned 
// }
// };
// class Apni extends kaks{
//     constructor(videos){
//           super(this.vlogs) // this super() - calls the constructer of the parent class
//     }
//     get getvlogs(){
//         return this.vlogs +" this is a part of the Apni class"; // here the value is returned 
//     }
// }
// // let eleven = new kaksha(20);
// let eleven = new Apni(200);

// ARRAYS IN JAVASCRIPT [APNA CLG]
const Array =["Fan", "Camera", 34,34, null, true];
console.log(Array)
//Array Methods
//Array.from(name) // name is being transformed into an array
console.log(Array.length); // LENGTH OF THE ARRAY IS GIVEN
Array.pop(); // LAST ELEMENT FROM THE ARRAY IS POPPED OUT
console.log(Array)
Array.shift()  //AN ELEMENT FROM THE FRONT IS DELETED 
console.log(Array)
Array.push("harry") // AN ELEMENT IS PUSHED FROM THE END
console.log(Array)
const newLen = Array.unshift("Harry") //AN ELEMENT AT THE FRONT IS INSERTED
console.log(newLen); // NEW LENGTH OF THE ARRAY IS PRINTED AFTER ALL THE OPERATIONS BEEN DONE ON IT
console.log(Array)

console.log(Array.lastIndexOf(34))
// .INCLUDES() ONLY WORKS FOR THE PRIMITIVE DATATYPES
console.log(Array.includes('Camera'))// here it returns a boolean value after checking if the element is present in the array or not
console.log(Array.includes('Camera',2))// here it returns a boolean value after checking FROM THE INDEX 2 TILL THE END OF THE ARRAY if the element is present in the array or not
// .FIND() WORKS FOR BOTH PRIMITIVE AND REFERENCE DATATYPES
// here it returns the particular element
// Declaring objects within arrays
    // let hey=[
    //     {
    //         title: 'C++',
    //         vlogs: 100,
    //         study: 500
    //     },{
    //         title: 'Javascript',
    //         vlogs: 10,
    //         study: 5
    //     },{
    //         title: 'C',
    //         vlogs: 1,
    //         study: 50
    //     }
    // ];
// inline - call back function
    // console.log(hey.find(function(elements){
    //     return elements.title==='Javascript'
    // }))
// ARROW function
// // constrains : only for one parameter [elements]and one return statement [elements.title === 'Javascript']
// console.log(hey.find(elements => elements.title === 'Javascript'))

// .filter() - HERE IT RETURNS ALL THE VALUES THAT STATISFIES THE CONDITION IN THE FORM OF AN ARRAY UNLIKE FIND WHERE THE FIRST ELEMENT SATISFYING THE CONDIITON IS RETURNED
// console.log(hey.filter(elements => elements.vlogs>5))

//.map()- HERE IT RETURNS VALUES IN AN ARRAY AFTER DOIMG THE OPERATIONS 
//console.log(hey.map(elements => elements.vlogs * 5))

// CONCATINATION OF ARRAYS 
// const Array1=["Fan", "Camera", 34,34, null, true];
// const  Array2=[,"DISH-WASHER","PHONE"];
// const Array3=Array1.concat(Array2);
//console.log(Array3)
//SPREAD OPERATOR
// const Array1=["Fan", "Camera", 34,34, null, true];
// const  Array2=[,"DISH-WASHER","PHONE"];
// // const Array3=[...Array1,...Array2];
// //or
// const Array3=[...["Fan", "Camera", 34,34, null, true],...[,"DISH-WASHER","PHONE"]];
// console.log(Array3)
// SLICING OF ARRAYS
// console.log(Array3.slice(2,5))

//FOR LOOPS IN ARRAYS

//1. FOR LOOP
// for (let i=0; i<Array.length;i++){
//     console.log(Array[i])
// }
//2. FOR OF
// for (let i of Array){
//     console.log(i)
// }
//3. FOR EACH
// Array.forEach(function element(i,index){
//     console.log(i,index)
// })
//JOIN - USED TO JOIN ALL THE ARRAY ELEMENTS AND RETURNS A STRING
// let array=['R','I','S','H','I']
// console.log(array.join()) // when the seperator isnot passed then it returns a coma seperated concatinated string value
// console.log(array.join('')) //  returns a '' seperated concatinated string value
// console.log(array.join('=')) //  returns a '=' seperated concatinated string value
//SPLIT - USED TO SPLIT THE ENTIRE STRING AND RETURNS AN ARRAY --> error array.split() is not a function
// let array=['R=I=S=H=I']
 //console.log(array.split()) // when the seperator isnot passed then it returns a coma seperated splitted array value
 // console.log(array.split('')) //  returns a '' seperated splitted array value
// console.log(array.split('=')) //  returns a '=' seperated splitted array value

//ARRAY CHALLENGES :
let hey=[
    {
        title: 'C++',
        vlogs: 100,
        study: 500
    },{
        title: 'Javascript',
        vlogs: 10,
        study: 5
    },{
        title: 'C',
        vlogs: 1,
        study: 50
    },
    {
        title: 'Java',
        vlogs: 1000,
        study: 5000
    }];
// GET AN ARRAY EXTRACTING A PARTICULAR ELEMENT LIKE TITLE [help taken]
console.log(hey.map(title=>title.title));
// GET AN ARRAY OF OBJECTS WITH JUST VLOGS AND TITLE PROPERTIES [help taken]
console.log(hey.map(ch=>{
    return {TITLE:ch.title, VLOGS: ch.vlogs}
}));
// GET TOTAL SUM OF VLOGS OF ALL ELEMENTS [help taken]
//(read from mdn)REDUCE FUNCTION : IT HELPS TO RETURN THE SUM OF ALL TARGETED PROPERTIES 
// console.log(hey.reduce((prev, current) => prev+current.vlogs,0))
//GET ALL TITLES WITH STUDY MATERIALS GREATER THAN 50:
// console.log(hey.filter(ele=>{
//     if(ele.study>50){
//         return ele.title;
//     }
// }))

//OR

console.log(hey.filter(ele=>ele.study>50)) // AS THE FILTER METHOD ALWAYS RETURND AN ARRAY WITH ALL THE OTHER ELEMENTS
//GET ALL TITLES WITH OOPS
console.log(hey.filter(ele=>ele.title!='C'))
//SORT BY VLOGS
//.EVERY()
//AT LEAST CASES
//.SOME()

//SCOPE IN JAVASCRIPT:
//PRINCIPLE OF LEAST ACCESS
//GLOBAL SCOPE -- VAR KEYWORD IS USED TO MAKE SUCH VARIABLES -- CAN BE ACCESSED ALL OVER THE CODE
//LOCAL SCOPE -  OR //FUNCTIONAL SCOPE -- THE VARIABLES DECLARED WITH VAR OR LET OR CONST CAN BE ACCESSED WITHIN THE FUNCTION SCOPE ONLY
//BLOCK LEVEL SCOPE {....} -- THE VARIABLES DECLARED WITH LET OR CONST DECLARED WITHIN THE SCOPED CAN BE ACCESSED WITHIN THE FUNCTION SCOPE ONLY WHEREAS THE ONES DECLARED WITH VAR CAN BE ACCESSED FROM OUTSIDE THE SCOPE EVEN IF IT IS DECLARED WITH THE SCOPE
//LEXICAL SCOPE --  FOLLOWS THE PRINCIPAL OF INHERITANCE -- THE VARIABLES DECLARED IN THE PARENT FUNCTION WITH VAR OR LET OR CONST CAN BE ACCESSED WITHIN THE CHILD FUNCTION BUT THE VARIABLES DECLARED WITH VAR OR LET OR CONST IN THE CHILD FUNCTION CANOT BE ACCESSED WITHIN THE PARENT FUNCTION 

//HOISTING IN JAVASCRIPT

//HOISTING - MEMORY ALLOCATION OF THE VARIABLES ARE DONE EVEN BEFORE STARTING OF THE EXECUTION OF THE THREAD OF CODE. THIS IS CALLED HOISTING. HERE THE VALUE OF VARIABLES WHILE HOISTING REMAINS UNDEFINED AND THE VALUES ARE ASSIGNED AT THE TIME OF THE EXECUTION OF THE CODE

//'THIS' KEYWORD :
// THE THIS KEYWORD POINTS TO THE OBJECT THAT IT IS DECLARED BY. SO IF A VARIABLE IS MADE BY THE THIS KEYWORD THEN THIS KEYWORD POINTS TO THE OBJECT AND HELPS THE VARIABLE TO GET ATTACHED TO THE PROPERTY OF THE OBJECT

/*It has different values depending on where it is used:

In a method, this refers to the owner object.
Alone, this refers to the global [WINDOW] object.
In a function, this refers to the global  [WINDOW] object.
In a function, in strict mode, this is undefined.
In an event, this refers to the element that received the event.
Methods like call(), and apply() can refer this to any object.*/

// DOM MANUPULATION
// DOM IS A TREE LIKE STRUCTURE WHERE EVERYTHING ATTACHED TO IT IS A NODE



//https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents
//https://www.w3schools.com/js/js_htmldom.asp
let elem = document.getElementById('click'); //WHEN THE ELEMENT IS TARGETED WITH THE HELP OF AN IDENTIFIER [ID]
//console.log(elem);
let elemClass = document.getElementsByClassName("container");
//console.log(elemClass);
//elemClass[0].style.background = "yellow";

//NOTE: HERE [0] IMPLIES THAT THE FIRST CLASS WITHIN THE COLLECTION OF CLASSES IS TARGETED

elemClass[0].classList.add("bg-primary") // A CLASS WITH ITS PROPERTIES IS ADDED TO THE PARICULAR ELEMENT ON TARGET
elemClass[0].classList.add("text-success") // A CLASS WITH ITS PROPERTIES IS ADDED TO THE PARICULAR ELEMENT ON TARGET


//TO REMOVE THE CLASS THAT HAS BEEN ADDED TO THE ELEMENT ON TARGET :
//elemCLass[0].classList.remove("text-success")
// console.log(elem.innerHTML);
// console.log(elem.innerText); 
// console.log(elemClass[0].innerHTML); //THE ENTIRE HTML CODE IS RETURNED
// console.log(elemClass[0].innerText);  //THE TEXT INSIDE THE HTML TAGS ARE RETURNED
tn = document.getElementsByTagName('div') //ALLTHE ELEMENTS WITH THIS TARGETED TAGS ARE COUNTED AND NOW 'tn' REFERS A COLLECTION OF DIV TAGS
// console.log(tn)
createdElement = document.createElement('p');//AN ELEMENT OF TYPE <P> IS CREATED
createdElement.innerText = "This is a created para";//TEXT IS ADDED TO THE CREATED ELEMENT <P>
tn[0].appendChild(createdElement);//THE FIRST DIV IS TARGETED AND AN ELEMENT CALLED CREATEDELEMENT IS ADDED TO IT
createdElement2 = document.createElement('b');
createdElement2.innerText = "This is a created bold";
tn[0].replaceChild(createdElement2, createdElement); //THE FIRST DIV IS TARGETED AND AN ELEMENT CALLED CREATED ELEMENT2 IS REPLACED TO CREATEDELEMENT1
//removeChild(element); --->removes an element
//document.location
//document.all //returns an array type object with all the html tags
//document.body //document body tag is returned
//document.title //title is shown
//document.URL   
//document.scripts
//document.links //all the links are returned
//document.forms //all the forms in the page are given while when the index number is specified then the particular form is returned
//document.images
//document.domain
//variable_name.childNodes will show all the elements, comments and linebreaks (as text) in the node list returned
//variable_name.children will show only the elements in the node list returned
//variable_name.children will show only the elements in the node list returned
//variable_name.children[1].children will show only the elements in the node list of the children of the children of the particular variable returned
//variable_name.children[1].children[2].children will show only the elements in the node list of the children of the children of the children of the particular variable returned
//variable_name.firstChild will return the first child in the node list considering elements, comments and linebreaks 
//variable_name.lastChild will return the last child in the node list considering elements, comments and linebreaks 
//variable_name.firstElementChild will return the first child in the node list considering element
//variable_name.firstElementChild.parentNode will return the parent of the first child in the node list considering elements only
//variable_name.firstElementChild.nextSibling will return the next sibling of the first child in the node list considering elements only
//variable_name.firstElementChild.nextSibling.nextSibling will return the next sibling of the next sibling the first child in the node list considering elements only
//variable_name.lastElementChild will return the last child in the node list considering element
//variable_name.nodeName[2] will show the name of the element present at the given index of the node list in the node list returned
//variable_name.nodeType[2] will show the type of the element present at the given index of the node list in the node list returned
//variable_name.childElementCount will show the number of the elements present in the node list returned

// NODE TYPES:
 
//1-ELEMENT
//2-ATTRIBUTE
//3-TEXT NODE
//8-COMMENT
//9-Document
//10-DOCTYPE
// DOM MANIPULATION IN TABLE
//  console.log(document.body.childElementCount) 
//  const table = document.body.children[6]
//  console.log(table.tBodies[0].rows[0].cells[1].style="background-color: black")
//  console.log(table.tBodies[0].rows[2].cells[0].style="background-color: red")



// Selecting using Query //HERE THE ELEMENTS ARE SELECTED JUST THE WAY IT IS DONE IN CSS //SIGLE ELEMENT SELECTOR
// sel = document.querySelector('.container') // THE FIRST CONTAINER CLASS IS RETURNED
// sel = document.querySelector('#container') // THE FIRST CONTAINER ID IS RETURNED
// console.log(sel)
// sel = document.querySelectorAll('.container') // A NODE WITH ALL THE CONTAINERS ARE RETURNED
// console.log(sel)

// DIFFERENCE BETWEEN [querySelector] and [getElementsByClassName or getElementsById]:

// THE QUERY SELECTOR PASSES THE VALUE OF THE SELECTED ELEMENT IN A VARIABLE AND  HENCE NO NEW CHANGES ARE REFLETED BACK IN THE RESULT
// THE GET ELEMENT SELECTOR PASSES THE REFERENCE OF THE SELECTED ELEMENT IN A VARIABLE AND ALL THE CHANGES DONE AFTER ARE ADDED TO THE RESULT


//ATTRIBUTE SELECTOR

// console.log(table.id) // This gives the id of the object 'table' as every id is a global object as the attributes are attached to the object as properties and this happens only in case of primitive attributes not in type of user defined attributes


console.log(table.id)
 
//Attribute selector for user defined and primitive datatypes :
console.log(table.getAttribute('heya')) //HERE A USER DEFINED DATATYPE LIKE HEYA IS ALSO CAN BE SELECTED 
table.setAttribute('heya','nomoshkar') //HERE A USER DEFINED DATATYPE LIKE HEYA ka value is changed
console.log(table.getAttribute('heya'))
console.log(table.hasAttribute('heya'))
console.log(table.removeAttribute('heya'))
console.log(table.hasAttribute('heya'))
console.log(table.attributes) 

// Creating and Removing the node elements
        const newDiv = document.createElement('div') // here a new div is created
        newDiv.innerHTML = `<ul id="element" data="valid"> 
        <li class="list-item">First element</li>
        <li class="list-item">Second element</li>
        <li class="list-item">Third Element</li>
    </ul>` // here a the inner html of the div tag is modified
        const newText = document.createTextNode('Namaste World') // here a text node is created with the targeted text
        newDiv.appendChild(newText) // here the text is added to the newly made div
        body.append(newDiv) // here the div is added to the body after the previous elements of the body
        // body.prepend(newDiv) // here the div is added to the body before the previous elements of the body
        // body.before(newDiv) // here the div is added to before the body
        // body.after(newDiv) // here the div is added to after the body
        firstDiv.replaceWith(newDiv) // here firstDiv is replaced by newDiv
        firstDiv.remove() // here firstDiv is removed


// EVENTS IN JAVASCRIPT

//https://www.w3schools.com/js/js_events.asp
// function clicked(){
//     console.log('The button was clicked')
// }
// window.onload = function(){
//     console.log('The document was loaded')
// }

// firstContainer.addEventListener('click', function(){  // CLICK IS THE EVENT NAME
//     document.querySelectorAll('.container')[1].innerHTML = "<b> We have clicked</b>"
//     console.log("Clicked on Container")
// })

// firstContainer.addEventListener('mouseover', function(){ //MOUSEOVER IS THE EVENT NAME 
//     console.log("Mouse on Container")
// })

// firstContainer.addEventListener('mouseout', function(){ //MOUSEOUT IS THE EVENT NAME
//     console.log("Mouse out of Container");
// })

// let prevHTML = document.querySelectorAll('.container')[1].innerHTML;
// firstContainer.addEventListener('mouseup', function(){
//     document.querySelectorAll('.container')[1].innerHTML = prevHTML;
//     console.log("Mouse up when clicked on Container");
// })

// firstContainer.addEventListener('mousedown', function(){
//     document.querySelectorAll('.container')[1].innerHTML = "<b> We have clicked</b>"
//     console.log("Mouse down when clicked on Container");
// })

//FUCTIONS IN JS
//  let bread=prompt("which kind of bread do you want to have: ");
//  let veggies =prompt("which kind of veggies do you want : ");
//  let sauce =prompt("which kind of sauce do you want to have: ");

//  function sandwichMaker(b,v,s){
//      let sandwich = b + " bread , " + v + " veggies and " + s+" sauces"+" has been added to the sandwich";
//      return sandwich;
//  }
//  let vegSandwich = sandwichMaker(bread, veggies, sauce);
//  alert(vegSandwich);


// function summ(a, b){
//     return a+b;
// }

// FUNCTIONS CAN ALSO BE WRITTEN WITH THE HELP OF THE ARROW FUNCTION
summ = (a,b)=>{
    return a+b;
}

logKaro = ()=>{
    document.querySelectorAll('.container')[1].innerHTML = "<b> Set interval fired</b>"
    console.log("I am your log")
}
// SetTimeout and setinterval
clr = setTimeout(logKaro, 5000); // THIS IS USED TO SCHEDULE AN EVENT AT  PARTICULAR TIME
clr = setInterval(logKaro, 2000); // THIS IS USED TO SCHEDULE AN EVENT AFTER A PARTICULAR INTERVAL OF TIME
// HERE 'clr' IS USED TO GIVE AN ID NAME TO THE PARTICULAR FUNCTION
// use the function :-  clearInterval(clr)/clearTimeout(clr) to cancel setInterval/setTimeout

// JavaScript localStorage : IT HELPS TO SAVE DATA AS A STRING IN THE DEVICE OF THE USER- IT IS NOT SECURED AND CAN BE ACCESSED BY THE USER  
// localStorage.setItem('name', 'harry')// HERE THE KEYWORD NAME IS SET A VALUE HARRY - STORED IN LOCALSTORAGE
// localStorage 
// localStorage.getItem('name') // THIS GIVES THE VALUE OF THE KEYWORD NAME
// localStorage.removeItem('name')
// localStorage.clear(); // THIS CLEARS ALL THE LOCAL STORAGE

// JSON - JAVASCRIPT OBJECT NOTATION - IT IS USED TO EXCHANGE DATA - JSON doesnot accept '' - it only accepts ""
//https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON
//https://www.w3schools.com/js/js_json_intro.asp

//ECMA SCRIPT- VERSION OF JAVASCRIPT
// https://www.w3schools.com/js/js_versions.asp
obj = {name: "harry", length: 1, a: {this: 'tha"t'}} // the "\" is given on the console window as JSON only allows "" and all the others characters are escaped for which a "\" is given in the place of the unrecognised character.
console.log(typeof obj); // type of "obj" is printed
jso = JSON.stringify(obj); //the object - "obj" is transfered to "string"
console.log(typeof jso) 
console.log(jso)
parsed = JSON.parse(`{"name":"harry","length":1,"a":{"this":"that"}}`) // ``- this is present below the escape key and above the tab key - This method is used to print JSON 
console.log(parsed);

// Template literals - Backticks
// a = 34;
// console.log(`this is my ${a}`) //${a}...this is used to pass variables in the printing statement


//WINDOW OBJECT IN JAVASCRIPT

// let access= window; // the WINDOW OBJ is a global object and hence the scope is all throughtout
// console.log(access);
// window.alert()  // to give a pop up msg
// prompt() // to take an input 
// confirm() // to return a boolean value as to confirm a particular event 
// DOM or document is a part of the obj window
// innerheight() // gives the inner height of the entire website window
// outerheight() // gives the outer height of the entire website window
// outerwidth() // gives the outer width of the entire website window
// scrollX    // gives a measure of the dimentions you have scrolled in the x - axis
// scrollY    // gives a measure of the dimentions you have scrolled in the y - axis
//location // gives the location of the current website
//location.reload // reloads the page 
//location.href // gives the address of the page and can be used to redirect to different pages
//window.history //gives the history of our activity in The page in form of an obj
//history.go(-1) // reverses down the history 

