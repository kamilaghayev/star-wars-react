import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import styles from "./UILoading.module.css"
import loaderDark from "./img/loader-dark.svg";
import loaderWhite from "./img/loader-white.svg";
import loaderPurple from "./img/loader-purple.svg";
const UILoading = ({ theme }) => {
    const [ loaderIcon, setLoaderIcon ] = useState(null);

    useEffect(() => {
        const iconsOnThemes = {
            'dark': loaderPurple,
            'white': loaderDark,
            'purple': loaderWhite,
        }
        setLoaderIcon(iconsOnThemes[theme] || loaderPurple);
    },[]);

    return (
        <img
            src={loaderIcon} 
            alt={theme} 
        />
    )
}

UILoading.propTypes = {
    theme: PropTypes.string,
}
export default UILoading