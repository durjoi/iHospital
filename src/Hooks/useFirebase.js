import { useEffect, useState } from 'react';
import { getAuth, updateProfile, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, createUserWithEmailAndPassword, signOut, signInWithEmailAndPassword } from "firebase/auth";
import initializeFirebase from '../Firebase/firebase.init';

initializeFirebase();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);

    const auth = getAuth();

    const googleProvider = new GoogleAuthProvider();


    const signUpUsingEmail = (email, password, name) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;

                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {
                    console.log('profile Updated');
                })


                // ...
            })
    }


    const signInUsingEmail = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)

    }

    const signInUsingGoogle = () => {
        return signInWithPopup(auth, googleProvider)
    }

    // Observe User
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            } else {

            };
            setLoading(false);
        });
    }, [auth]);


    const logOut = () => {
        signOut(auth).then(() => {
                setUser({});
            })
            .finally(() => {
                setLoading(false);
            })
    }


    return { user, signInUsingGoogle, logOut, signUpUsingEmail, signInUsingEmail, loading }


};

export default useFirebase;