import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import './navbar.scss';
import { useWeb3React } from '@web3-react/core'
import useAuth from '../../../hooks/useAuth';
import { fortmatic } from '../../../utils/web3React';
import Signature from '../../../SignMessage/Signature';
import { toast } from 'react-toastify';
import useEthBalance from '../../../hooks/dataFetcher';
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux'
import { changeMode } from "../../../redux/action/index";
import { useSelector } from 'react-redux';
const connectorsByName = {
    Fortmatic: fortmatic,
};

const Navbar = () => {
    const TokenGet = localStorage.getItem("LoginToken");
    console.log("login token", TokenGet)
    const context = useWeb3React();
    const { account, activate, deactivate } = context;
    // const [ account, setc] =useState(123);
    const [username, setUserName] = useState("Your Account");
    const [userbalance, setUserBalance] = useState("0");
    const { userSign } = Signature(account);
    const { login, logout } = useAuth();
    const history = useHistory();
    const ethBalance = useEthBalance();
    const balance = (ethBalance / 10 ** 18).toFixed(5);
    // setUserBalance(balance);

    const dispatch = useDispatch()
    const lightMode = useSelector((state) => state.themereducer.lightMode)
    const changetheme = () => {
        if (lightMode) {
            dispatch(changeMode(false))
        } else {
            dispatch(changeMode(true))
        }
    }
    const connectMetaMask = async () => {
        try {
            localStorage.setItem('injected', "injected")
            if (account) {
                logout()
            } else {
                login("injected");
            }
        } catch (e) {
            console.log(e)
        }
    }
    // console.log("account", account);
    const walletConnect = async () => {
        localStorage.setItem('walletconnect', "walletconnect")
        if (account) {
            logout()
        } else {
            login("walletconnect");
        }
    }
    const FormaticWallet = () => {
        localStorage.setItem('formatic', "formatic")
        if (account) {
            logout()
        } else {
            activate(connectorsByName.Fortmatic)
        }
    }
    const UserSignWindow = async () => {

        const tx = await userSign()
        console.log("tx==========", tx)
        if (tx) {
            console.log("if tx==========", tx)
            history.push('/createnft')
        }
        else {
            console.log("tx==========", tx)
            history.push('/')
            toast.error("Sign Wallet First")
        }
    }


    return (
        <>
            <div className={lightMode ? "" : "light"}>
                <section className="main-navbar">
                    <div className="container-fluid p-0">
                        <div className="row">
                            <div className="col-sm-11 m-auto">
                                <nav className="navbar ptb20 navbar-expand-lg">
                                    <NavLink to="/" className="navbar-brand">
                                        <img src="\coinhunt\Web - Light\logoipsum-logo-39 1.svg" alt="" className="img-fluid" />
                                    </NavLink>
                                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                        <span className="mdhfy"> <i class="fas fa-bars"></i></span>
                                    </button>
                                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                        <div className="search-in">
                                            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                                            <div className="insoonx">
                                                <img src="\coinhunt\Web - Light\search.svg" alt="" className="img-fluid" />
                                            </div>
                                        </div>
                                        <ul className="navbar-nav ml-auto">
                                            <li className="nav-item active">
                                                <NavLink className="nav-link" to="/AddCoin">Add Coin <span className="sr-only">(current)</span></NavLink>
                                            </li>
                                            <li className="nav-item">
                                                <NavLink className="nav-link" to="/AddNft">ADD NFT</NavLink>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" to="/Nftswap">PROMOTE</Link>
                                            </li>
                                        </ul>
                                        <form className="form-inline my-2 my-lg-0">
                                            {/* <input className="form-control mr-sm-2" type="search" placeholder="Search items" aria-label="Search" /> */}
                                            <ul className="list-inline">
                                                <li className="list-inline-item">
                                                    <div className="dropdown ml">
                                                        {TokenGet
                                                            ?
                                                            <button className="btn-haed-disconnect" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                SignOut
                                                            </button>
                                                            :
                                                            <button className="btn-haed" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                Sign in
                                                            </button>
                                                        }
                                                    </div>
                                                </li>
                                                <li className="list-inline-item">
                                                    <button type="button" className=" img-bhu" onClick={changetheme}>
                                                        {lightMode
                                                            ?
                                                            <img src="\coinhunt\Web - Light\dark.svg" alt="" className="img-fluid" />
                                                            :
                                                            <img src="\coinhunt\Web - Light\Web - Light\Frame 4.svg" alt="" className="img-fluid " />
                                                        }
                                                    </button>
                                                </li>
                                            </ul>
                                        </form>
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </div>
                </section >
            </div>
        </>
    )
}

export default Navbar;
