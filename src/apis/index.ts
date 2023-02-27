import { checkAccessToken } from '@/apis/utlis'
import axios from 'axios'

const request = axios.create()

request.interceptors.request.use(
    function (config) {
        return checkAccessToken(config)
    },
    async function (error) {
        return await Promise.reject(error)
    }
)

export default request
