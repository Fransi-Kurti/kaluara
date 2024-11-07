import classes from "./SubscribeContainer.module.css";

export default function SubscribeContainer() {
  return (
    <div className={classes.subscribeContainer}>
      <h4 className={classes.title}>
        SUBSCRIBE TO BE NOTIFIED <br /> ON NEW ARRIVALS:
      </h4>
      <form className={classes.form}>
        <label className={classes.label}>e-mail:</label>
        <input type="email" className={classes.input} placeholder="Enter your email" />
      </form>
      <button className={classes.button}>SEND</button>
    </div>
  );
}
