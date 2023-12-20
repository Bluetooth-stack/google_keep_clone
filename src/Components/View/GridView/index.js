import React, { useContext } from 'react';
import './styles.css'
import Card from '../../Cards';
import { Context } from '../../../Context/Provider';

function GridView() {

  const { todo, filteredTodo } = useContext(Context)

  return (
    <div className='grid-view' >
      {
        filteredTodo.length ?
          filteredTodo.map((todo, indx) => (
            <Card curTodo={todo} key={todo.color + indx} listView={'no'} />
          ))
          :
          todo.map((todo, indx) => (
            <Card curTodo={todo} key={todo.color + indx} listView={'no'} />
          ))
      }

    </div>
  )
}

export default GridView