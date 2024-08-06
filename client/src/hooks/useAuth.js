import { login, register } from "../api/auth-api";
import { useAuthContext } from "../contexts/AuthContext";

export const useLogin = () => {
    const {changeAuthData} = useAuthContext();
    const loginHandler = async (email, password) => {

        const {password:_, ...authData} = await login(email, password);

        changeAuthData(authData)
 
    }

    return loginHandler;
}

export const useRegister = () => {

    const {changeAuthData} = useAuthContext();

    const registerHandler = async (email, password,username) => {

        const {password:_, ...authData} = await register(email, password, username);

        changeAuthData(authData)
    }

    return registerHandler;
}