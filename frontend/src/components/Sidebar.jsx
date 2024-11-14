import classes from "./Sidebar.module.css";
import { booksFilterNames, languageFilter } from "../assets/booksFilter";
import Filters from "./Filters";

export default function Sidebar() {
  return (
    <div className={classes.sidebar}>
      <div className={classes.firstSection}>
        <ul>
          <Filters filterType={booksFilterNames} />
        </ul>
      </div>
      <div className={classes.secondSection}>
        <ul>
          <Filters filterType={languageFilter} />
        </ul>
      </div>
    </div>
  );
}
