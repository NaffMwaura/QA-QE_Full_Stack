/*

        1. Check if a String is a Palindrome
        Write a function to determine if a given string is a palindrome. A palindrome is a string that reads the same forward and backward (ignoring spaces, punctuation, and case).


*/

    //Solution:

    function isPalindrome(str){
    
        let cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    
       
        let reversedStr = cleanedStr.split('').reverse().join('');
        
       
        return cleanedStr === reversedStr;
    }
        //test code:
            console.log(isPalindrome('A man, a plan, a canal,Panama'));
            console.log(isPalindrome('Was it a car or a cat I saw?'));
            console.log(isPalindrome('Hello, World!'));



/*

        2. Reverse a String
        Write a function to reverse a given string.


*/
            
            //Solution
            function reverseString(str) {
                return str.split("").reverse().join("");
            }
            console.log(reverseString("I am Loveworld"));


/*

        3. Find the Longest Palindromic Substring
        Write a function to find the longest palindromic substring in a given string.


*/
                function longestPalindromicSubstring(s) {
                    if (s.length < 1) return "";

                    let start = 0, maxLength = 0;

                    function expandAroundCenter(left, right) {
                        while (left >= 0 && right < s.length && s[left] === s[right]) {
                            left--;
                            right++;
                        }
                        return right - left - 1;
                    }

                    for (let i = 0; i < s.length; i++) {
                        let len1 = expandAroundCenter(i, i);      
                        let len2 = expandAroundCenter(i, i + 1);  
                        let len = Math.max(len1, len2);

                        if (len > maxLength) {
                            maxLength = len;
                            start = i - Math.floor((len - 1) / 2);
                        }
                    }

                    return s.substring(start, start + maxLength);
                }

                // Test Cases
                console.log(longestPalindromicSubstring('babad')); // "bab" 
                console.log(longestPalindromicSubstring('cbbd'));  // "bb"


/*
            4. Check if Two Strings are Anagrams
                Write a function to check if two given strings are anagrams of each other. Two strings are anagrams if they contain the same characters in the same frequency but in different orders.

*/
            //Solution:
                    function areAnagrams(str1, str2) {
                    
                        let normalize = str => str.replace(/\s/g, '').toLowerCase().split('').sort().join('');
                        
                        return normalize(str1) === normalize(str2);
                    }
                    
                    // Test Cases
                    console.log(areAnagrams("listen", "silent")); // true
                    console.log(areAnagrams("hello", "world"));//false


/**
 * 
 * 
         5. Remove Duplicates from a String
              Write a function to remove duplicate characters from a string while preserving the order of the first appearance of each character.
 * 
 */
                    //solution
                    function removeDuplicates(str) {
                        let seen = new Set(); 
                        let result = ''; 
                    
                        for (let char of str) {
                            if (!seen.has(char)) { 
                                seen.add(char); 
                                result += char; 
                            }
                        }
                    
                        return result;
                    }

                    console.log(removeDuplicates('programming'));
                    console.log(removeDuplicates('hello world'));
                    console.log(removeDuplicates('aaaaa'));
                    console.log(removeDuplicates('abcd'));
                    console.log(removeDuplicates('aabbcc'));


/*

        6. Count Palindromes in a String
        Write a function to count how many distinct palindromes are in a given string. A palindrome is considered distinct based on its start and end position in the string.


*/
        //solution
            function countPalindromes(s) {
                let count = 0;
                let seen = new Set(); // Store unique palindromes

                function expandAroundCenter(left, right) {
                    while (left >= 0 && right < s.length && s[left] === s[right]) {
                        let substring = s.substring(left, right + 1);
                        if (!seen.has(substring)) {
                            seen.add(substring);
                            count++;
                        }
                        left--;  
                        right++;
                    }
                }

                for (let i = 0; i < s.length; i++) {
                    expandAroundCenter(i, i);     
                    expandAroundCenter(i, i + 1); 
                }

                return count;
            }

            console.log(countPalindromes("ababa"));   
            console.log(countPalindromes("racecar")); 
            console.log(countPalindromes("aabb"));    
            console.log(countPalindromes("a"));       
            console.log(countPalindromes("abc"));  


/*

        7. Longest Common Prefix
            Write a function to find the longest common prefix string amongst an array of strings. If there is no common prefix, return an empty string.


*/
            //solution
            function longestCommonPrefix(strs) {
                if (!strs.length) return "";
            
                let prefix = strs[0]; 
            
                for (let i = 1; i < strs.length; i++) {
                    while (strs[i].indexOf(prefix) !== 0) { 
                        prefix = prefix.slice(0, -1); 
                        if (!prefix) return ""; 
                    }
                }
                return prefix;
            }
            
            console.log(longestCommonPrefix(["flower", "flow", "flight"])); 
            console.log(longestCommonPrefix(["dog", "racecar", "car"]));   
            console.log(longestCommonPrefix(["interspecies", "interstellar", "interstate"])); 
            console.log(longestCommonPrefix(["prefix", "prefixes", "preform"])); 
            console.log(longestCommonPrefix(["apple", "banana", "cherry"])); 


        
/*

        8. Case Insensitive Palindrome
            Modify the palindrome function to be case insensitive, meaning it should ignore upper and lower case differences when checking for a palindrome.


*/
            //solution
            function isCaseInsensitivePalindrome(str) {
                let normalizedStr = str.toLowerCase(); 
                let reversedStr = normalizedStr.split('').reverse().join(''); 
                return normalizedStr === reversedStr; 
            }
            
            console.log(isCaseInsensitivePalindrome('Aba')); // true
            console.log(isCaseInsensitivePalindrome('Racecar')); // true
            console.log(isCaseInsensitivePalindrome('Palindrome')); //false
            console.log(isCaseInsensitivePalindrome('Madam')); // true
            console.log(isCaseInsensitivePalindrome('Hello')); // false
                        




