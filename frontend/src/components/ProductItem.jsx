import { Link } from "react-router-dom";
import classes from './ProductItem.module.css';

export default function ProductItem({ item }) {
  return (
    <li className={classes.productItem}>
      <Link to={`/product/${item.id}`} className={classes.productLink}>
        <img
          src={item.image}
          alt={item.title}
          className={classes.productImage}
        />
        <div className={classes.productTitle}>{item.title}</div> {/* Hover Title */}
      </Link>
    </li>
  );
}

