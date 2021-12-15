import { useNavigate } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";

const AuthProvider = ({ children }) => {
  const navigate = useNavigate();

  const onRedirectCallback = (appState) => {
    navigate(appState?.returnTo || window.location.pathname);
  };

  return (
    <Auth0Provider
      domain={process.env.REACT_APP_AUTH0_DOMAIN}
      clientId={process.env.REACT_APP_AUTH0_CLIENT_ID}
      redirectUri={`${window.location.origin}/browse`}
      onRedirectCallback={onRedirectCallback}
      audience={process.env.REACT_APP_AUTH0_NETFLIX_CLONE_AUDIENCE}
    >
      {children}
    </Auth0Provider>
  );
};

export default AuthProvider;
