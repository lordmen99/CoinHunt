import React from 'react';
import { Link } from 'react-router-dom';
import './coindetail.scss';
import { useSelector } from 'react-redux'
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import pic from '../../Assets/our-team-background.png'
import { useState } from 'react';

const AddCoin = () => {
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
                                                        <div class="form-group main-text-feild-head">
                                                            <label For="name">Name</label>
                                                            <TextValidator fullWidth type='text'
                                                                name='titleName'
                                                                autoComplet='off'
                                                                variant='outlined'
                                                                placeholder='Ex : Bitcoin'
                                                                className='input-fields'
                                                                validators={['required']}
                                                                errorMessages={['Item Name is required']}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 pr-md-0">
                                                        <div class="form-group main-text-feild-head">
                                                            <label For="name">Symbol</label>
                                                            <TextValidator fullWidth type='text'
                                                                name='titleName'
                                                                autoComplet='off'
                                                                variant='outlined'
                                                                placeholder='Enter Title Name'
                                                                className='Ex : BTC'
                                                                validators={['required']}
                                                                errorMessages={['Item Name is required']}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-12 p-md-0">
                                                        <div class='form-group'>
                                                            <label For='name'>Description</label>
                                                            <TextValidator
                                                                fullWidth
                                                                type='text'
                                                                name='descriptionn'
                                                                autoComplet='off'
                                                                // value={allData.form.name}
                                                                // value={allData.form.descriptionn}
                                                                // onChange={handleChange}
                                                                variant='outlined'
                                                                multiLine
                                                                rows={3}
                                                                placeholder='What is your Description about?'
                                                                className='input-fields'
                                                                validators={['required']}
                                                                errorMessages={['Item Name is required']}
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
                                                                name='descriptionn'
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


                                                        <div class="form-group main-text-feild-head">
                                                            <label For="name">Price</label>
                                                            <TextValidator fullWidth type='text'
                                                                name='titleName'
                                                                autoComplet='off'
                                                                variant='outlined'
                                                                placeholder='Ex : $0.005'
                                                                className='input-fields'
                                                                validators={['required']}
                                                                errorMessages={['Item Name is required']}
                                                            />
                                                        </div>

                                                    </div>
                                                    <div className="col-md-6 pr-md-0">
                                                        <div class="form-group main-text-feild-head">
                                                            <label For="name">Market cap</label>
                                                            <TextValidator fullWidth type='text'
                                                                name='titleName'
                                                                autoComplet='off'
                                                                variant='outlined'
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
                                                                name='descriptionn'
                                                                autoComplet='off'
                                                                // value={allData.form.name}
                                                                // value={allData.form.descriptionn}
                                                                // onChange={handleChange}
                                                                variant='outlined'
                                                                multiLine
                                                                rows={3}
                                                                placeholder='mm/dd/yyyy --:-- --'
                                                                className='input-fields dateInput'
                                                                validators={['required']}
                                                                errorMessages={['Item Name is required']}
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


                                                        <div class="form-group main-text-feild-head">
                                                            <label For="name">Website Link</label>
                                                            <TextValidator fullWidth type='text'
                                                                name='titleName'
                                                                autoComplet='off'
                                                                variant='outlined'
                                                                placeholder='Enter website address of your project'
                                                                className='input-fields'
                                                                validators={['required']}
                                                                errorMessages={['Item Name is required']}
                                                            />
                                                        </div>

                                                    </div>
                                                    <div className="col-md-6 pr-md-0">
                                                        <div class="form-group main-text-feild-head">
                                                            <label For="name">Twitter Link</label>
                                                            <TextValidator fullWidth type='text'
                                                                name='titleName'
                                                                autoComplet='off'
                                                                variant='outlined'
                                                                placeholder='Enter twitter link of your project'
                                                                className='input-fields'
                                                                validators={['required']}
                                                                errorMessages={['Item Name is required']}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 pl-md-0">
                                                        <div class="form-group main-text-feild-head">
                                                            <label For="name">Telegram Link</label>
                                                            <TextValidator fullWidth type='text'
                                                                name='titleName'
                                                                autoComplet='off'
                                                                variant='outlined'
                                                                placeholder='Enter telegram link of your project'
                                                                className='input-fields'
                                                                validators={['required']}
                                                                errorMessages={['Item Name is required']}
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
                                                        <div class="form-group main-text-feild-head">
                                                            <label For="name">Binance Smart Chain</label>
                                                            <TextValidator fullWidth type='text'
                                                                name='titleName'
                                                                autoComplet='off'
                                                                variant='outlined'
                                                                placeholder='Ex : 0x00000000000000'
                                                                className='input-fields'
                                                                validators={['required']}
                                                                errorMessages={['Item Name is required']}
                                                            />
                                                        </div>

                                                    </div>

                                                    <div className="col-md-6 pr-md-0">
                                                        <div class="form-group main-text-feild-head">
                                                            <label For="name">Ethereum</label>
                                                            <TextValidator fullWidth type='text'
                                                                name='titleName'
                                                                autoComplet='off'
                                                                variant='outlined'
                                                                placeholder='Ex : 0x000000000000000'
                                                                className='input-fields'
                                                                validators={['required']}
                                                                errorMessages={['Item Name is required']}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 pl-md-0">
                                                        <div class="form-group main-text-feild-head">
                                                            <label For="name">Polygon</label>
                                                            <TextValidator fullWidth type='text'
                                                                name='titleName'
                                                                autoComplet='off'
                                                                variant='outlined'
                                                                placeholder='Ex : 0x000000000000000'
                                                                className='input-fields'
                                                                validators={['required']}
                                                                errorMessages={['Item Name is required']}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 pr-md-0">
                                                        <div class="form-group main-text-feild-head">
                                                            <label For="name">Solana</label>
                                                            <TextValidator fullWidth type='text'
                                                                name='titleName'
                                                                autoComplet='off'
                                                                variant='outlined'
                                                                placeholder='Ex : xxxxxxxxxxxxxxxxxxxxx'
                                                                className='input-fields'
                                                                validators={['required']}
                                                                errorMessages={['Item Name is required']}
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
                                                            <button className="btn-haed w-100">Submit</button>
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
