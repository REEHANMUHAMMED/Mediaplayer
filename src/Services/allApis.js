import axios from "axios";
import base_url from "./base_url";

export const registerUser=async(data)=>{
  return await axios.post(`${base_url}/user`,data)
}

export const  allUsersApi=async()=>{
  return await axios.get(`${base_url}/user`)
}

export const loginUser=async(email,password)=>{
  return await axios.get(`${base_url}/user?email=${email}&password=${password}`)
}

export const addVideoApi=async(data)=>{
  return await axios.post(`${base_url}/videos`,data)
}

export const getVideosApi=async()=>{
  return await axios.get(`${base_url}/videos`)
}

export const  deleteVideoApi=async(id)=>{
  return await axios.delete(`${base_url}/videos/${id}`)
}

export const addCategoryApi=async(data)=>{
  return await axios.post(`${base_url}/category`,data)
}

export const getCategoryApi=async()=>{
  return await axios.get(`${base_url}/category`)
}

export const deleteCategoryApi=async (id)=>{
  return await axios.delete(`${base_url}/category/${id}`)
}

export const addHistoryApi=async(data)=>{
  return await axios.post(`${base_url}/history`,data)
}

export const getHistoryApi=async()=>{
    return await axios.get(`${base_url}/history`)
}

export const deleteHistoryApi=async(id)=>{
  return await axios.delete(`${base_url}/history/${id}`)
}

export const addVideoToCategoryApi=async(cid,data)=>{
  return await axios.put(`${base_url}/category/${cid}`,data)
}