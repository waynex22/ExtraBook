import * as request from '../utils/request'

export const search = async (debounce) => {
    try {
        const res = await request.get(`product/search?query=${debounce}`)
        return res.data
    } catch (error) {
        console.log(error);
    }
}