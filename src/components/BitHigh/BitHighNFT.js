import React from 'react';
import { Link } from 'react-router-dom';
import './bithigh.scss';
import OwlCarousel from 'react-owl-carousel';
import { useSelector } from 'react-redux'
const BitHighNFT = () => {
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
                            <div className="home-upper-line">
                                <h3>Home / <span>Nft</span> / <span className="cjb">BscMomsNFT</span></h3>
                            </div>
                        </div>
                    </div>
                </div>
                <section className="Bithigh-NFT">
                    <div className="nfts-profiles">
                        <div className="container-fluid p-0">
                            <div className="row">
                                <div className="col-sm-11 m-auto">
                                    <div className="detailss">
                                        <div className="row">
                                            <div className="col-lg-5 col-12 pl-md-0">
                                                <div className="main-bithigh-image">
                                                    <img src="\coinhunt\Web - Light\2166888.png" alt="" className="img-fluid" />
                                                </div>
                                            </div>
                                            <div className="col-lg-7 col-12 pr-md-0">
                                                <div className="right-side-nft">
                                                    <div className="upper-dks align-items-center">
                                                        <div className="left-name">
                                                            <h3>BscMomsNFT</h3>
                                                        </div>
                                                        <div className="right-namekcm">
                                                            <button className="bvhjr">
                                                                <img src="\coinhunt\Web - Light\color.svg" alt="" className="img-fluid" />
                                                                <p>21667</p>
                                                            </button>
                                                        </div>
                                                    </div>
                                                    <div className="right-divs mt-4 d-sm-none d-block">
                                                        <Link><img src="\coinhunt\Web - Light\Frame 275.svg" alt="" className="img-fluid" /></Link>
                                                        <Link><img src="\coinhunt\Web - Light\Frame 276.svg" alt="" className="img-fluid" /></Link>
                                                        <Link><img src="\coinhunt\Web - Light\Frame 277.svg" alt="" className="img-fluid" /></Link>
                                                    </div>
                                                    <div className="linksss">
                                                        <div className="left-divs d-sm-block d-none">
                                                            <h5>Website</h5>
                                                            <p>http://bscfamilynft.com/</p>
                                                        </div>
                                                        <div className="right-divs d-sm-block d-none">
                                                            <Link><img src="\coinhunt\Web - Light\Frame 275.svg" alt="" className="img-fluid" /></Link>
                                                            <Link><img src="\coinhunt\Web - Light\Frame 276.svg" alt="" className="img-fluid" /></Link>
                                                            <Link><img src="\coinhunt\Web - Light\Frame 277.svg" alt="" className="img-fluid" /></Link>
                                                        </div>
                                                    </div>
                                                    <div className='linksss-mobile d-flex justify-content-between align-items-center mt-4 w-100 d-block d-sm-none'>
                                                        <div className='left-mobile'>
                                                            <h5>Website</h5>
                                                            <p>http://bscfamilynft.com/</p>
                                                        </div>
                                                        <div className='left-mobile'>
                                                            <h5>Floor price</h5>
                                                            <p>0.08 BNB</p>
                                                        </div>
                                                    </div>
                                                    <div className="kjasbcijw d-sm-block d-none">
                                                        <div className="jshvcd">
                                                            <h5>Market Cap</h5>
                                                            <p>0.08 BNB</p>
                                                        </div>
                                                        <div className="jshvc">
                                                            <h5>Launch Date</h5>
                                                            <p>1d 9h 16m 40s</p>
                                                        </div>
                                                    </div>
                                                    <div className="ajsbsjkc">
                                                        <p className="mt-4">What are we?<br></br>
                                                            The family is made up of BscMoms, BscDads & BscKids.<br></br>
                                                            Moms will be the first drop of the BscFamily.</p>
                                                        <p className="mt-4">BscMoms is a collection of 10000 unique Moms that are members of the BscFamily living on the BSC blockchain.<br></br> Each Mom is uniquely generated with traits assigned at mint.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="container-fluid p-0">
                            <div className="row">
                                <div className="col-sm-11 m-auto">
                                    <div className="heading-mainss">
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
                                                    <Link to="#">
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
                </section>
            </div>
        </>
    )
}

export default BitHighNFT;
