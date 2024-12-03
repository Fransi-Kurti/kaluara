import { NavLink } from "react-router-dom";
import classes from "./NavigationLink.module.css";

export default function NavigationLink({
  label,
  path,
  secondRow,
  className,
  ...props
}) {
  return (
    <li
      className={
        !secondRow ? classes.navigationLink : classes.navigationLinkSecondRow
      }
    >
      <NavLink
        {...props}
        to={path}
        className={({ isActive }) => (isActive ? classes.active : undefined)}
      >
        {label}
      </NavLink>
    </li>
  );
}
