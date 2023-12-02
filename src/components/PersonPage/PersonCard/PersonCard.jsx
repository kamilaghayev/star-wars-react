import PropTypes from "prop-types";
import styles from "./PersonCard.module.css";

const PersonCard = ({person, ...props}) => {
    return (
        <div className={styles.person__card}>
            <img src={person.image} alt={person.name} />
        </div>
    )
}

PersonCard.propTypes = {
    person: PropTypes.object,
}
export default PersonCard