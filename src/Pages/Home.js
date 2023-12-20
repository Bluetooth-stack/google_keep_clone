import React from 'react';
import TaskInput from '../Components/TaskInput';
import GridView from '../Components/View/GridView';

function Home({
  openInput, setOpenInput,
  selectedColor, setSelectedColor,
  title, setTitle, content, setContent,
  handleCreateTask, grid, todos
}) {

  return (
    <div className='main-page'>
      <TaskInput
        openInput={openInput} setOpenInput={setOpenInput}
        selectedColor={selectedColor} setSelectedColor={setSelectedColor}
        title={title} setTitle={setTitle}
        content={content} setContent={setContent}
        handleCreate={handleCreateTask}
      />
      <GridView todos={todos} />
    </div>
  )
}

export default Home