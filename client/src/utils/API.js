import axios from 'axios';

export default {
    saveUser: function(userdata) {
        return axios.post("/signup", userdata);
    },
    
    getUser: function(userdata) {
        return axios.post("/login", userdata)
    },

    //getCard - gets the card the user selects with given id
    getCard: function(id) {
        return axios.get("/api/roomCard" + id)
    },

    //deleteCard - deletes card from homepage with given id
    deleteCard: function(id) {
        return axios.delete("/api/roomCard" + id)
    },

    //saveUniqueCard - saves a card created by the user - not sure if we want to give the user this choice yet 

};