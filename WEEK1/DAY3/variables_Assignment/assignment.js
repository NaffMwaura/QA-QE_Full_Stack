//Question One

   //Declaring variables

   let age= 25;// variable age declared

   const schoolName = "GreenWood High"//Declare a variable schoolName using const and assign it "Greenwood High".

   let studentList= [];// I have declared the empty array

  //The difference between let, const and var when declaring variables

       //var keyword can be declared within the same scope while the let and the const keyword can not be declared within the same scope
       //For const however, defines a variable that is unchangeable



//Question Two

    //Which of the following variable names is invalid? 
            let $price = 100; 
            //  let 1stPlace = "John"; // This variable name is invalid because the variable starts with a number
            let _1stPlace = "John";// corrected code
            console.log(_1stPlace);//Prints John
            let _score = 89; 
            let userName = "Alice"; 


//Question Three 

//Why is the following variable name incorrect? 
//const #taxRate = 0.16; This variable name is incorrect because it starts with # instead of _, $ sign or a letter

//The correct way would be as follows:

    //const _taxRate = 0.16; or const taxRate = 0.16; or onst $taxRate = 0.16;  


//Question Three

        //Rewrite this variable name to follow best practices: 
        //
        
    //corrected code
    let MyVariableName= "JavaScript"; 


// 3. Identifying Data Types 

    //What will be the output of the following? 
        console.log(typeof "Hello"); 
        console.log(typeof 99); 
        console.log(typeof true); 
        console.log(typeof undefined); 

        //The output would be as follows

        /*
            string
                number
                boolean
                undefined
        
        */


//Identify the data types in this array: 
    //let data = ["Kenya", 34, false, { country: "USA" }, null]; 

    //Data types in the above array

        /* 
            "Kenya" — String: A sequence of characters 

            34 — Number: An integer representing a numeric value.

            false — Boolean: A logical value, either true or false.

            { country: "USA" } — Object: 

            null — Null: A special value representing "no value" or "intentional absence."
        */

//9.  How do you define a BigInt in JavaScript? Provide an example. 

//Question 4: Obbjects and Arrays
        //11. Create an object person with properties name, age, and city. 

        let person = {
            name: "John Doe",
            age: 30,
            city: "Nairobi"
          };
          
        //12.Add a new property email to the person object. 
            person.email= "naftali795@gmail.com"
                
            console.log(person) // adds the new email property to the object

        //13. Declare an array fruits with three fruit names. 
            let fruits = ["Apple"," Banana", "Orange"];

        //14. Access the second item in the fruits array. 
            console.log(fruits[1]);

//Question 5:
            //Type Coercion

                //15. What will be the output of the following? 


            console.log("5" + 2); 
            console.log("5" - 2); 

            /* The out put will be:
            52
            3 
        */

            //16. Convert the string "100" into a number. 

                let num= parseInt("100")
                 console.log(num);
            //17. Convert the number 50 into a string. 
                    let Str= String(50);
                    console.log(Str)//Outputs 50 with the same color as Banana because it's now a string
            //18. What will be the result of this operation? 
                console.log(5 + true);
                //The output will be 6 because true
                //is treated as one!
