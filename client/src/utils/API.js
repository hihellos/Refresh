import axios from 'axios';

export default {
    // After sign-up, saves an user to db. 
    saveUser: function(userdata) {
        return axios.post("/signup", userdata)
        .then(res => {
            return res;
        })
        .catch(err => {
            return err;
        })
    },
    
    // After log-in, it will check this user from the db.
    getUser: function(userdata) {
        return axios.post("/login", userdata)
        .then(res => {
            return res;
        })
        .catch(err => {
            return err;
        });
    },

    // After log-out, it will redirect to the login-page.
    outUser: function() {
        return axios.get("/logout");
    },

    // It will get tokens from back-end, and gives decodedToken back to front-end.
    getJwt: function() {
        return axios.get("/jwt")
        .then(res => {
            return res;
        })
        .catch(err => console.log(err));
    },

    // After user takes survey, it will save rooms in corresponding user's array
    saveUserRooms: function(id, query) {
        return axios.post("/api/home/rooms/" + id, query)
    },

    // From survey pages, It will get all the preset rooms.
    getSeededRooms: function() {
        return axios.get("/api/home")
    },

    // At home page, It will get all rooms whatever user had.
    getAllRooms: function(userId) {
        return axios.get("/api/user/" + userId)
    },

    // Adding a tasks from each rooms.
    addTask: function(id, data) {
        return axios.put("/api/home/tasks/" + id, data)
        .then(res => {
            console.log("result: ", res);
        })
        .catch(res => {
            console.log("error ", res);
        })
    },

    // Deleteing a task from each rooms.
    deleteTask: function(room, task) {
        console.log('API', room, task)
        return axios.post("/api/home/tasks/" + room, task)
        .then(res => {
            console.log('result', res);
        })
        .catch(err => {
            console.log('error', err);
        })
    },

    // Updating a task from each rooms.
    updateTask: function(room, obj) {
        return axios.put("/api/home/task/" + room, obj)
        .then(res => {
            console.log('result', res);
        })
        .catch(err => {
            console.log('error', err);
        })
    }

};