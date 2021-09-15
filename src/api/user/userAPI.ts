import { useState, useEffect } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/index";

function useLoginAPI() {
  const [user, setUserDetail] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const login = (data: any) => {
    const { email, password } = data;
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setUserDetail(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  return {
    user,
    isLoading,
    login,
  };
}

export { useLoginAPI };
