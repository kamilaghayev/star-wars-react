import { useEffect, useState } from "react";
import { useParams } from "react-router";

import styles from "./PersonPage.module.css";

import { withErrorApi } from '@hoc/withErrorApi';
import { getApiResource } from "@utils/network";
import { getPeopleImg } from "@services/getPeopleData";
import { API_PERSON } from "@constants/api";
import PersonCard from "@components/PersonPage/PersonCard";
import PersonInfo from "@components/PersonPage/PersonInfo";
import GoBack from "../../components/GoBack";
import PersonFilms from "../../components/PersonPage/PersonFilms";

const PersonPage = ({ setErrorApi }) => {
    const [ personInfo, setPersonInfo ] = useState(null);
    const [ personMain, setPersonMain ] = useState(null);
    const [ personFilms, setPersonFilms ] = useState(null);

    const id = useParams().id;

    useEffect(() => {
        (async () => {
            const res = await getApiResource(`${API_PERSON + id}/`);
            
            if (res) {
                setPersonInfo([
                    {title: 'Height', value: res.height},
                    {title: 'Mass', value: res.mass},
                    {title: 'Hair color', value: res.hair_color},
                    {title: 'Skin color', value: res.weight},
                    {title: 'Eye color', value: res.eye_color},
                    {title: 'Birth year', value: res.birth_year},
                    {title: 'Gender', value: res.gender}
                ]);
                setPersonMain({
                    "name":res.name,
                    "image": getPeopleImg(id), 
                });
                
                res.films.length && setPersonFilms(res.films)
                setErrorApi(false);
            } else {
                setErrorApi(true);
            }
        })();
        
    }, []);
    
    return (
        <section className={styles.person__page}>
            <GoBack />
            
            {personMain && <h1>{personMain.name}</h1>}

            <div className={styles.person__info}>
                {personMain && <PersonCard person={personMain}/>}
                {personInfo && <PersonInfo personInfo={personInfo}/>}
                {personFilms && <PersonFilms films={personFilms}/>}
            </div>
        </section>
    )
}

export default withErrorApi(PersonPage)