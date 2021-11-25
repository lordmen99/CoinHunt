import React from 'react';
import { Link } from 'react-router-dom';
import './nftdetail.scss';
import { useSelector } from 'react-redux'
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import pic from '../../Assets/our-team-background.png'
import { useState } from 'react';
import twiter from '../../Assets/telegram 1.svg'

const SingleNft = () => {
    const [photo, setPhoto] = useState();
    const [uploadImage, updateuploadImage] = useState("");
    async function catchImage(e) {
        try {
            const file = e.target.files[0]
            setPhoto(e.target.files[0])
            updateuploadImage(URL.createObjectURL(e.target.files[0]));
            console.log(file, "file")
        } catch (e) {
            console.log(e)
        }
    }
    const lightMode = useSelector((state) => state.themereducer.lightMode)
    return (
        <>
            <div className={lightMode ? "" : "light"}>
                <div className="container-fluid p-0">
                    <div className="row">
                        <div className="col-sm-11 m-auto">
                            <div className="home-upper-line">
                                <h3>Home / <span>Login</span></h3>
                            </div>
                        </div>
                    </div>
                </div>
                <section className="AddNft">
                    <div className="container-fluid p-0">
                        <div className="row pt-0">
                            <div className="col-11 m-auto pt-0">
                                <div className="row p-md-0">
                                    <div className="col-12 p-md-0">
                                        <div className="AddNft-headings">
                                            <h2 className="">NFT collection listing request</h2>
                                            <h5>Collection Informations</h5>
                                        </div>
                                    </div>
                                </div>
                                <ValidatorForm className="form-contact">
                                    <div className="AddNft-forms">
                                        <div className="row p-0">
                                            <div className="col-md-8 p-0 mr-auto">
                                                <div className="row p-md-0">
                                                    <div className="col-6 pl-md-0">
                                                        <div class="form-group main-text-feild-head">
                                                            <label For="name">Title</label>
                                                            <p>BscMomsNFT</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-6 pr-md-0">
                                                        <div class="form-group main-text-feild-head">
                                                            <label For="name">Mint / Floor Price</label>
                                                            <p>$1.009</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-6 pl-md-0 mt-4">
                                                        <div class="form-group main-text-feild-head">
                                                            <label For="name">Chain</label>
                                                            <p>Solana</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-6 pr-md-0 mt-4">
                                                        <div class="form-group main-text-feild-head">
                                                            <label For="name">Website</label>
                                                            <p>http//rc-2token.cc/</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-12 pl-md-0 mb-4 mt-4">
                                                        <div class='form-group'>
                                                            <label For='name'>Image</label>
                                                            <div className='upload-div'>
                                                                <img src={pic} alt="" className="img-fluid  imoo" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 pl-md-0">
                                                        <div class='form-group main-text-feild-head'>
                                                            <label For='name'>Launch date</label>
                                                            <p>20/12/21 12:34:00</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="AddNft-forms AddNft-forms1">
                                        <div className="row p-0">
                                            <div className="col-md-8 p-0 mr-auto">
                                                <div className="row p-md-0">
                                                    <div className="col-12 p-md-0">
                                                        <h6>Collection links</h6>
                                                    </div>
                                                </div>
                                                <div className="row p-md-0">
                                                    <div className="col-6 pl-md-0">

                                                        <div class="form-group main-text-feild-head">
                                                            <label For="name">Telegram Link</label>
                                                            <div className="iconDiv2">
                                                                <img src={twiter} className="iconDivImg" alt="" />
                                                                <p className='text-truncate'>tg.com/link</p>
                                                            </div>
                                                        </div>

                                                    </div>
                                                    <div className="col-6 pr-md-0">
                                                        <div class="form-group main-text-feild-head">
                                                            <label For="name">Twitter Link</label>
                                                            <div className="iconDiv2">
                                                                <img src={twiter} className="iconDivImg" alt="" />
                                                                <p className='text-truncate'>www.twitter.com/coininfo</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-6 mt-md-4 pl-md-0">
                                                        <div class="form-group main-text-feild-head">
                                                            <label For="name">Instagram Link</label>
                                                            <div className="iconDiv2">
                                                                <img src={twiter} className="iconDivImg" alt="" />
                                                                <p className='text-truncate'>tg.com/link</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-6 mt-md-4 pr-md-0">
                                                        <div class="form-group main-text-feild-head">
                                                            <label For="name">Discord Link</label>
                                                            <div className="iconDiv2">
                                                                <img src={twiter} className="iconDivImg" alt="" />
                                                                <p className='text-truncate'>tg.com/link</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 pl-md-0">
                                                        <div className="row">
                                                            <div className="col-md-6 pl-md-0">
                                                                <div class=" mt-5 w-100">
                                                                    <button className="btn-haed w-100">Submit</button>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-6 pr-md-0">
                                                                <div class=" mt-5 w-100">
                                                                    <button className="btn-haed-disconnect w-100">Submit</button>
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </ValidatorForm>
                            </div>
                        </div>
                    </div >
                </section >
            </div >
        </>
    )
}

export default SingleNft;
