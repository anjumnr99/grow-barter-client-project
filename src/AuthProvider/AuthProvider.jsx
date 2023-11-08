import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";
import axios from "axios";


export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {

    const [user,setUser] = useState({})
    const [loading,setLoading] = useState(true)
    const googleProvider = new GoogleAuthProvider();
     
    // Google login
    const googleLogin = () =>{
        setLoading(true);
          return signInWithPopup(auth,googleProvider);
    };

    // email password sign up
    const signUpWithEmailAndPassword =(email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    };

    // email password login
    const loginWithEmailAndPassword=(email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    };


    useEffect(()=>{
        const unSubscriber = onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser);
            setLoading(false);

            if (currentUser) {
                const loggedUser = { email: currentUser.email };

                axios.post('https://grow-barter-server-project-gg7p782kd-anjus-projects-6a90d7b7.vercel.app/jwt', loggedUser, { withCredentials: true })
                    .then(res => {
                        console.log(res.data);
                    })
            }
        });

        return()=>{
            unSubscriber()
        }

    },[]);

    const logOut = () =>{
        setLoading(true);
        return signOut(auth);
    };

    // user updating

    const userUpdate =(name,image) =>{
        return(
            updateProfile(auth.currentUser,{
                displayName:name, photoURL:image
            })
        )
    }

   

    const authInfo = {
        googleLogin,
        signUpWithEmailAndPassword,
        loginWithEmailAndPassword,
        user,
        logOut,
        userUpdate,
        loading
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;