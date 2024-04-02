import React from 'react';
//importing both the components(for taking task input and for displaying them)
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';

function App() {
  return (
    <div className='bg-slate-800 h-screen pt-10'>
      <div className='bg-blue-300 rounded-lg mx-5 my-5 '>
        <h1 className='text-slate-600 text-6xl flex justify-center mb-8'>Todo list</h1>
        <TaskInput className="mb-[-9]" />
        <div className='flex flex-col justify-center items-center '>
          <TaskList />
        </div>
      </div>
    </div>
  );
}

export default App;
