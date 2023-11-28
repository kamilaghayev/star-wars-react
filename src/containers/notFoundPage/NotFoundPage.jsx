import styles from './NotFoundPage.module.css';
import { useLocation } from 'react-router';
import img from './img/error-404.png'
const NotFoundPage = () => {
    const location = useLocation();
    
    return (
        <>
            <h1 className={styles.header}>Not Found</h1>
            <div className={styles.img}>
                <img src={img} alt="" />
            </div>
            <p className={styles.info}>not match for <u>{location.pathname}</u></p>
        </>
    )
}

export default NotFoundPage