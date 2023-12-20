import { useState } from 'react';
import './App.css';
import Home from './Pages/Home';
import Navbar from './Components/Common/Navbar';
import SideBar from './Components/Common/SideBar';
import useLocalStorage from './CustomHook/useLocalStorage';

let tempId = 0

function App() {
  const [sideBarOpen, setSideBarOpen] = useState(false);
  const [grid, setGrid] = useState(true);
  const [openInput, setOpenInput] = useState(false)
  const [selectedColor, setSelectedColor] = useState('#FFFFFF')
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [todo, setTodo] = useLocalStorage('todos', []);

  function handleCreateTask(e) {
    if (content!=='' || title!=='') {
      let newTodo = {
        id: tempId++,
        title: title,
        content: content,
        color: selectedColor
      }
      setTodo([newTodo, ...todo])
    }
    setOpenInput(false);
    setSelectedColor('#FFFFFF');
    setTitle('');
    setContent('');
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
        grid={grid} todos={todo}
      />
    </div>
  );
}

export default App;
