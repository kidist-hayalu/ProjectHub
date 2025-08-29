import {X} from'lucide-react';
import PropTypes from 'prop-types'
import React, { useEffect, useState } from 'react';
import ToDo from './ToDo';


function Card(props){

    const [progress, setProgress] = useState(props.progress);
    const [team, setTeam] = useState([]);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        setProgress(0);
        setTimeout(() => {
            setProgress(props.progress);
        }, 500);
        return() => clearTimeout();
    },[props.progress]);

    function handleProgress() {
        setProgress(p => Math.min(p + 10, 100));
    }
    

    return (
        <div className="card-container p-3 flex flex-col">
            <div className='flex flex-row'>
                <h1 className='w-4/5'>{props.title}</h1>
                <button className='justify-self-end ml-32 top-0 p-0 rounded-sm mb-2 w-1/5' onClick={() => setIsOpen(true)}>To Do List</button>
                {isOpen && (
                    <div className='fixed inset-0 bg-black/30 backdrop-blur-md flex items-center justify-center z-50'>
                        <div className='w-1/2 h-4/5 m-20 relative bg-white shadow-lg'>
                            <ToDo className= 'shadow-lg w-96 p-6 rounded' />
                            <div className='mt-4 flex absolute top-1 right-6 justify-end'>
                                <button onClick={() => setIsOpen(false)} className='p-2 rounded-full'><X /></button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
            
                <p >This is the progress of {props.title}</p>
                
            
            
            <div className='outerbox border-2 box-border rounded-xl overflow-hidden border-black-500'>
                <div className='innerbox  text-right text-white bg-blue-500 h-full' style={{ 
                    width: `${progress}%`,
                    transition: `width 0.5s ease`}}>{progress}%</div>
            </div>
        </div>
    )
}

Card.propTypes = {
    title: PropTypes.string,
    progress: PropTypes.number
}
Card.defaultProps = {
    title: "New Project",
    progress: 0
}

export default Card