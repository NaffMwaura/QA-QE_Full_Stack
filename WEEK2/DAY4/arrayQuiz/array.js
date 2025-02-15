//JavaScript Array Interview Questions in 2023

//    Question 1: How do you create an empty array in JavaScript?
        //solution
            //creating an eempty array in javascript

            const myArray= []
            //or
            let myArray1= new Array();

//      Question 2: How do you access the first and last elements of an array?

            //solution
                const myArray2 = [33,45,98,12,72]
                 
                    console.log(`First element: ${myArray2[0]} and the last element is: ${myArray2[4]}`);
                    //First element: 33 and the last element is: 72
                    let getFirstElement = myArray2[0]
                    let getSecondElement = myArray2[4]

                    console.log(`My first element in the array is: ${getFirstElement} and the last element in the array is ${getSecondElement}`)
                    //My first element in the array is: 33 and the last element in the array is 72

// Question 3: How do you add an element to the end of an array?
    //Answer: You can add an element to the end of an array using the push() method. For example:

            const myArray3 = [23, 45, 38, 89]
              myArray3.push(66)
              console.log(myArray3)//[ 23, 45, 38, 89, 66 ]

//  Question 4: How do you remove the last element from an array?
        //Answer: You can remove the last element from an array using the pop() method. For example:

            const myArray4 = [2, 5, 6 ,9, 4];
             myArray4.pop()
                console.log(myArray4) //[ 2, 5, 6, 9 ]

// Question 5: How do you loop through an array in JavaScript?
        //Answer: You can loop through an array using either a for loop or a forEach() method. For example:
          //for loop
            const myArray5= [1 , 2, 3, 4];

              for(let i= 0; i<4; i++){

                console.log(myArray5)

              }
            //forEach
            const myArray6= [1 , 2, 3, 4];
              myArray6.forEach(element => {
                

                console.log(element)
              });
              

// Question 6: How do you check if an element exists in an array?
        //Answer: You can check if an element exists in an array using the indexOf() method. If the element is 
              //not found, indexOf() returns-1. For example:

              const myArray7 = [33, 45, 86, 36];
              
              if(myArray7.indexOf (45) !== -1){


                console.log(`Element found`)

              }else{
                console.log(`Element not found`)
              }

            
//Question 7: How do you remove an element from an array at a specific index?
        //Answer: You can remove an element from an array at a specific index using the splice() method. For
        //example, to remove the element at index 2:

        const myArray8 = [66, 78, 93, 54, 67]
            
            myArray8.splice(3,2)
            console.log(myArray8)   //[ 66, 78, 93 ]


// Question 8: How do you concatenate two arrays in JavaScript?
            //Answer: You can concatenate two arrays using the concat() method. For example:

            const myArray9 = [90, 33, 56 ,87]
            const myArray10 = [35, 67, 33, 71]

             console.log(myArray9.concat(myArray10))    //[
                                                          //  90, 33, 56, 87,
                                                            //35, 67, 33, 71
                                                          //]


//  Flatten Array JavaScript Interview Questions With Answers
          // Question 1: Write a function to flatten a nested array in JavaScript.


                //Solution

                const nestedArray = [1 ,[2, 3], [ 4 , 5] ,[6], [7 ,8]]

                    function flattenArray (nestedArray){
                        return nestedArray.reduce (function(flat, toFlatten){

                            return flat.concat(Array.isArray(toFlatten)? flattenArray (toFlatten):toFlatten);
                        },[]);

                      
                    }

                console.log(flattenArray(nestedArray));//[
                                                              //1, 2, 3, 4,
                                                              //5, 6, 7, 8
                                                            //]


//  Question 2: What does the reduce() method do in the flattenArray() function above?
          //Answer
                    /*
                    
                    The reduce() method in JavaScript takes an array and applies a function to each element,
                            accumulating the result into a single value. In the flattenArray() function above, the reduce() method
                            is used to concatenate the current element (either a flattened sub-array or a non-array value) to the
                            flattened array so far.

                    */

                
