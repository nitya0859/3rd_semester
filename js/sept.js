// promises : 1. pending 2. fulfilled 3. rejected
// let promise = new Promise((resolve, reject) => {
//     console.log("i m new priomise");
// }); 
// reject("i m rejected");

// function GetData(dataID){
//     return new Promise((resolve, reject) => {
//         // Simulate an API call
//         setTimeout(() => {
//             console.log("Fetching data for ID:", dataID);
//             // Simulate success or failure based on the dataID
//             resolve("successfully fetched data for ID: " + dataID);
//         }, 9000);
//     });
// }
// let r=GetData(123);

const GetPromise=()=>{
    return new Promise((resolve, reject) => {
        console.log("I m new promise");
        reject("I m rejected");
    });
};

let promise = GetPromise();



promise.then(()=>{
    console.log("Promise resolved with data:");
});

promise.catch(()=>{
    console.log("Promise rejected with error:");
});
