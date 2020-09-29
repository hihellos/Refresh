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

    //getCard - gets aa the cards from user
    getAllRooms: function() {
        return axios.get("/api/user")
    },

    postRooms: function(rooms) {
        return axios.post("/api/home", rooms)
    },

    //deleteCard - deletes card from homepage with given id
    deleteCard: function(id) {
        return axios.delete("/api/home" + id)
    },

    //saveUniqueCard - saves a card created by the user - not sure if we want to give the user this choice yet 

};