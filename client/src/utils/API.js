import axios from 'axios';

export default {
    saveUser: function(userdata) {
        return axios.post("/signup", userdata);
    },
    
    getUser: function(userdata) {
        return axios.post("/login", userdata)
    },

    outUser: function() {
        return axios.get("/logout")
    }
};