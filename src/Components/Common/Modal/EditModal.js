import React, { useContext, useState } from 'react';
import './styles.css'
import TaskInput from '../../TaskInput';
import { Context } from '../../../Context/Provider';

function EditModal({ curTodo, setShowModal }) {

    const [editedTitle, setEditedTitle] = useState(curTodo.title)
    const [editedContent, setEditedContent] = useState(curTodo.content)
    const [editedColor, setEditedColor] = useState(curTodo.color)
    const [openEditInputBox, setOpenEditInputBox] = useState(true)
    const { todo, setTodo } = useContext(Context)

    function handleCreate() {
        if (editedTitle !== curTodo.title || editedContent !== curTodo.content || editedColor !== curTodo.color) {
            let editedTodo = todo.map((item) => {
                if (curTodo.id === item.id) {
                    return { ...item, title: editedTitle, content: editedContent, color: editedColor }
                }
                else {
                    return item
                }
            })
            setTodo(editedTodo);
            setShowModal(false)
        }
        else {
            setShowModal(false)
            return;
        }
    }

    return (
        <div className='modal-holder' onClick={()=>{setShowModal(false)}}>
            <TaskInput
                title={editedTitle} setTitle={setEditedTitle}
                content={editedContent} setContent={setEditedContent}
                selectedColor={editedColor} setSelectedColor={setEditedColor}
                handleCreate={handleCreate} btnText={'Change'}
                openInput={openEditInputBox} setOpenInput={setOpenEditInputBox}
            />
        </div>
    )
}

export default EditModal