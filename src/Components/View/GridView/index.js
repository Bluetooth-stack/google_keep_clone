import React, { useState } from 'react'
import Card from '../../Cards';

function GridView() {
  const [showPalate, setShowPalate] = useState(false)
  return (
    <div
      className='grid-view'
      onClick={(e) => { e.stopPropagation(); setShowPalate(false) }}
    >
      
    </div>
  )
}

export default GridView