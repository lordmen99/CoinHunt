import React, { useState, useEffect } from 'react';
import { Link, useParams } from "react-router-dom";
import './coindetail.scss';
import { useSelector } from 'react-redux'
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import pic from '../../Assets/our-team-background.png'
import axios from 'axios';
import { API_URL } from '../../utils/ApiURL';
function SingleCoinDetail() {
    const lightMode = useSelector((state) => state.themereducer.lightMode)
    const { id } = useParams();
    const [singlecoin, setsinglecoin] = useState({
        name: '',
        description: '',
        imageUrl: '',
        telegramLink: '',
        twitterLink: '',
        time: '',
        websiteLink: '',
        price: '',
        marketCap: '',
        symbol: '',
        polygonContractAddress: '',
        bscContractAddress: '',
        ethContractAddress: '',
        solanaContractAddress: ''
    });
    useEffect(() => {
        singlecoindetail()
    }, [id])

    const singlecoindetail = (e) => {
        axios.post(`${API_URL}/v1/Coin/getCoin`, { _id: id })
            .then((response) => {
                setsinglecoin(response.data.data)
            })
    }
    return (
        <>
            <div className={lightMode ? "" : "light"}>
                <section className="AddCoin">
                    <div className="container-fluid p-0">
                        <div className="row pt-0">
                            <div className="col-11 m-auto pt-0">
                                <div className="row p-md-0">
                                    <div className="col-12 p-md-0">
                                        <div className="AddCoin-headings sdhvshd">
                                            <h2 className="">Coin listing request</h2>
                                            <h5>Coin Informations</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="AddCoin-forms">
                                    <div className="row p-0">
                                        <div className="col-md-8  p-0 mr-auto">
                                            <ValidatorForm className="form-contact">
                                                <div className="row p-md-0">
                                                    <div className="col-6 p-md-0">
                                                        <div class="form-group main-text-feild-head">
                                                            <label For="name">Name<i className="text-danger">*</i></label>
                                                            <p>{singlecoin.name}</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-6">
                                                        <div class="form-group main-text-feild-head">
                                                            <label For="name">Symbol<i className="text-danger">*</i></label>
                                                            <p>{singlecoin.symbol}</p>
                                                        </div>
                                                    </div>
                                                    <div className="AddCoin-forms AddCoin-forms3">
                                                        <div className="col-12 pl-md-0">
                                                            <div class='form-group main-text-feild-head2'>
                                                                <label For='name'>Description</label>
                                                                <p>{singlecoin.description} </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-12 pl-md-0 mb-4">
                                                        <div class='form-group'>
                                                            <label For='name'>Upload Logo (500X500 pixels)<i className="text-danger">*</i></label>
                                                            <div className='upload-div upload-div2 sdhcsnc'>
                                                                <img src={singlecoin.imageUrl} alt="" className="img-fluid imoo" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-6 p-md-0">


                                                        <div class="form-group main-text-feild-head">
                                                            <label For="name">Price</label>
                                                            <p>{singlecoin.price}</p>
                                                        </div>

                                                    </div>
                                                    <div className="col-6">
                                                        <div class="form-group main-text-feild-head">
                                                            <label For="name">Market cap</label>
                                                            <p>{singlecoin.marketCap}</p>
                                                        </div>
                                                    </div>
                                                    <div className="AddCoin-forms AddCoin-forms1">
                                                        <div className="col-12 pl-md-0">
                                                            <div class='form-group main-text-feild-head'>
                                                                <label For='name'>Launch date<i className="text-danger">*</i></label>
                                                                <p>{singlecoin.time}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </ValidatorForm>
                                        </div>
                                    </div>
                                </div>
                                <div className="AddCoin-forms AddCoin-forms-detail">
                                    <div className="row p-0">
                                        <div className="col-md-8  p-0 mr-auto">
                                            <ValidatorForm className="form-contact">
                                                <div className="row p-md-0">
                                                    <div className="col-12 p-md-0">
                                                        <h6>Coin links</h6>
                                                    </div>
                                                </div>

                                                <div className="row p-md-0">

                                                    <div className="col-6 p-md-0">


                                                        <div class="form-group main-text-feild-head">
                                                            <label For="name">Website Link</label>
                                                            <p className='text-truncate'>{singlecoin.websiteLink}</p>
                                                        </div>

                                                    </div>
                                                    <div className="col-6">
                                                        <div class="form-group main-text-feild-head">
                                                            <label For="name">Twitter Link</label>
                                                            <p className='text-truncate'>{singlecoin.twitterLink}</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 p-md-0">
                                                        <div class="form-group main-text-feild-head">
                                                            <label For="name">Telegram Link</label>
                                                            <p className='text-truncate'>{singlecoin.telegramLink}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </ValidatorForm>
                                        </div>
                                    </div>
                                </div>
                                <div className="AddCoin-forms AddCoin-forms-detail">
                                    <div className="row p-0">
                                        <div className="col-md-8  p-0 mr-auto">
                                            <ValidatorForm className="form-contact">
                                                <div className="row p-md-0">
                                                    <div className="col-12 p-md-0">
                                                        <h6>Coin contracts</h6>
                                                    </div>
                                                </div>
                                                <div className="row p-md-0">
                                                    <div className="col-md-6 p-md-0">


                                                        <div class="form-group main-text-feild-head3">
                                                            <label For="name">Binance Smart Chain</label>
                                                            <p className='text-truncate'>{singlecoin.bscContractAddress}</p>
                                                        </div>

                                                    </div>

                                                    <div className="col-md-6">
                                                        <div class="form-group main-text-feild-head3">
                                                            <label For="name">Ethereum</label>
                                                            <p className='text-truncate'>{singlecoin.ethContractAddress}</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 mt-4 p-md-0">
                                                        <div class="form-group main-text-feild-head3">
                                                            <label For="name">Polygon</label>
                                                            <p className='text-truncate'>{singlecoin.polygonContractAddress}</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 mt-4">
                                                        <div class="form-group main-text-feild-head3">
                                                            <label For="name">Solana</label>
                                                            <p className='text-truncate'>{singlecoin.solanaContractAddress}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </ValidatorForm>
                                        </div>
                                    </div>
                                </div>
                                <div className="AddCoin-forms AddCoin-forms1">
                                    <div className="row p-0">
                                        <div className="col-md-7 p-0 mr-auto">
                                            <ValidatorForm className="form-contact">
                                                <div className="row p-md-0">
                                                    <label For="name">Listing requirement</label>
                                                    <div className="col-md-12">

                                                        <div class="form-group main-text-feild-head">
                                                            {/* <label For="name">Listing requirement</label> */}
                                                            <ul className="pl-md-0 pl-3 ">
                                                                <li>Valid contract adress</li>
                                                                <li>Working website where we can check </li>
                                                                <li>Locked liquidity</li>
                                                                <li>Reasonable holding of supply</li>
                                                            </ul>
                                                        </div>

                                                    </div>
                                                    {/* <div className="AddCoin-forms AddCoin-forms1"> */}
                                                    <div className="col-md-6 p-0">
                                                        <div className="AddCoin-forms AddCoin-forms1">
                                                            <div className="row p-0">
                                                                <div className="col-md-6 pl-md-0 pr-md-2">
                                                                    <div class=" w-100">
                                                                        <button className="btn-haed w-100">Approve</button>
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-6 pr-md-0 mt-md-0 mt-3 pl-md-2">
                                                                    <div class=" w-100">
                                                                        <button className="btn-haed-disconnect w-100">Reject</button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/* </div> */}
                                                </div>
                                            </ValidatorForm>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div >
                </section >
            </div>

        </>

    )
}

export default SingleCoinDetail
