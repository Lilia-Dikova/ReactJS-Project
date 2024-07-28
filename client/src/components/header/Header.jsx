
import NavHeader from "./nav-header/NavHeader";
import TopHeader from "./top-header/TopHeader";

export default function Header() {
    return (
        <header className="header-area logo">
            <div className="container">
                <div className="row d_flex">
                    <TopHeader />
                    <NavHeader />
                </div>
            </div>
        </header>
    );
}