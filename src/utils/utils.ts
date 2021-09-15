import { useCookies } from "react-cookie";


export function useLoginCheck() {
    const [cookies, setCookie, removeCookie] = useCookies(["isLoggedin"]);
    const isLoggedIn = cookies.isLoggedin
    return{
       isLoggedIn: isLoggedIn == 'true'
    }
}