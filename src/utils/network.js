/**
 * 
 * @param {String} url - URL to request from the server
 * @returns {Promise} - Promise for request response
 */
export const getApiResource = async (url) => {
    try {
        const res = await fetch(url);
        return await res.json()
    } catch (err) {
        console.error(err.message);
        return false;
    }
}

export const getRequestOnArray = async(urls) => {
    const res = await Promise.all(urls.map(url => getApiResource(url)))

    return res;
}