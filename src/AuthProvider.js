import { auth } from "./firebase"
import { createContext, useEffect, useState } from "react"

export const AuthContext = createContext();

let AuthProvider = ({ children }) => {
    let [currUser, setuser] = useState({});
    let [loading, setLoading] = useState(true)

    useEffect(() => {
        let unsub = auth.onAuthStateChanged((user) => {
            if(user){
                let { displayName } = user;
                setuser({displayName});
            }
            else{
                setuser(user);
            }
            setLoading(false);
        })
        return()=>{
            unsub();
        }
    }, [])

    return(
        <AuthContext.Provider value={currUser}>
            {!loading && children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;