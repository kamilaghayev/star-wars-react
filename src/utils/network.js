
export const getApiResource = async (url) => {
    try {
        const res = await fetch(url)
        return await res.json()
    } catch (err) {
        console.error(err.message);
        return false;
    }
}
