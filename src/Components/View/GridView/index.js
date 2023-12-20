import React, { useState } from 'react';
import './styles.css'
import Card from '../../Cards';

function GridView({todos}) {
  const [showPalate, setShowPalate] = useState(false)
  return (
    <div
      className='grid-view'
      onClick={(e) => { e.stopPropagation(); setShowPalate(false) }}
    >
      {
        todos.map((todo, indx)=>(
          <Card showPalate={showPalate} setShowPalate={setShowPalate} todo={todo} key={todo.color+indx} />
        ))
      }

    </div>
  )
}

export default GridView