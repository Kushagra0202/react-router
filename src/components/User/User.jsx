import React from 'react'
import { useParams } from 'react-router-dom'
import '../../index.css'

function User() {
    const {userid}=useParams();
  return (
    <div className='bg-gray-600 tect-white text-3xl p-4'>
      Welcome : {userid}
    </div>
  )
}

export default User
