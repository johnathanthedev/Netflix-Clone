import { useAuth0 } from '@auth0/auth0-react';
import View from '../../interfaces/main/view'

const Dashboard: React.FunctionComponent<View> = (props) => {
  const LogoutButton = () => {
    const { logout} = useAuth0();
    return (
      <button onClick={() => logout({ returnTo: window.location.origin })}>
        Log Out
      </button>
    );  
  }

  return (
    <div>
      Dashboard
      <div>
        <LogoutButton/>
      </div>
    </div>
  )
}

export default Dashboard
