import React, { useState } from 'react'
// import { Route,  } from 'react-router-dom'
import { Navigate, Outlet, Routes, useNavigate } from 'react-router-dom/dist'

function ProtectedRoute({isauth}) {
//    const  isauth = false;
    
    
  
    
  return (
    isauth ? <Outlet/> : <Navigate to={'/admin'}/>
  )
    
   
 
}

export default ProtectedRoute