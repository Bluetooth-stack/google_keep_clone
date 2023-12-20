import React, { useContext, useEffect, useState } from 'react';
import './styles.css'
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import ColorLensOutlinedIcon from '@mui/icons-material/ColorLensOutlined';
import FormatColorResetOutlinedIcon from '@mui/icons-material/FormatColorResetOutlined';
import { colors } from '../../Constants';
import { Context } from '../../Context/Provider';
import EditModal from '../Common/Modal/EditModal';


function Card({ curTodo, listView }) {
  const [selectedColor, setSelectedColor] = useState(curTodo.color);
  const [showPalate, setShowPalate] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const { todo, setTodo } = useContext(Context)

  useEffect(() => {
    let editedTodo = todo.map((item) => {
      if (curTodo.id === item.id) {
        return { ...item, color: selectedColor }
      }
      else {
        return item
      }
    })
    setTodo(editedTodo)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedColor, curTodo.id])

  function handleClickOnCard(e) {
    e.stopPropagation();
    setShowPalate(() => false)
    setShowEditModal(true);
  }

  if (showEditModal) {
    return (
      <EditModal curTodo={curTodo} setShowModal={setShowEditModal} />
    )
  }

  return (
    <div
      className={`card ${listView === 'yes' ? 'list-view-card' : listView === 'no' ? 'grid-view-card' : ''}`}
      style={{ background: selectedColor }}
      onClick={handleClickOnCard}
    >
      <h4>{curTodo?.title ? curTodo.title : ''}</h4>
      <p>{curTodo.content}</p>

      <div className='edit-option-holder'>
        <ColorLensOutlinedIcon className='palate-icon'
          onClick={(e) => { e.stopPropagation(); setShowPalate(() => !showPalate) }} />
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