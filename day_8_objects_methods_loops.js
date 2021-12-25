// Objects 
 
// objects in javascript are those entities  contains property and type 

// initilization of object 

const myCar = new Object();
myCar["brand"] = "Ford";
myCar["model"] = "mustang";
myCar["year"] = 1996;
myCar.owner = "Bhuppiii";
myCar.childObj = {
    child_brand : "new company",
    child_model : "new model"
};

// console.log(myCar.brand);
// console.log(myCar.childObj.child_brand);
// console.log(myCar.NotDefined);    // undefined 

// accessing like arraynotation

// console.log(myCar["childObj"])


// looping in java script

// 1. do .. while 
users = ["Bhuppii", "pawan", "deepak", "shubham"]
let i = 0 ;
do{
    console.log(users[i]);
    i++;
 }while(i<users.length);

let j = 0;
while(j<users.length){
    console.log(users[j]);
    j++;
}

months = ["jan", "feb", "mar", "apr"];
for(let i = 0; i<months.length; i++ ){
    console.log(months[i]);
}
console.log("----------------------------------------------");
for( i in months){
    console.log(months[i]);
}
console.log("-----------------------------------------------");
months.forEach((mon) => {
    console.log(mon);
});


