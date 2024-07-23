export default function Combined () {
    return (
        <div className="combined">
          <div className="clients_bg">
            <div className="container-fluid">
              <div className="row d_flex grig">
                <div className="col-lg-8">
                  {/* start slider section */}
                  <div
                    id="myCarousel"
                    className="carousel slide clients_banner"
                    data-ride="carousel"
                  >
                    <ol className="carousel-indicators">
                      <li
                        data-target="#myCarousel"
                        data-slide-to={0}
                        className="active"
                      />
                      <li data-target="#myCarousel" data-slide-to={1} />
                      <li data-target="#myCarousel" data-slide-to={2} />
                    </ol>
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                        <div className="container">
                          <div className="carousel-caption testimo">
                            <div className="row d_flex">
                              <div className="col-md-6">
                                <div className="dicti">
                                  <figure>
                                    <img src="images/test2.png" alt="#" />
                                  </figure>
                                  <h4>Dictionary</h4>
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="dicti">
                                  <figure>
                                    <img src="images/test3.png" alt="#" />
                                  </figure>
                                  <h4>chunks as necessary,</h4>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="carousel-item">
                        <div className="container">
                          <div className="carousel-caption testimo">
                            <div className="row d_flex">
                              <div className="col-md-6">
                                <div className="dicti">
                                  <figure>
                                    <img src="images/test2.png" alt="#" />
                                  </figure>
                                  <h4>Dictionary</h4>
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="dicti">
                                  <figure>
                                    <img src="images/test3.png" alt="#" />
                                  </figure>
                                  <h4>chunks as necessary,</h4>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="carousel-item">
                        <div className="container">
                          <div className="carousel-caption testimo">
                            <div className="row d_flex">
                              <div className="col-md-6">
                                <div className="dicti">
                                  <figure>
                                    <img src="images/test2.png" alt="#" />
                                  </figure>
                                  <h4>Dictionary</h4>
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="dicti">
                                  <figure>
                                    <img src="images/test3.png" alt="#" />
                                  </figure>
                                  <h4>chunks as necessary,</h4>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <a
                      className="carousel-control-prev"
                      href="#myCarousel"
                      role="button"
                      data-slide="prev"
                    >
                      <i className="fa fa-arrow-left" aria-hidden="true" />
                      <span className="sr-only">Previous</span>
                    </a>
                    <a
                      className="carousel-control-next"
                      href="#myCarousel"
                      role="button"
                      data-slide="next"
                    >
                      <i className="fa fa-arrow-right" aria-hidden="true" />
                      <span className="sr-only">Next</span>
                    </a>
                  </div>
                </div>
                <div className="col-lg-4 order">
                  <div className="titlepage text_align_left">
                    <h2>Uses a dictionary of over 200 Latin words, combined </h2>
                    <p>
                      All the Lorem Ipsum generators on the Internet tend to repeat
                      predefined chunks as necessary, making this the first true
                      generator on the Internet. It uses a dictionary of over 200
                      Latin words, combined withAll the Lorem{" "}
                    </p>
                    <a className="read_more" href="#">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
}