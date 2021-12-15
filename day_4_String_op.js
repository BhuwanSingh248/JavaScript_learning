// Pattern Matching
// JavaScript defines a RegExp() constructor for creating objects that represent textual Patterns

// /^HTML/  //  match the letters HTML at the start of a string 
// /[1-9][0-9]*/  // match a non-zero digit , followed by any # of digits

// /\bjavascript\b/i    // match "javascript" as a word, case-insensitive

var text = "testing : 1, 2, 3";
var pattern = /\d+/g

pattern.test(text)
console.log(text.search(pattern))
console.log(text.match(pattern))
console.log(text.replace(pattern, '#'))
console.log(text.split(/\D+/))