/*

JavaScript String Practice Questions 
1. Check String Input 
        Write a JavaScript function to check whether an 'input' is a string or not. 

*/
        //Answer:

        function is_string(input){

            return typeof input === 'String'
        }


        console.log(is_string('w3resource'));// false
        console.log(is_string([1,2,3,4]));//false

/*
2. Check Blank String 
        Write a JavaScript function to check whether a string is blank or not. 
*/

        //Answer
        function is_Blank(str){

            return typeof str == 'string' 
        }

        console.log(is_Blank("")); 
        console.log(is_Blank('Naff')); 

/* 

3. String to Array of Words 
○ Write a JavaScript function to split a string and convert it into an array of words. 

*/      

        //Answer
            function stringToArray(str){
                return str.split(" ")

            }
        console.log(stringToArray("Robin Singh"))

/* 

4. Extract Characters 
○ Write a JavaScript function to extract a specified number of characters from a 
string. 

*/
            //Answer
             function extractCharacters(str, num){

                return str.slice(0,num)
             }

             console.log(extractCharacters("Robin Singh", 4)); 

/*
5. Abbreviate Name 
         Write a JavaScript function to convert a string into abbreviated form. 

*/
             //Answer
             function stringToAbbrev(name) {
                let words = name.split(" "); 
                if (words.length > 1) {
                    return `${words[0]} ${words[1][0]}.`; 
                }
                return name; 
            }
               console.log(stringToAbbrev("Robin Singh"));


/* 
6. Hide Email Address 
         Write a JavaScript function that hides email addresses to prevent unauthorized 
access. 

*/ 

function protect_email(email) {
    let [username, domain] = email.split("@"); 
    let maskedUsername = username.substring(0, Math.min(5, username.length)) + "..."; 
    return maskedUsername + "@" + domain; 
}
console.log(protect_email("robin_singh@example.com")); // "robin...@example.com" 


/*
7. Parameterize String 
○ Write a JavaScript function to parameterize a string. 
 Test Data: 
console.log(string_parameterize("Robin Singh from USA.")); // 
"robin-singh-from-usa" 

*/
    //Answer:
    function string_parameterize(str){

        return str.toLowerCase()
        .replace(/[^\w\s]/g, '')
        .trim()
        .replace(/\s+/g, '-');

    }
        console.log(string_parameterize("Robin Singh from USA."));


/*

8. Capitalize First Letter 
        Write a JavaScript function to capitalize the first letter of a string. 
        Test Data: 
        console.log(capitalize('js string exercises')); // "Js string exercises"
*/

        //Answer:

        function capitaliza(str){

            return str.charAt(0).toUpperCase() + str.slice(1);
        }
        console.log(capitaliza('js string exercises')); // "Js string exercises" 

/*

9. Capitalize Each Word 
        Write a JavaScript function to capitalize the first letter of each word in a string. 
        Test Data: 
        console.log(capitalize_Words('js string exercises')); // "Js String Exercises" 

*/

        //Answer

function capitalize_Words(str){

    return str.split(' ')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');

}

    console.log(capitalize_Words('js string excercises'));

 /* 
 
 10. Swap Case 
        Write a JavaScript function that converts uppercase letters to lowercase and vice 
        versa. 
        Test Data: 
        console.log(swapcase('AaBbc')); // "aAbBC" 

 */  
        //Answer
        function swapcase(str) {
            return str.split('')
                      .map(char => char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase())
                      .join('');
        }
        
        console.log(swapcase('AaBbc')); // "aAbBC"
         
/*

11. Camelize String 
○ Write a JavaScript function to convert a string into camel case. 
○ Test Data: 
console.log(camelize("JavaScript Exercises")); // "JavaScriptExercises" 

*/
        //Answer

        function camelize(str) {
            return str.replace(/\b\w/g, match => match.toUpperCase()).replace(/\s+/g, '');
        }
        
        console.log(camelize("JavaScript Exercises")); // "JavaScriptExercises"
        

 /* 
 
 12. Uncamelize String 
        Write a JavaScript function to uncamelize a string. 
        Test Data: 
        console.log(uncamelize('helloWorld')); // "hello world" 
        console.log(uncamelize('helloWorld','-')); // "hello-world" 
        
 */       
        //Answer
        function uncamelize(str, separator = " ") {
            return str
                .replace(/([a-z])([A-Z])/g, `$1${separator}$2`) // Insert separator before uppercase letters
                .toLowerCase(); 
        }
        
        console.log(uncamelize("helloWorld")); //hello World
        console.log(uncamelize('helloWorld','-')); // "hello-world" 

