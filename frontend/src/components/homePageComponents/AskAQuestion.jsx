import classes from "./AskAQuestion.module.css";

export default function AskAQuestion() {
  return (
    <div className={classes.askAQuestionContainer}>
      <div className={classes.title}>
        <h2>ASK A QUESTION/</h2>
        <h2>MAKE A SUGGESTION:</h2>
      </div>
      <div className={classes.form}>
        <form>
          <textarea className={classes.textarea} placeholder="Your message" />
          <input
            type="text"
            name="name"
            placeholder="Your name"
            className={classes.input}
          />
          <input
            type="email"
            name="email"
            placeholder="Your email"
            className={classes.input}
          />
          <button type="submit" className={classes.button}>
            SEND
          </button>
        </form>
      </div>
    </div>
  );
}

