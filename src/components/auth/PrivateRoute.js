import { useNavigate, Routes } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";

function PrivateRoute({ element, children }) {
  const { isLoading, isAuthenticated } = useAuth0();
  const navigate = useNavigate();

  useEffect(() => {
    function recursiveFunc() {
      if (!isLoading && !isAuthenticated) {
        console.log("Access denied");
        navigate("/");
      }
    }
    recursiveFunc();
  }, [isAuthenticated, isLoading, navigate]);

  return children;
}

export default PrivateRoute;
