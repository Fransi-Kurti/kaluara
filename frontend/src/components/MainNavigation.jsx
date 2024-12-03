import NavigationLink from "./NavigationLink";
import classes from "./MainNavigation.module.css";

export default function MainNavigation() {
  return (
    <div className={classes.mainNavigation}>
      <div className={classes.navigationFirstRow}>
        <ul>
          <NavigationLink path="/books" label="BOOKS" />
          <NavigationLink path="/music" label="MUSIC" />
          <NavigationLink path="/magazines" label="MAGAZINES" />
          <NavigationLink path="/merch" label="MERCH" />
        </ul>
      </div>
      <div className={classes.navigationSecondRow}>
        <ul>
          <NavigationLink path="/blogs" secondRow label="BLOGS" />
          <NavigationLink path="/mixes" secondRow label="MIXES" />
          <NavigationLink path="/interviews" secondRow label="INTERVIEWS" />
          <NavigationLink path="/about" secondRow label="ABOUT" />
        </ul>
      </div>
    </div>
  );
}
