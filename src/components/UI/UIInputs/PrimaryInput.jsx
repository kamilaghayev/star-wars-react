import styles from './PrimaryInput.module.css';

const PrimaryInput = (props) => {
  return (
    <input 
    className={styles.primary__Inp}
        {...props} 
    />
  )
}

export default PrimaryInput