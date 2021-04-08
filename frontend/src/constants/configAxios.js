import axios from 'axios'

export const baseURLAPI = "http://localhost:1337/"
const token = localStorage.getItem('token')

export default axios.create({
    baseURL : baseURLAPI,
    headers : {
        'Content-Type' : 'application/json',
        'Authorization' : 'Bearer '+token
    }
})