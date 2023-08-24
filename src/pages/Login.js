import { useState , useCallback } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { Link } from 'react-router-dom'

const Login = () => {

    const[email , setEmail] = useState("");
    const[password , setPassword] = useState("");

    const submitHandler = useCallback((e) => {
        e.preventDefault();
        
        if(!email || !password){
            return
        }

        signInWithEmailAndPassword(auth , email , password)
        .then(() => {
            console.log("Giriş yapildi")
        })
        .catch((e) => {
            console.log(e)
        })

    },[email,password])

    return (
        <div className="max-w-md mx-auto py-10">
            <h1 className="text-3xl ">Login Formu</h1>
            <form onSubmit={submitHandler} className="flex flex-col gap-2 mt-7">
                
                <input type="email" 
                placeholder="Email Adresi" 
                className="p-4 bg-gray-100 rounded-md"
                value={email}
                onChange={(e) => setEmail(e.currentTarget.value)}
                />

                <input type="password" 
                placeholder="Şifre" 
                className="p-4 bg-gray-100 rounded-md" 
                value={password}
                onChange={(e ) => setPassword(e.currentTarget.value)}
                />

                <input type="submit" 
                placeholder="Email Adresi" 
                className="p-4 bg-green-300 rounded-md" 
                value="Giriş"
                />

                <div>
                <Link className="border border-red-600 rounded-md bg-red-300" to="/signup">Kullanıcı Hesabım Yok</Link>
                <Link className="float-right border border-red-600 rounded-md bg-red-300" to="/forget-password">Sifremi unuttum</Link>
                </div>
            </form>
        </div>
    );
}

export default Login;