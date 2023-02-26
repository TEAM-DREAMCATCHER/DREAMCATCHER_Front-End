import request from '@/apis'

const GET_POST_LIST_URL =
    'https://bsqgqqvcb3u5zzivsn77dprh6y0fqoml.lambda-url.ap-northeast-2.on.aws'

export const testAPI = async () => {
    const response = await request.get(GET_POST_LIST_URL)
    console.log('response: ', response)
}
