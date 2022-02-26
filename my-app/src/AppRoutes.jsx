import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate,

} from "react-router-dom";

import Login from './User/Login/Login';
import HomePage from './User/HomePage';



const AppRoutes = () => {
    return(
        <Router>
            <Routes>
                <Route exact path="/login" element= {<Login />}/>
                <Route exact path="/" element= {<HomePage />}/>


            </Routes>
        </Router>
    );
};

export default AppRoutes;