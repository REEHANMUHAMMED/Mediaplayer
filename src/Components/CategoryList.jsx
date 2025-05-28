import React, { useEffect, useState } from 'react'
import { addVideoToCategoryApi, deleteCategoryApi, getCategoryApi } from '../Services/allApis'
import VideoCard from './VideoCard'

function CategoryList({addres}) {

  const [list,setList]=useState([])

  useEffect(()=>{
    getData()
  },[addres])

const getData=async ()=>{
  const result=await getCategoryApi()
  if(result.status==200){
    setList(result.data)
    console.log(result.data);
    
  }
}

const handleDelete=async(id)=>{
  const result=await deleteCategoryApi(id)
  console.log(result);
  if(result.status==200){
        // alert("Video deleted")
       getData()
      }
      else{
        alert("Deletion Failed")
      }
}

const handleDragOver=(e)=>{
  console.log("drag over");
  e.preventDefault()
}

const handleDrop=async(e,cat)=>{
  console.log("dropping");
  e.preventDefault()
  const videoData=JSON.parse(e.dataTransfer.getData("video"))
  // console.log(videoData);
  // console.log(cat);
  const existing = cat.videos.find(item=>item.id==videoData.id)
  if(existing){
    alert("Alredy Exist")
  }
  else{
    cat.videos.push(videoData)
    console.log(cat);
    const result =await addVideoToCategoryApi(cat.id,cat)
    console.log(result);
    if(result.status==200){
      alert("video added to category")
      getData()
    }
    else{
      alert("video adding failed")
    }
  }
  
}


  return (
    <>
    
    <div className="border border-2">
      {
        list.length>0?
        <>
        {list.map(item=>(
         
        <div className='m-3 border-info border'>
        <div className=" p-3 d-flex justify-content-between" onDragOver={(e)=>handleDragOver(e)} onDrop={(e)=>handleDrop(e,item)} >
            <h3>{item.name}</h3>
            <button className="btn" onClick={()=>{handleDelete(item.id)}}>
                <i class="fa-solid fa-trash text-danger"></i>
            </button>
        </div>
        <div>
          {
            item.videos.length> 0 &&
            <>
            {item.videos?.map(video=>(
              <VideoCard vid={video} delStatus={true}/>
            ))}
            
            </>
          }
        </div>
        </div>
        
        ))}
        
        </>
        :
        <h2 className='text-center text-warning'>No category lists</h2>
      }

    </div>
    
    </>
  )
}

export default CategoryList
