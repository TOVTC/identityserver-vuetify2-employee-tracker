import axios from 'axios'

const apiClient = axios.create({
    baseURL: 'https://localhost:6001/api',
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    }
})

// mgr.getUser().then(function (user) {
//     var url = "https://localhost:6001/identity";

//     var xhr = new XMLHttpRequest();
//     xhr.open("GET", url);
//     xhr.onload = function () {
//         log(xhr.status, JSON.parse(xhr.responseText));
//     }
//     xhr.setRequestHeader("Authorization", "Bearer " + user.access_token);
//     xhr.send();
// });

export default {
    apiClient,
    async getDepartments() {
        try {
            return await apiClient.get(`/tracker/departments`);
        }
        catch (err) {
            console.log(err)
        }
    },
    async getRoles() {
        try {
            return await apiClient.get(`/tracker/roles`);
        }
        catch (err) {
            console.log(err)
        }
    },
    async getEmployees() {
        try {
            return await apiClient.get(`/tracker/employees`);
        }
        catch (err) {
            console.log(err)
        }
    },
    async getAbout() {
        try {
            return await apiClient.get(`/about`);
        }
        catch (err) {
            console.log(err)
        }
    }
}