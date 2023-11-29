import { 
    HTTPS, SWAPI_ROOT, SWAPI_PEOPLE, 
    GUIDE_IMG_PERSON, GUIDE_IMG_EXTENSION,
    SWAPI_PARAM_PAGE
} from "@constants/api";

const getId = (url, category) => {
    const id = url
        .replace(HTTPS + SWAPI_ROOT + category, '')
        .replace(/\//g, '')
    return id;
}

export const getPeopleId = (url) => getId(url, SWAPI_PEOPLE)

export const getPeopleImg = (id) => {
    return GUIDE_IMG_PERSON + id + GUIDE_IMG_EXTENSION
}

export const getPeoplePageId = (url) => {
    const pos = url.lastIndexOf(SWAPI_PARAM_PAGE);
    const pageId = url.slice(pos + SWAPI_PARAM_PAGE.length)
    return parseInt(pageId);
}