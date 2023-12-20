import React from 'react';
import './styles.css'
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import ColorLensOutlinedIcon from '@mui/icons-material/ColorLensOutlined';
// import FormatColorResetOutlinedIcon from '@mui/icons-material/FormatColorResetOutlined';

function TaskInput({openInput, setOpenInput}) {
   

    return (
        <div className='task-input-holder' onClick={(e)=>{e.stopPropagation()}}>
            {
                openInput &&
                <input type="text" name='title' placeholder='Title' className='title-input' />
            }
            <textarea
             cols="48" rows="1" 
             placeholder='Take a note...' 
             name='content' className='content-input'
             onClick={()=>{setOpenInput(true)}}
             >
            </textarea>
            {
                openInput &&
                <div className='buton-holder'>
                    <div className='edit-palate'>
                        <ColorLensOutlinedIcon className='palate-icon' />
                        <DeleteOutlineOutlinedIcon className='palate-icon' />
                    </div>
                    <div role='button' className='create-button' onClick={()=>{setOpenInput(false)}}>Create</div>
                </div>
            }
        </div>
    )
}

export default TaskInput