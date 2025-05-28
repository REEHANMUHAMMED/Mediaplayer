import React, { useState } from 'react'
import Addvideo from '../Components/Addvideo'
import { Row,Col } from 'react-bootstrap'
import VideoCard from '../Components/VideoCard'
import Category from '../Components/Category'
import { Link } from 'react-router-dom'
import VideoList from '../Components/VideoList'

function Dashboard() {

  const [addResponse,setAddResponse]=useState("")

  return (
    <>
    
    <div className="container-fluid">
      <div className='d-flex justify-content-between'>
          <h2>Dashboard</h2>
          <div>
            <Link to={'/his'}>Watch History</Link>
            <button className='btn btn-danger text-light'>
              <Link to={'/log'}>Logout</Link>
            </button>
          </div>
      </div>
    
    <Row>
      <Col sm={6} md={1} className='py-3'>
        <Addvideo addres={setAddResponse}/>
      </Col>

      <Col sm={6} md={8} >
         <VideoList add={addResponse}/>
      </Col>
      <Col sm={12} md={3}>
      <Category/>
      </Col>
    </Row>
    </div>
    
    </>
  )
}

export default Dashboard
