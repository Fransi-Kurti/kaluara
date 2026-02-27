import classes from "./LatestRelease.module.css";
import cover from "../../../public/latestReleaseImg/iTpameITvrameHover.jpg";

export default function LatestRelease() {
  return (
    <section className={classes.latestReleaseSection}>
      <div className={classes.container}>
        <h2 className={classes.sectionTitle}>LATEST RELEASE</h2>

        <div className={classes.content}>
          <div className={classes.left}>
            <img src={cover} alt="Kaluara Volume 3" className={classes.image} />
          </div>

          <div className={classes.right}>
            <div className={classes.textInner}>
              <h3 className={classes.title}>
                I Tpame I Tvrame 10 Year Anniversary
              </h3>

              <p className={classes.description}>
                Marking ten years since the first I Tpame I Tvrame recordings,
                this anniversary release revisits the project's origins with its
                first five tracks, pressed for the first time on 180g 12" vinyl.
                Limited to 200 copies.
              </p>

              <a className={classes.link}>CHECK IT OUT</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
