import axios from 'axios';

export default {
    saveUser: function(userdata) {
        return axios.post("/api/user", userdata);
    }
};