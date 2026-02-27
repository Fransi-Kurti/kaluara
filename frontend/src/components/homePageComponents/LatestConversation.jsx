import classes from "./LatestConversation.module.css";

export default function LatestConversation() {
  return (
    <section className={classes.section}>
      <div className={classes.container}>
        
        <h2 className={classes.sectionTitle}>LATEST CONVERSATION</h2>

        <div className={classes.imageCard}>
          
          {/* Placeholder image */}
          <div className={classes.placeholder}></div>

          {/* Overlay text */}
          <div className={classes.overlay}>
            <h3 className={classes.title}>
              MUJAHIDEEN
            </h3>
            <h3 className={classes.link}>READ THIS</h3>
          </div>

        </div>

      </div>
    </section>
  );
}