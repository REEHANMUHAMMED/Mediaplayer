import React,{useState} from 'react'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { loginUser } from '../Services/allApis';
import { useNavigate } from 'react-router-dom';

function Login() {

  const [user,setUser]=useState({
    email:"",password:""
  })

  const nav=useNavigate()

  const handleSubmit=async()=>{
    console.log(user);
    const {email,password}=user
    if(!email || !password){
      alert("Enter valid inputs!!")
    }
    else{
      const result=await loginUser(email,password)
      console.log(result);
      if(result.data.length>0){
        alert("Login success")
        setUser({
          username:"",password:""
        })
        nav('/dash')
      }
      else{
        alert("Login failed")
      }
      
    }
    
  }

  return (
    <> 
    
    <div className="container-fluid d-flex justify-content-center align-items-center" style={{height:'90vh'}}>
      <div className="w-75 border border-2 shadow p-4">
        <div className="row">
          <div className="col">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgkG8TeGndYt0h2WMQBS4SCp6H8OTUU91kiQ&s" alt="" className="w-75" />
          </div>
          <div className="col">
            <h2>Login</h2>
            <div className="my-5">
               <FloatingLabel
                  controlId="floatingInput"
                  label="Email address"
                  className="mb-3"
                >
                  <Form.Control type="email" onChange={(e)=>setUser({...user,email:e.target.value})} placeholder="name@example.com" />
                </FloatingLabel>
                <FloatingLabel controlId="floatingPassword" label="Password">
                  <Form.Control type="password" onChange={(e)=>setUser({...user,password:e.target.value})} placeholder="Password" />
                </FloatingLabel>
            </div>
            <div className="d-flex justify-content-between">
              <button className="btn btn-success" onClick={handleSubmit}>Login</button>
              <Link to={'/reg'}>Are you new</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    </>
  )
}

export default Login
