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
            // console.log(res);
            return res;
        })
        .catch(err => console.log(err));
    },

    saveUserRooms: function(id, query) {
        console.log('saveUserRooms', query);
        return axios.post("/api/home/rooms/" + id, query)
        // .then(res => {
        //     console.log("saveUserRooms returned", res);
        //     return res;
        // })
        // .catch(err => console.log(err))
    },

    getSeededRooms: function() {
        return axios.get("/api/home")
        .then(res => {
            // console.log(res);
            return res;
        })
        .catch(err => console.log(err));
    },

    // NOT IN USE
    // getSelectedRooms: function(query) {
    //     console.log(query)
    //     axios.get("/api/home/select", query)
    //     .then(res => {
    //         console.log(res);
    //     })
    //     .catch((err) => console.log(err));
    // },

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