import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './todoSlice';

const localStorageMiddleware = store => next => action => {
  const result = next(action);
  localStorage.setItem('todos', JSON.stringify(store.getState().todos));
  return result;
};

const preloadedState = {
  todos: JSON.parse(localStorage.getItem('todos')) || { todo: [] },
};

const store = configureStore({
  reducer: {
    todos: todoReducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(localStorageMiddleware),
  preloadedState,
});

export default store;