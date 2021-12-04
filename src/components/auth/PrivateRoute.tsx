import { useEffect } from "react";
import { Route, RouteProps, useHistory } from "react-router-dom";
import { useAuth0 } from '@auth0/auth0-react';
interface PrivateRouteProps extends RouteProps {
  component?: any;
}

const PrivateRoute = ({
  component: Component,
  path,
  ...rest
}: PrivateRouteProps) => {
  const { isLoading, isAuthenticated, user, getAccessTokenSilently } = useAuth0();
  let history = useHistory();

  useEffect(():any  => {
    function recursiveFunc() {
      if (!isLoading && !isAuthenticated) {
        console.log("Access denied")
        history.push("/");  
      }
    }
    recursiveFunc()
  }, [isAuthenticated, isLoading, history]);

  useEffect(() => {
    const getUserMetadata = async () => {
      // const token = await getAccessTokenSilently()
      // const auth0_user_obj = {
      //   user,
      //   client_access_token: token 
      // }
      // console.log(auth0_user_obj)
    }
    getUserMetadata()
  }, [user, getAccessTokenSilently])

  const render = (props: RouteProps) => {
    return (
      <Component {...props} /> 
    )
  }

  return <Route path={path} render={render} {...rest} />;
}

export default PrivateRoute