import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { fetchList } from './components/toDoListSlice';

import ToDoList from "./components/ToDoList";
import LogForm from  "./components/LogForm";
import Welcome from './components/Welcome'

import { MdOutlineLightMode, MdOutlineDarkMode } from 'react-icons/md'



function App() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.toDoList.user);

  const [mode, setMode] = useState('light')

  useEffect(() => {
    // Add listener to update styles
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => setMode(e.matches ? 'dark' : 'light'));

    // Setup dark/light mode for the first time
    setMode(window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')

    // Remove listener
    return () => {
      window.matchMedia('(prefers-color-scheme: dark)').removeEventListener('change', () => {
      });
    }
  }, []);

  useEffect(() => {
    if (mode === "dark") {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [mode])

  useEffect(() =>{
    dispatch(fetchList());
}, [dispatch]);

  const switchMode = () => setMode((state) => {
    if(state === "dark") return "light"
    else return "dark" 
  })

  return (
    <div className='w-full min-h-screen flex items-center flex-col bg-slate-50 dark:bg-gray-500 text-gray-700 dark:text-gray-100 pt-10'> 
      <button 
        className='absolute right-5 top-5 text-4xl dark:text-yellow-300' 
        onClick={switchMode}>
          {mode === "light" ? <MdOutlineDarkMode/> :  <MdOutlineLightMode/> }
      </button>
      {user ?  <ToDoList/> : <div> <Welcome/> <LogForm/> </div> }
    </div>
  );
}

export default App;
