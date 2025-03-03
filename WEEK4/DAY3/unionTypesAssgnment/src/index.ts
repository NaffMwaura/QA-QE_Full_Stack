// This is my unions assignment


//*************

//  1. Unions and Literals

// Excercise 1

import type { Equal, Expect } from '@type-challenges/utils';
function getUsername(username: string | null) {
    if (username !== null) {
        return `User: ${username}`
    } else {
        return 'Guest'
    }
}

const result = getUsername('Alice');

const result2 = getUsername(null);


console.log(result); // Output: User: Alice
console.log(result2); // Output: Guest

type test = Expect<Equal<typeof result, string>>;

type test2 = Expect<Equal<typeof result2, string>>

// Exercise 2

function move(direction: "up" | "down" | "left" | "right", distance: number) {
    // Move the specified distance in the given direction

    console.log(` The car is moving ${direction} for ${distance} meters`);

  }

  move('up', 10);

  move('left', 5);

  move(

          // @ts-expect-error - "up-right" is not a valid direction

       "up-right",
       10
  );
  
  move(
// @ts-expect-error - "up-right" is not a valid direction
    'down-left',
    20,
  )


  // 2. Narrowing

 // Sample Examples

  const logSize = (size: string) => {
    console.log(size.toUpperCase())
  }
  
  logSize('small')

  const recordOfSizes = {
    small: 'small',
    medum : 'medium',   //.........Added  medum : 'medium', to remove error
    large: 'large',
  }
  
  const logSize1 = (size: 'small' | 'large') => {
    console.log(recordOfSizes[size])
  }
  
  logSize('medium')

  function logId(id: string | number) {
    console.log(id)
  }
  
  logId('abc')
  logId(123)

  function logId1(id: number | string) { // Added ...| string.....to prevent the error
    console.log(`The id is ${id}`)
  }
  
  type User = {
    id: string | number
  }
  
  const user: User = {
    id: 123,
  }
  
  logId1(user.id)


   //Excercise 1
 
   export function validateUsername(username: string | null): boolean {
   if(username=== null){
    return false;
   }
   
    return username.length > 5
  
  }

  it('should return true for valid usernames', () => {
  expect(validateUsername('Matt1234')).toBe(true)

  expect(validateUsername('Alice')).toBe(false)

  expect(validateUsername('Bob')).toBe(false)
})

function printStatusCode(code: string | number) {
  console.log(`My status code is ${code}.`)
}
printStatusCode(404);
printStatusCode('404');



