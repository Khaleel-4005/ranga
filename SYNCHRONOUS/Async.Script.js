//SYNCHRONOUS:

console.log("one");
console.log("two");
console.log("three");



// ASYNCHRONOUS:



setTimeout (() => {
    console.log("Hello");
}, 4000);  //timeout:




// IT IS EXAMPLE PROGRAM OF A ASYNCHORONOUS PROGRAM:




console.log("one");
console.log("two");

setTimeout (() => {
    console.log("Hello");
}, 4000);  //timeout:

console.log("three");
console.log("five");




// //CALLBACK:



function sum(a,b){
    console.log(a+b);
}

function calculator (a,b, sumCallback){
    sumCallback(a,b);
}

// calculator(10,20, sum);
    //    (OR)
calculator(10,20, (a,b)=> {
    console.log(a+b);
})


// NESTED if:




let age = 19;
if (age =>18){
    if(age >= 60){
        console.log("senior");
    }else {
        console.log("middle");
    }
} else {
    console.log("child");
}




// NEXTD LOOP:





for(let i=0; i<5; i++){
    let str = "";
    for (let j=0; j<5; j++){
        str = str +j;
    }
    console.log(i, str);
}



// CALLBACKS HELL:


function getData(dataId, getNextData){
    //2sec
    setTimeout(() =>{
        console.log("data", dataId);
        if (getNextData){
            getNextData();
        }
    }, 2000,);
}



       

// getData(1, () =>{
//     getData(2, () =>{
//         getData(3, () => {
//             getData(4);
//         });
//     });
// });

    //OR


getData(1, () =>{
    console.log("geting data2..");

    getData(2, () =>{
        console.log("geting data3..");
        getData(3, () => {
            console.log("geting data4..");
            getData(4);

        });
    });
});





// promise:

let promise = new Promise((resolve, reject) => {
    console.log("I am a promise");
     resolve(786);
    //  reject("some error occurred")
});


//PROMISE:SUCCESS, REJECT,RESOLVE:

function getData(dataId, getNextData) {
    return new Promise((resolve, reject) =>{
setTimeout(() => {  
    console.log("data", dataId);
    resolve("success");
    if (getNextData) {
getNextData();    
    }    
    }, 5000);

    });
}




// SUCCESS : FULFILED:THEN


const getPromise = () => {
    return new Promise ((resolve, reject) => {
        console.log("I am a promise");
            resolve("success");
     
    });
};

let promise = getPromise();
promise.then(() => {
    console.log("promise fulfiled");
});


// REJETED:ERROR:CATCH


const getPromise = () => {
    return new Promise ((resolve, reject) => {
        console.log("I am a promise");
            reject("error");
     
    });
};

let promise = getPromise();
promise.then(() => {
    console.log("promise fulfiled");
});

promise.catch(() => {
    console.log("rejected");
});




// PROMISE CHAIN:

function asynFunc1(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("date1");
            resolve("success");

        }, 4000);
    });
}


function asynFunc2(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("date2");
            resolve("success");

        }, 4000);
    });

}
console.log("fetching data1...");
asynFunc1().then((res) => {
    console.log("fetching data2...");
   asynFunc2().then((res) => {});

});



// ASYNC-AWAIT:


function api() {
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
        console.log("wheather data");
        resolve(200);
        },2000);
    });
}


async function getWeatherData(){
    await api(); //1st
    await api(); //2nd
}

function getData(dataId){
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log("date", dataId);
                resolve("success");
    
            }, 2000);
        });
    }
    



// ASYNC-AWAIT:

async function getAllData() {
    console.log("getting data1....");
    await getData(1);
    console.log("getting data2....");
    await getData(2);
    console.log("getting data3....");
    await getData(3);
    console.log("getting data4....");
    await getData(4);
    console.log("getting data5....");
    await getData(5);
    console.log("getting data6....");
    await getData(6);
    console.log("getting data7....");
    await getData(7);
}


// IIFE:


async function getAllData() {
    console.log("getting data1....");
    await getData(1);
    console.log("getting data2....");
    await getData(2);
    console.log("getting data3....");
    await getData(3);

}

(async function () {
    console.log("getting data1....");
    await getData(1);
    console.log("getting data2....");
    await getData(2);
    console.log("getting data3....");
    await getData(3);

})();



