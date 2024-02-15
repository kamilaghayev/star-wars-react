import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";
import cn from "classnames"
const HeaderNav = ({...css}) => {
    return (
        <ul className={css.css}>
            <li className={styles.navlinks}>
                <NavLink to='/'>Home</NavLink>
            </li>
            <li>
                <NavLink to='/people/?page=1'>People</NavLink>
            </li>
            <li>
                <NavLink to='not-found'>Not Found</NavLink>
            </li>
        </ul>
    )
}

export default HeaderNav