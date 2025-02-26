// 1. Squre bracket Syntax

type Book = {


    title: string;
    author : string;
    price : number

}

let books : Book[] = []

//Array of strings

// const myAlbums: string = ["Rubber soul, "Revolver","P alps"]
// let albums: string[]=[]

// Array of numbers

let marks: number []= [23,45,98,89]

// The second option is to use the array explicitly


type IngredientType = {
    name: string;
    quantity: string;
  };
  
  type Recipe = {
    title: string;
    ingredients: IngredientType[];
    instructions: string;
  };
  
  const processRecipe = (recipe: Recipe) => {
    console.log(`Processing recipe: ${recipe.title}`);
  };
  
  processRecipe({
    title: "Chocolate Chip Cookies",
    ingredients: [
      { name: "Flour", quantity: "2 cups" },
      { name: "Sugar", quantity: "1 cup" },
    ],
    instructions: "...",
  });
  