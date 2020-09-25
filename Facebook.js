import { response } from 'express';
import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';

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
    }
    
    componentClicked = () => console.log('clicked');

    render() {
        let fbContent;

        if(this.state.isLoggedIn) {
            fbContent = (
                <div></div>
            );
        } else {
            fbContent = (
                <FacebookLogin
                appId="363512615022429"
                autoLoad={true}
                fields="name,email,picture"
                onClick={this.componentClicked}
                callback={this.responseFacebook}
              />
            )
        }

        return (
            <div>
                {fbContent}
            </div>
        )
    }
}
