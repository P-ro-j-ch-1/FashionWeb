import axios from "../axios";

//==================USER==========================//

const createNewUser = (data) => {
    return axios.post(`/api/create-new-user`, data)

}


const handleLoginService = (data) => {
    return axios.post(`/api/login`, data)

}
const checkPhonenumberEmail = (data) => {
    return axios.get(`/api/check-phonenumber-email?phonenumber=${data.phonenumber}&email=${data.email}`)

}

export {
    createNewUser, handleLoginService,
    checkPhonenumberEmail
}