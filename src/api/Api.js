import axios from 'axios'
const Api = axios.create({
    //set default endpoint API
    baseURL: 'https://zullkit-backend.buildwithangga.id/api'
})
export default Api