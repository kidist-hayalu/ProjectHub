import {Search, X} from 'lucide-react';
import { useState } from 'react';
import Data from '../assets/Data.json';

function SearchBox(){

    const [query, setQuery] = useState('');

    function handleChange(event){
        setQuery(event.target.value);
    }

    function handleClick(){
        setQuery("");
    }

    function clearButton(){
        if(!query)
            return null;
        return (
            <button onClick={handleClick} className="text-gray-400 hover:text-gray-600"aria-label="Clear search">
                <X className='w-4 h-4' />
            </button>
        );
    }
    return (
       
        <div className="flex items-center border border-gray-300 rounded-xl px-3 py-2 w-full max-w-md shadow-sm hover:shadow-md transition-shadow">  
            <div className="flex items-center flex-1 w-5 h-3 text-gray-500 mr-2" >   
                <input type="text" placeholder="Search..." value={query} onChange={handleChange} className="flex-1 outline-none bg-transparent text-gray-700 placeholder-gray-400" />
                <Search className="w-5 h-4 text-gray-500 mr-2 opacity-70" onClick={handleClick}/>
            </div>
        </div>
    )
}

export default SearchBox