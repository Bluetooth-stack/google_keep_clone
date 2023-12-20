import React from 'react';
import './styles.css';
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';

function SideBar({sideBarOpen}) {
  
  return (
    <div className='sidebar' style={{width:sideBarOpen?'13rem':'3.5rem'}}>
      <a href='/' className='bulb-holder icon-holder active'>
        <LightbulbOutlinedIcon className='bulb-icon icon' />
        <span>Notes</span>
      </a>

      <a href='/' className='bell-holder icon-holder'>
        <NotificationsNoneOutlinedIcon className='bell-icon icon' />
        <span>Reminders</span>
      </a>

      <a href='/' className='pen-holder icon-holder'>
        <EditOutlinedIcon className='pen-icon icon' />
        <span>Edit labels</span>
      </a>

      <a href='/' className='archive-holder icon-holder'>
        <ArchiveOutlinedIcon className='archive-icon icon' />
        <span>Archive</span>
      </a>

      <a href='/' className='delete-holder icon-holder'>
        <DeleteOutlinedIcon className='delete-icon icon' />
        <span>Bin</span>
      </a>
    </div>
  )
}

export default SideBar