'use strict';

// YOU KNOW WHAT TO DO //

/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
 */
function each(collection, action) {
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
}
/**
 * typeOf : take a value and output its type as a string
 * @param{any value} any value for the function to evaluate 
 */
 function typeOf(value){
    // create test for objects and arrays returning string of either object or array
    if(typeof value === 'object' && Array.isArray(value) !== true && value !== null &&  value instanceof Date !== true ){
       return 'object';
   }
   // create test for array and return array
   else if (typeof value === "object" && value !== null &&  value instanceof Date !== true ){
       return 'array';
   }
   // create test for date
   else if (typeof value === "object" && value !== null && value instanceof Date === true && Array.isArray(value) !== true ){
       return "date";
   }
   //test for null
   else if (typeof value === "object"){
       return "null";
   }
   //test for string
   else if (typeof value === "string"){
       return "string";
   }
   // test for undefined
   else if (typeof value === "undefined"){
       return "undefined";
   }
   //test for number
   else if (typeof value === "number"){
       return "number";
   }
   //test for boolean
   else if (typeof value === "boolean"){
       return "boolean";
   }
   
   //test for function
   else if (typeof value === "function"){
       return "function";
   }
  }

/** 
 * first: the first function takes an array, and a number and returns the first x number
 * of the array. If the num is negative or the array paramater is not an array it returns
 * an empty array, if the num paramater is not a number first returns the first element
 * of the array
 * @param {array} array: takes the array to run function on
 * @param {number} num: takes the number of elements to output 
*/
function first(array, num){
    // create empty output of array
   let newArr = [];
    // if array is not an array or is number is negative return []
    if (!Array.isArray(array) || num < 0){
        return [];
    }
    //  else if number isnt a number return array[0]
    else if (typeof num !== "number"){
        return array[0];
    }
    //test if number greater then array length return array
    else if (num >= array.length){
        return array;
    } 
    // if it passes the test return the the first "num" of elements in array
    else{
        // create loop to output number entered
        for (let i = 0; i < num; i++){
            newArr.push(array[i]);
        }
        //return new aray
        return newArr;
    }
}
/**
 * last: returns the last elements of an array for the number given 
 * 
 * @param{array} array: takes the array that function runs on
 * @param{number} num: takes the last number of elements to return *
 */
function first(array, num){
    // create empty output of array
    let newArr = [];
    // if array is not an array or is number is negativee return []
    if (!Array.isArray(array) || num < 0){
        return [];
    }
    //  else if number isnt a number return last element of array
    else if (typeof num !== "number"){
        return array[array.length - 1];
    }
    //test if number greater then array length return array
    else if (num >= array.length){
       return array;
   }
   // create a loop that creates a negative number from num and adds until - num reaches 0
   else{
       for (let i = array.length - num; i < array.length; i++){
           newArr.push(array[i]);
       }
   }
    return newArr;
   }
/**
 * function 'index of' takes a value and returns the index
 * of that value on its first occurrance
 * @param{array} arr: takes the array to look for element
 * @param{value} val: takes the value the function is searching fo
 */
function indexOf(arr, val){
   // create loop that loops through array
for (let i = 0; i < arr.length; i++){
    // create if statement that tests if val = arr[i] and returns index #
    if (arr[i] === val){
        return i
    }
}
// return -1 if value not found
return -1
}
/**
 * function contains: takes an array and returns true if the value exists
 * and false if not
 * @param{array} arr: takes an array to loop throuh 
 * @param{value} val: takes any value to look for in given array
 */
// create a contains function that takes in an array and value as args
function contains(arr, val){
    // create empty array do push returns into
    let result;
    // create loop for arr
    for (let i = 0; i < arr.length; i++){
    // use ternary operator to return true if true
    arr[i] >= val ? result = true : result = false;
    }
    return result;
}

/**
 * function each: takes a collection and a function. loops through the collection 
 * running the function on each element or property
 * @param{array or object} collection: any array or collection
 * @param{function} func: the function you would like to apply to the looped
 * collection
 */
 function each(collection, func){
    //test if collection is a array
    if(Array.isArray(collection)){
    //call input function on each ellement of array
      for (let i = 0; i < collection.length; i++){
        func(collection[i], i, collection);
      }
    }
// else for object
    else{
        //invoke input func of each key in object
        for(let key in collection){
            //invoke function
            func(collection[key], key, collection);
        }
    }
}
/**
 * function unique: takes an array and returns a new array with all duplicates removed
 * @param{array} array: the orginal array to loop through and find dupes
 * 
 */
 function unique(array){
    let newArr = [];
    let testObject = {};
    //create loop to take an element from test array
    for (let i = 0; i < array.length; i++){
        // create test to see if array element alreay exists in object, if not add to object
        // and newArr
        if(array[i] in testObject === false){
            testObject[array[i]] = 'true';
            newArr.push(array[i]);
        }
    }  
    //return new array
    console.log(testObject)
      return newArr;
    }
/**
 * function filter: takes a array and for each element runs a function, if the
 * function returns true the element is pushed into a new array and that new array
 * is returned
 * @param{array} arr: the array to loop through
 * @param{function} func: the function to preform
 */
 function filter(arr, func){
    // create a new array of elements to return
let newArr = [];
//call <function> for each element in <array> passing the arguments:
//      the element, it's index, <array> for loop to go through array
for (let i = 0; i < arr.length; i++){
   if (func(arr[i], i, arr)){
    // return a new array of elements for which calling <function> returned true
    newArr.push(arr[i]);
   }
 }
    //return new arr 
   return newArr;
}
/**
 * function reject: takes an array and a function looping through array and running
 * the function on each element. If the function returns false the element is pushed
 * into a new array.  The new array is returned
 * @param{array} arr: the array to loop through
 * @param{function} func: the function to run on each element in array
 */
function reject(arr, func){
    // create empty output array
    let newArr = [];
//call <function> for each element in <array> passing the arguments:
//      the element, it's index, <array> for loop to go through array
for (let i = 0; i < arr.length; i++){
    if (func(arr[i], i, arr) === false){
     // return a new array of elements for which calling <function> returned false
     newArr.push(arr[i]);
 }
  }
     //return new arr 
    return newArr;
 }
/**
 * function partition: takes an array and an function, loops through the array
 * when the provided function returns true it puts the element in one subarray
 * and when false puts element in other subaray. Returns new 2-d array
 * @param{array} arr: takes the array to partition
 * @param{function} func: the function to run on the elements in array
 * */
function partition(arr, func){
    // create empty output nested array
    let newArr = [[],[]];
//call <function> for each element in <array> passing the arguments:
//      the element, it's index, <array> for loop to go through array
for (let i = 0; i < arr.length; i++){
    // if true
    if (func(arr[i], i, arr)){
     // return a new array of elements for which calling <function> returned false
     newArr[0].push(arr[i]);
 }
  //if false
  else {
    newArr[1].push(arr[i]);
  }
}
     //return new arr 
    return newArr;
 }

 


module.exports.each = each;
