import React from 'react'

function Headericon({Icon ,string}) {
  return (
    <div className ="mx-4 flex-col cursor-pointer hover:text-white">
    <Icon className="h-8"/>
    <p className='my-2'>{string}</p>
    </div>

  )
}

export default Headericon