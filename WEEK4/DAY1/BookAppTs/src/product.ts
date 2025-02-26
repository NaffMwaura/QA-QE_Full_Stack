export interface Book {
    id: number;
    title: string;
    author: string;
    genre: string;
    pages: number;
    year: number;
    price: number;
    image: string;
  }
  
  export interface CartItem {
    id: number;
    title: string;
    price: number;
    quantity: number;
  }
  