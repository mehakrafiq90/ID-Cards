import React from 'react'

interface Tprops{
   name:string,
   rollNumber:number
}

const StudentCard = (props:Tprops) => {
  return (
    <div className='bg-gradient-to-r from-blue-500 to-green-500 bg-gray-400 rounded-lg p-10 max-w-max-auto'>
        <h1 className='text-4x1 font-bold'>Student ID Card</h1>
        <p className='text-4x1'>Name:{props.name}</p>
        <p className='text-4x1'>Roll Number:{props.rollNumber}</p>
        <p className='text-4x1'>Day:Monday(2-5)</p>
        <p className='text-4x1'>Center:Governor House Karachi</p>
    </div>
  )
}

export default StudentCard
