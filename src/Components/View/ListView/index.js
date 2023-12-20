import React, { useContext } from 'react'
import './styles.css'
import Card from '../../Cards';
import { Context } from '../../../Context/Provider';
import ReportIcon from '@mui/icons-material/Report';

function ListView() {

    const { todo, filteredTodo, searched } = useContext(Context);

    return (
        <div className='list-view'>
            {
                searched.length && !filteredTodo.length ?
                    <div className='empty-search-placeholder'>
                        <ReportIcon className='notFound-icon' />
                        <p className='notFound-message'>No matches found!</p>
                    </div>
                    :
                    filteredTodo.length ?
                        filteredTodo.map((todo, indx) => (
                            <Card curTodo={todo} key={todo.color + indx} listView={'yes'} />
                        ))
                        :
                        todo.map((todo, indx) => (
                            <Card curTodo={todo} key={todo.color + indx} listView={'yes'} />
                        ))
            }
        </div>
    )
}

export default ListView