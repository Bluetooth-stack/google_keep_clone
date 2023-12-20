import { useState } from 'react';
import './App.css';
import Home from './Pages/Home';
import Navbar from './Components/Common/Navbar';
import SideBar from './Components/Common/SideBar';
import useLocalStorage from './CustomHook/useLocalStorage';

function App() {
  const [sideBarOpen, setSideBarOpen] = useState(false);
  const [grid, setGrid] = useState(true);
  const [openInput, setOpenInput] = useState(false)
  const [selectedColor, setSelectedColor] = useState('#FFFFFF')
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [todo, setTodo] = useLocalStorage([]);

  function handleCreateTask(e) {
    
  }

  return (
    <div className="App" onClick={handleCreateTask}>
      <Navbar setSideBarOpen={setSideBarOpen} sideBarOpen={sideBarOpen} grid={grid} setGrid={setGrid} />
      <SideBar sideBarOpen={sideBarOpen} />
      <Home 
      openInput={openInput} setOpenInput={setOpenInput}
      selectedColor={selectedColor} setSelectedColor={setSelectedColor}
      title={title} setTitle={setTitle}
      content={content} setContent={setContent}
      handleCreateTask={handleCreateTask}
      grid={grid}
      />
    </div>
  );
}

export default App;
