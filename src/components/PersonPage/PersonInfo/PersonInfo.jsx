import styles from "./PersonInfo.module.css"
const PersonInfo = ({ personInfo }) => {
    return (
        <ul className={styles.person__info}>
            {personInfo.map(({ title, value }) => (
                value && (
                    <li key={title}>
                        <p>{title}:</p> 
                        <span>{value}</span>
                    </li>
                )
            ))}
        </ul>
    )
}

export default PersonInfo