import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import GoogleLogin from 'react-google-login';
 

export default class Google extends Component {

    state = {
        isLoggedIn: false,
        userID: '',
        name: '',
        email: '',
        picture: ''
    }

    responseGoogle = response => {
        console.log(response);

        this.setState({
            isLoggedIn: true,
            name: response.name,
            email: response.email,
        });
    }

    render() {
        let googleContent;

        if(this.state.isLoggedIn) {
            googleContent = null;
        } else {
            googleContent = (
                <GoogleLogin
                clientId="29233619309-1qipdmn7a2b65bgvpo5fllafi823m14e.apps.googleusercontent.com"
                buttonText="Sign in with Google"
                onSuccess={this.responseGoogle}
                onFailure={this.responseGoogle}
                cookiePolicy={'single_host_origin'}
                />
            )
        }
    // document.getElementById('googleButton')

        return (
            <div>
                {googleContent}
            </div>
        )
        };
}