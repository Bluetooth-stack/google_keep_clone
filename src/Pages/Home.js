import React from 'react'
import TaskInput from '../Components/TaskInput'

function Home({openInput, setOpenInput}) {
  return (
    <div className='main-page'>
      <TaskInput openInput={openInput} setOpenInput={setOpenInput} />
    </div>
  )
}

export default Home