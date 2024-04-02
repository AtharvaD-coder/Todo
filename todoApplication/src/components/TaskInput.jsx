//this component takes task input from user and then adds it into the array with other tasks

import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { TextField, Button } from '@mui/material';
import { addTodo } from '../redux/todoSlice';

import AddTaskIcon from '@mui/icons-material/AddTask';

const TaskInput = () => {
    const [inputVal, setInputVal] = useState("");
    const dispatch = useDispatch();

    const handleOnChange = (e) => {
        setInputVal(e.target.value);
    };

    const handleOnClick = () => {
        dispatch(addTodo({ val: inputVal, isDone: false, id: new Date().getTime() }));
        setInputVal("");
    };

    return (
        <div>
            <TextField onChange={handleOnChange} id="outlined-basic" label="" variant="outlined" placeholder='Enter task...' sx={{ width: '70%', marginBottom: 30, marginLeft: 5 }} />
            <Button onClick={handleOnClick} variant="contained" sx={{ marginLeft: 2, marginTop: 1, }}>Add Task  <AddTaskIcon /> </Button>
        </div>
    );
};

export default TaskInput;
