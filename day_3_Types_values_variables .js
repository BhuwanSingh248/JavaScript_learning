// # Arthematic in java script 

// var data = Math.pow(2, 57)
console.log(Math.pow(2, 53))
console.log(Math.round(0.675))  // round to nearset integer
console.log(Math.ceil(0.1))   
console.log(Math.floor(1.9))
console.log(Math.abs(-5))
console.log(Math.max(3, 18, 7))
console.log(Math.min(80, 90, 70))
console.log(Math.random())    // return random number between 0 <= x < 1.0
console.log(Math.PI)
console.log(Math.E)          // the base of natural logarithm
console.log(Math.sqrt(3))    // square root 
console.log(Math.pow(3, 1/3))  // pow(value, power)
console.log(Math.sin(0))
console.log(Math.log(10))
console.log(Math.log(100)/Math.LN10)    // Base 10 logarithm of 100
console.log(Math.log(512)/Math.LN2)     // Base 2 logarithm of 512
console.log(Math.exp(3))                // Math.E cubed

console.log("---------------------------------------------------------------------")

//  precision

var x = .3 - .2 ;
var y = .2 - .1 ;
console.log(x == y)
console.log(x == .1)
console.log(y == .1)


console.log("---------------------------------------------------------------------")

//  date and Times

var then = new Date(2010, 0, 1)   // first day of the 1st month
var later = new Date(2010, 0, 1, 17, 10, 30)  // same day with time\
var now = new Date()
var elapsed = now - then  // date substraction : interval in milliseconds

console.log(later.getFullYear())
console.log(later.getMonth())
console.log(later.getDate())
console.log(later.getDay())
console.log(later.getHours())
console.log(later.getUTCHours())
console.log(later.toString())


console.log("---------------------------------------------------------------------")

// string 
var s = "hello, world";
console.log(s.charAt(0))
console.log(s.charAt(s.length-1))
console.log(s.substring(1,4))
console.log(s.slice(-3))
console.log(s.indexOf("l"))
console.log(s.lastIndexOf("l"))
console.log(s.indexOf("1", 3))
console.log(s.split(", "))
console.log(s.replace("h", "H"))
console.log(s.toUpperCase())