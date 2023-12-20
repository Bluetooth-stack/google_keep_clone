import React, { useState } from 'react';
import './styles.css'
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import ColorLensOutlinedIcon from '@mui/icons-material/ColorLensOutlined';
import FormatColorResetOutlinedIcon from '@mui/icons-material/FormatColorResetOutlined';
import { colors } from '../../Constants';

function Card({showPalate, setShowPalate}) {
  const [selectedColor, setSelectedColor] = useState('#FFFFFF')

  return (
    <div
      className='card'
      onClick={(e) => { e.stopPropagation(); setShowPalate(false) }}
    >
      <h4>Title</h4>
      <p>some problem to do befor you sleep.</p>

      <div className='edit-option-holder'>
        <ColorLensOutlinedIcon className='palate-icon'
          onClick={(e) => { e.stopPropagation(); setShowPalate(!showPalate) }} />
        <DeleteOutlineOutlinedIcon className='palate-icon' />
      </div>

      {
        showPalate &&
        <div className='color-option-holder'>
          <span
            className='view-color'
            style={{ borderColor: selectedColor === '#FFFFFF' ? 'black' : 'transparent' }}
            onClick={(e) => { e.stopPropagation(); setSelectedColor('#FFFFFF') }}
          >
            <FormatColorResetOutlinedIcon className='reset-color-icon' />
          </span>
          {
            colors.map((color, indx) => (
              <span
                key={color + indx}
                style={{ background: color, borderColor: selectedColor === color ? 'black' : 'transparent' }}
                className='view-color'
                onClick={(e) => { e.stopPropagation(); setSelectedColor(color) }}
              ></span>
            ))
          }
        </div>
      }
    </div>
  )
}

export default Card