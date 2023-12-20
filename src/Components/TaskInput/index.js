import React, { useState } from 'react';
import './styles.css'
// import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import ColorLensOutlinedIcon from '@mui/icons-material/ColorLensOutlined';
import FormatColorResetOutlinedIcon from '@mui/icons-material/FormatColorResetOutlined';
import { colors } from '../../Constants';

function TaskInput({ openInput, setOpenInput, selectedColor, setSelectedColor }) {
    const [showPalate, setShowPalate] = useState(false)

    return (
        <div
            className='task-input-holder'
            style={{ background: selectedColor }}
            onClick={(e) => { e.stopPropagation(); setShowPalate(false) }}
        >
            {
                openInput &&
                <input type="text" name='title' placeholder='Title' className='title-input' />
            }
            <textarea
                cols="48" rows="1"
                placeholder='Take a note...'
                name='content' className='content-input'
                onClick={() => { setOpenInput(true) }}
            >
            </textarea>
            {
                openInput &&
                <div className='buton-holder'>
                    <div className='edit-palate'>
                        <ColorLensOutlinedIcon className='palate-icon'
                            onClick={(e) => { e.stopPropagation(); setShowPalate(!showPalate) }} />
                        {/* <DeleteOutlineOutlinedIcon className='palate-icon' /> */}
                    </div>

                    <div role='button' className='create-button' onClick={() => { setOpenInput(false) }}>Create</div>

                    {
                        showPalate &&
                        <div className='color-option-holder'>
                            <span
                                className='view-color'
                                onClick={() => { setSelectedColor('#FFFFFF') }}
                            >
                                <FormatColorResetOutlinedIcon className='reset-color-icon' />
                            </span>
                            {
                                colors.map((color, indx) => (
                                    <span
                                        key={color + indx}
                                        style={{ background: color }} className='view-color'
                                        onClick={() => { setSelectedColor(color) }}
                                    ></span>
                                ))
                            }
                        </div>
                    }

                </div>
            }
        </div>
    )
}

export default TaskInput