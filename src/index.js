import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Auth0Login from "./Auth0Login";
import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from '@auth0/auth0-react';
import appConfig from './config.json';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#0b345a'
        },
        secondary: {
            main: '#22c4d6'
        }
    }
});

ReactDOM.render(
    <Auth0Provider
        domain={appConfig.auth0.domain}
        clientId={appConfig.auth0.clientId}
        redirectUri={window.location.origin}
    >
        <React.StrictMode>
            <MuiThemeProvider theme={theme}>
                <Auth0Login />
            </MuiThemeProvider>
        </React.StrictMode>
    </Auth0Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
