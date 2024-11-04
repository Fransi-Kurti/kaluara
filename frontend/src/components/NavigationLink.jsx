import { NavLink } from "react-router-dom";
import classes from './NavigationLink.module.css'

export default function NavigationLink({ label, path, secondRow, ...props }) {
    return <li className={!secondRow ?classes.navigationLink : classes.navigationLinkSecondRow}>
        <NavLink {...props} to={path}>{label}</NavLink>
    </li>
}