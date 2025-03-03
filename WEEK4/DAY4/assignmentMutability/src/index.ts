const marks: number[]= [1,2,3,4,5,6,7]


const myset : Set<number> = new Set ([1,2,3,4,5])
console.log(myset)
myset.add(6)
console.log(myset)



type baseEntity={

    id: string;
    createdAt : Date;
}
type User = {
    id: string;
    createdAt: Date;
    name: string;
    email: string;
  } & baseEntity; 
  
  type Product = {
    id: string;
    createdAt: Date;
    name: string;
    price: number;
  } & baseEntity;
  