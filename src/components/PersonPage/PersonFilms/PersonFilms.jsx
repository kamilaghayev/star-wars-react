import { useState, useEffect } from "react";
import styles from "./PersonFilms.module.css";
import { getRequestOnArray } from "@utils/network";

const PersonFilms = ({ films }) => {
    const [allFilms, setAllFilms ] = useState([]);
    useEffect(()=> {
        (async () => {
            const response = await getRequestOnArray(films);
            
            if (response) {
                setAllFilms(response);
            }
        })();
    }, [])

    return (
        <section className={styles.films__list}>
            <ul>
                {allFilms
                    .sort((a, b) => a - b)
                    .map((film, index) =>{
                        return (
                        <li key={index}>
                            <a href="#">
                                <span className={styles.films__episode}>episode {film.episode_id}: </span>
                                <span>{film.title}</span>
                            </a>
                        </li>)
                    })
                }
            </ul>
        </section>
    )
}

export default PersonFilms