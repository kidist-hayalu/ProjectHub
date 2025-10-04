import { BarChart3Icon, Settings, User } from "lucide-react";
import { Link } from "lucide-react";

function HomepageNav() {

    const navBar = [
        { id: 1, name: 'About Us' },
        { id: 2, name: 'Community' },
        { id: 3, name: 'Services' },
        { id: 4, name: 'Contact' },
        { id: 5, name: 'Settings' }];

    const navBarItems = navBar.map((bar) => <li key={bar.id} className="navBarItems hover:scale-110">{bar.name}</li>);
    
    return(
        <>
        <header className='fixed top-0 left-0 w-full z-50 bg-white shadow-md bg-transparent'>
        <div className="sticky top-0">
            <nav className="nav py-2">
                <div className="mr-96 flex justify-normal">
                    <div className="flex-1 justify-self-start bg-gradient-to-tr from-blue-500 via-blue-500 to-blue-600 rounded">
                        <BarChart3Icon style={{ color: "white", width: `1.65rem`, height: `1.65rem` }} />
                    </div>
                    <div className="flex-1 text-2xl font-bold ">
                        <h2 >ProjectHub</h2>
                    </div>

                </div>
                <ul className="list-none flex justify-center items-center gap-8 mr-80">{navBarItems}</ul>

                <div className="flex flex-row items-center">
                    <div className="bg-cyan-500 rounded-full p-1 hover:scale-110 hover:cursor-pointer">
                        <User size={18} />
                    </div>
                
                <p className="ml-1 text-base hover:cursor-pointer hover:scale-90">Sign In</p>
                </div>
            </nav>
        </div></header>
        </>
    )
}

export default HomepageNav;