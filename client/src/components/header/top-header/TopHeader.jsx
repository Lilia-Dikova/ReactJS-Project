import ContactInfo from "./contact-info/ContactInfo";
import { Logo } from "./logo/Logo";
import SocialIcons from "./social-icons/SocialIcons";

export default function TopHeader() {
    return (
        <div className="col-md-12">
            <div className="header_top">
                <div className="row">
                    <ContactInfo />
                    <Logo />
                    <SocialIcons />
                </div>
            </div>
        </div>
    )
}