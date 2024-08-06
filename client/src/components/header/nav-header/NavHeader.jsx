import { NavLink } from 'react-router-dom';
import { useAuthContext } from '../../../contexts/AuthContext';

export default function NavHeader() {

    let navigationPages = [
        { name: 'Home', href: '/' },
        { name: 'Blog', href: '/catalog' },
        { name: 'About', href: '/about' },
        { name: 'Mood Generator', href: '/mood' },
    ]

    let navigationUser = [
        { name: 'Login', href: '/login' },
        { name: 'Register', href: '/register' }
    ]

    const { isAuthenticated, username } = useAuthContext();

    if (isAuthenticated) {
        navigationUser = [
            { name: 'Logout', href: '/logout' }
        ];
        navigationPages.push({ name: 'Create', href: '/create' })

    }
    return (
        <div className="col-md-12 col-sm-12">
            <div className="navbar-area">
                <nav className="site-navbar">
                    <ul>
                        {navigationPages.map(item => (
                            <li
                                key={item.name}
                            >
                                <NavLink
                                    className={({ isActive }) => isActive ? 'active' : {}}
                                    to={item.href}
                                >
                                    {item.name}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </nav>

                <ul className="email text_align_right">
                    {navigationUser.map(item => (
                        <li
                            key={item.name}
                        >

                            <NavLink
                                className={({ isActive }) => isActive ? 'active' : {}}
                                to={item.href}
                            >
                                {item.name}
                            </NavLink>
                        </li>
                    ))}
                    {username && <p className='hello-user'>Hello {username}!🐾</p>}
                </ul>
            </div>
        </div>
    )
}