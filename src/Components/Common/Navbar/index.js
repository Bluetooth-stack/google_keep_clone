import React, { useContext, useState } from 'react';
import './styles.css';
import MenuIcon from '@mui/icons-material/Menu';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import SearchIcon from '@mui/icons-material/Search';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import SplitscreenOutlinedIcon from '@mui/icons-material/SplitscreenOutlined';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Context } from '../../../Context/Provider';

function Navbar() {

  const [mobileSearch, setMobileSearch] = useState(false);
  const [searched, setSearched] = useState('');
  const { setSideBarOpen, sideBarOpen, grid, setGrid, todo, setFilteredTodo } = useContext(Context);

  function searchChange(e) {
    setFilteredTodo(todo.filter((item)=>item?.title?.includes(e.target.value)));
    setSearched(e.target.value);
  }

  return (
    <div className='navbar'>

      <div className='menu-logo-holder'>
        <span className='menu-icon-holder' onClick={() => { setSideBarOpen(!sideBarOpen) }}>
          <MenuIcon className='menu-icon' />
        </span>
        <h2 className='logo-holder'><LightbulbIcon className='logo-icon' />Day</h2>
      </div>

      <div className='search-holder'>
        <SearchIcon className='search-icon' />
        <input
          type="text" className='search-field'
          name='search' placeholder='Search'
          value={searched} onChange={searchChange}
        />
      </div>

      <div className='view-holder'>
        <span onClick={() => { setMobileSearch(!mobileSearch) }} className='mobile-search' >
          <SearchIcon className='search-icon' />
        </span>
        {
          mobileSearch &&
          <div className='mobile-search-holder'>
            <ArrowBackIosIcon className='arrowIcon' />
            <input
              type="text" className='mobile-search-field'
              name='mobileSearch' placeholder='Search' value={searched}
              autoFocus onBlur={() => { setMobileSearch(false) }}
              onChange={searchChange}
            />
          </div>
        }

        <span className='view-icon-holder' onClick={() => { setGrid(!grid) }}>
          {
            !grid ? <GridViewOutlinedIcon className='grid-view' /> : <SplitscreenOutlinedIcon className='list-view' />
          }
        </span>

        <span className='view-icon-holder'><AccountCircleIcon className='user-profile' /></span>
      </div>

    </div>
  )
}

export default Navbar