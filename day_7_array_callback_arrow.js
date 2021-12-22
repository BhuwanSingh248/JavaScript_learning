// to define an array we have pleanty of ways in javascript 

var contries = ["India", "USA", "UK", "Oman"];
var states =  new Array("UK", "UP", "RJ", "DL");

// to add and remove items from start of an array
states.shift();   // remove
console.log(states);
states.unshift("UK"); // add
console.log(states);

//  to add or remove data from the end of an array 
states.pop();
console.log(states);
states.push("MH");
console.log(states);

// to find the lenght of the array 

console.log(states.length);

// to get index of any value 

console.log(states.indexOf("UP"));

// if any value not found on the array then indexOf retuens -1 
console.log(states.indexOf("uttarakhand"));

// to convert any itrable to array 

console.log(Array.from("hello"));

// join converts arr to string
console.log(states.join("_"));

// slice method returns arr from a start index to optional end index 

console.log(states)
console.log(states.slice(2, 4));
console.log(states.slice(-2))
console.log(states.slice(0, -1))

//The splice() method changes the contents of an array by 
// removing or replacing existing elements and/or adding new elements in place. 
// states.splice(start, deletecount, item1, item2, itemn)


// --------------------------------------------------------------//

// normal function
function isEven(num){
    return num%2 === 0;
}

console.log(isEven(10));
console.log(isEven(5));

var isEven_2 = function(num){
    return num%2 === 0;
}

// arrow function
var isEven_3 = (num) => {
    return num%2 === 0
}

console.log("------------------------- check even all even -----------------");
console.log([2, 12, 14, 16, 80].every(isEven_3));

console.log("------------------------ check one odd number -----------------");
// for any false it returns false
console.log([2, 12, 14, 17, 80].every(isEven));

console.log("------------------check even all even with arrow---------------");
// more optimized and sorted algo 
console.log([2, 12, 14, 18, 80].every((e)=>{
    return e%2===0
}));

console.log("----------------------without return statement-----------------");
// without return statement 
console.log([2, 12, 14, 17, 80].every((e)=>(e%2===0)));