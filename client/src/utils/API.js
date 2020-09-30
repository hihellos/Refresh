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

    //save selected rooms from survey
    saveRooms: function(roomdata) {
        return axios.post("/room", roomdata)
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

    postRooms: function(userId, rooms) {
        return axios.post("/api/home" + userId , rooms)
    },

    //deleteCard - deletes card from homepage with given id
    // deleteCard: function(id) {
    //     return axios.delete("/api/home" + id)
    // },

    checkUser: function(id) {
        return axios.get("api/user/" + id)
        .then(res => {
            console.log(res);
        })
    }

    //saveUniqueCard - saves a card created by the user - not sure if we want to give the user this choice yet 

};