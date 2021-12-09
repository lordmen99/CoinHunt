import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './homelogin.scss';
import { useSelector } from 'react-redux'
import { GoogleLogin, GoogleLogout } from 'react-google-login'
import axios from 'axios';
import { API_URL } from '../../utils/ApiURL';
const HomeLogin = () => {
    const lightMode = useSelector((state) => state.themereducer.lightMode)
    const [goggle, setgoogle] = useState(
        "waqas"
    );
    const clientId = "304103939220-qc684ri4jnevtsnbnm8u99b6gr0l1mje.apps.googleusercontent.com"
    const loginSuccess = (res) => {
        const profile = res.profileObj;
        setgoogle(profile);
        addUser(googleId, name, imageUrl, email);
    }
    const addUser = async (googleId, name, imageUrl, email) => {
        const res = await axios.post(`${API_URL}/v1/users/addUser`, { username: name, picture: imageUrl, email: email, userId: googleId });
    }
    console.log("GetGoogle::", goggle)
    const { googleId, name, imageUrl, email } = goggle
    console.log("googleId, name, imageUrl, email ", googleId, name, imageUrl, email)

    const failure = (res) => {
        console.log("login Failure::", res)
    }

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
                <section className="Loginns">
                    <div className="container-fluid p-0">
                        <div className="row">
                            <div className="col-sm-11 m-auto">
                                <div className="login-inner">
                                    <div className="xnj">
                                        <h3> Login to vote and <br></br> add coins</h3>
                                    </div>
                                    <div className="facdegv">
                                        <GoogleLogin
                                            clientId={clientId}
                                            className="sjhchx"
                                            buttonText="Login with google"
                                            onSuccess={loginSuccess}
                                            onFailure={failure}
                                            cookiePolicy={'single_host_origin'}
                                        />
                                        <button className="mb-0"><img src="\coinhunt\Web - Light\twitter13.svg" alt="" className="img-fluid" /> Sign in with Twitter</button>
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

export default HomeLogin;
