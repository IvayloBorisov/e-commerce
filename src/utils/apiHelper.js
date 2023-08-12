export const dataHelper = (data) => {
    if (typeof data !== 'object' &&  !data.length) {
        throw new Error('Invalid data');
    }
    const normalizedData = data.reduce((acc, cur) => {
        return acc.concat(cur.data.products)
    }, []);

    return normalizedData;
}