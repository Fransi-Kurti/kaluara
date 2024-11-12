import { FaFacebook, FaInstagram, FaTwitter, FaTiktok } from "react-icons/fa";
import { TbBrandThreads } from "react-icons/tb";
import classes from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={classes.footer}>
      <div className={classes.icons}>
        <FaFacebook className={classes.icon} />
        <FaInstagram className={classes.icon} />
        <FaTwitter className={classes.icon} />
        <TbBrandThreads className={classes.icon} />
        <FaTiktok className={classes.icon} />
      </div>
    </footer>
  );
}
