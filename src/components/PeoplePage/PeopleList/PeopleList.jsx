import PropTypes from 'prop-types';
import styles from './PeopleList.module.css';

const PeopleList = ({ people }) => {
    return (
        <ul className={styles.list__container}>
            {people.map(({ id, name, img }) => ( 
                <li className={styles.list__item} key={id}>
                    <a href="#">
                        <img className={styles.list__img} src={img} alt={name} />
                        <h3>{name}</h3>
                    </a>
                </li>
            ))}
        </ul>
    )
}

PeopleList.propTypes =  {
    people: PropTypes.array,
}
export default PeopleList