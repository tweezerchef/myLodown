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






module.exports.each = each;
