import { useState } from 'react';
import './App.css';
import Home from './Pages/Home';
import Navbar from './Components/Common/Navbar';
import SideBar from './Components/Common/SideBar';

function App() {
  const [sideBarOpen, setSideBarOpen] = useState(false);
  const [grid, setGrid] = useState(true);

  return (
    <div className="App">
      <Navbar setSideBarOpen={setSideBarOpen} sideBarOpen={sideBarOpen} grid={grid} setGrid={setGrid} />
      <SideBar sideBarOpen={sideBarOpen} />
      <Home />
    </div>
  );
}

export default App;
