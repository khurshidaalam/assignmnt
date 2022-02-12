import React from 'react';
import {Link} from "react-router-dom";
import "./login.css";
import Axios from 'axios'
const DEVICE_ID="138927c0-8b6b-11ec-8752-6b2d782166ad";
// import { useHistory } from "react-router-dom";
// import {Redirect} from 'react-router-dom'

// {
//   "auth": {
//       "email": "rajib2@gmail.com",
//       "deviceUuid": “1213sdsfs456sdsd778sds87787dsd"
//   },
//   "password": "123456"
// }
const Login = () => {

  const [email,setEmail]=React.useState("");
  const [password,setPassword]=React.useState("");

  // const history=useHistory();

  const loginUser=(e)=>{
    e.preventDefault();
      Axios.post("https://devapi.dhakai.com/api/v2/login-buyer",{
        auth:{
          email,
          deviceUuid:DEVICE_ID
        },
        password
      }).then(res=>{
        if(res?.data?.statusCode===200){
          alert("Login Successful.")
          console.log(res.data)
          localStorage.setItem("token",res?.data?.result?.token)
          // history.push("/");
        }else{
          alert(res?.data?.message)
          console.log(res.data)
        }
          
      }).catch(err=>{
         alert("Authentication Failed")
      })
  }

  // if(localStorage.getItem("token")){
  //   return <Redirect to="/"/>;
  // }

  return (
    <div>
    <div className='login-div'>
        <div className='login-content'>
            <form className='login-form'>
                <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder='email' />
                <input value={password} onChange={(e)=>setPassword(e.target.value)}  type="password" placeholder='password'/>
                <button onClick={(e)=>loginUser(e)}  className='signin-btn'>sign in</button>
            </form>
        </div>
    </div>
    </div>
  )
}

export default Login;