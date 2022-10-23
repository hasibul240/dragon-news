import React from 'react';
import { createUserWithEmailAndPassword, getAuth, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";
import app from '../../firebase/firebase.init';

export const AuthContext = React.createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {

    const [user, setUser] = React.useState(null);
    const [loading, set_loading] = React.useState(true);
    
    const provider_login = (provider) => {
        set_loading(true);
        return signInWithPopup(auth, provider);
    }

    const create_user = (email, password) => {
        set_loading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const sign_in = (email, password) => {
        set_loading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const update_user_profile = (profile) => {
        set_loading(true);
        return updateProfile(auth.currentUser, profile);
    }

    const varify_email = () => {
        return sendEmailVerification(auth.currentUser);
    }

    const log_out = () => {
        set_loading(true);
        return auth.signOut();
    }

    React.useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            if (null || user.emailVerified) {
                setUser(user);
                
            }
            set_loading(false);
        })
        return () => unsubscribe();
    },[])
    
    const auth_info = {
        user, loading, varify_email,
        update_user_profile, provider_login,
        create_user, sign_in, log_out
    };

    return (
        <AuthContext.Provider value={auth_info}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;