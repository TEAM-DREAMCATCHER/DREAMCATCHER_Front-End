import { InternalAxiosRequestConfig } from 'axios'

const checkAccessToken = (config: InternalAxiosRequestConfig<any>) => {
    const access_token = localStorage.getItem('access-token')

    if (access_token === null) {
        alert('로그인이 필요합니다. ')
        throw new Error('access token이 없습니다.')
    }

    config.headers['Content-Type'] = 'application/json'
    config.headers.authorization = `Bearer ${access_token}`
    return config
}

export { checkAccessToken }
