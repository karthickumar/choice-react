import { useState, useEffect } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/index";

function useLoginAPI() {
  const [user, setUserDetail] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const login = (data: any) => {
    const { email, password } = data;
    setIsLoading(true)
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setUserDetail(user);
      })
      .catch((error) => {
        console.log(error.code,":", error.message)
        if (error.code === "auth/user-not-found") {
          setUserDetail({error: "Email not found"});
        } else if (error.code === "auth/wrong-password") {
          setUserDetail({error: "Entered password wrong"});
        }
      }).finally(() => {
        setIsLoading(false)
      });
  };

  return {
    user,
    isLoading,
    login,
  };
}

export { useLoginAPI };
