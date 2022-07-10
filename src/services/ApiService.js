import axios from "axios";

const instance = axios.create({
    baseURL: "http://localhost:8080",
    headers:{
        'Access-Control-Allow-Origin':'*',
        'Content-Type': 'application/json;charset=UTF-8',
        'Access-Control-Allow-Credentials': 'true',
    }
});

class ApiService {
    constructor(apiUrl) {
        this.apiUrl = apiUrl
    }

    put(url, objeto) {
        return instance.put(`${this.apiUrl}${url}`, objeto);
    }

    post(url, objeto) {
        return instance.post(`${this.apiUrl}${url}`, objeto);
    }

    get(url) {
        return instance.get(`${this.apiUrl}${url}`);
    }

    delete(url) {
        return instance.delete(`${this.apiUrl}${url}`);
    }
}

export default ApiService;