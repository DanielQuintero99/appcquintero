import React,{createContext,useEffect,useState} from 'react'
import { 
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut
} from 'firebase/auth'
import { auth } from '../index'

export const LoginContext=createContext()

const LogContext = ({children}) => {
    const [user, setUser] = useState(null);
    const signUp =(email,password)=>createUserWithEmailAndPassword(auth,email,password)
    const logIn=(email,password)=>signInWithEmailAndPassword(auth,email,password)
    useEffect(() => {
        onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser)
        })
    }, []);
    const logOut=()=> signOut(auth)
  return (
    <LoginContext.Provider value={{signUp,logIn,user,logOut}}>
        {children}
    </LoginContext.Provider>
  )
}

export default LogContext