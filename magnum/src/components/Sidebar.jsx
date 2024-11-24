import './Sidebar.css'
import { useState } from 'react';
import { Menu } from 'lucide-react';


const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleSidebar = () => {
        setIsOpen(!isOpen)
    }
    return (
        <>
            <button 
                className={`hamburger-button ${isOpen ? 'sidebar-open' : ''}`}
                onClick={toggleSidebar}
            >
                <Menu size={30} />
            </button>
            
            <div className={`sidebar ${!isOpen ? 'collapsed' : ''}`}>
                <div className='sidebar-content'>
                    <nav>
                        <ul className='sidebar-nav'>
                            <li className='sidebar-nav-content'>home</li>
                            <li className='sidebar-nav-content'>search_history</li>
                            <li className='sidebar-nav-content'>settings</li>
                        </ul>
                    </nav>
                </div>
            </div>
            </>
    )
}

export default Sidebar