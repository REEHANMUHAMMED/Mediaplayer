import React,{useEffect, useState} from 'react'
import Videocard1 from './Videocard1';
import { getVideosApi } from '../Services/allApis';

function VideoList({add}) {

    const [videos,setVideos]=useState([])
    const [deleteResponse,setDeleteResponse]=useState("")

    useEffect(()=>{
        // console.log("componemt loading");
        getData()
        
    },[add,deleteResponse])

    const getData=async()=>{
        const result=await getVideosApi()
        console.log(result.data);
        if(result.status ==200){
            setVideos(result.data)
        }
        
    }


  return (
   <>
   
   <div className='border border-dark border-1 p-2 mb-4'>
    {
        videos.length>0 ?
        <div className='d-flex flex-wrap justify-content-around'>
            {
                videos.map(item =>(
                  
                  <Videocard1 vid={item} delres={setDeleteResponse}/>
                ))
            }
           
        </div>
         :
         <h2 className='text-center text-warning'>No video added yet</h2>
    }
      
   </div>
   
   </>
  )
}

export default VideoList
