import cn from "classnames";
import styles from "./UIButton.module.css";
import { ReactComponent as ArrowIcon } from "@assets/icons/arrow-back.svg"
const GoBackBtn = ({className, ...props}) => {
  return (
    <button
        className={cn(className, styles.btn, styles.goback__btn)}
        {...props}
    >
        <ArrowIcon/>
        {props.children}
    </button>
  )
}

export default GoBackBtn