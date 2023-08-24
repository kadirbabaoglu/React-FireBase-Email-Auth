import { useCollectionData  } from "react-firebase-hooks/firestore";
import { collection } from "firebase/firestore";
import { db } from "../firebase";

const ref = collection(db , "post")

const Posts = () => {

    const [data , isloading] = useCollectionData(ref)
    
    if(isloading){
        <div>Sayfa Yüklenirken Bekleyin.</div>
    }
    

    console.log(data)
    return (
        <div className="max-w-md mx-auto py-10">
            {data?.map(p=>(
                <div id={p?.id}> 
                    <p>{p?.title}</p>
                    <p>{p?.desc}</p>
                    <p>{p?.createdBy}</p>
                    
                </div>
                
            ))}
        </div>
    );
}

export default Posts;