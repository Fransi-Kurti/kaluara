import newArrivalsImage from "../../assets/newarrivals.png";
import classes from "./NewArrivals.module.css";

export default function NewArrivals() {
  return (
    <div className={classes.newArrivals}>
      <img src={newArrivalsImage} alt="New Arrivals" />
    </div>
  );
}
