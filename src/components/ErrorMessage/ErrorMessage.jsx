import styles from './ErrorMessage.module.css';

const ErrorMessage = () => {
    return (
        <div className={styles.error__text}>
            <p> The dark side of the force has won.</p>
            <p>We cannot display data.</p>
            <p>Come back when we fix everything</p>
        </div>
    )
}

export default ErrorMessage;