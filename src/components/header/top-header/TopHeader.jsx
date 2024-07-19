import { Logo } from "./logo/Logo";
import SocialIcons from "./social-icons/SocialIcons";

export default function TopHeader() {
    return (
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
                    <Logo />
                    <SocialIcons />
                </div>
            </div>
        </div>
    )
}