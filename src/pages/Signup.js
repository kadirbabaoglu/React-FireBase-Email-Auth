import {useState , useCallback} from "react";
import {createUserWithEmailAndPassword , updateProfile} from 'firebase/auth'
import { auth } from "../firebase";
import { Link } from "react-router-dom";


const Signup = () => {

const [name , setName] = useState("")
const [email , setEmail] = useState("");
const [password , setPassword] = useState("");

const handleForm = useCallback ((e) =>{
    
        e.preventDefault()
       
        if(!email || !password){
            return;
        }
        createUserWithEmailAndPassword (auth,email,password)
        .then((auth) => {
            console.log(name)
            updateProfile(auth.user , {displayName : name})
            console.log("işlem başarili")
            
        })
        .catch((e) => {
            console.log(e)
        })
    
},[name , email,password]);

    return (
        <div className="max-w-md mx-auto py-10">
            <h1 className="text-2xl">Giriş Formu</h1>
            <form onSubmit={handleForm} className="flex flex-col gap-2 mt-7">
                
                <input type="text" 
                placeholder="Adınız" 
                className="p-4 bg-gray-100 rounded-md" 
                value={name}
                onChange={ (e) => setName(e.currentTarget.value)}
                />

                <input type="email" 
                placeholder="Email Adresi" 
                className="p-4 bg-gray-100 rounded-md" 
                value={email}
                onChange={ (e) => setEmail(e.currentTarget.value)}
                />
                
                <input type="password" 
                placeholder="Şifre" 
                className="p-4 bg-gray-100 rounded-md" 
                value={password}
                onChange={(e) => setPassword(e.currentTarget.value)}
                />
                
                <input type="submit" 
                placeholder="Email Adresi" 
                className="p-4 bg-blue-300 rounded-md" 
                value="Kayıt Ol"
                />
                
                <div>
                <Link className="border border-red-600 rounded-md bg-red-300" to="/login">Zaten Bir Kullanıcı Hesabım var</Link>
                </div>
            </form>
        </div>
    );
}

export default Signup;