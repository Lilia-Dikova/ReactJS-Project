import { banners } from "./content"

export default function SliderElement() {


    const content = banners.map((banner) => (
        <div className={`carousel-item ${banner.active}`}>
            <div className="container">
                <div className="carousel-caption relative">
                    <div className="row d_flex">
                        <div className="col-lg-5">
                            <div className="creative">
                                <h1>{banner.title}</h1>
                                <p>{banner.content}</p>
                                <a className="read_more" href={`http://localhost:5174/${banner.href}`}>
                                    {banner.actionBtn}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    ))

    return  (
        <>
        {content}
        </>
    )

}