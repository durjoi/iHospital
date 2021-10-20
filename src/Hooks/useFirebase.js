import { useEffect, useState } from 'react';
import { getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, createUserWithEmailAndPassword, signOut, signInWithEmailAndPassword } from "firebase/auth";
import initializeFirebase from '../Firebase/firebase.init';

initializeFirebase();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const auth = getAuth();

    const googleProvider = new GoogleAuthProvider();


    const signUpUsingEmail = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(user);
            // ...
        })
    }

    const signInUsingEmail = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // ...
        }).catch((error) => {
            console.log(error);
          });
    }

    const signInUsingGoogle = () => {
        signInWithPopup(auth, googleProvider)
        .then(result => {
            console.log(result.user);
        }).catch(function (error) {
            console.error(error);
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
    

    return { user, signInUsingGoogle, logOut, signUpUsingEmail, signInUsingEmail}

    
};

export default useFirebase;