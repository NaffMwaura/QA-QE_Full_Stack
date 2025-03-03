let str = 'Hello'

console.log(str.toUpperCase)

console.log(str)

const arr: number[] = [1,2,3,4,5]

arr.push(6)

console.log(arr)


const obj = {name :'Alice', age : 20}

obj.age = 39

console.log(obj)

type User = {

    readonly name : string;
     age : number;
}

const user: User = {name: 'Bob', age: 30}


// user.name= 'Charlie'..........=> Cannot work because it's readonly

user.age = 27

console.log(user.age)


// Generic in Functions

function identity <T> (value: T): T {
    return value;
}

console.log(identity <string>("Hello"))
console.log(identity <number>(34))
console.log(identity <{name: string; age : number}>({name: "John", age: 34}))


// Arrays

const fruits: string[] = ['Apple', 'Banana', 'Cherry']

//OR
    // const arrName: Array <type> = []

const marks: number[]= [1,2,3,4,5,6,7]


const myset : Set<number> = new Set ([1,2,3,4,5])
console.log(myset)
myset.add(6)
console.log(myset)


//........****Type Assertion and Casting
    // as syntax

// const jsonString = `{"name": 'John', "age": 34}`;
// const parsedData = JSON.parse(jsonString) as {name: string; age: number}
// console.log(parsedData)

    // Using Angle brackets

    // const parsedData2 = <{name : string, age:number}> JSON.parse(jsonString)