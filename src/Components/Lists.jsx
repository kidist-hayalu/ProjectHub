import { BarChart3Icon } from "lucide-react";

function Lists() {

    const navBar = [
        { id: 1, name: 'Projects' },
        { id: 2, name: 'Tasks' },
        { id: 3, name: 'Teams' },
        { id: 4, name: 'Reports' },
        { id: 5, name: 'Settings' }];

    const navBarItems = navBar.map((bar) => <li key={bar.id} className="navBarItems">{bar.name}</li>);
    return (
        <div className="sticky top-0">
            <nav className="nav py-2">
                <div className="mr-96 flex justify-normal">
                    <div className="flex-1 justify-self-start bg-gradient-to-tr from-blue-500 via-blue-500 to-blue-600 rounded ">
                        <BarChart3Icon style={{ color: "white", width: `1.65rem`, height: `1.65rem` }} />
                    </div>
                    <div className="flex-1 text-2xl font-bold ">
                        <h2 >ProjectHub</h2>
                    </div>
                    
                </div>
                <ul className="list-none flex justify-center items-center gap-8 mr-96">{navBarItems}</ul>
            </nav>
        </div>
    )
}

export default Lists