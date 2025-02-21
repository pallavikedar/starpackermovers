import React from 'react'
import { useNavigate } from 'react-router-dom'
function Button() {
    const navigate = useNavigate()
  return (
    <div>
    <button onClick={()=> navigate('/q')}>Quotation</button>
    </div>
  )
}

export default Button