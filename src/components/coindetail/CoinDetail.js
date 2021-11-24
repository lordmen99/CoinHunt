import React from 'react';
import { Link } from 'react-router-dom';
import './coindetail.scss';
import { useSelector } from 'react-redux'
const CoinDetail = () => {
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
                <section className="Loginns">
                    <div className="container-fluid p-0">
                        <div className="row">
                            <div className="col-sm-11 m-auto">
                                <div className="login-inner">
                                    <div className="xnj">
                                       <h3> Login to vote and <br></br> add coins</h3>
                                    </div>
                                    <div className="facdegv">
                                        <button><img src="\coinhunt\Web - Light\facebook-log.svg" alt="" className="img-fluid" /> Sign in with Google</button>
                                        <button  className="mb-0"><img src="\coinhunt\Web - Light\twitter13.svg" alt="" className="img-fluid" /> Sign in with Twitter</button>
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

export default CoinDetail;
