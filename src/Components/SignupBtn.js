import React from "react";

const SignupBtn=({link,name})=>{

    return(
        <div className="signupBtn">
            <img src={link} alt="pic"/>
            <p>Sign up with {name}</p>
        </div>
    )
}

export default SignupBtn