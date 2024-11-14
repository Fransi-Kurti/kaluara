import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import classes from "./KaluaraLogo.module.css";

export default function KaluaraLogo() {
  return (
    <Link to='/'>
    <img
      className={classes.logo}
      src={logo}
      alt="Kaluara Logo"
    />
    </Link>
  );
}
