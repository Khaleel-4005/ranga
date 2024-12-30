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






