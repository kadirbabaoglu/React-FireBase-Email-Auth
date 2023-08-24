import { Outlet , Navigate} from "react-router-dom";
import {useAuthState } from "react-firebase-hooks/auth"
import { auth } from "../firebase";


const MainLayout = ( ) => {
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


    if(!user){
       return <Navigate to="/login" replace/>
    }

    return ( 
    
        <Outlet/>
    
    );
}

export default MainLayout;