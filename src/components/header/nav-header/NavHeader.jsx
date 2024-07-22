export default function NavHeader() {

    const navigation = [
        { name: 'Home', href: '/index.html' },
        { name: 'About', href: '/about' },
        { name: 'Blog', href: '/blog' },
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
                                <a className="active"
                                href={item.href}
                                >
                                    {item.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <button className="nav-toggler">
                        <span />
                    </button>
                </nav>
                <ul className="email text_align_right">
                    <li>
                        <a href="">Log In</a>
                    </li>
                    <li>
                        <a href="">
                            <i className="fa fa-search" aria-hidden="true" />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}