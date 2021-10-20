import { useEffect, useState } from 'react';
import { getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut } from "firebase/auth";
import initializeFirebase from '../Firebase/firebase.init';

initializeFirebase();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const auth = getAuth();

    const googleProvider = new GoogleAuthProvider();

    const signInUsingGoogle = () => {
        signInWithPopup(auth, googleProvider)
        .then(result => {
            console.log(result.user);
        });
    }

    // Observe User
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) setUser(user);
          });
    }, [auth]);


    const logOut = () => {
        signOut(auth).then(() => {
            setUser({});
        })
    }
    

    return { user, signInUsingGoogle, logOut, }

    
};

export default useFirebase;