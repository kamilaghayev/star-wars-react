import styles from './UIButton.module.css';

const PrimaryBtn = ({theme='dark', ...props}) => {
  return (
    <button className={styles.primary__btn} {...props}>{props.children}</button>
  )
}

export default PrimaryBtn