import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';
// import API from '../../utils/API';
import "./style.css"

export default class Facebook extends Component {

    state = {
        isLoggedIn: false,
        userID: '',
        name: '',
        email: '',
        picture: ''
    }

    responseFacebook = response => {
        console.log(response);

        this.setState({
            isLoggedIn: true,
            userID: response.userID,
            name: response.name,
            email: response.email,
            picture: response.picture.data.url
        });

        // API call to post name & email to Users
        // API.saveUser
    }
    
    componentClicked = (e) => {
        console.log('clicked');
    }

    render() {
        let fbContent;

        // if(this.state.isLoggedIn) {
        //     fbContent = null;
        // } else {
            fbContent = (
                <FacebookLogin
                appId="363512615022429"
                fields="name,email,picture"
                onClick={this.componentClicked}
                callback={this.responseFacebook}
                cssClass="btnFacebook"
                icon="fa-facebook"
                textButton = "&nbsp;&nbsp;Sign In with Facebook"
                />
            )
        // }

        return (
            <div>
                {fbContent}
            </div>
        )
    }
}
