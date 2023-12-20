import React from 'react';
import './styles.css'
import Card from '../../Cards';

function GridView({ todos }) {


  return (
    <div className='grid-view' >
      {
        todos.map((todo, indx) => (
          <Card todo={todo} key={todo.color + indx} list={'no'} />
        ))
      }

    </div>
  )
}

export default GridView