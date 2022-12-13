import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>

  <Auth0Provider
  domain="dev-fkya7b7jtvh06u06.us.auth0.com"
  clientId="cJ4R8UNOtsaeOR1fjNYEkLPRJlcRTFCQ"
  redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>
);
