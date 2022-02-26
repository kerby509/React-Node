import React, { useState } from "react";
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate,

} from "react-router-dom";

import Login from './User/Login/Login';
import HomePage from './User/HomePage';
import { AuthContext } from "./User/Login/Auth";



const AppRoutes = () => {
    const [user,setUser] = useState(null);

    const Login = (email, password) => {
        console.log("Login Auth" ,{ email, password});
        setUser({ id:"123", email});
    };
    const logout = () => {
        console.log("logout");
    };
    return(
        <Router>
            <AuthContext.Provider value={{authenticated: !! user,user,Login,logout}}>
            <Routes>
                <Route exact path="/login" element= {<Login />}/>
                <Route exact path="/" element= {<HomePage />}/>


            </Routes>
            </AuthContext.Provider>
        </Router>
    );
};

export default AppRoutes;