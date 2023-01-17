const perf = require('execution-time')();


function doublerAppend(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.push(num);
    }

}
//o(1)

function doublerInsert(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.unshift(num);
    }

}
//o(n)
//1 is faster than n
//doubleappend insert we are using unshift method is performing better than push

function getSizedArray(size){
    let array = [];
    for (let i=0; i<size; i++){
        array.push(i);
    }
    return array
}


const tinyArray = getSizedArray(10);
const smallArray = getSizedArray(100);
const mediumArray = getSizedArray(1000);
const largeArray = getSizedArray(10000);
const extraLargeArray = getSizedArray(100000);



// How long does it take to double every number in a given 
// array? 
//Answer:
//When we double the size of array, it will take O (1) and sometimes O (N). 
//Basically, when we increase size one by one, then all elements all copied every time, 
//again create array, and then append.

// Try it with first function
perf.start();                     // Starts timer
doublerAppend(extraLargeArray);
//push, its complexity o(n)
doublerAppend(tinyArray);
doublerAppend(smallArray);
doublerAppend(mediumArray);
doublerAppend(largeArray);
let resultsAppend = perf.stop();  // Stops timer and save time results


// Try it with second function
perf.start();
doublerInsert(extraLargeArray);
//unshift, its complexity o(1)
doublerInsert(smallArray);
doublerInsert(tinyArray);
doublerInsert(mediumArray);
doublerInsert(largeArray);

let resultsInsert = perf.stop();


console.log('Results for the extraLargeArray');
console.log("insert", resultsInsert.preciseWords);
console.log("append", resultsAppend.preciseWords);


console.log('Results for the tinyArray');
console.log("insert", resultsInsert.preciseWords);
console.log("append", resultsAppend.preciseWords);


console.log('Results for the smallArray');
console.log("insert", resultsInsert.preciseWords);
console.log("append", resultsAppend.preciseWords);


console.log('Results for the mediumArray');
console.log("insert", resultsInsert.preciseWords);
console.log("append", resultsAppend.preciseWords);


console.log('Results for the LargeArray');
console.log("insert", resultsInsert.preciseWords);
console.log("append", resultsAppend.preciseWords);