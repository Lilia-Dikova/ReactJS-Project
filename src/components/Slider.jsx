export default function Slider() {
    return (
        <div className="full_bg">
            <div className="slider_main">
                <div id="banner1" className="carousel slide">
                    <ol className="carousel-indicators">
                        <li data-target="#banner1" data-slide-to={0} className="active" />
                        <li data-target="#banner1" data-slide-to={1} />
                        <li data-target="#banner1" data-slide-to={2} />
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className="container">
                                <div className="carousel-caption relative">
                                    <div className="row d_flex">
                                        <div className="col-lg-5 offset-lg-7 col-md-7 offset-md-5">
                                            <div className="creative">
                                                <h1>We are help old people </h1>
                                                <p>
                                                    All the Lorem Ipsum generators on the Internet tend to
                                                    repeat predefined chunks as necessary, making this the
                                                    first true generator on the Internet. It uses a
                                                    dictionary of over 200 Latin words, combined with
                                                </p>
                                                <a className="read_more" href="">
                                                    Read More
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* second slide */}
                        <div className="carousel-item">
                            <div className="container">
                                <div className="carousel-caption relative">
                                    <div className="row d_flex">
                                        <div className="col-lg-5 offset-lg-7 col-md-7 offset-md-5">
                                            <div className="creative">
                                                <h1>We are help old people </h1>
                                                <p>
                                                    All the Lorem Ipsum generators on the Internet tend to
                                                    repeat predefined chunks as necessary, making this the
                                                    first true generator on the Internet. It uses a
                                                    dictionary of over 200 Latin words, combined with
                                                </p>
                                                <a className="read_more" href="">
                                                    Read More
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* third slide*/}
                        <div className="carousel-item">
                            <div className="container">
                                <div className="carousel-caption relative">
                                    <div className="row d_flex">
                                        <div className="col-lg-5 offset-lg-7 col-md-7 offset-md-5">
                                            <div className="creative">
                                                <h1>We are your best friend!</h1>
                                                <p>
                                                    All the Lorem Ipsum generators on the Internet tend to
                                                    repeat predefined chunks as necessary, making this the
                                                    first true generator on the Internet. It uses a
                                                    dictionary of over 200 Latin words, combined with
                                                </p>
                                                <a className="read_more" href="">
                                                    Read More
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* controls */}
                    <a
                        className="carousel-control-prev"
                        href="#banner1"
                        role="button"
                        data-slide="prev"
                    >
                        <i className="fa fa-angle-left" aria-hidden="true" />
                        <span className="sr-only">Previous</span>
                    </a>
                    <a
                        className="carousel-control-next"
                        href="#banner1"
                        role="button"
                        data-slide="next"
                    >
                        <i className="fa fa-angle-right" aria-hidden="true" />
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </div>
        </div>
    );
}