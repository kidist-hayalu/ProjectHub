import { useState, useEffect } from 'react';
import Lists from '../Components/Lists'
import SearchBox from '../Components/SearchBox';
import Data from '../assets/Data.json'

function Teams() {

    const [filter, setFilter] = useState("");
    const [isOpen, setIsOpen] = useState(null);
    const [filterOptions, setFilterOptions] = useState("all");

    const data = Data.map((dat) => dat.TeamMembers);
    const type = Data.map((ti) => ti.ProjectType);

    const filteredTypes = Data.filter(project => {
        if (filterOptions === "all")
            return true;
        if (filterOptions === "individual")
            return project.TeamMembers.length === 1;
        if (filterOptions === "team")
            return project.TeamMembers.length > 1;

        return true;
    });


    return (
        <>
            <Lists />
            <div className='container px-16'>
                <div className='top-container mx-12 mt-16'>

                    <SearchBox className='flex items-center justify-self-center ml-40' />
                </div>
                <div className='flex flex-col items-center justify-center w-full mx-12 mt-8 p-6 '>
                    <div className='flex flex-row items-center justify-center w-full'>
                        <h2 className='font-bold font-heading text-3xl w-1/3 flex items-start justify-self-start'>{filterOptions.charAt(0).toUpperCase() + filterOptions.slice(1)} Teams</h2>
                        <div className='mx-4 w-1/4'>
                            <select id='filterOptions' value={filterOptions} onChange={e => setFilterOptions(e.target.value)} className='border rounded font-heading flex items-center justify-center w-full'>
                                <option className='font-heading' value="all">All Projects</option>
                                <option className='font-heading' value="individual">Individual Projects</option>
                                <option className='font-heading' value="team">Team Projects</option>
                            </select></div>
                    </div>
                    <div className='mx-12 w-full flex items-start justify-start'>
                        <div className='w-full'>
                            {filteredTypes.map((title, index) => (<div className='border flex flex-col p-2 list-none my-2 w-4/5' key={index}>
                                <div className='flex flex-row items-center justify-between'>
                                    <li className=' font-heading font-semibold text-lg'>{title.ProjectTitle}</li>
                                    <button className='text-sans text-sm transition-all duration-700 ease-in-out' onClick={() => { setIsOpen(isOpen === index ? null : index); }}>Members</button>
                                </div>
                                {isOpen === index && (
                                    <div className='flex items-start justify-start flex-col overflow-hidden origin-top transition-all duration-700 ease-in-out w-full'>
                                        <ul className='w-full'>{title.TeamMembers.map((n, nIndex) => (<div className='w-full flex'>
                                            <li className='list-none mx-12 my-2 w-full' key={nIndex}>
                                                <h3 className='text-lg font-semibold'>{n.name}</h3>
                                                <p className='opacity-85 text-sm'>{n.activity}</p>
                                                <div className='outerbox border-2 my-2 box-border rounded-xl overflow-hidden border-block-500 w-3/4'>
                                                    <div className='innerbox text-right text-white h-full bg-cyan-600' style={{ width: `${n.progress}%`, transition: `width 0.5s ease` }}>{n.progress}%</div>
                                                </div>
                                                

                                                </li>
                                            </div>
                                            ))}</ul>
                                    </div>
                                )}
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