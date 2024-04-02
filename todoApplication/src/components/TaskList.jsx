//This component displays all the existing tasks and is responisble of editing and deleting them aswell

import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { List, ListItem, Checkbox, Typography, Button } from '@mui/material';
import { toggleTodo, deleteTodo, updateTodo } from '../redux/todoSlice';
import { shallowEqual } from 'react-redux';

import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';



const selectTodoList = state => state.todos.todo || [];



const TaskList = () => {
    const todo = useSelector(state => selectTodoList(state), shallowEqual);

    const dispatch = useDispatch();
    const [editId, setEditId] = useState(null);
    const [editValue, setEditValue] = useState('');

    const handleDone = (id) => {
        dispatch(toggleTodo(id));
    };

    const handleDelete = (id) => {
        dispatch(deleteTodo(id));
    };

    const handleEdit = (id, value) => {
        setEditId(id);
        setEditValue(value);
    };

    const handleSave = (id) => {
        dispatch(updateTodo({ id, text: editValue }));
        setEditId(null);
        setEditValue('');
    };

    return (
        <div>
            <List>
                {todo.map((td) => (
                    <ListItem divider key={td.id}>
                        <Checkbox style={{ transform: "scale(1.5)", }} checked={td.isDone} onClick={() => handleDone(td.id)} />
                        <Typography style={{ color: td.isDone ? "green" : "" }}>
                            {editId === td.id ? (
                                <input
                                    type="text"
                                    value={editValue}
                                    onChange={(e) => setEditValue(e.target.value)}
                                    className='text-lg bg-blue-300 border-solid border-black focus:border-black mr-2'
                                />
                            ) : (
                                td.val
                            )}
                        </Typography>
                        <Button variant='contained' sx={{ marginRight: 3, marginLeft: 2 }} onClick={() => handleEdit(td.id, td.val)}>Edit <EditIcon /> </Button>
                        <Button onClick={() => handleDelete(td.id)} color="secondary" variant="contained">Delete <DeleteIcon /> </Button>
                        {editId === td.id && (
                            <Button variant='contained' sx={{ marginLeft: 3 }} onClick={() => handleSave(td.id)}>Save <SaveIcon /> </Button>
                        )}
                    </ListItem>
                ))}
            </List>
        </div>
    );
};

export default TaskList;