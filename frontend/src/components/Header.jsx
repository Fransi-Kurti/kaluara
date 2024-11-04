import classes from './Header.module.css'

import KaluaraLogo from "./KaluaraLogo";
import Dark from "./mode/Dark";
import Light from "./mode/Light";


export default function Header() {
  return (
    <header className={classes.header}>
      <div className={classes.mode}>
        <Dark />
        <Light />
      </div>
      <div >
        <KaluaraLogo />
      </div>
      <div>
      <i className="fas fa-shopping-cart"></i>

      </div>
    </header>
  );
}
