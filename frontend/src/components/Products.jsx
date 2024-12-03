import { books } from "../assets/books";

import classes from "./Products.module.css";
import ProductItem from "./ProductItem";

export default function Products() {
  return (
    <div className={classes.productWrapper}> 

  
    <ul className={classes.productContainer}>
      {books.map((book) => (
       <ProductItem key={book.id} item={book}/>
      ))}
    </ul>
    </div>
  );
}
