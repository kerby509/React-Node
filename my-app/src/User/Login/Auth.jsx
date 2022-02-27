import React, {useState, createContext} from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext(); 

export const AuthProvider = ({children}) => {

    const navigate = useNavigate();

    const [user,setUser] = useState(null);

    const Login = (email, password) => {
        console.log("Login Auth" ,{ email, password});

        if(password === "secret") { 
            //função para verificar a senha e dirigir ao pagina navigação
            setUser({ id:"123", email});
            navigate("/Login");
        }else{
            console.log("Senha invalida");
        }
    };
    const logout = () => {
        console.log("logout");
        setUser(null);
        navigate("/");
    };



    return (
        <AuthContext.Provider 
        value={{authenticated: !! user,user,Login,logout}}>
            {children}
         </AuthContext.Provider>



    );
}