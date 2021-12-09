import React from 'react';
import { Link } from 'react-router-dom';
import './nft.scss';
import OwlCarousel from 'react-owl-carousel';
import { useSelector } from 'react-redux'
const NFts = () => {
    const lightMode = useSelector((state) => state.themereducer.lightMode)
    const owl_option = {
        nav: true,
        dots: false,
        dotsEach: false,
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        // navText: ["<i class='fa fa-long-arrow-left'></i>", "<i class='fa fa-long-arrow-right'></i>"],
        responsive: {
            0: {
                items: 2,
                stagePadding: -100,
                margin: 10,
            },
            400: {
                items: 2,
                stagePadding: -100,
                margin: 15,
            },
            600: {
                items: 2,
                stagePadding: -100,
                margin: 10,
            },
            700: {
                items: 3,
                stagePadding: 10,
                margin: 10,

            },
            1000: {
                items: 4,
                stagePadding: 10,
                margin: 32,

            },
            1200: {
                items: 5,
                stagePadding: 10,
                margin: 32,

            }
        },
    };
    return (
        <>
            <div className={lightMode ? "" : "light"}>
                <div className="container-fluid p-0">
                    <div className="row">
                        <div className="col-sm-11 m-auto">
                            <div className="heading-main">
                                <h3>NFTs</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <section className="Nfts-outer">
                    <div className="container-fluid p-0">
                        <div className="row">
                            <div className="col-sm-11 m-auto">
                                <div className="Nfts">
                                    <div className="first-second">
                                        <OwlCarousel className="slider-items owl-carousel ltf-owl" autoplaySpeed={3000}  {...owl_option}>
                                            <Link to="/BitNFT">
                                                <div className="item mt-2">
                                                    <div className="main-card text-center">
                                                        <div className="icon">
                                                            <img src="\coinhunt\Web - Light\Web - Light\image 8.png" alt="" className="img-fluid" />
                                                        </div>
                                                        <div className="lower">
                                                            <div className="text-down">
                                                                <h4>
                                                                    Rainbox Cat
                                                                </h4>
                                                            </div>
                                                            <div className="level-items d-flex justify-content-center align-items-center">
                                                                <img src="\coinhunt\Web - Light\color.svg" alt="" className="img-fluid" /> <p>22</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                            <Link to="#">
                                                <div className="item mt-2">
                                                    <div className="main-card text-center">
                                                        <div className="icon">
                                                            <img src="\coinhunt\Web - Light\Web - Light\image 9.png" alt="" className="img-fluid" />
                                                        </div>
                                                        <div className="lower">
                                                            <div className="text-down">
                                                                <h4>
                                                                    Rainbox Cat
                                                                </h4>
                                                            </div>
                                                            <div className="level-items d-flex justify-content-center align-items-center">
                                                                <img src="\coinhunt\Web - Light\color.svg" alt="" className="img-fluid" /> <p>22</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                            <Link to="#">
                                                <div className="item mt-2">
                                                    <div className="main-card text-center">
                                                        <div className="icon">
                                                            <img src="\coinhunt\Web - Light\Web - Light\image 11.png" alt="" className="img-fluid" />
                                                        </div>
                                                        <div className="lower">
                                                            <div className="text-down">
                                                                <h4>
                                                                    Rainbox Cat
                                                                </h4>
                                                            </div>
                                                            <div className="level-items d-flex justify-content-center align-items-center">
                                                                <img src="\coinhunt\Web - Light\color.svg" alt="" className="img-fluid" /> <p>22</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                            <Link to="#">
                                                <div className="item mt-2">
                                                    <div className="main-card text-center">
                                                        <div className="icon">
                                                            <img src="\coinhunt\Web - Light\Web - Light\image 12.png" alt="" className="img-fluid" />
                                                        </div>
                                                        <div className="lower">
                                                            <div className="text-down">
                                                                <h4>
                                                                    Rainbox Cat
                                                                </h4>
                                                            </div>
                                                            <div className="level-items d-flex justify-content-center align-items-center">
                                                                <img src="\coinhunt\Web - Light\color.svg" alt="" className="img-fluid" /> <p>22</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                            <Link to="#">
                                                <div className="item mt-2">
                                                    <div className="main-card text-center">
                                                        <div className="icon">
                                                            <img src="\coinhunt\Web - Light\Web - Light\image 13.png" alt="" className="img-fluid" />
                                                        </div>
                                                        <div className="lower">
                                                            <div className="text-down">
                                                                <h4>
                                                                    Rainbox Cat
                                                                </h4>
                                                            </div>
                                                            <div className="level-items d-flex justify-content-center align-items-center">
                                                                <img src="\coinhunt\Web - Light\color.svg" alt="" className="img-fluid" /> <p>22</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                        </OwlCarousel>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            
            </div>
        </>
    )
}

export default NFts;
