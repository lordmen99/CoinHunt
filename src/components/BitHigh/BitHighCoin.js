import React from 'react';
import { Link } from 'react-router-dom';
import './bithigh.scss';
import OwlCarousel from 'react-owl-carousel';
import { useSelector } from 'react-redux'
const BitHighCoin = () => {
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
                                                    <img src="\coinhunt\Web - Light\bithigh-image.png" alt="" className="img-fluid" />
                                                </div>
                                            </div>
                                            <div className="col-lg-7 col-12 pr-md-0">
                                                <div className="right-side-nft">
                                                    <div className="upper-dks">
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
                                                    <div className="linkssssdhg">
                                                        <p>Binance Smart Chain : <span>0xfbc6a41c0a436cc7a11ce27f85ddf3121fcc00cf<button className="ml-4"><img src="\coinhunt\Web - Light\feather_copy.svg" alt="" className="img-fluid" /></button></span></p>
                                                        <div className="right-divs">
                                                            <Link><img src="\coinhunt\Web - Light\Frame 275.svg" alt="" className="img-fluid" /></Link>
                                                            <Link><img src="\coinhunt\Web - Light\Frame 276.svg" alt="" className="img-fluid" /></Link>
                                                            <Link><img src="\coinhunt\Web - Light\Frame 277.svg" alt="" className="img-fluid" /></Link>
                                                            <Link><img src="\coinhunt\Web - Light\Frame 278.svg" alt="" className="img-fluid" /></Link>
                                                        </div>
                                                    </div>
                                                    <div className="kjasbcijw">
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
                                                        <p className="mt-4">An elastic supply token will expand or contract its circulating supply depending on where it trades relative to its peg price.</p>
                                                        <p className="mt-4">BITHIGH is mathematically designed to increase in price every 12 hours, allowing you to be worry-free knowing your investment is protected through a constantly increasing liquidity pool solidifying the price floor.</p>
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
                                        <h3>Discover</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="discover-down">
                            <div className="container-fluid p-0">
                                <div className="row">
                                    <div className="col-sm-11 m-auto">
                                        <div className="discover-downss">
                                            <div className="row">
                                                <div className="col-sm-4 mb-4">
                                                    <div className="sjchb">
                                                        <div className="images-logod">
                                                            <img src="\coinhunt\Web - Light\bithigh-1.svg" alt="" className="img-fluid" />
                                                        </div>
                                                        <div className="texts">
                                                            <h5>Addiction</h5>
                                                            <p>ADC</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-sm-4 mb-4">
                                                    <div className="sjchb">
                                                        <div className="images-logod">
                                                            <img src="\coinhunt\Web - Light\bithigh-2.svg" alt="" className="img-fluid" />
                                                        </div>
                                                        <div className="texts">
                                                            <h5>Cryptojaguars</h5>
                                                            <p>ADC</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-sm-4 mb-4">
                                                    <div className="sjchb">
                                                        <div className="images-logod">
                                                            <img src="\coinhunt\Web - Light\bithigh-3.svg" alt="" className="img-fluid" />
                                                        </div>
                                                        <div className="texts">
                                                            <h5>PurpleBabydoge</h5>
                                                            <p>ADC</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-sm-4 mb-4">
                                                    <div className="sjchb">
                                                        <div className="images-logod">
                                                            <img src="\coinhunt\Web - Light\bithigh-1.svg" alt="" className="img-fluid" />
                                                        </div>
                                                        <div className="texts">
                                                            <h5>Addiction</h5>
                                                            <p>ADC</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                
                                            </div>
                                        </div>
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

export default BitHighCoin;
