import React, { useContext } from 'react';
import TaskInput from '../Components/TaskInput';
import GridView from '../Components/View/GridView';
import ListView from '../Components/View/ListView';
import { Context } from '../Context/Provider';
import LightOutlinedIcon from '@mui/icons-material/LightOutlined';

function Home({ handleCreateTask }) {

  const {
    grid, selectedColor, setSelectedColor,
    title, setTitle, content, setContent,
    openInput, setOpenInput, todo } = useContext(Context);

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
        btnText={'Create'}
        openInput={openInput}
        setOpenInput={setOpenInput}
      />
      {
        !todo.length?
        <div className='empty-placeHolder'>
          <LightOutlinedIcon className='placeholder-light-icon' />
          <p>Notes you add appear here</p>
        </div>
        :
        grid ?
          <GridView />
          :
          <ListView />
      }
    </div>
  )
}

export default Home