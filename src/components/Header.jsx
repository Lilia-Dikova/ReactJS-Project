import { Logo } from "./Logo";

export default function Header() {
    return (
        <header className="header-area">
            <div className="container">
                <div className="row d_flex">
                    <div className="col-md-12">
                        <div className="header_top">
                            <div className="row">
                                <div className="col-md-4 d_none">
                                    <ul className="top_info">
                                        <li>
                                            <i className="fa fa-phone" aria-hidden="true" />
                                            Call : +01 1234567890
                                        </li>
                                        <li>
                                            <i className="fa fa-envelope" aria-hidden="true" />
                                            <a href="mailto:admin@petacat.biz">admin@petacat.biz</a>
                                        </li>
                                    </ul>
                                </div>
                                < Logo/>
                                <div className="col-md-4 d_none">
                                    <ul className="social_icon text_align_right">
                                        <li>
                                            <a href="">
                                                <i className="fa fa-facebook" aria-hidden="true" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="">
                                                <i className="fa fa-twitter" aria-hidden="true" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="">
                                                <i className="fa fa-linkedin" aria-hidden="true" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="">
                                                <i className="fa fa-instagram" aria-hidden="true" />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
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
                                        <a href="about.html">About</a>
                                    </li>
                                    <li>
                                        <a href="blog.html">Blog</a>
                                    </li>
                                    <li>
                                        <a href="contact.html">Contact us</a>
                                    </li>
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
                </div>
            </div>
        </header>
    );
}