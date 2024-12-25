/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import { auth } from "../Firebase/Firebase.config";
import axios from "axios";


//----------------the context here------------------
export const AuthContext = createContext()
const provider = new GoogleAuthProvider()

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    // console.log(user)
    const [loading, setLoading] = useState(true)

    //-------- create user with email-password------------
    const CreateUserByMailPass = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    //--------------------------Login user with email password-------
    const LoginUser = (email, password) => {

        return signInWithEmailAndPassword(auth, email, password)
    }

    //-----------------------log in with google----------
    const GoogleLogin = () => {
        return signInWithPopup(auth, provider)
    }


    //-----------------------user sign out----------------
    const UserSignOut = () => {
        signOut(auth)
            .then(() => {
                // Sign-out successful.
            })
            .catch((error) => {
                // An error happened.
                // console.log(error)
            });
    }

    //--------------------updating Profile------------------
    const updatedProfile = (updatedData) => {
        return updateProfile(auth.currentUser, updatedData)
    }

    //-----------------------------------forget passWord------------------------
    const [pEmail, setPEmail] = useState(null)

    //------------value here--------------------------
    const authInfo = {
        user, setUser,
        CreateUserByMailPass,
        LoginUser,
        UserSignOut,
        loading,
        updatedProfile,
        GoogleLogin,
        pEmail, setPEmail
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            console.log('state captured', currentUser?.email);
            setLoading(false)

            // if (currentUser?.email) {
            //     const user = { email: currentUser?.email };

            //     axios.post('https://job-portal-server-one-alpha.vercel.app/jwt', user, { withCredentials: true })
            //         .then(res => {
            //             // console.log('login token', res.data);
            //             setLoading(false);
            //         })

            // }
            // else {
            //     axios.post('https://job-portal-server-one-alpha.vercel.app/logout', {}, {
            //         withCredentials: true
            //     })
            //         .then(res => {
            //             // console.log('logout', res.data);
            //             setLoading(false);
            //         })
            // }
        })

        return () => {
            unsubscribe();
        }
    }, [])

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;