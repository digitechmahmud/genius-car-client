import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null);

const auth = getAuth(app);

const UserContext = ({children}) => {
    const [user, setUser] = useState({ displayName: 'Abid' });
    const [loading, setLoading] = useState(true);
    
    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    useEffect(() => {
       const unsubscribe= onAuthStateChanged(auth, currentUser => {
            console.log('State Change', currentUser);
           setUser(currentUser);
           setLoading(false);
        })
        return () => unsubscribe();
    },[])

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    };

    const signInGoogle = (googleProvider) => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    const authInfo = {
        user,
        signIn,
        createUser,
        logOut,
        signInGoogle,
        loading
    }
    
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
        
    );
};

export default UserContext;