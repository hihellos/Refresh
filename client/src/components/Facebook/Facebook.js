import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';
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
    }
    
    componentClicked = (e) => {
        console.log('clicked');
    }

    render() {
        let fbContent;

        if(this.state.isLoggedIn) {
            fbContent = null;
        } else {
            fbContent = (
                <FacebookLogin
                appId="363512615022429"
                autoLoad={false}
                fields="name,email,picture"
                onClick={this.componentClicked}
                callback={this.responseFacebook}
                cssClass="btnFacebook"
                icon="fa-facebook"
                textButton = "&nbsp;&nbsp;Sign In with Facebook"
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
