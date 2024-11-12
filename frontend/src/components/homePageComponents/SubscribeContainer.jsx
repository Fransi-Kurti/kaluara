import classes from "./SubscribeContainer.module.css";

export default function SubscribeContainer() {
  return (
    <div className={classes.subscribeContainer}>
      <h2 className={classes.title}>
        SUBSCRIBE TO BE NOTIFIED <br /> ON NEW ARRIVALS:
      </h2>
      <form className={classes.form} >
        <input type="email" name="email" className={classes.input} placeholder="Enter your email" />
      </form>
      <button className={classes.button}>SEND</button>
    </div>
  );
}
