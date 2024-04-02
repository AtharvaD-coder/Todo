import React from 'react';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';

function App() {
 return (
    <div className='bg-slate-800 h-screen pt-10'>
      <div className='bg-blue-300 rounded-lg mx-5 '>
        <h1 className='text-slate-600 text-6xl flex justify-center mb-3'>Todo list</h1>
        <TaskInput className="mb-[-4]" />
        <div className='flex flex-col justify-center items-center mt-[-10]'>
          <TaskList />
        </div>
      </div>
    </div>
 );
}

export default App;
