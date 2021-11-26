import React from 'react';
import { Link } from 'react-router-dom';
import './profile.scss';
import OwlCarousel from 'react-owl-carousel';
import { useSelector } from 'react-redux'
const Profile = () => {
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
                                <h3>Home / <span>Profile</span></h3>
                            </div>
                        </div>
                    </div>
                </div>
                <section className="Profiles">
                    <div className="main-tabs-inner">
                        <div className="container-fluid p-0">
                            <div className="row">
                                <div className="col-sm-11 m-auto">
                                    <div className="upper-optionss">
                                        <ul class="nav nav-tabs" id="myTab" role="tablist">
                                            <li class="nav-item" role="presentation">
                                                <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Upvoted coins</a>
                                            </li>
                                            <li class="nav-item" role="presentation">
                                                <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Upvoted NFTs</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="tab-content" id="myTabContent">
                            <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                <div className="container-fluid p-0">
                                    <div className="row">
                                        <div className="col-sm-11 m-auto">
                                            <div className="heading-mainss">
                                                <h3>Upvoted Coins (7)</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <section className="upvotedcoin">
                                    <div className="container-fluid p-0">
                                        <div className="row">
                                            <div className="col-sm-11 m-auto">
                                                <div className="down-nfts">
                                                    <div class="table-responsive">
                                                        <table class="table">
                                                            <thead>
                                                                <tr>
                                                                    <th scope="col">COIN</th>
                                                                    <th scope="col">1H</th>
                                                                    <th scope="col">MARKET CAP</th>
                                                                    <th scope="col">TIME SINCE LAUNCH</th>
                                                                    <th scope="col">VOTES</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody className="sndsj">
                                                                <tr>
                                                                    <td>
                                                                        <div className="images-outer">
                                                                            <img src="\coinhunt\Web - Light\image 6.svg" alt="" className="img-fluid" />
                                                                            <div className="textss">
                                                                                <h4>BitHigh</h4>
                                                                                <p>BitHigh</p>
                                                                            </div>
                                                                            <div className="preslae">
                                                                                Presale
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <button className="mnc">10.26%</button>
                                                                    </td>
                                                                    <td>
                                                                        <p className="jhj">$952.678</p>
                                                                    </td>
                                                                    <td>
                                                                        <p className="jhj">Launched Today</p>
                                                                    </td>
                                                                    <td>
                                                                        <button className="bvhjr">
                                                                            <img src="\coinhunt\Web - Light\color.svg" alt="" className="img-fluid" />
                                                                            <p>21667</p>
                                                                        </button>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <div className="images-outer">
                                                                            <img src="\coinhunt\Web - Light\image 6.svg" alt="" className="img-fluid" />
                                                                            <div className="textss">
                                                                                <h4>BitHigh</h4>
                                                                                <p>BitHigh</p>
                                                                            </div>
                                                                            <div className="preslae">
                                                                                Presale
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <button className="rnc">10.26%</button>
                                                                    </td>
                                                                    <td>
                                                                        <p className="jhj">$952.678</p>
                                                                    </td>
                                                                    <td>
                                                                        <p className="jhj">Launched Today</p>
                                                                    </td>
                                                                    <td>
                                                                        <button className="bvhjr">
                                                                            <img src="\coinhunt\Web - Light\color.svg" alt="" className="img-fluid" />
                                                                            <p>21667</p>
                                                                        </button>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <div className="images-outer">
                                                                            <img src="\coinhunt\Web - Light\image 6.svg" alt="" className="img-fluid" />
                                                                            <div className="textss">
                                                                                <h4>BitHigh</h4>
                                                                                <p>BitHigh</p>
                                                                            </div>
                                                                            <div className="preslae">
                                                                                Presale
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <button className="rnc">10.26%</button>
                                                                    </td>
                                                                    <td>
                                                                        <p className="jhj">$952.678</p>
                                                                    </td>
                                                                    <td>
                                                                        <p className="jhj">Launched Today</p>
                                                                    </td>
                                                                    <td>
                                                                        <button className="bvhjr">
                                                                            <img src="\coinhunt\Web - Light\color.svg" alt="" className="img-fluid" />
                                                                            <p>21667</p>
                                                                        </button>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <div className="images-outer">
                                                                            <img src="\coinhunt\Web - Light\image 6.svg" alt="" className="img-fluid" />
                                                                            <div className="textss">
                                                                                <h4>BitHigh</h4>
                                                                                <p>BitHigh</p>
                                                                            </div>
                                                                            <div className="preslae">
                                                                                Presale
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <button className="rnc">10.26%</button>
                                                                    </td>
                                                                    <td>
                                                                        <p className="jhj">$952.678</p>
                                                                    </td>
                                                                    <td>
                                                                        <p className="jhj">Launched Today</p>
                                                                    </td>
                                                                    <td>
                                                                        <button className="bvhjr">
                                                                            <img src="\coinhunt\Web - Light\color.svg" alt="" className="img-fluid" />
                                                                            <p>21667</p>
                                                                        </button>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <div className="images-outer">
                                                                            <img src="\coinhunt\Web - Light\image 6.svg" alt="" className="img-fluid" />
                                                                            <div className="textss">
                                                                                <h4>BitHigh</h4>
                                                                                <p>BitHigh</p>
                                                                            </div>
                                                                            <div className="preslae">
                                                                                Presale
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <button className="mnc">10.26%</button>
                                                                    </td>
                                                                    <td>
                                                                        <p className="jhj">$952.678</p>
                                                                    </td>
                                                                    <td>
                                                                        <p className="jhj">Launched Today</p>
                                                                    </td>
                                                                    <td>
                                                                        <button className="bvhjr">
                                                                            <img src="\coinhunt\Web - Light\color.svg" alt="" className="img-fluid" />
                                                                            <p>21667</p>
                                                                        </button>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </div>
                            <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                <div className="nfts-profiles">
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
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Profile;
