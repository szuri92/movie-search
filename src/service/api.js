import Axios from 'axios'

const apiKey = process.env.REACT_APP_API_KEY
const basePath = process.env.REACT_APP_BASE_PATH

const axios = Axios.create({
    baseURL: basePath,
    header: {
        'Authorization': `Bearer ${apiKey}`
    }
})

const makeUrl = (url) => `${url}&api_key=${apiKey}`

export const getMovies = async ({query, page = 1} = {}) => {
    try {
        const request = await axios.get(makeUrl(`/search/movie?query=${query}&page=${page}`))
        return request.data.results
    } catch (error) {
        console.log({error})
    }
}

