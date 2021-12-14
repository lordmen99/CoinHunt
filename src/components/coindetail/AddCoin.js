import React from 'react';
import { Link } from 'react-router-dom';
import './coindetail.scss';
import { useSelector } from 'react-redux'
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import pic from '../../Assets/our-team-background.png'
import { useState } from 'react';
import axios from 'axios';
import { API_URL } from '../../utils/ApiURL';

const AddCoin = () => {
    const [photo, setPhoto] = useState();
    const [uploadImage, updateuploadImage] = useState("");
    const [allFormData, setAllFormData] = useState({
        formData: { name: '', price: '', description: '', website: '', telegramlink: '', twitterlink: '', date: '', symbol: '', marketcap: '', Solanacontract: '', Ploygoncontract: '', BNBContract: '', Etheremcontract: '' }
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
    console.log("all form data", allFormData)

    const addcoin = (async () => {
        // event.preventDefault()
        // formValidation()
        console.log("data.append( allFormData.formData.price  :)", allFormData.formData.price)
        const data = new FormData();
        data.append("imageUrl", photo)
        data.append("name", allFormData.formData.name)
        data.append("description", allFormData.formData.description)
        data.append("price", allFormData.formData.price)
        data.append("marketCap", allFormData.formData.marketcap)
        data.append("websiteLink", allFormData.formData.website)
        data.append("symbol", allFormData.formData.symbol)
        // data.append("nftInstagramLink", allFormData.formData.instagramelink)
        data.append("telegramLink", allFormData.formData.telegramlink)
        data.append("twitterLink", allFormData.formData.twitterlink)
        // data.append("nftDiscordLink", allFormData.formData.discordlink)
        data.append("time", allFormData.formData.date)
        data.append("polygonContractAddress", allFormData.formData.Ploygoncontract)
        data.append("bscContractAddress", allFormData.formData.BNBContract)
        data.append("ethContractAddress", allFormData.formData.Etheremcontract)
        data.append("solanaContractAddress", allFormData.formData.Solanacontract)
        console.log("data add for nft", data)
        axios.post(`${API_URL}/v1/Coin/addCoin`, data,{ headers: { 'Content-Type': 'multipart/form-data' } })
            .then((response) => {
                console.log("success response", response)
            }).catch((err) => {
                console.log("error responce", err)
            })
    })
  
    const lightMode = useSelector((state) => state.themereducer.lightMode)
    
    // const addcoin = ÷
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
                <section className="AddCoin">
                    <div className="container-fluid p-0">
                        <div className="row pt-0">
                            <div className="col-11 m-auto pt-0">
                                <div className="row p-md-0">
                                    <div className="col-12 p-md-0">
                                        <div className="AddCoin-headings">
                                            <h2 className="">Coin listing request</h2>
                                            <h5>Coin Informations</h5>
                                        </div>
                                    </div>
                                </div>
                                <ValidatorForm className="form-contact">
                                    <div className="AddCoin-forms">
                                        <div className="row p-0">
                                            <div className="col-md-8 p-0 mr-auto">
                                                <div className="row p-md-0">
                                                    <div className="col-md-6 pl-md-0">
                                                        <div class="form-group ">
                                                            <label For="name">Name</label>
                                                            <TextValidator fullWidth type='text'
                                                                name='name'
                                                                autoComplet='off'
                                                                variant='outlined'
                                                                placeholder='Ex : Bitcoin'
                                                                onChange={handleChange}
                                                                className='input-fields'
                                                                validators={['required']}
                                                                errorMessages={['Name is required']}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 pr-md-0">
                                                        <div class="form-group ">
                                                            <label For="name">Symbol</label>
                                                            <TextValidator fullWidth type='text'
                                                                name='symbol'
                                                                autoComplet='off'
                                                                variant='outlined'
                                                                onChange={handleChange}
                                                                placeholder='Enter Title Name'
                                                                className='Ex : BTC'
                                                                validators={['required']}
                                                                errorMessages={['Symbol is required']}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-12 p-md-0">
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
                                                    <div className="col-12 pl-md-0 mb-4">
                                                    <div class='form-group'>
                                                            <label For='name'>Upload Logo (500X500 pixels)</label>
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
                                                                errorMessages={['Item Name is required']}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 pl-md-0">


                                                        <div class="form-group ">
                                                            <label For="name">Price</label>
                                                            <TextValidator fullWidth type='text'
                                                                name='price'
                                                                autoComplet='off'
                                                                variant='outlined'
                                                                onChange={handleChange}
                                                                placeholder='Ex : $0.005'
                                                                className='input-fields'
                                                                validators={['required']}
                                                                errorMessages={['Price is required']}
                                                            />
                                                        </div>

                                                    </div>
                                                    <div className="col-md-6 pr-md-0">
                                                        <div class="form-group">
                                                            <label For="name">Market cap</label>
                                                            <TextValidator fullWidth type='text'
                                                                name='marketcap'
                                                                autoComplet='off'
                                                                variant='outlined'
                                                                onChange={handleChange}
                                                                placeholder='Ex : $51002'
                                                                className='input-fields'
                                                                validators={['required']}
                                                                errorMessages={['Item Name is required']}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-12 p-0">
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
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="AddCoin-forms">
                                        <div className="row p-0">
                                            <div className="col-md-8 p-0 mr-auto">

                                                <div className="row p-md-0">
                                                    <div className="col-12 p-md-0">
                                                        <h6>Coin links</h6>
                                                    </div>
                                                </div>

                                                <div className="row p-md-0">

                                                    <div className="col-md-6 pl-md-0">


                                                        <div class="form-group ">
                                                            <label For="name">Website Link</label>
                                                            <TextValidator fullWidth type='text'
                                                                name='website'
                                                                autoComplet='off'
                                                                onChange={handleChange}
                                                                variant='outlined'
                                                                placeholder='Enter website address of your project'
                                                                className='input-fields'
                                                                validators={['required']}
                                                                errorMessages={['Website Link is required']}
                                                            />
                                                        </div>

                                                    </div>
                                                    <div className="col-md-6 pr-md-0">
                                                        <div class="form-group ">
                                                            <label For="name">Twitter Link</label>
                                                            <TextValidator fullWidth type='text'
                                                                name='twitterlink'
                                                                autoComplet='off'
                                                                onChange={handleChange}
                                                                variant='outlined'
                                                                placeholder='Enter twitter link of your project'
                                                                className='input-fields'
                                                                validators={['required']}
                                                                errorMessages={['Twitter Link is required']}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 pl-md-0">
                                                        <div class="form-group ">
                                                            <label For="name">Telegram Link</label>
                                                            <TextValidator fullWidth type='text'
                                                                name='telegramlink'
                                                                autoComplet='off'
                                                                onChange={handleChange}
                                                                variant='outlined'
                                                                placeholder='Enter telegram link of your project'
                                                                className='input-fields'
                                                                validators={['required']}
                                                                errorMessages={['Telegrame Link is required']}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="AddCoin-forms">
                                        <div className="row p-0">
                                            <div className="col-md-8 p-0 mr-auto">
                                                <div className="row p-md-0">
                                                    <div className="col-12 p-md-0">
                                                        <h6>Coin contracts</h6>
                                                    </div>
                                                </div>
                                                <div className="row p-md-0">
                                                    <div className="col-md-6 pl-md-0">
                                                        <div class="form-group ">
                                                            <label For="name">Binance Smart Chain</label>
                                                            <TextValidator fullWidth type='text'
                                                                name='BNBContract'
                                                                autoComplet='off'
                                                                variant='outlined'
                                                                onChange={handleChange}
                                                                placeholder='Ex : 0x00000000000000'
                                                                className='input-fields'
                                                                validators={['required']}
                                                                errorMessages={['BNB address is required']}
                                                            />
                                                        </div>

                                                    </div>

                                                    <div className="col-md-6 pr-md-0">
                                                        <div class="form-group ">
                                                            <label For="name">Ethereum</label>
                                                            <TextValidator fullWidth type='text'
                                                                name='Etheremcontract'
                                                                autoComplet='off'
                                                                variant='outlined'
                                                                onChange={handleChange}
                                                                placeholder='Ex : 0x000000000000000'
                                                                className='input-fields'
                                                                validators={['required']}
                                                                errorMessages={['Ethereum address is required']}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 pl-md-0">
                                                        <div class="form-group ">
                                                            <label For="name">Polygon</label>
                                                            <TextValidator fullWidth type='text'
                                                                name='Ploygoncontract'
                                                                autoComplet='off'
                                                                variant='outlined'
                                                                onChange={handleChange}
                                                                placeholder='Ex : 0x000000000000000'
                                                                className='input-fields'
                                                                validators={['required']}
                                                                errorMessages={['Polygon address is required']}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 pr-md-0">
                                                        <div class="form-group ">
                                                            <label For="name">Solana</label>
                                                            <TextValidator fullWidth type='text'
                                                                name='Solanacontract'
                                                                autoComplet='off'
                                                                onChange={handleChange}
                                                                variant='outlined'
                                                                placeholder='Ex : xxxxxxxxxxxxxxxxxxxxx'
                                                                className='input-fields'
                                                                validators={['required']}
                                                                errorMessages={['Solana address is required']}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="AddCoin-forms AddCoin-forms1">
                                        <div className="row p-md-0">
                                            <div className="col-md-8 p-md-0 mr-auto">

                                                <div className="row p-md-0">
                                                    <label For="name">Listing requirement</label>
                                                    <div className="col-md-12">

                                                        <div class="form-group main-text-feild-head">
                                                            {/* <label For="name">Listing requirement</label> */}
                                                            <ul className='pr-md-0 pl-3'>
                                                                <li>Valid contract adress</li>
                                                                <li>Working website where we can check </li>
                                                                <li>Locked liquidity</li>
                                                                <li>Reasonable holding of supply</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 pl-md-0">
                                                        <div class=" mt-4 w-100">
                                                            <button className="btn-haed w-100" onClick={addcoin}>Submit</button>
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

export default AddCoin;
