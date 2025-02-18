const numbers = [1,2]
 const [first = 10, second= 20 , third =30]= numbers
    console.log(third)

    const z = 10; // Global scope

if (z === 10) {
    const z = 20; // Block scope (inside the if block)
    console.log(z); // 20
}

console.log(z); // 10