import axios from 'axios'

const request = axios.create({
    baseURL: import.meta.env.VITE_PUBLIC_SERVER_URL,
})

export default request
