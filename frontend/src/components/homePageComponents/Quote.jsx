import quoteImg from "../../assets/quote.png";
import classes from "./Quote.module.css";

export default function Quote() {
  return (
    <div className={classes.quote}>
      <img src={quoteImg} alt="Quote" />
    </div>
  );
}