import cn from "classnames";
import styles from './UIButton.module.css';

const PrimaryBtn = ({children, ...props}) => {
  return (
    <button 
      className={cn(styles.btn, styles.primary__btn)} 
      {...props}
    >
      {children}
    </button>
  )
}

export default PrimaryBtn