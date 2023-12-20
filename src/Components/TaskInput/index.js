import React, { useState } from 'react';
import './styles.css'
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
                    </div>

                    <div role='button' className='create-button' onClick={() => { setOpenInput(false) }}>Create</div>

                    {
                        showPalate &&
                        <div className='color-option-holder'>
                            <span
                                className='view-color'
                                style={{borderColor: selectedColor==='#FFFFFF'? 'black': 'transparent'}}
                                onClick={(e) => { e.stopPropagation(); setSelectedColor('#FFFFFF') }}
                            >
                                <FormatColorResetOutlinedIcon className='reset-color-icon' />
                            </span>
                            {
                                colors.map((color, indx) => (
                                    <span
                                        key={color + indx}
                                        style={{ background: color, borderColor: selectedColor===color? 'black': 'transparent' }} 
                                        className='view-color'
                                        onClick={(e) => { e.stopPropagation(); setSelectedColor(color) }}
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