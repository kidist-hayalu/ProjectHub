import Lists from '../Components/Lists.jsx';
import { Link } from 'react-router-dom'

function Homepage() {
    return (
        <>
            <header>
                <Lists />
            </header>
            <div className='container'>
                <div className='pb-10 flex flex-col items-center justify-center bg-gradient-to-br from-cyan-700 via-cyan-800 to-cyan-900'>
                    <h1 className='text-4xl font-bold text-center text-white mt-20'>Welcome to ProjectHub</h1>
                    <p className='text-white p-3 font-semibold text-center'>Where your projects come to life and your team becomes one </p>
                    <div className='p-2 rounded-3xl bg-cyan-700  backdrop-blur-lg backdrop-opacity-25  hover:bg-cyan-800 transition duration-200 hover:scale-105'>
                        <Link to={'/Login'} className='text-white '>Start project</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Homepage;