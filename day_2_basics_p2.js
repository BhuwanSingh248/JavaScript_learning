// #### introduction day 2

// function 

function plus_1(x){
    return x+1;
}
var y = 10
console.log(plus_1(y))
console.log(y)

// when we combine functions with objects we get method 

var points = [
    {x:0, y:2},
    {x:2, y:4}
];

points.dist = function() {
    var p1 = this[0];
    var p2 = this[1];
    var a = p2.x - p1.x 
    var b = p2.y - p1.y
    return Math.sqrt(a*a + b*b)  
}

console.log(points.dist())

// ### Lexical Structure

