let obj1 = {names: "person 1", age:5};
let obj2 = {age:5, names: "person 1"};
let json1 =JSON.stringify(obj1);
console.log(json1);
let json2 =JSON.stringify(obj2);
console.log(json2);
if (json1===json2){
    console.log("both are equal");
}


/*2.all flags and console
*/

var request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all", "true")
request.send();
request.onload = function(){
var data = request.response;
console.log(data);
var result = JSON.parse(data);
console.log(result);
for(var i=0;i<result.length;i++){
    console.log(result[i].flags.png,result[i].area);
}
}


/*question 3 print all country name and regions:
*/

var request1 = new XMLHttpRequest();
request1.open("GET", "https://restcountries.com/v3.1/all", "true")
request1.send();
request1.onload = function(){
var data1 = request1.response;
console.log(data1);
var result1 = JSON.parse(data1);
console.log(result1);
for(var i=0;i<result1.length;i++){
    console.log(result1[i].name.common);
}
}