/*

Question 3: Can you give an example of a nested array that the flattenArray()
 function would be able to flatten?
        Answer 3: Sure! Here's an example of a nested array that the flattenArray() function would be able to
        flatten:

*/
                      
      const nestedArray2 = [19,[78, 32], [ 40 , 94] ,[102], [57 ,54]]

      function flattenArray (nestedArray){
          return nestedArray.reduce (function(flat, toFlatten){

              return flat.concat(Array.isArray(toFlatten)? flattenArray (toFlatten):toFlatten);
          },[]);

        
      }

      console.log(flattenArray(nestedArray2))    //   [
                                                 //19,  78, 32, 40,
                                                 //94, 102, 57, 54
                                               //]



  /*
  
  Question 4: Can you explain how the flat() method can be used to flatten an array in
 JavaScript?
              //The flat() method is a built-in method in JavaScript that can be used to flatten an array. It
              takes a depth parameter, which specifies how many levels of nested arrays should be flattened. If no
              depth parameter is provided, it defaults to 1. Here's an example usage:
                        var nestedArray = [1, [2, [3, 4], 5], 6];
                        nestedArray.flat(2); // returns [1, 2, 3, 4, 5, 6]
  
  */    
 
                        

/*

 Question 5: What are some potential issues to watch out for when flattening arrays
 in JavaScript?

*/
        //Answers
          // 1. Creating a very large array could lead to performance issues or memory errors
          // 2. possibility of circular references in nested arrays, which could cause infinite recursion if not handled properly
          // 3. different flattening methods (e.g. using reduce() vs. using flat()) may have different performance characteristics

//  JavaScript Array Manipulation Interview Questions With Answers

//  JavaScript Array Manipulation refers to the process of changing the content of an array in Javascript

      // Question 1: What is the difference between .map() and .forEach()?
          // .map and . forEach methods are both used to loop through an array
            //They differ in what they return
              // .map() Returns a new array with the same length as the original array, where each element is the result of applying a callback function to the original element
              // .forEach() does not return anything, but it simply excecutes a callback function on each element of the array

              //An example of code using both 
                    const numbers = [1, 2, 3, 4, 5];

                    // Using .forEach()
                    console.log("Using forEach:");
                    numbers.forEach(num => {
                        console.log(num * 2); // Prints the doubled values
                    });
                    
                    // Using .map()
                    console.log("Using map:");
                    const doubledNumbers = numbers.map(num => num * 2);
                    console.log(doubledNumbers); // Returns a new array with doubled values
                    
      //  Question 2: How do you remove an element from an array in JavaScript?
                      //Using the splice method
                        // Example
                         const fruits = ["Banana" , "Apple" , "Mango" , "Passion"]
                          fruits.splice(3,1)
                           console.log(fruits) //[ 'Banana', 'Apple', 'Mango' ]

      // Question 3: What is the difference between .filter() and .find()?
      
      
              //  ○ .filter() returns a new array with all elements that pass a certain test provided by a
                            //callback function.
                            // .find() returns the value of the first element in the array that passes a certain test
                            // provided by a callback function.

                            // Example
                            const numbers1 = [10, 20, 30, 40, 50];

                            // Using .filter() - Returns an array of all elements greater than 25
                            const filteredNumbers = numbers1.filter(num => num > 25);
                            console.log(filteredNumbers);  // Output: [30, 40, 50]
                            
                            // Using .find() - Returns only the first element greater than 25
                            const foundNumber = numbers1.find(num => num > 25);
                            console.log(foundNumber);  // Output: 30


      //  Question 4: How do you sort an array in JavaScript?
           // Answer: You can sort an array using the .sort() method. This method modifies the original array by
            //sorting its elements in place.  

            const myFruits = ['banana', 'apple', 'orange', 'mango'];
            myFruits.sort();
            console.log(myFruits); // ['apple', 'banana', 'mango', 'orange'] 
            
      //  Question 5: How do you flatten a nested array in JavaScript?
            // Can be done using the .flat() method which return a new array with all sub-array element concatenated into it recursively up to the 
            //specified depth
                 const values = [1, 2, [3, 4], [5, [6, 7]]]
                 
                 const flattenedValues = values.flat(2);

                 console.log(flattenedValues)
           

        // How to get first 3 elements of array in JavaScript?
                    //The splice method
                    const studentMarks = [32, 78, 56, 98, 45,50,67]
                      const filteredMarks = studentMarks.splice(0,3)
                      console.log(filteredMarks) //[ 32, 78, 56 ]

        //  What is Array[-1] in JavaScript?
            /*Array[-1] in JavaScript will return the last element of the array, since negative index values count
                      backwards from the end of the array. So, for example, if you have an array of numbers, you can
                      access the last element using array[-1].
                        */       
                       
                      //Example
                      const numbers3 = [10, 20, 30, 40, 50];
                      console.log(numbers3[numbers3.length - 1]); // Output: 50

                                    // OR

                       const numbers4 = [10, 20, 30, 40, 50];
                       console.log(numbers4.at(-1)); // Output: 50


                       // Finished!
                                    
                      



        


                    


