import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useCallback } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import Posts from "../components/posts";


const Home = () => {

    
    const [user , loading] = useAuthState(auth)

    const handlerSingOut = useCallback (() => {
        signOut(auth) 
        .then(() => {
            console.log("Çıkış yapıldı")
        })
        .catch((e) => {
            console.log(e)
        })
    },[])

   

    if(loading){
        <div>Sayfa Yüklenirken Bekleyin.</div>
    }
   
    return (
        <div className="max-w-md mx-auto py-10">
             <div>
             <h1 className="text-3xl">AnaSayfa</h1>
             <hr />
                <p className="text-orange-500 underline">{user.displayName}</p>
                <p className="text-orange-500 underline">{user.email}</p>
             </div>
            <div>
            <button className="bg-orange-200 float-right" onClick={handlerSingOut}>Çıkış Yap</button>
            </div>

            <Posts/>
           
        </div>
    );
}

export default Home;