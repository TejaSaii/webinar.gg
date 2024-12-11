import './App.css'
import Button from '../components/Button';
import Navbar from '../components/Navbar';
import Input from '../components/Input.jsx';
import { useState } from 'react';

function App() {
  const [disabled, setDisabled] = useState(true);

  return (
    <div className='h-screen bg-blue-800'>
    <Navbar />
    <section className='flex justify-center'>
      <div className="flex flex-col items-center w-0.75">
        <h1 className="text-white font-bold text-xl my-4">Verify Your Age</h1>
        <p className='text-blue-200 my-4'>Please confirm your birth year. This data will not be stored.</p>
        <Input className='px-8 py-4 rounded w-4/5 bg-blue-500 text-white' placeholder='Your Birth Year' setDisabled={setDisabled}/>
        <Button disabled={disabled} label="Continue" />
      </div>
    </section>
    </div>
  )
}

export default App
