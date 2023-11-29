import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './PeopleNavigation.module.css';

const PeopleNavigation = ({
  getResource,
  prevPage,
  nextPage,
  counterPage,
}) => {

  const getPrevPage = () => getResource(prevPage);
  const getNextPage = () => getResource(nextPage);
  return (
    <div className={styles.btn__container}>
      <Link to={`/people/?page=${counterPage-1}`}>
        <button 
          onClick={getPrevPage} 
          disabled={!prevPage}
          className={styles.nav__btn}
        >
          previous
        </button>
      </Link>
      <Link to={`/people/?page=${counterPage+1}`}>
        <button 
          onClick={getNextPage}
          disabled={!nextPage}
          className={styles.nav__btn}
        >
          next
        </button>
      </Link>
    </div>
  )
}

PeopleNavigation.propTypes = {
  getResource: PropTypes.func,
  prevPage: PropTypes.string,
  nextPage: PropTypes.string,
  counterPage: PropTypes.number,
}
export default PeopleNavigation