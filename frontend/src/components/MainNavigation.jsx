import NavigationLink from "./NavigationLink";
import classes from './MainNavigation.module.css'

export default function MainNavigation() {
  return (
    <div className={classes.mainNavigation}>
      <div className={classes.navigationFirstRow}>
        <ul>
          <NavigationLink path='/books' label="BOOKS" />
          <NavigationLink label="MUSIC" />
          <NavigationLink label="MAGAZINES" />
          <NavigationLink label="MERCH" />
        </ul>
      </div>
      <div className={classes.navigationSecondRow}>
        <ul>
          <NavigationLink secondRow label="BLOGS" />
          <NavigationLink secondRow label="MIXES" />
          <NavigationLink secondRow label="INTERVIEWS" />
          <NavigationLink secondRow label="ABOUT" />
        </ul>
      </div>
    </div>
  );
}
