import React, { useContext } from 'react';
import TaskInput from '../Components/TaskInput';
import GridView from '../Components/View/GridView';
import ListView from '../Components/View/ListView';
import { Context } from '../Context/Provider';

function Home({ handleCreateTask }) {

  const { grid, selectedColor, setSelectedColor, title, setTitle, content, setContent } = useContext(Context);

  return (
    <div className='main-page'>
      <TaskInput
        handleCreate={handleCreateTask}
        selectedColor={selectedColor}
        setSelectedColor={setSelectedColor}
        title={title}
        setTitle={setTitle}
        content={content}
        setContent={setContent}
      />
      {
        grid ?
          <GridView />
          :
          <ListView />
      }
    </div>
  )
}

export default Home