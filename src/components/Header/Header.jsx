import styles from './Header.module.css';
import { ReactComponent as MenuIcon } from '@assets/icons/menu-icon.svg';
import { useState } from 'react';
import cn from 'classnames';
import HeaderNav from './HeaderNav';
const Header = () => {
    const [ toggleMenu, setToggleMenu ] = useState(false);
    return (
        <div className={styles.header__container}>
            <MenuIcon 
                className={styles.menu__icon}
                onClick={()=> setToggleMenu(!toggleMenu)}
            />
            <HeaderNav css={
                toggleMenu ? cn(styles.header__menu, styles.menu__active)
                : styles.header__menu
            }/>
        </div>
    )
}

export default Header