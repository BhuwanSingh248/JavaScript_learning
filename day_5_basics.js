// // conditional ternary operator 

// var authenticated = false
// authenticated ? console.log(" Signout button ") : console.log("login to move ahead");


// // working with switch case 

// var user = "admin";

// switch (user){
//     case "admin":
//         console.log("admin prev");
//         break;
//     case "testprep":
//         console.log("test prev");
//         break;
//     default:
//         console.log("subscribe to continue")
// }

// // if we are not useing break or return the code can get a fall-through

// // ----------------------------------------------------------------

// // falsy value  :

// // undefined
// // null
// // 0
// // ''
// // NaN

// // ---------------------------------------------

// // coercion : when javascript changes the type of the data we entered eg:

// var data = "2";
// if (data == "2"){
//     console.log(" i dont know weather a string two or int 2 to avoid this use ===")
// }

// if (data === 2){
//     console.log("seems you corrected")
// }


// -----------------------------------------------------------------------

// function
function sayHello(name){
    console.log(` hello their , ${name}. hope you doi'n well`);
}

sayHello("tanuj");

var sayHello = function (name){
    return ` hello their , ${name}. hope you doi'n well`;
}
console.log(sayHello('hitesh'));

