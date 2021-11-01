import { getAuth, signInWithPopup, GoogleAuthProvider,signOut,onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Pages/Firebase/firebase.initialize";

initializeAuthentication();
const useFirebase = () => {
    const [user,setUsers] = useState({});
    const [isLoading,setLoading] = useState(true);

    
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const signInUsingGoogle = () => {
       setLoading(true);
       return signInWithPopup(auth,googleProvider)
        .then(result=>{
            console.log(result);
            setUsers(result.user);
        })
      .finally(()=>setLoading(false));
     
        
    }
    useEffect(()=>{
      const unsubscribed = onAuthStateChanged(auth,user=>{
            if(user){
                setUsers(user);
            }
            else{setUsers({})}
            setLoading(false);
        });
       return () => unsubscribed;
    },[])
    const logOut = () => {
        setLoading(true);
        signOut(auth)
        .then(()=>{ })
        .finally(()=>{
           setLoading(false);
        });
} 
   
    return{
user,
signInUsingGoogle,
logOut,
isLoading
    }
}
export default useFirebase;