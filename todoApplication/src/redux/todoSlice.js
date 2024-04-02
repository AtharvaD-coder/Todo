import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todos',
  initialState: { todo: [] }, 
  reducers: {
    addTodo: (state, action) => {
      state.todo.push(action.payload);
    },
    toggleTodo: (state, action) => {
      const todo = state.todo.find(todo => todo.id === action.payload);
      if (todo) {
        todo.isDone = !todo.isDone; 
      }
    },
    deleteTodo: (state, action) => {
      state.todo = state.todo.filter(todo => todo.id !== action.payload);
    },
    updateTodo: (state, action) => {
      const todo = state.todo.find(todo => todo.id === action.payload.id);
      if (todo) {
        todo.val = action.payload.text; 
      }
    },
  },
});

export const { addTodo, toggleTodo, deleteTodo, updateTodo } = todoSlice.actions;
export default todoSlice.reducer;