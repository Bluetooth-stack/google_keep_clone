import React, { useState } from 'react'
import TaskInput from '../Components/TaskInput'

function Home({ openInput, setOpenInput }) {
  const [selectedColor, setSelectedColor] = useState('#FFFFFF')
  return (
    <div className='main-page'>
      <TaskInput openInput={openInput} setOpenInput={setOpenInput} selectedColor={selectedColor} setSelectedColor={setSelectedColor} />
    </div>
  )
}

export default Home