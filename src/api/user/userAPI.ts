import { useState, useEffect } from 'react';
import { firebaseConfig } from "../../firebase/index";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from 'firebase/app';

function useLoginAPI() {
    const app = initializeApp(firebaseConfig);
    const [user, setUserDetail] = useState({})
    const [isLoading, setIsLoading] = useState(false)

    const login = (data: any) => {
        const { email, password } = data
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
            const user = userCredential.user;
            setUserDetail(user)
        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        });
    }

    return {
        user,
        isLoading,
        login
    }
}


export {
    useLoginAPI
}