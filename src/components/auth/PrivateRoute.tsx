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
  // const { isLoading, isAuthenticated, user, getAccessTokenSilently } = useAuth0();
  const { isLoading, isAuthenticated } = useAuth0();
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

  // useEffect(() => {
  //   const getUserMetadata = async () => {
  //     const token = await getAccessTokenSilently()
      // const auth0_user_obj = {
      //   user,
        // client_access_token: token 
      // }

      // console.log(auth0_user_obj)
    // }
    // getUserMetadata()
  // }, [user, getAccessTokenSilently])

  // useEffect(() => {
  //   fetch(`${process.env.REACT_APP_AUTH0_NETFLIX_CLONE_TOKEN_URL}`, {
  //     method: "POST",
  //     // mode: 'no-cors', 
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify({
  //       "client_id":`${process.env.REACT_APP_AUTH0_NETFLIX_CLONE_API_CLIENT_ID}`,
  //       "client_secret":`${process.env.REACT_APP_AUTH0_NETFLIX_CLONE_API_CLIENT_SECRET}`,
  //       "audience":`${process.env.REACT_APP_AUTH0_NETFLIX_CLONE_AUDIENCE}`,
  //       "grant_type":"client_credentials"
  //     })
  //   }).then(response => response.json()).then(data => {
  //     console.log(data)
  //   })
  // }, [])

  const render = (props: RouteProps) => {
    return (
      <Component {...props} /> 
    )
  }

  return <Route path={path} render={render} {...rest} />;
}

export default PrivateRoute