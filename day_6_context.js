// # context
// java script store every thing in the context before executing the code 


func();   // we can call a function before defining that !! but it should be defined in somewhere 

function func() {
    console.log(" global context")
}


// where as if we assign function to any variable then javascript mark it as undefined 
// e.g. 
// ------------------------------------------------------
// func2();  
// ------------------------------------------------------

// will show is not a function 
// the term hoisting came into picture

var func2 = function () {
    console.log(" in valid context");
}

func2();   // will work fine

// context are of two kind one is global context and other one is execution context 
//  i.e. context available right now execution contxt are stacked one over anathor 
//  when one execution context end it move t other local context


//  Rules for execution context [variable Object     Scope Chain    this]
// 1. Function decleration are scanned and made Available 
// 2. Variable decleration are scanned and made Undefined


//  if we use [nam] before declearation it will print undefined (statement 2)

console.log(nam);
var nam = "bhuppiii";


