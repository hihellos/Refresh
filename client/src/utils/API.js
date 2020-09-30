import axios from 'axios';

export default {
    saveUser: function(userdata) {
        return axios.post("/signup", userdata);
    },
    
    getUser: function(userdata) {
        return axios.post("/login", userdata)
    },

    outUser: function() {
        return axios.get("/logout");
    },

    getJwt: function() {
        return axios.get("/jwt")
        .then(res => {
            console.log(res);
            return res;
        })
        .catch(err => console.log(err));
    },

    // //save selected rooms from survey
    // saveRooms: function(roomdata) {
    //     return axios.post("/api/home" + userId , rooms)
    // },

    getSeededRooms: function() {
        return axios.get("/api/home")
        .then(res => {
            console.log(res);
            return res;
        })
        .catch(err => console.log(err));

    },

    //getCard - gets aa the cards from user
    getAllRooms: function(userId) {
        return axios.get("/api/user/" + userId)
        .then(res => {
            // console.log(res);
            return res.data;
        })
        .catch(err => console.log(err));
    },

    checkUser: function(id) {
        return axios.get("api/user/" + id)
        .then(res => {
            console.log(res);
        })
    }

};