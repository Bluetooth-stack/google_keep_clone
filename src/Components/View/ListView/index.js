import React from 'react'
import './styles.css'
import Card from '../../Cards';

function ListView({todos}) {
    return (
        <div className='list-view'>
            {
                todos.map((todo, indx) => (
                    <Card todo={todo} key={todo.color + indx} list={'yes'} />
                ))
            }
        </div>
    )
}

export default ListView