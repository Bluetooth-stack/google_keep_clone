import React, { useContext } from 'react';
import './styles.css';
import { Context } from '../../../Context/Provider';
import ErrorOutlinedIcon from '@mui/icons-material/ErrorOutlined';

function DeleteModal({ selectedTodo, setShowModal }) {

    const { todo, setTodo } = useContext(Context)

    function handleConfirmDelete() {
        setTodo(todo.filter((item) => (item.id !== selectedTodo.id)));
        setShowModal(false);
    }

    function handleNoDelete() {
        setShowModal(false);
    }

    return (
        <div className='modal-holder'>
            <div className='delete-confirm-modal'>
                <p className='alert-heading'>Delete Task!
                    <ErrorOutlinedIcon className='alert-icon' />
                </p>
                <p className='alert-message'>Are you sure you want to delete?</p>
                <div className='confirm-btn-holder'>
                    <div role='button' className='delete-btn btn' onClick={handleConfirmDelete}>Delete</div>
                    <div role='button' className='cancel-btn btn' onClick={handleNoDelete}>Cancel</div>
                </div>
            </div>
        </div>
    )
}

export default DeleteModal