import React, { useState } from 'react';

function Todo(props) {
    const [isEdit, setIsEdit] = useState(false);

    const [todoContent, setTodoContent] = useState(props.content);


    const [editButtonText, setEditButtonText] = useState('Edit');
    const [deleteButtonText, setDeleteButtonText] = useState('Delete');
    const [editButtonColor, setEditButtonColor] = useState('green');
    const [deleteButtonColor, setDeleteButtonColor] = useState('red');

    const changeUI = (e) => {
        if (!isEdit) {
            setEditButtonText('Cancel')
            setEditButtonColor('orange')

            setDeleteButtonText('Done')
            setDeleteButtonColor('green')
        } else {
            setEditButtonText('Edit')
            setEditButtonColor('green')

            setDeleteButtonText('Delete')
            setDeleteButtonColor('red')
        };

    }

    const onClickEdit = (e) => {
        if (editButtonText === 'Edit') {
            setIsEdit(true);
            changeUI();
        }
        else {
            setIsEdit(false);
            changeUI();
        }

    };
    const onClickDelete = (e) => {
        if (deleteButtonText === "Delete") {
            props.deleteTodo(props.id);
        } else {
            props.editTodo(props.id, todoContent);
            setIsEdit(false);
            changeUI();
        }
    };



    return (
        <div className="todo">
            <div className="content">
                {isEdit
                    ? <input type="text" value={todoContent}
                        onChange={e => setTodoContent(e.target.value)} />
                    : <p>{props.content}</p>
                }
            </div>
            <hr />
            <div className="button">
                <button className="edit"
                    onClick={onClickEdit}
                    style={{ backgroundColor: editButtonColor }}>{editButtonText}</button>
                <button className="delete"
                    onClick={onClickDelete}
                    style={{ backgroundColor: deleteButtonColor }}>{deleteButtonText}</button>

            </div>
        </div >
    )
}

export default Todo