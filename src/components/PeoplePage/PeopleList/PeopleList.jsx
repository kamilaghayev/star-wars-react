import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import styles from './PeopleList.module.css';

const PeopleList = ({ people }) => {
    return (
        <>
            <h1 className='header__text'>Star wars characters</h1>
            <ul className={styles.list__container}>
                {people.map(({ id, name, img }) => ( 
                    <li className={styles.list__item} key={id}>
                        <Link to={`/people/${id}`}>
                            <img className={styles.list__img} src={img} alt={name} />
                            <h3>{name}</h3>
                        </Link>
                    </li>
                ))}
            </ul>
        </>
    )
}

PeopleList.propTypes =  {
    people: PropTypes.array,
}
export default PeopleList