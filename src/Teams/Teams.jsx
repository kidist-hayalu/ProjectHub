import { useState } from 'react';
import Lists from '../Components/Lists'
import SearchBox from '../Components/SearchBox';
import Data from '../assets/Data.json'
import Card from '../Components/Card.jsx'

function Teams() {




    const data = Data.map((dat) => dat.TeamMembers);
    const memberProgress = data.map((mp) => mp.progress);

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
                            {data.map((member, index) => (
                                <Card key={index} name={member.name} progress={member.progress} />
                            ))}
                        </div>
                    </div>
                </div>


            </div>
        </>
    )

}
export default Teams;