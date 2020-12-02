import * as React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button, Container } from "@material-ui/core";
import App from "./App";
import Loader from "./Loader";
import logo from './images/logo.png';

const Auth0Login = () => {
    const {
        isLoading,
        isAuthenticated,
        error,
        loginWithRedirect,
    } = useAuth0();

    if (isLoading) {
        return (
            <Loader />
        );
    }

    if (error) {
        // TODO: Check error code - if it's a 401, it means they haven't verified email address - show friendly error
        return (
            <div>
                Oops... {error.message} <br />
                Please check you've verified your account.
            </div>
        );
    }

    if (isAuthenticated) {
        return (
            <App />
        );
    } else {
        return (
            <div className="login" style={{ height: '100%', width: '100%', justifyContent: "center", alignItems: "center", textAlign: "center", backgroundColor: "#0b345a" }}>
                <img style={{ width: "400px" }} src={logo} alt="Logo" />

                <p>To access the Shopping List app, please login:</p>

                <Button variant="contained" onClick={loginWithRedirect}>Login</Button>
            </div>
        );
    }
}

export default Auth0Login;