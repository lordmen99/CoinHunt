import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './nft.scss';
import OwlCarousel from 'react-owl-carousel';
import { useSelector } from 'react-redux'
import axios from 'axios';
import { API_URL } from '../../../utils/ApiURL.js';
const NFts = () => {
    const lightMode = useSelector((state) => state.themereducer.lightMode)
    const [allapproved, setallapprovedNFT] = useState();
    const allapprovedNFT = () => {
        axios.get(`${API_URL}/v1/Nft/getApprovedNft`)
            .then((response) => {
                // console.log("@@@@@@@@@@", response);
                setallapprovedNFT(response.data.data)
            })
    }
    console.log("all nft approved", allapproved)

    useEffect(() => {
        allapprovedNFT()
    }, [])
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
    const AllNft = allapproved?.map((elem, index) => {
        // console.log("========>", elem, "00000: ", index);
        // const { id, name, thumbnail, link, reward, views, VideoCategory } = elem;
        return (
            <Link to="/BitNFT">
                <div className="item mt-2">
                    <div className="main-card text-center">
                        <div className="icon">
                            <img src={elem.imageUrl} alt="" className="img-fluid" />
                        </div>
                        <div className="lower">
                            <div className="text-down">
                                <h4>
                                    {elem.name}
                                </h4>
                            </div>
                            <div className="level-items d-flex justify-content-center align-items-center">
                                <img src="\coinhunt\Web - Light\color.svg" alt="" className="img-fluid" /> <p>22</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        )
    })

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
                                        {allapproved?.length > 0 ?
                                            <OwlCarousel className="slider-items owl-carousel ltf-owl" autoplaySpeed={3000} {...owl_option}>
                                                {AllNft}
                                            </OwlCarousel>
                                            :
                                            <div> No NFT Found </div>
                                        }
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
