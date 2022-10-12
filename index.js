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
/**
 * function map: takes a collection and a function. loops through the collection
 *  elements or properties, running the given function on each and returning a new
 * array with the return of each function
 * @param{array or object} colec: the collection to loop through
 * @param{function} func: the function to run on each element/property and what it returns
 * 
 */
function map(collec, func){
    // create return array
    let newArr = [];
    // if array is array for loop
    if(Array.isArray(collec)){
        for (let i = 0; i < collec.length; i++)
       newArr.push(func(collec[i], i, collec))
    }
    // else if array is object use a for in loop to do the same thing
    else{
        for (let key in collec){
            newArr.push(func(collec[key], key, collec))
        }
    } 
  // return new arr
    return newArr
}
/**
 * function pluck: takes an array of object and a property. creates a new array with the
 * value of each objects property that matches the given property
 * @param{array of objects} arrOfObj: the array of objects to loop through
 * @param{string} prop: the string representing the properties value to find 
 */
function pluck(arrOfObj, prop){
    //let new arr = return of .map 
  let newArr =  _.map(arrOfObj, function(element){
       return element[prop] 
    })
    // return newArr
    return newArr
}
/**
 * function every: takes a collection and loops through each collections elements/properties
 * runs given function on each and if any are false returns false otherwise returns true
 * if no function is provided returns false if any element/propert is falsey otherwise
 * returns true
 * @param{array or object} collection: an array or object to loop through
 * @param{function} func: function to run of property/element that returns true or false
 */
function every(collection, func){
    if(func === undefined ){
        //determine if collection is an array
        if(Array.isArray(collection)){
            //iterate through collections array
            for(let i = 0; i < collection.length; i++){
                //determine if collection[i] is truthy
                if(!collection[i]){
                    //return false;
                    return false;
                }
            }
        } else { //else
            //iterate through object
            for(let key in collection){
                //determine if collection[key] is truthy
                if(!collection[key]){
                    //return false;
                    return false;
                }
            }
        }
    } else{ //else
        //determine if collection is an array
        if(Array.isArray(collection)){
            //iterate through collections array
            for(let i = 0; i < collection.length; i++){
                //determine if invoking func on the params is false
                if(func(collection[i], i, collection) === false){
                    //return false
                    return false;
                }
            }
        } else{ //else its an object
            //iterate through object
            for(let key in collection){
                //determine if invoking func on the params is false
                if(func(collection[key], key, collection) === false)
                {   //return false;
                    return false;
                }
            }
        }
    }//return true
    return true;
     }
/**
 * function some: loops through a collection runnign a function on each
 * element/property.  If any of the return values of the funtion are true
 * returns true, if all return false returns false. if no function is provide
 * returns true if any element/property is truthy otherwise returns false
 * @param{array or object} collec: the array or object to loop trough
 * @param{function} func: the function to run on element/property and which
 * returns true or false
 */
function some(collec, func){
    // test if there is a function
    if(!func){
        //test if its is an array
        if (Array.isArray(collec)){
            // loop through elements in collec if any element is true treturn true
            for (let i = 0; i < collec.length; i++){
                if(collec[i] === true){
                    return true;
                }
            }
        //return false if not
        return false;
        }
        //else if collec is object
        else{
            //for in loop for collec
            for (let key in collec){
                if (key === true){
                    return true;
                }
            }
        // else return false
            return false;
        }

    }
    // test for array
    else if (Array.isArray(collec)){
        // loop through array
        for (let i = 0; i < collec.length; i++){
            // call a func with params = element, index, colec
            // if any elememt is true return true
            if(func(collec[i], i, collec) === true){
                //return true
                return true;
            }
        }
        //eslse return false
        return false
    }
    else{
        //loop through object if any return == true return true
        for (let key in collec){
            if(func(collec[key], key, collec) === true){
                return true
            }
        }
        // else return false
        return false
    }
}
/**
 * function reduce : takes an array a function and a seed. it returns an acumulater
 * which records the functions effects of running its cumulative affects on
 * 
 * 
 * 
 * 
 */


module.exports.each = each;
