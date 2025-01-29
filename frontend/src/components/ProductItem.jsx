import { Link } from "react-router-dom";
import classes from "./ProductItem.module.css";

export default function ProductItem({ item, product }) {
  return (
    <li className={classes.productItem}>
      <Link to={`/${product}/${item.id}`} className={classes.productLink}>
        <img
          src={item.image}
          alt={item.title}
          className={classes.productImage}
        />
        <div className={classes.productTitle}>
          <div>
            <p>{item.title}</p>
            <p>-{item.author}</p>
          </div>
          <p>ClICK FOR MORE</p>
        </div>
        
      </Link>
    </li>
  );
}
