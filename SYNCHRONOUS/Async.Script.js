// //SYNCHRONOUS:

// console.log("one");
// console.log("two");
// console.log("three");



// // ASYNCHRONOUS:



// setTimeout (() => {
//     console.log("Hello");
// }, 4000);  //timeout:




// // IT IS EXAMPLE PROGRAM OF A ASYNCHORONOUS PROGRAM:




// console.log("one");
// console.log("two");

// setTimeout (() => {
//     console.log("Hello");
// }, 4000);  //timeout:

// console.log("three");
// console.log("five");




// // //CALLBACK:



// function sum(a,b){
//     console.log(a+b);
// }

// function calculator (a,b, sumCallback){
//     sumCallback(a,b);
// }

// // calculator(10,20, sum);
//     //    (OR)
// calculator(10,20, (a,b)=> {
//     console.log(a+b);
// })


// // NESTED if:




// let age = 19;
// if (age =>18){
//     if(age >= 60){
//         console.log("senior");
//     }else {
//         console.log("middle");
//     }
// } else {
//     console.log("child");
// }




// // NEXTD LOOP:





// for(let i=0; i<5; i++){
//     let str = "";
//     for (let j=0; j<5; j++){
//         str = str +j;
//     }
//     console.log(i, str);
// }



// // CALLBACKS HELL:


// function getData(dataId, getNextData){
//     //2sec
//     setTimeout(() =>{
//         console.log("data", dataId);
//         if (getNextData){
//             getNextData();
//         }
//     }, 2000,);
// }



       

// // getData(1, () =>{
// //     getData(2, () =>{
// //         getData(3, () => {
// //             getData(4);
// //         });
// //     });
// // });

//     //OR


// getData(1, () =>{
//     console.log("geting data2..");

//     getData(2, () =>{
//         console.log("geting data3..");
//         getData(3, () => {
//             console.log("geting data4..");
//             getData(4);

//         });
//     });
// });





// // promise:

// let promise = new Promise((resolve, reject) => {
//     console.log("I am a promise");
//      resolve(786);
//     //  reject("some error occurred")
// });


// //PROMISE:SUCCESS, REJECT,RESOLVE:

// function getData(dataId, getNextData) {
//     return new Promise((resolve, reject) =>{
// setTimeout(() => {  
//     console.log("data", dataId);
//     resolve("success");
//     if (getNextData) {
// getNextData();    
//     }    
//     }, 5000);

//     });
// }




// // SUCCESS : FULFILED:THEN


// const getPromise = () => {
//     return new Promise ((resolve, reject) => {
//         console.log("I am a promise");
//             resolve("success");
     
//     });
// };

// let promise = getPromise();
// promise.then(() => {
//     console.log("promise fulfiled");
// });


// // REJETED:ERROR:CATCH


// const getPromise = () => {
//     return new Promise ((resolve, reject) => {
//         console.log("I am a promise");
//             reject("error");
     
//     });
// };

// let promise = getPromise();
// promise.then(() => {
//     console.log("promise fulfiled");
// });

// promise.catch(() => {
//     console.log("rejected");
// });




// // PROMISE CHAIN:

// function asynFunc1(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("date1");
//             resolve("success");

//         }, 4000);
//     });
// }


// function asynFunc2(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("date2");
//             resolve("success");

//         }, 4000);
//     });

// }
// console.log("fetching data1...");
// asynFunc1().then((res) => {
//     console.log("fetching data2...");
//    asynFunc2().then((res) => {});

// });



// // ASYNC-AWAIT:


// function api() {
//     return new Promise((resolve, reject) =>{
//         setTimeout(() => {
//         console.log("wheather data");
//         resolve(200);
//         },2000);
//     });
// }


// async function getWeatherData(){
//     await api(); //1st
//     await api(); //2nd
// }

// function getData(dataId){
//         return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 console.log("date", dataId);
//                 resolve("success");
    
//             }, 2000);
//         });
//     }
    



// // ASYNC-AWAIT:

// async function getAllData() {
//     console.log("getting data1....");
//     await getData(1);
//     console.log("getting data2....");
//     await getData(2);
//     console.log("getting data3....");
//     await getData(3);
//     console.log("getting data4....");
//     await getData(4);
//     console.log("getting data5....");
//     await getData(5);
//     console.log("getting data6....");
//     await getData(6);
//     console.log("getting data7....");
//     await getData(7);
// }


// // IIFE:


// async function getAllData() {
//     console.log("getting data1....");
//     await getData(1);
//     console.log("getting data2....");
//     await getData(2);
//     console.log("getting data3....");
//     await getData(3);

// }

// (async function () {
//     console.log("getting data1....");
//     await getData(1);
//     console.log("getting data2....");
//     await getData(2);
//     console.log("getting data3....");
//     await getData(3);

// })();
















// // Simulate an API call with a delay
// function fetchData() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const data = { id: 1, name: "John Doe", age: 30 };
//             resolve(data); // Resolve the promise with data
//         }, 2000); // 2-second delay
//     });
// }

// // Async function to fetch and display data
// async function displayData() {
//     try {
//         console.log("Fetching data...");
//         const data = await fetchData(); // Wait for the promise to resolve
//         console.log("Data fetched:", data);
//     } catch (error) {
//         console.error("Error fetching data:", error);
//     }
// }

// // Call the async function
// displayData();




// Your OpenWeatherMap API key (replace with your own key)
const apiKey = "YOUR_API_KEY";

// Function to fetch weather data
async function fetchWeather(city) {
    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
        );

        if (!response.ok) {
            throw new Error(`City not found (${response.status})`);
        }

        const data = await response.json();
        displayWeather(data);
    } catch (error) {
        alert(error.message);
        console.error("Error fetching weather data:", error);
    }
}

// Function to display weather data
function displayWeather(data) {
    const resultDiv = document.getElementById("weather-result");

    // Clear previous content
    resultDiv.innerHTML = "";

    // Create weather card
    const weatherCard = document.createElement("div");
    weatherCard.className = "weather-card";
    weatherCard.innerHTML = `
        <h2>${data.name}, ${data.sys.country}</h2>
        <p><strong>Temperature:</strong> ${data.main.temp}°C</p>
        <p><strong>Weather:</strong> ${data.weather[0].description}</p>
        <p><strong>Humidity:</strong> ${data.main.humidity}%</p>
        <p><strong>Wind Speed:</strong> ${data.wind.speed} m/s</p>
    `;

    // Append card to the result div
    resultDiv.appendChild(weatherCard);
}

// Event listener for button click
document.getElementById("get-weather").addEventListener("click", () => {
    const city = document.getElementById("city-input").value.trim();

    if (city) {
        fetchWeather(city);
    } else {
        alert("Please enter a city name.");
    }
});




















