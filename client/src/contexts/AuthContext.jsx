import { createContext, useContext } from "react";
import usePersistedState from "../hooks/usePersistedState";


export const AuthContext = createContext({
    username: '',
    userId: '',
    email: '',
    accessToken: '',
    isAuthenticated: false,
    changeAuthData: (authState = {}) => null,
    logout: () => {}
});


export function AuthContextProvider(props) {
    const [authState, setAuthState] = usePersistedState('auth',{});

    const changeAuthData = (state) => {
        localStorage.setItem('accessToken', state.accessToken);
        setAuthState(state);
    }

    const logout = () => {
        setAuthState({})
    }

    const contextData = {
        username: authState.username,
        userId: authState._id,
        email: authState.email,
        accessToken: authState.accessToken,
        isAuthenticated: !!authState.email,
        changeAuthData,
        logout
    }

    return (
        <AuthContext.Provider value={contextData}>
            {props.children}
        </AuthContext.Provider>
    );
}

export function useAuthContext() {
    const authData = useContext(AuthContext);

    return authData;
} 