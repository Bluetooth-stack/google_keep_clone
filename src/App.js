import { useContext } from 'react';
import './App.css';
import Home from './Pages/Home';
import Navbar from './Components/Common/Navbar';
import SideBar from './Components/Common/SideBar';
import { Context } from './Context/Provider'

function App() {

  const {
    content, title, selectedColor,
    setTodo, setOpenInput, setSelectedColor,
    setTitle, setContent, todo } = useContext(Context)

  function handleCreateTask(e) {
    if (content !== '' || title !== '') {
      let newTodo = {
        id: Date.now(),
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
      <Navbar />
      <SideBar />
      <Home handleCreateTask={handleCreateTask} />
    </div>
  );
}

export default App;
