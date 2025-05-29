import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { addHistoryApi, deleteVideoApi } from '../Services/allApis';


function VideoCard({vid,delres,delStatus}) {
    const [show, setShow] = useState(false);

    // const {vid}=props
    // console.log(vid);

    const handleDelete=async()=>{
      const result=await deleteVideoApi(vid?.id)
      console.log(result);
      if(result.status==200){
        alert("Video deleted")
        delres(result)
      }
      else{
        alert("Deletion Failed")
      }
      
    }
    

  const handleClose = () => setShow(false);
  const handleShow = async() => {
    setShow(true);

    const {id,title,imageUrl,watchUrl}=vid
    const now=new Date()
    const currentDateTime=now.toLocaleString()
    const data={videoId:id,title,watchUrl,imageUrl,currentDateTime}
    // console.log(data);
    const result=await addHistoryApi(data)
    console.log(result);
    
    
  }

  const handleDrag=(e)=>{
    console.log("Dragging");
    console.log(vid);
    e.dataTransfer.setData("video",JSON.stringify(vid))
  }

  return (
   <>
   
    <Card style={{ maxWidth: '18rem' }} draggable onDragStart={(e)=>handleDrag(e)}>
      <Card.Img variant="top" style={{cursor:'pointer'}} onClick={handleShow} src={vid.imageUrl} />
      <Card.Body>
        <Card.Title>{vid.title}</Card.Title>
        {
          !delStatus&&
           <button className="btn" onClick={handleDelete}>
                <i class="fa-solid fa-trash text-danger"></i>
        </button>
        }
       
      </Card.Body>
    </Card>


     <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>{vid.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <iframe width="100%" height="315" src={`${vid.watchUrl}&autoplay=1`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

   </>
  )
}

export default VideoCard
