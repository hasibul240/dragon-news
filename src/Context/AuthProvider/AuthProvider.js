import React from 'react';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import app from '../../firebase/firebase.init';

export const AuthContext = React.createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {

    const [user, setUser] = React.useState(null);
    
    const provider_login = (provider) => {
        return signInWithPopup(auth, provider);
    }

    const create_user = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const sign_in = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const log_out = () => { 
        return auth.signOut();
    }

    React.useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            if (user) {
                setUser(user);
            }
        })
        return () => unsubscribe();
    },[])
    
    const auth_info = {user, provider_login, create_user, sign_in, log_out};

    return (
        <AuthContext.Provider value={auth_info}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;