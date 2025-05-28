import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
   <>
   
   <div className="container-fluid p-4 bg-primary">
    <div className="row">
        <div className="col">
            <h3 className="text-center">Media Player 2025</h3>
            <p style={{textAlign: 'justify'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>

        </div>
        <div className="col-2">
            <h3 className="text-center">Links</h3>
            <div className="d-flex justify-content-around flex-column">
                <Link to={'/'} className='text-light text-center' >Landing</Link>
                <Link to={'/log'} className='text-light text-center' >Login</Link>
                <Link to={'/reg'} className='text-light text-center' >Registration</Link>
            </div>
        </div>
        <div className="col">
            <h3 className="text-center">Feedback</h3>
            <textarea className='form-control my-3' placeholder='Enter Your Feedbacks..'></textarea>
            <button className="btn btn-success">Send</button>
        </div>
    </div>
    <p className='text-center text-light'>Media Player 2025 &copy; copyrights reserved</p>
   </div>
   
   </>
  )
}

export default Footer









