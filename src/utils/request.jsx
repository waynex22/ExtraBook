import axios from  'axios'

const request = axios.create({
    baseURL: process.env.REACT_APP_API_ENDPOINT
})

export const get = async (path, options ={}) => {
    const response = await request.get(path, options)
    return response.data
}
export const post = async ( path , options = {}) => {
    const response = await request.post(path , options)
    return response
}

export default request