export default function NavHeader() {
    return (
        <div className="col-md-12 col-sm-12">
            <div className="navbar-area">
                <nav className="site-navbar">
                    <ul>
                        <li>
                            <a className="active" href="index.html">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="">About</a>
                        </li>
                        <li>
                            <a href="">Blog</a>
                        </li>
                        <li>
                            <a href="">Contact us</a>
                        </li>
                    </ul>
                    {/* <button className="nav-toggler">
                        <span />
                    </button> */}
                </nav>
                {/* <ul className="email text_align_right">
                    <li>
                        <a href="">Log In</a>
                    </li>
                    <li>
                        <a href="">
                            <i className="fa fa-search" aria-hidden="true" />
                        </a>
                    </li>
                </ul> */}
            </div>
        </div>
    )
}