import React from "react";

const HomePage = () => {
    return  (
        
        <div id="login">
            <h1 className="title">Login do Sistema</h1>
            <form className="form">
                <div className="field">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" />


                </div>


            </form>

        </div>
    )
}

export default HomePage;