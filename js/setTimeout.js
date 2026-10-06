console.log("one");
console.log("two");
console.log("three");

setTimeout(function() {
    console.log("Hello after 5 seconds");
}, 5000);

console.log("four");
console.log("five");

function welcome(){
    console.log("Welcome to the world of JavaScript");

}

setTimeout(()=>{
    console.log("Hello after 3 seconds");
}, 3000);

setTimeout(welcome, 2000);


function greet(f_name, l_name){
    console.log("Hello " + f_name + " " + l_name );
}

function displayNumbers(numbers){
    console.log(numbers);
}

let arr=[10,20,30,40];
displayNumbers(arr);






console.log("one");
console.log("two");
setTimeout(()=>{
    console.log("Hello after 1 second");
}, 5000);
console.log("three");
console.log("four");
