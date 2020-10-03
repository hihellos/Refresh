import axios from 'axios';

export default {
    saveUser: function(userdata) {
        return axios.post("/signup", userdata)
        .then(res => {
            return res;
        })
        .catch(err => {
            return err;
        })
    },
    
    getUser: function(userdata) {
        return axios.post("/login", userdata)
        .then(res => {
            return res;
        })
        .catch(err => {
            return err;
        });
    },

    outUser: function() {
        return axios.get("/logout");
    },

    getJwt: function() {
        return axios.get("/jwt")
        .then(res => {
            return res;
        })
        .catch(err => console.log(err));
    },

    saveUserRooms: function(id, query) {
        return axios.post("/api/home/rooms/" + id, query)
    },

    getSeededRooms: function() {
        return axios.get("/api/home")
    },

    //getCard - gets aa the cards from user
    getAllRooms: function(userId) {
        return axios.get("/api/user/" + userId)
    },

    checkUser: function(id) {
        return axios.get("api/user/" + id)
        .then(res => {
            console.log(res);
        })
    },

    addTask: function(id, data) {
        return axios.put("/api/home/tasks/" + id, data)
        .then(res => {
            console.log("result: ", res);
        })
        .catch(res => {
            console.log("error ", res);
        })
    },

    deleteTask: function(room, task) {
        console.log('API', room, task)
        return axios.post("/api/home/tasks/" + room, task)
        .then(res => {
            console.log('result', res);
        })
        .catch(err => {
            console.log('error', err);
        })
    }

};