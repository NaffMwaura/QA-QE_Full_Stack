const greet = (name: string): string => {
    return `Hello, ${name}!`;
};

console.log(greet("TypeScript"));

console.log(greet("TypeScript"));

export const add = (a: number, b: number): number => {
    return a + b;
};


type ShoppingCart = {
    userId: string;
    items: string[]; // Add items as an array of strings
};

const processCart = (cart: ShoppingCart) => {
    console.log("My cart:", cart);
};

processCart({
    userId: "user123",
    items: ["item1", "item2", "item3"], 
});

type Person = [string, number, boolean];

const person1: Person = ["Alice", 30, true];
const person2: Person = ["Bob", 25, false];

console.log(person1);
console.log(person2);
 

const concatName = (first: string, last: string) => {
    if (!last) {
      return first;
    }
  
    return `${first} ${last}`;
  };

  console.log(concatName("Naff", "Mwaura"))


  const logAlbumInfo = (
    title: string,
    trackCount: number,
    isReleased: boolean,
  ) => {
    // implementation
    console.log()
  };

  const Person3:{name: string; age: number} = {

    name: 'Alice',
    age : 30
  }

  console.log(Person3)

 interface Animal {

    name : string;
    age : number
 }


 interface Dog extends Animal {

    breed : string,
 }

 const myDog: Dog = {

    name: 'Rex',
    age: 2,
    breed: 'Golden Retriever',
 }

  console.log(myDog)


  const dynamicKeyShape: {[key : string] : string} = {}
  dynamicKeyShape["name"]= 'Alice'
  dynamicKeyShape["age"]= "30"


  console.log(dynamicKeyShape)



  //dynamic keys with fixed properties
     type User ={
        id:number;
        name: string

        [key : string]: string | number
     }

      const user1 : User = {

        id : 1,
        name: 'John'
          }

          console.log(user1)


          const user2 : User={

            id : 1,
            name : 'John',
            Email: 'john@gmail.com'
          }

          console.log(user2)


         // pick and onmit
          type person4={

            name : string;
            age : number;
            location : string;
          }

          //pick the name and age from person2

          type nameAndAge = Pick<person4, "name" | "age">

          //Create name and age type by ommitting  location

          type WithoutLocation = Omit<person4, "location">

          const withoutLocation : WithoutLocation = {

            name : 'John',
            age: 25
          }

          console.log(withoutLocation)

          interface person5 {
            name: string;
            age: number;
          }

        //   const person6 : person5 = {

        //     // locationAddress : number

        //   }

        const fullname = {

            name : 'Jey'
        } as {name: string}

        console.log(fullname)