import axios from 'axios'

const request = axios.create()

request.interceptors.request.use(
    function (config) {
        const access_token = localStorage.getItem('access-token')

        if (access_token === null) {
            alert('로그인이 필요합니다. ')
            throw new Error('access token이 없습니다.')
        }

        config.headers['Content-Type'] = 'application/json'
        config.headers.authorization = `Bearer ${access_token}`
        return config
    },
    async function (error) {
        return await Promise.reject(error)
    }
)

export default request
