import { useState, useEffect } from 'react';
import Lists from '../Components/Lists'
import SearchBox from '../Components/SearchBox';
import Data from '../assets/Data.json'
import Card from '../Components/Card.jsx'

function Teams() {

    const [isOpen, setIsOpen] = useState(null);
    const data = Data.map((dat) => dat.TeamMembers);
    const memberProgress = data.map((mp) => mp.progress);
    
    useEffect(() => {

        <div>{Data.ProjectTitle}</div>
        
    }
        ,[isOpen])

    return (
        <>
            <Lists />
            <div className='container px-16'>
                <div className='top-container mx-12 mt-16'>

                    <SearchBox className='flex items-center justify-self-center ml-40' />
                </div>
                <div className='flex flex-col items-center justify-center w-full mx-12 mt-8 p-6 rounded shadow-md'>
                    <div className='font-bold font-heading text-3xl flex items-start justify-start w-full'>
                        <h2 >All Teams</h2>
                    </div>
                    <div className='mx-12 w-full flex items-start justify-start'>
                        <div className='w-full'>
                            {Data.map((title, index) => (<div className='border flex flex-row' key={index}>
                                <li className='w-1/2'>{title.ProjectTitle}</li>
                                <button className='flex items-center justify-self-center' onClick={() => {setIsOpen(isOpen === index ? null : index);}}>show members</button>
                                {isOpen === index &&
                                <div className='flex items-start justify-start flex-col'>
                                   <ul>{title.TeamMembers.map((n, nIndex) => (<li className='list-none' key={nIndex}>{n.name}</li>))}</ul>
                                    </div>
                                }
                            </div>
                            ))}
                        </div>
                    </div>
                </div>


            </div>
        </>
    )

}
export default Teams;