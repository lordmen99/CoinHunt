import React, { useState, useEffect } from 'react';
import { Link, useParams } from "react-router-dom";
import './nftdetail.scss';
import { useSelector } from 'react-redux'
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import pic from '../../Assets/our-team-background.png'
import twiter from '../../Assets/telegram 1.svg'
import axios from 'axios';
import { API_URL } from '../../utils/ApiURL';

const SingleNft = () => {
    
    const [photo, setPhoto] = useState();
    const [uploadImage, updateuploadImage] = useState("");
    const lightMode = useSelector((state) => state.themereducer.lightMode)
    const { id } = useParams();
    const [singlenft, setsinglenft] = useState({
        blockChian: '',
        description: '',
        imageUrl: '',
        name: '',
        nftDiscordLink: '',
        nftInstagramLink: '',
        nftTelegramLink: '',
        nftTwitterLink: '',
        time: '',
        webSite: '',
        price: ''
    });
    // console.log("single nft id", id)
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
    useEffect(() => {
        singlenftdetail()
    }, [id])

    const singlenftdetail = (e) => {
        axios.post(`${API_URL}/v1/nft/getDetailOfSingleNft`, { _id: id })
            .then((response) => {
                setsinglenft(response.data.data)
            })
    }
    // console.log("single nft data", singlenft)
    // const {blockChian,description,imageUrl,name,nftDiscordLink,nftInstagramLink,nftTelegramLink,nftTwitterLink,time,webSite} = singlenft
    // console.log("chain, description, name, time, website", singlenft.blockChian, singlenft.description, singlenft.name, singlenft.time, singlenft.webSite)
    return (
        <>
            <div className={lightMode ? "" : "light"}>
                <section className="AddNft">
                    <div className="container-fluid p-0">
                        <div className="row pt-0">
                            <div className="col-11 m-auto pt-0">
                                <div className="row p-md-0">
                                    <div className="col-12 p-md-0">
                                        <div className="AddNft-headings sdhvshd">
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
                                                        <div className="form-group main-text-feild-head">
                                                            <label For="name">Title<i className="text-danger">*</i></label>
                                                            <p className="sdnss">{singlenft.name}</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-6 pr-md-0">
                                                        <div className="form-group main-text-feild-head">
                                                            <label For="name">Mint / Floor Price<i className="text-danger">*</i></label>
                                                            <p className="sdnss">${singlenft.price}</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-6 pl-md-0 mt-4">
                                                        <div className="form-group main-text-feild-head">
                                                            <label For="name">Chain<i className="text-danger">*</i></label>
                                                            <p className="sdnss">{singlenft.blockChian}</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-6 pr-md-0 mt-4">
                                                        <div className="form-group main-text-feild-head">
                                                            <label For="name">Website</label>
                                                            <p className="sdnss">{singlenft.webSite}</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-12 pl-md-0 mb-4 mt-5">
                                                        <div className='form-group'>
                                                            <label For='name'>Image<i className="text-danger">*</i></label>
                                                            <div className='upload-div sdhcsnc '>
                                                                <img src={singlenft.imageUrl} alt="" className="img-fluid  imoo" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 pb-4 pl-md-0">
                                                        <div className='form-group main-text-feild-head'>
                                                            <label For='name'>Launch date</label>
                                                            <p className="sdnss">{singlenft.time}</p>
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

                                                        <div className="form-group main-text-feild-head">
                                                            <label For="name">Telegram Link</label>
                                                            <div className="iconDiv2">
                                                                <img src={twiter} className="iconDivImg" alt="" />
                                                                <p className='text-truncate sdnss'>{singlenft.nftTelegramLink}</p>
                                                            </div>
                                                        </div>

                                                    </div>
                                                    <div className="col-6 pr-md-0">
                                                        <div className="form-group main-text-feild-head">
                                                            <label For="name">Twitter Link</label>
                                                            <div className="iconDiv2">
                                                                <img src={twiter} className="iconDivImg" alt="" />
                                                                <p className='text-truncate sdnss'>{singlenft.nftTwitterLink}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-6 mt-md-4 pl-md-0">
                                                        <div className="form-group main-text-feild-head">
                                                            <label For="name">Instagram Link</label>
                                                            <div className="iconDiv2">
                                                                <img src={twiter} className="iconDivImg" alt="" />
                                                                <p className='text-truncate sdnss'>{singlenft.nftInstagramLink}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-6 mt-md-4 pr-md-0">
                                                        <div className="form-group main-text-feild-head">
                                                            <label For="name">Discord Link</label>
                                                            <div className="iconDiv2">
                                                                <img src={twiter} className="iconDivImg" alt="" />
                                                                <p className='text-truncate sdnss'>{singlenft.nftDiscordLink}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 p-0">
                                                        <div className="AddNft-forms AddNft-forms1">
                                                            <div className="row p-0">
                                                                <div className="col-md-6 pl-md-0 pr-md-2">
                                                                    <div className=" w-100">
                                                                        <button className="btn-haed w-100">Approve</button>
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-6 pr-md-0 mt-md-0 mt-3 pl-md-2">
                                                                    <div className=" w-100">
                                                                        <button className="btn-haed-disconnect w-100">Reject</button>
                                                                    </div>
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
