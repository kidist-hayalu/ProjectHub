import { BarChart3Icon, Settings, User } from "lucide-react";

function Lists() {

    const navBar = [
        { id: 1, name: 'Projects' },
        { id: 2, name: 'Teams' },
        { id: 3, name: 'Reports' },
        { id: 4, name: 'Chats' },
        { id: 5, name: 'Settings' }];

    const navBarItems = navBar.map((bar) => <li key={bar.id} className="navBarItems hover:scale-110">{bar.name}</li>);
    return (<>
        <header className='fixed top-0 left-0 w-full z-50 bg-white shadow-md bg-transparent'>
            <div className="sticky top-0">
                <nav className="nav py-2">
                    <div className="mr-96 flex justify-normal">
                        <div className="flex-1 justify-self-start bg-gradient-to-tr from-cyan-500 via-cyan-500 to-cyan-600 rounded">
                            <BarChart3Icon style={{ color: "white", width: `1.65rem`, height: `1.65rem` }} />
                        </div>
                        <div className="flex-1 text-2xl font-semibold font-heading ">
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
                    <div className="flex">
                        <img src="/assets/bell-solid-full.svg" alt="Notifications Icon" className="w-6 h-6 mr-4 hover:cursor-pointer hover:scale-110" />
                    </div>

                </nav>
            </div></header>
    </>
    )
}

export default Lists