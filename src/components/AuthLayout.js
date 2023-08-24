import { Outlet, Navigate } from "react-router-dom";
import {useAuthState } from "react-firebase-hooks/auth"
import { auth } from "../firebase";


const AuthLayout = ( ) => {

    const [user, loading, error] = useAuthState(auth);

    if (loading) {
        return (
          <div>
            <p>Initialising User...</p>
          </div>
        );
      }
      if (error) {
        return (
          <div>
            <p>Error: {error}</p>
          </div>
        );
      }
    
    if(user){
     return <Navigate to="/" replace />
    }

    return <Outlet/>

}

export default AuthLayout;