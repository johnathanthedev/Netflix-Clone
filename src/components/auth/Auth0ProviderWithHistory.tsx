import { PropsWithChildren } from 'react';
import { AppState, Auth0Provider } from '@auth0/auth0-react';
import { useHistory } from 'react-router';
import { auth0_domain, auth0_client_id, auth0_audience } from '../../config/constants/main'

const AuthProvider = (props: PropsWithChildren<{}>) => {
  const history = useHistory();

  const onRedirectCallback = (appState: AppState) => {
    history.push(appState?.returnTo || window.location.pathname);
  };
  
  return (
    <Auth0Provider
      domain={auth0_domain}
      clientId={auth0_client_id}
      redirectUri={`${window.location.origin}/dashboard`}
      onRedirectCallback={onRedirectCallback}
      audience={auth0_audience}
    >
      {props.children}
    </Auth0Provider>
  );
};

export default AuthProvider;
