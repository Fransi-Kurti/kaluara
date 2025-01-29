

import classes from "./Products.module.css";
import ProductItem from "./ProductItem";

export default function Products({productType, productPath}) {
  return (
    <div className={classes.productWrapper}> 

  
    <ul className={classes.productContainer}>
      {productType.map((type) => (
       <ProductItem key={type.id} product={productPath} item={type}/>
      ))}
    </ul>
    </div>
  );
}
