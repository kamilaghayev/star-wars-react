import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './PeopleNavigation.module.css';
import PrimaryBtn from '@UI/UIButton/PrimaryBtn';

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
        <PrimaryBtn 
          onClick={getPrevPage} 
          disabled={!prevPage}
        >
          previous
        </PrimaryBtn>
      </Link>
      <Link to={`/people/?page=${counterPage+1}`}>
        <PrimaryBtn 
          onClick={getNextPage}
          disabled={!nextPage}
        >
          next
        </PrimaryBtn>
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