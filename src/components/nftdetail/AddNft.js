import React from 'react';
import { Link } from 'react-router-dom';
import './nftdetail.scss';
import { useSelector } from 'react-redux'
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import pic from '../../Assets/our-team-background.png'
import { useState } from 'react';
import twiter from '../../Assets/telegram 1.svg'
import axios from 'axios';
import { API_URL } from '../../utils/ApiURL';

const AddNft = () => {
    const [photo, setPhoto] = useState();
    const [uploadImage, updateuploadImage] = useState("");
    const [allFormData, setAllFormData] = useState({
        formData: { name: '', price: '', description: '', website: '', chain: '', instagramelink: '', telegramlink: '', twitterlink: '', discordlink: '', date: '' }
    })
    const handleChange = (event) => {
        const { formData } = allFormData;
        const value = event.target.value;
        formData[event.target.name] = value;
        setAllFormData({ formData });
    }
    // console.log("imageuploaded", photo)
    // console.log("set vale", allFormData)
    async function catchImage(e) {
        try {
            const file = e.target.files[0]
            setPhoto(file)
            updateuploadImage(URL.createObjectURL(e.target.files[0]));
            // console.log(file, "file")
        } catch (e) {
            console.log(e)
        }
    }

    const addnft = (async () => {
        // event.preventDefault()
        // formValidation()
        console.log("data.append( allFormData.formData.price  :)", allFormData.formData.price)
        const data = new FormData();
        data.append("imageUrl", photo)
        data.append("name", allFormData.formData.name)
        data.append("description", allFormData.formData.description)
        data.append("price", allFormData.formData.price)
        data.append("blockChian", allFormData.formData.chain)
        data.append("webSite", allFormData.formData.website)
        data.append("nftInstagramLink", allFormData.formData.instagramelink)
        data.append("nftTelegramLink", allFormData.formData.telegramlink)
        data.append("nftTwitterLink", allFormData.formData.twitterlink)
        data.append("nftDiscordLink", allFormData.formData.discordlink)
        data.append("time", allFormData.formData.date)
        console.log("data add for nft", data)
        axios.post(`${API_URL}/v1/Nft/addNft`, data,{ headers: { 'Content-Type': 'multipart/form-data' } })
            .then((response) => {
                console.log("success response", response)
            }).catch((err) => {
                console.log("error responce", err)
            })
    })

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
                                                    <div className="col-md-6 pl-md-0">
                                                        <div class="form-group main-text-feild-head">
                                                            <label For="name">Title</label>
                                                            <TextValidator fullWidth type='text'
                                                                name='name'
                                                                autoComplet='off'
                                                                // value={allFormData.formData.name}
                                                                onChange={handleChange}
                                                                variant='outlined'
                                                                placeholder='Ex : Degan Ape Acadmey'
                                                                className='input-fields'
                                                                validators={['required']}
                                                                errorMessages={['Name is Required']}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 pr-md-0">
                                                        <div class="form-group main-text-feild-head">
                                                            <label For="name">Mint / Floor Price</label>
                                                            <TextValidator fullWidth type='text'
                                                                name='price'
                                                                autoComplet='off'
                                                                // value={allFormData.formData.name}
                                                                onChange={handleChange}
                                                                variant='outlined'
                                                                placeholder='Ex : 0.06'
                                                                className='Ex : BTC'
                                                                validators={['required']}
                                                                errorMessages={['Mint price is Required']}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 pl-md-0">
                                                        <div class="form-group main-text-feild-head">
                                                            <label For="name">Chain</label>
                                                            <TextValidator fullWidth type='text'
                                                                name='chain'
                                                                autoComplet='off'
                                                                // value={allFormData.formData.name}
                                                                onChange={handleChange}
                                                                variant='outlined'
                                                                placeholder='Ex : Solana'
                                                                className='input-fields'
                                                                validators={['required']}
                                                                errorMessages={['Chain Name Required']}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 pr-md-0">
                                                        <div class="form-group main-text-feild-head">
                                                            <label For="name">Website</label>
                                                            <TextValidator fullWidth type='text'
                                                                name='website'
                                                                autoComplet='off'
                                                                // value={allFormData.formData.name}
                                                                onChange={handleChange}
                                                                variant='outlined'
                                                                placeholder='Ex : http//rc-2token.cc/'
                                                                className='Ex : BTC'
                                                                validators={['required']}
                                                                errorMessages={['Website Name is Required']}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-12 pl-md-0 mb-4">
                                                        <div class='form-group'>
                                                            <label For='name'>Image</label>
                                                            <div className='upload-div'>
                                                                <label className='upload-btn' for='files'> <img src="\coinhunt\Web - Light\cloud-image.svg" alt="" className="img-fluid overlay" /></label>
                                                                {uploadImage && (
                                                                    // <img src={fileUrl} style={{ margin: 0 }} width="300px" height="300px" />
                                                                    <img src={uploadImage} alt="" className="img-fluid  imoo" />
                                                                )}
                                                            </div>

                                                            <TextValidator
                                                                fullWidth
                                                                type='file'
                                                                name='image'
                                                                autoComplet='off'
                                                                // value={allData.form.name}
                                                                // value={allData.form.descriptionn}
                                                                onChange={catchImage}
                                                                variant='outlined'
                                                                multiLine
                                                                rows={3}
                                                                placeholder='Enter Description'
                                                                className='input-fields d-none'
                                                                id='files'
                                                                validators={['required']}
                                                                errorMessages={['Image must be Selected']}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 pl-md-0">
                                                        <div class='form-group'>
                                                            <label For='name'>Launch date</label>
                                                            <TextValidator
                                                                fullWidth
                                                                type='date'
                                                                name='date'
                                                                autoComplet='off'
                                                                // value={allFormData.formData.name}
                                                                onChange={handleChange}
                                                                variant='outlined'
                                                                placeholder='mm/dd/yyyy --:-- --'
                                                                className='input-fields dateInput'
                                                                validators={['required']}
                                                                errorMessages={['Date must be selected']}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12 pl-md-0">
                                                        <div class='form-group shsjsjsx'>
                                                            <label For='name'>Description</label>
                                                            <TextValidator
                                                                fullWidth
                                                                type="text"
                                                                name="description"
                                                                // value={allFormData.formData.description}
                                                                onChange={handleChange}
                                                                placeholder="Enter Your Description..."
                                                                className="input-fields"
                                                                variant="outlined"
                                                                validators={['required']}
                                                                errorMessages={['Description field is required']}
                                                                multiline
                                                                rows={4}
                                                            />

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
                                                    <div className="col-md-6 pl-md-0">
                                                        <div class="form-group main-text-feild-head">
                                                            <label For="name">Discord Link</label>
                                                            <div className="iconDiv">
                                                                <img src={twiter} className="iconDivImg" alt="" />
                                                                <TextValidator fullWidth type='text'
                                                                    name='discordlink'
                                                                    autoComplet='off'
                                                                    variant='outlined'
                                                                    // value={allFormData.formData.name}
                                                                    onChange={handleChange}
                                                                    placeholder='Enter telegram link of your project'
                                                                    className='input-fields'
                                                                    validators={['required']}
                                                                    errorMessages={['Optional']}
                                                                /></div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 pr-md-0">
                                                        <div class="form-group main-text-feild-head">
                                                            <label For="name">Twitter Link</label>
                                                            <div className="iconDiv">
                                                                <img src={twiter} className="iconDivImg" alt="" />
                                                                <TextValidator fullWidth type='text'
                                                                    name='twitterlink'
                                                                    autoComplet='off'
                                                                    // value={allFormData.formData.name}
                                                                    onChange={handleChange}
                                                                    variant='outlined'
                                                                    placeholder='Enter telegram link of your project'
                                                                    className='input-fields'
                                                                    validators={['required']}
                                                                    errorMessages={['Optional']}
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 pl-md-0">
                                                        <div class="form-group main-text-feild-head">
                                                            <label For="name">Telegram Link</label>
                                                            <div className="iconDiv">
                                                                <img src={twiter} className="iconDivImg" alt="" />
                                                                <TextValidator fullWidth type='text'
                                                                    name='telegramlink'
                                                                    autoComplet='off'
                                                                    variant='outlined'
                                                                    // value={allFormData.formData.name}
                                                                    onChange={handleChange}
                                                                    placeholder='Enter telegram link of your project'
                                                                    className='input-fields'
                                                                    validators={['required']}
                                                                    errorMessages={['Optional']}
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 pr-md-0">
                                                        <div class="form-group main-text-feild-head">
                                                            <label For="name">Instagrame Link</label>
                                                            <div className="iconDiv">
                                                                <img src={twiter} className="iconDivImg" alt="" />
                                                                <TextValidator fullWidth type='text'
                                                                    name='instagramelink'
                                                                    autoComplet='off'
                                                                    // value={allFormData.formData.name}
                                                                    onChange={handleChange}
                                                                    variant='outlined'
                                                                    placeholder='Enter instagram link of your project'
                                                                    className='input-fields'
                                                                    validators={['required']}
                                                                    errorMessages={['Optional']}
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 pl-md-0">
                                                        <div class=" mt-5 w-100">
                                                            <button type="submit" className="btn-haed w-100" onClick={addnft}>Submit</button>
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

export default AddNft;
