import React, { useContext } from 'react'
import './styles.css'
import Card from '../../Cards';
import { Context } from '../../../Context/Provider';

function ListView() {

    const {todo} = useContext(Context);

    return (
        <div className='list-view'>
            {
                todo.map((todo, indx) => (
                    <Card curTodo={todo} key={todo.color + indx} listView={'yes'} />
                ))
            }
        </div>
    )
}

export default ListView