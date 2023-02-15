import axios from "axios"

axios.interceptors.request.use(request => {
    const log = {
        url: request.url,
        method: request.method
    }
    return request
})

axios.interceptors.response.use(response => {
    const log = {
        data: response.data,
        url: response.request?.url
    }
    return response
})
export default {
    BASE_URL: "https://api.extrazone.com/",
}