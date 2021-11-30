import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Auth0Provider } from "@auth0/auth0-react";
import { auth0_domain, auth0_client_id } from './config/constants/main'

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain={auth0_domain}
      clientId={auth0_client_id}
      redirectUri={`${window.location.origin}/dashboard`}
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById('root')
);