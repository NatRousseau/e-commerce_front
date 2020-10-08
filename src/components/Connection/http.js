import Vue from "vue"
import axios from "axios"
// import store from "../../store/store";

// axios.interceptors.request.use(request => {
//     const jwtToken = store.getters["user/jwtToken"]
//     if (jwtToken) {
//         request.headers["Authorization"] = 'Bearer' +  jwtToken
//     }
//     return request
// })


const instance = axios.create({
    baseURL: 'https://localhost:8000/api/'
})

Vue.prototype.$axios = instance


export {
    instance,
}