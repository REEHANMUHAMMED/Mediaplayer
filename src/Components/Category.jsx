import React, { useEffect } from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import CategoryList from './CategoryList';
import { addCategoryApi } from '../Services/allApis';

function Category() {

     const [show, setShow] = useState(false);
     const [addResponse,setAddResponse]=useState("")
     const [categories,setCategories]=useState({
      name:"",videos:[]
     })
   

  const handleSubmit=async()=>{
    const {name}=categories
    if(!name){
      alert("Enter valid input")
    }
    else{
      const result=await addCategoryApi(categories)
      console.log(result);
      if(result.status==201){
        alert("Category added!!")
        setAddResponse(result)

        setCategories({
        name:"",videos:[]
      })
      handleClose()
      }
      else{
        alert("Adding Category Failed")
      } 
      
    }
  
  }


   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);
  
  return (
    <>
    <div className="d-grid">
        <button className="btn btn-info" onClick={handleShow} >Add Category + </button>
    </div>

     <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <input type="text" placeholder='Enter new category name' className="form-control"onChange={(e)=>setCategories({...categories,name:e.target.value})} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>Add</Button>
        </Modal.Footer>
      </Modal>

      <div className="container-fluid">
    
        <CategoryList addres={addResponse}/>
        
      </div>
    
    </>
  )
}

export default Category