/*

13. Repeat String 
        Write a JavaScript function to concatenate a given string n times. 
        Test Data: 
        console.log(repeat('Ha!', 3)); // "Ha!Ha!Ha!" 

*/
        //Answer
        function repeat(str,n){

            let finalResult = '';
            for ( let i=0; i<n; i++){
                finalResult += str;
            }
            return finalResult;
        }

        console.log(repeat ('Ha!',3))

/* 

14. Insert in String 
        Write a JavaScript function to insert a string within another string at a given 
        position. 
        Test Data: 
        console.log(insert('We are doing some exercises.', 'JavaScript ', 18)); 
        // "We are doing some JavaScript exercises." 

*/
        //Answer

        function insert(str, insertStr, position) {
           
           
            return str.slice(0, position) + insertStr + str.slice(position);
        }
        
        console.log(insert('We are doing some exercises.', 'JavaScript ', 18));
        // Output: "We are doing some JavaScript exercises."
        

/*

15. Humanize Format 
        Write a JavaScript function that formats a number with the correct suffix (1st, 
        2nd, etc.). 
        Test Data: 
        console.log(humanize_format(301)); // "301st" 

*/

        //Answer

        function humanize_format(num) {
                return num + "th";
            }
            
        console.log(humanize_format(301)); // "301st"

/*

16. Truncate String with Ellipsis 
 Write a JavaScript function to truncate a string and append "...". 
Test Data: 
console.log(text_truncate('We are doing JS string exercises.', 15, '!!')); 
// "We are doing !!" 

*/

            //Answer
            function text_truncate(str, length, ending) {
                if (str.length > length) {
                    return str.substring(0, length) + (ending || "");
                }
                return str;
            }
            
            console.log(text_truncate('We are doing JS string exercises.', 15, '!!')); 
            // "We are doing !!"
            
/*

17. Chop String into Chunks 
○ Write a JavaScript function to chop a string into chunks. 
○ Test Data: 
console.log(string_chop('w3resource', 3)); // ["w3r", "eso", "urc", "e"] 

*/
            //Answer
            function string_chop(str, size) {
                let result = [];
                for (let i = 0; i < str.length; i += size) {
                    result.push(str.substring(i, i + size));
                }
                return result;
            }
            
            console.log(string_chop('w3resource', 3)); 
            // Output: ["w3r", "eso", "urc", "e"]
            

/*

18. Count Substring Occurrences 
        Write a JavaScript function to count occurrences of a substring in a string. 
        Test Data: 
        console.log(count("The quick brown fox jumps over the lazy dog", 'the')); 
        // Output: 2 

*/

            function count(str, subStr) {
                const regex = new RegExp(subStr, 'gi'); // 'g' for global, 'i' for case-insensitive
                return (str.match(regex) || []).length;
            }

            console.log(count("The quick brown fox jumps over the lazy dog", 'the'));  
            // Output: 2


/*

19. Reverse Binary Representation 
        Write a JavaScript function that reverses the binary representation of a number 
        and returns its decimal form. 
        Test Data: 
        console.log(reverse_binary(100)); // 19 

*/
            //Answer
            function reverse_binary(num) {
                let binary = num.toString(2); 
                let reversedBinary = binary.split('').reverse().join(''); // Reverse the binary string
                return parseInt(reversedBinary, 2); 
            }
            
            console.log(reverse_binary(100)); //19

/*

20. Pad String to Length 
            Write a JavaScript function to pad a string to a specified length. 
            Test Data: 
            console.log(formatted_string('0000', 123, 'l')); // "0123" 

*/
            //Answer
            function formatted_string(pad, str, direction) {
                str = str.toString();
                if (direction === 'l') {
                    return (pad + str).slice(-pad.length);
                } else {
                    return (str + pad).substring(0, pad.length);
                }
            }
            
            console.log(formatted_string('0000', 123, 'l')); "0123"
            
            

            

        