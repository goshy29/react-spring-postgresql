import { NavLink } from "react-router-dom";
import classes from "./navigation/MainNavigation.module.css";

function NavLinks(props) {
    return (
        <>
            <li className={classes.navbar_item}>
                <NavLink to="/" onClick={props.onClick} className={({ isActive }) => isActive ? classes.active : classes.navbar_link} end>
                    Home
                </NavLink>
            </li>
            <li className={classes.navbar_item}>
                <NavLink to="/places" onClick={props.onClick} className={({ isActive }) => isActive ? classes.active : classes.navbar_link} end>
                    Places
                </NavLink>
            </li>
            <li className={classes.navbar_item}>
                <NavLink to="/add-place" onClick={props.onClick} className={({ isActive }) => isActive ? classes.active : classes.navbar_link} end>
                    Add Place
                </NavLink>
            </li>
        </>
    );
}

export default NavLinks;