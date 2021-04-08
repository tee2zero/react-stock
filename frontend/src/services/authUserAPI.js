/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios'

const baseURLAPI = 'http://localhost:1337/'

const authLogin = (data) => {
    return axios.post('auth/local',data,{
        baseURL : baseURLAPI,
        headers : {
            'Content-Type' : 'application/json'
        }
    })
}

export default {authLogin}
