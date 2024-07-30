import { banners } from "./content";
import { Link } from "react-router-dom";

export default function SliderElement() {

    const content = banners.map((banner) => (
        <div
            key={banner.href}
            className={`carousel-item ${banner.active}`}
        >
            <div className="container">
                <div className="carousel-caption relative">
                    <div className="row d_flex">
                        <div className="col-lg-5">
                            <div className="creative">
                                <h1>{banner.title}</h1>
                                <p>{banner.content}</p>
                                <Link
                                    key={banner.href}
                                    className="read_more"
                                    to={`${banner.href}`}
                                >
                                    {banner.actionBtn}
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    ))

    return (
        <>
            {content}
        </>
    )

}