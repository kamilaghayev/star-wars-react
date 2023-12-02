import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { withErrorApi } from '@hoc/withErrorApi';
import PeopleList from '@components/PeoplePage/PeopleList';
import PeopleNavigation from '@components/PeoplePage/PeopleNavigation';
import { getApiResource } from '@utils/network';
import { API_PEOPLE } from '@constants/api';
import { getPeopleId, getPeopleImg, getPeoplePageId } from '@services/getPeopleData';
import { useQueryParams } from '@hooks/useQueryParams';

const PeoplePage = ({ setErrorApi }) => {
    const [people, setPeople] = useState(null);
    const [nextPage, setNextPage] = useState(null);
    const [prevPage, setPrevPage] = useState(null);
    const [counterPage, setCounterPage] = useState(1);


    const query = useQueryParams();
    const queryPage = query.get('page');

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
            setNextPage(res.next);
            setPrevPage(res.previous);
            setCounterPage(getPeoplePageId(url));
        } else {
            setErrorApi(true);
        }

    }
    useEffect(() => {
        getResource(API_PEOPLE + queryPage);
    }, [])

    return (
        <>
            {people && <PeopleList people = {people}/>}
            <PeopleNavigation
                getResource = {getResource}
                prevPage = {prevPage}
                nextPage = {nextPage}
                counterPage = {counterPage}
            />
        </>
    )
}

PeoplePage.propTypes = {
    setErrorApi: PropTypes.func,
}

export default withErrorApi(PeoplePage)