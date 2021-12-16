import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './adminlog.scss';
import { useSelector } from 'react-redux'
import { GoogleLogin, GoogleLogout } from 'react-google-login'
import axios from 'axios';
import { API_URL } from '../../utils/ApiURL';
import {
    Paper,
    Box,
    Grid,
    TextField,
    Typography,
    FormControlLabel,
    Checkbox,
    Button
} from '@material-ui/core';
const AdminLogin = () => {
    const lightMode = useSelector((state) => state.themereducer.lightMode)
    const history = useHistory();
    const [goggle, setgoogle] = useState(
        ""
    );
    const clientId = "304103939220-qc684ri4jnevtsnbnm8u99b6gr0l1mje.apps.googleusercontent.com"
    const loginSuccess = (res) => {
        const profile = res.profileObj;
        setgoogle(profile);
        // console.log("GetGoogle::", profile)
        const { googleId, name, imageUrl, email } = profile
        // console.log("googleId, name, imageUrl, email ", googleId, name, imageUrl, email)
        addUser(googleId, name, imageUrl, email);
    }
    const addUser = async (googleId, name, imageUrl, email) => {
        const res = await axios.post(`${API_URL}/v1/auth/register`, { username: name, picture: imageUrl, email: email, userId: googleId })
            .then((res) => {
                const Token = res.data.token.accessToken
                localStorage.setItem('LoginToken', Token)
                history.push("/");
                // console.log("ressbkjbkjwdjwnksn", res)
            })
            .catch(async (e) => {
                const res = await axios.post(`${API_URL}/v1/auth/login`, { email: email })
                    .then((res) => {
                        const Token = res.data.token.accessToken
                        localStorage.setItem('LoginToken', Token)
                        history.push("/");
                        console.log("ressbkjbkjwdjwnksn", res)
                    })
                // history.push("/");
                // console.log("res", res)
            });
        // console.log("vakue unsjshds",res)
    }


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
                                <h3>Admin / <span>Login</span></h3>
                            </div>
                        </div>
                    </div>
                </div>
                <section className="Loginns">
                    <div className="container-fluid p-0">
                        <div className="row">
                            <div className="col-sm-4"></div>
                            <div className="col-sm-4 m-auto">
                                <div className="login-inner">
                                        <h2>Login</h2>
                                 
                                </div>
                            </div>
                            <div className="col-sm-4"></div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default AdminLogin;
