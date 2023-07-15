import React,{useState} from "react";
import google from "../images/google.png"
import facebook from "../images/facebook.png"
import SignupBtn from "./SignupBtn"
import CreateAccountBtn from "./CreateAccountBtn";
import Vector from"../images/Vector.svg"

const Form=()=>{
    let [user,setUser]=useState({name:'', email:'', password:'', confirmPassword:''})
    let [success,setSuccessMsg]=useState("");
    let [error,setErrorMsg]=useState("");
    console.log(window.innerHeight, window.innerWidth)



    function FormValidation(event){
        event.preventDefault();
        if(user.password!==user.confirmPassword){
            setSuccessMsg('');
            return setErrorMsg("Error: Please Make sure your passwords and confirm passwords match!")
        }
        setUser({name:'', email:'', password:'', confirmPassword:''})
        setErrorMsg('');
        return setSuccessMsg('Successfully Created!')
    }

    return(
        <div className="form">
            <h1>Create Account</h1>
            <form onSubmit={FormValidation}>  
               <div className="btns">
                   <SignupBtn link={google} name="Google"    />
                   <SignupBtn link={facebook} name="Facebook" />
               </div>
               <p className="or">- OR -</p>
               <div class="input">
                    <input type="text" placeholder="Full Name" value={user.name} required onChange={(event)=>setUser({...user, name:event.target.value})}/>
               </div>
               <div class="input">
                    <input type="email" placeholder="Email Address" value={user.email} required onChange={(event)=>setUser({...user, email:event.target.value})}/>
               </div>
               <div class="input">
                    <input type="password" placeholder="Password" value={user.password} required onChange={(event)=>setUser({...user, password:event.target.value})}/>
                    <img src={Vector} alt=''/>
               </div>
               <div class="input">
                    <input type="password" placeholder="Confirm Password" value={user.confirmPassword} required onChange={(event)=>setUser({...user, confirmPassword:event.target.value})}/>
                    <img src={Vector} alt=""/>
               </div>
               <CreateAccountBtn />
            </form>
            {
                success && <div className="success">{success}</div>
            }
            {
                error && <div className="error">{error}</div>
            }
        </div>
    )
}

export default Form