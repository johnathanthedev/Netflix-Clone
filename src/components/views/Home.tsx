import View from '../../interfaces/main/view';
import { useAuth0 } from "@auth0/auth0-react";

const Home: React.FunctionComponent<View> = (props) => {
  const LoginButton = () => {
    const { loginWithRedirect } = useAuth0();
  
    return <button onClick={() => loginWithRedirect()}>Log In</button>;
  };

  return (
    <div>
      Home
      <div>
        <LoginButton/>
      </div>
    </div>
  )
}

export default Home