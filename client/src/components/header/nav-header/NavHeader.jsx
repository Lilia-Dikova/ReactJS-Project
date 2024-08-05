import {Link, NavLink} from 'react-router-dom';

export default function NavHeader() {

    const navigation = [
        { name: 'Home', href: '/' },
        { name: 'Blog', href: '/catalog' },
        { name: 'About', href: '/about' },
        { name: 'Mood Generator', href: '/mood' },
    ]
  
    return (
        <div className="col-md-12 col-sm-12">
            <div className="navbar-area">
                <nav className="site-navbar">
                    <ul>
                        {navigation.map(item => (
                            <li
                            key={item.name}
                            >
                                <NavLink 
                                className={({isActive}) => isActive ? 'active' : {}}
                                to={item.href}
                                >
                                    {item.name}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
               
                </nav>
                <ul className="email text_align_right">
                    <li>
                        <NavLink 
                         className={({isActive}) => isActive ? 'active' : {}}
                        to="/login"
                        >
                            Log In
                            </NavLink>
                    </li>
                    <li>
                        <NavLink 
                        className={({isActive}) => isActive ? 'active' : {}}
                        to="/register"
                        
                        >
                            Sign Up
                            </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    )
}