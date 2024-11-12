import DUMMYIMG from "../../assets/AdBlediTha.jpg";
import classes from "./AdContainer.module.css";

export default function AdContainer() {
  return (
    <div className={classes.adContainer}>
      <img src={DUMMYIMG} alt="Ad containing promo materials" />
    </div>
  );
}
