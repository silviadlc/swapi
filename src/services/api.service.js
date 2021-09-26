import axios from 'axios'


const ApiService = {

    _401interceptor: null,

    init(baseURL) {
        axios.defaults.baseURL = baseURL;
    },

    get(resource) {
        return axios.get(resource)
    },

}

export default ApiService;