import React, { useState } from 'react'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { allUsersApi, registerUser } from '../Services/allApis';
import { useNavigate } from 'react-router-dom';

function Reg() {

  const [data,setData]=useState({
    username:"",email:"",password:""
  }) 

  const nav = useNavigate()
 
 const handleSubmit=async()=>{
    const {username,email,password}=data;
    if(!username || !email || !password){
      alert("Enter Valid Inputs")
    }else{
      const users=await allUsersApi()
      // console.log(users);
      // console.log(data);

      const existing = users.data.find(item=>item.email== data.email || item.username== data.username)
      // console.log(existing);
      if(existing){
        alert("User already exists!!")
      }
      else{
           const result=await registerUser(data)
      console.log(result);
      if(result.status==201){
        setData({username:"",email:"",password:""})
        alert("Registration Successfull")
        nav('/log')
      }else(
        alert("Registration Failed")
      )
    }
      }
      
  }


  return (
    <>
     <div className='container-fluid my-3 d-flex justify-content-center align-items-center' style={{ height: 'auto'}} >
        <div className='w-75 border border-2 shadow p-4'>
            <div className='row d-flex justify-content-between align-items-center'>
                <div className='col'>
                    <img src="https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-83.jpg?ga=GA1.1.1184985039.1727765015&semt=ais_hybrid&w=740" className='w-75' alt="" />
                </div>
                <div className='col'>
                    <h2>Registration</h2>
                    <div className='my-5'>

                    <FloatingLabel controlId="floatingInput" label="Email address" className="mb-3">        
           <Form.Control type="email" onChange={(e)=>setData({...data,email:e.target.value})}placeholder="name@example.com" />
      </FloatingLabel>

      <FloatingLabel controlId="floatingPassword" label="username">
        <Form.Control type="text" onChange={(e)=>setData({...data,username:e.target.value})} placeholder="username" />
      </FloatingLabel>

       <FloatingLabel controlId="floatingPassword" label="password" className="mt-3">
        <Form.Control type="password" onChange={(e)=>setData({...data,password:e.target.value})} placeholder="Password" />
      </FloatingLabel>
                    </div>
                    <div className='d-flex justify-content-between'>
                        <button className='btn btn-success' onClick={handleSubmit}>Register</button>
                        <Link to={'/reg'}>Are you new ?</Link>

                    </div>

                </div>
            </div>
        </div>
    </div>
    
    </>
  )
}

export default Reg
