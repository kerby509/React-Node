import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate,

} from "react-router-dom";

import Login from './User/Login/Login';
import HomePage from './User/HomePage';
import { AuthContext, AuthProvider } from "./User/Login/Auth";



const AppRoutes = () => {
    
   
    return(
        <Router>
            <AuthProvider>
            <Routes>
                <Route exact path="/login" element= {<Login />}/>
                <Route exact path="/" element= {<HomePage />}/>


            </Routes>
            </AuthProvider>
        </Router>
    );
};

export default AppRoutes;