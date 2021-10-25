// declaring variables in java script 

var var_1; // declare a variable named var_1
var_1 = 'hello';

// similarly we can define severl type of values 

console.log(var_1);

var_1 = null;
console.log(var_1);
var_1 = undefined;
console.log(var_1);

// ##   js object

var book = {
    topic : "javascript",     // property topic
    fat : true
};
// object attributes can be accessed via . or [] eg.

console.log(book.topic);
console.log(book["fat"]);

// can add more attributes to the object as 

book.author = "Flanagan";
book["content"] = {};

console.log(book);


// #### arrays in javascript 

var array_1 = [1, 3, 4, 8];
console.log(array_1[0]);
console.log(array_1.length);


// ## arrays and objects can hold other arrays and objects
var points = [   // array with two elements 
    {x:0, y:10},  //  each element is an object
    {x:1, y:11}
];

var data = {   // objects with 2 properties
    trial1:[[1,2], [3,4]],  // each property is an array
    trial2:[[2,3], [4,5]]
};

console.log(data);
console.log(points);
console.log(data.trial1)
console.log(points[0].y)