 

 import React , {useState , useEffect} from 'react'
import { useDispatch, useSelector  } from 'react-redux';
import { loginUser } from '../actions/userActions';
import Error from '../components/Error'
import Loading from '../components/Loading'

 export default function Loginscreen() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const  dispatch = useDispatch()

  const loginstate = useSelector(state=>state.loginUserReducer)
  const {error , loading } = loginstate



  useEffect(()=>{
    if (localStorage.getItem('currentUser'))
     {  window.location.href='/' }
} ,[])


  function login(){
    const user = {email,password}
    dispatch(loginUser(user))

  }


  return (
    <div>
      <div className="row justify-content-center mt-5">
        <div className="col-md-5 mt-5 text-left shadow-lg p-3 mb-5 bg-white rounded">
          <h2 style={{ fontSize: "30px" }} className="text-center m-2">
            LOGIN
          </h2>

          {loading && (<Loading/>)}
         {error && <Error error='INVALID CREDENTIALS'/>}
          <div>
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
            <button className="btn mt-4 mb-3" onClick={login}>SIGN IN</button>
<br/>
          <a href='/register'  style={{color:'grey'}}  >Click Here To Register</a>
          </div>
        </div>
      </div>
    </div>
  );
}
