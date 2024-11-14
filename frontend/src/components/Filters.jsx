import classes from "./Filters.module.css";

export default function Filters({ filterType }) {
  return filterType.map((type) => (
    <li className={classes.filterListItem} key={type}>
      <button className={classes.filterButton}>{type}</button>
    </li>
  ));
}
