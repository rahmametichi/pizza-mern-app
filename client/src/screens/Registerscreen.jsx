import React, { useState, useEffect } from "react"; 
import { useDispatch,useSelector } from "react-redux";
import { registerUser } from "../actions/userActions";
import Success from '../components/Success'
import Error from '../components/Error'
import Loading from '../components/Loading'

export default function Registerscreen() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [cpassword, setcpassword] = useState("");
  const dispatch = useDispatch()

  const registerstate= useSelector(state=>state.registerUserReducer)
  const {error , loading , success} = registerstate
  function register(){

    if (password!==cpassword){alert ("passwords not matched")}
    else {
        const user={
            name: name,email : email,password : password
        }

        console.log(user)
        dispatch(registerUser(user))
    }



  }


  return (
    <div>
      <div className="row justify-content-center mt-5">
        <div className="col-md-5 mt-5 text-left shadow-lg p-3 mb-5 bg-white rounded">
         
         {loading && (<Loading/>)}
         {success && <Success success='USER REGISTERED SUCCESSFULLY'/>}
         {error && <Error error='EMAIL ALREADY REGISTERED'/>}
          <h2 style={{ fontSize: "30px" }} className="text-center m-2">
            REGISTRATION
          </h2>
          <div>
            <input required type="text"
             placeholder="name" 
             value={name}
             onChange={(e)=>{setname(e.target.value)}}
            className="form-control" />
            <input type="email" 
            placeholder="email" 
            value={email}
            required
            onChange={(e)=>{setemail(e.target.value)}}
            className="form-control" />
            <input
              type="password"
              required
              placeholder="password"
              value={password}
              onChange={(e)=>{setpassword(e.target.value)}}
              className="form-control"
            />
            <input
              type="password"
              required
              value={cpassword}
              onChange={(e)=>{setcpassword(e.target.value)}}
              placeholder="confirm password"
              className="form-control"
            />
           
            <button className="btn mt-4 mb-3" onClick={register}>SIGN UP</button>
        <br/>
         <a style={{color:'grey'}} href='/login'>Click Here To Login</a>
         
          </div>
        </div>
      </div>
    </div>
  );
}
