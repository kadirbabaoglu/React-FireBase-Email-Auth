import { useState , useCallback } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../firebase";

const ForgetPassword = ( ) => {

    const [email , setEmail] = useState("");

    const submitHandler = useCallback ((e) => {
        e.preventDefault();
        
        if(!email){
            return;
        }

        sendPasswordResetEmail(auth , email)
        .then(() => {
            console.log("mail gönderildi")
        })
        .catch((e)=>{
            console.log(e)
        })

    },[email]);
    
    return (

        <div className="max-w-md mx-auto py-10">
            <h1 className="text-3xl">Şifremi Unuttum</h1>

            <form onSubmit={submitHandler} className="flex flex-col gap-2 mt-7">
               
                <input 
                type="email" 
                placeholder="Email Adresi" 
                className="p-4 bg-gray-100 rounded-md"
                value={email}
                onChange={(e) => setEmail(e.currentTarget.value)}
                />

                <input type="submit" className="p-4 bg-red-100 rounded-md" value="Şifremi unuttum" />

            </form>
        </div>

    
        );
}

export default ForgetPassword