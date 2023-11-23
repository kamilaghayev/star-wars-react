import { useEffect, useState } from 'react';
import { getApiResource } from '../../utils/network';
import { API_PEOPLE } from '../../constants/api';
import styles from './PeoplePage.module.css';
import { getPeopleId } from '../../services/getPeopleData'
const PeoplePage = () => {
    const [people, setPeople] = useState(null)

    const getResource = async (url) => {
        const res = await getApiResource(url);
        
        const peopleList = res.results.map(({name,url}) => {
            const id = getPeopleId(url)
            return { 
                name, 
                url 
            }
        })

        setPeople(peopleList);

    }
    useEffect(() => {
        getResource(API_PEOPLE);
    }, [])

    return (
        <>
            {people && (
                <ul>
                    {people.map(({name, url}) => ( 
                        <li className={styles.peopleList} key={name}>
                            {name}
                        </li>
                    ))}
                </ul>
            )}
        </>
    )
}

export default PeoplePage