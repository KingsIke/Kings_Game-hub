import axios from 'axios'

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "1b236806b93949f7b177607165365d4d"
    },
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
    },
})
