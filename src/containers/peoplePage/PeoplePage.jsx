import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { withErrorApi } from '@hoc/withErrorApi';
import PeopleList from '@components/PeoplePage/PeopleList';
import { getApiResource } from '@utils/network';
import { API_PEOPLE } from '@constants/api';
import { getPeopleId, getPeopleImg } from '@services/getPeopleData'

const PeoplePage = ({ setErrorApi }) => {
    const [people, setPeople] = useState(null)

    const getResource = async (url) => {
        const res = await getApiResource(url);
        if (res) {
            const peopleList = res.results.map(({name,url}) => {
                const id = getPeopleId(url)
                const img = getPeopleImg(id)
                return {
                    id,
                    name,
                    img
                }
            })
    
            setPeople(peopleList);
            setErrorApi(false);
        } else {
            setErrorApi(true);
        }

    }
    useEffect(() => {
        getResource(API_PEOPLE);
    }, [])

    return (
        <>
            {people && <PeopleList people = {people}/>}
        </>
    )
}

PeoplePage.propTypes = {
    setErrorApi: PropTypes.func,
}

export default withErrorApi(PeoplePage)