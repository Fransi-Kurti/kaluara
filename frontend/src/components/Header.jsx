import classes from './Header.module.css';

import { useContext } from 'react';
import CartContext from '../store/CartContext';

import KaluaraLogo from "./KaluaraLogo";
// import Dark from "./mode/Dark";
// import Light from "./mode/Light";


export default function Header() {
 const cartCtx = useContext(CartContext);

 const totalCartItems = cartCtx.items.reduce((totalNumberOfItems, item )=> {
  return totalNumberOfItems + item.quantity;
 }, 0)

  return (
    <header className={classes.header}>
      {/* <div className={classes.mode}>
        <Dark />
        <Light />
      </div> */}
      <div >
        <KaluaraLogo />
      </div>
      {/* <div className={classes.cartIcon}>
        <div className={cartCtx.items.length > 0 ? classes.iconCircle : classes.noIconCircle}>{cartCtx.items.length > 0 ? totalCartItems : undefined}</div>
        <i className="fas fa-shopping-cart" ></i>

      </div> */}
    </header>
  );
}
