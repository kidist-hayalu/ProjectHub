import Card from '../Components/Card.jsx';
import Lists from '../Components/Lists.jsx';
import Button from '../Components/Button.jsx';
import SearchBox from '../Components/SearchBox.jsx';
import ToDo from '../Components/ToDo.jsx';
import NewProject from './NewProject.jsx';
import React, { useState } from 'react';
import { X } from 'lucide-react';
import Progress from '../Components/Progress.jsx';


function Project() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className='sticky'>
        <Lists />
      </header>
      <div className='container'>
        <div className='top-container mx-12'>
          
          <SearchBox className='flex items-center justify-self-center ml-40' />
          <button onClick={() => setIsOpen(!isOpen)}>New Project</button>

          {isOpen && (
            <div className='fixed inset-0 bg-black/30 backdrop-blur-md flex items-center justify-center z-50'>
              <div className='w-1/2 h-4/5 m-20 relative bg-white shadow-lg'>
                <NewProject className="shadow-lg w-96 p-6 rounded" />
                <div className='mt-4 flex absolute top-1 right-6 justify-end'>
                  <button onClick={() => setIsOpen(false)} className='p-2 rounded-full'><X /></button>
                </div>
              </div>
            </div>)}

        </div>
        <div className='min-container'>
          <div className='ToDo mr-3 mt-3 ml-4'>
            <Progress className='w-full' />
          </div>
          <div className='Cards mt-3 mr-3'>
            <h3 className='all-projects font-semibold text-3xl mt-3 ml-4'>All Projects</h3>
            <Card title="Most active" progress={60} />
            <Card title="Most progress" progress={80} />
            <Card title="Second active" progress={40} />
            <Card title="third active" progress={20} />
            <Card title="fourth active" progress={10} />
          </div>
          
        </div>
      </div>
    </>
  )
}

export default Project;