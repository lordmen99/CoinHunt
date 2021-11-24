import React from 'react';
import { Link } from 'react-router-dom';
import './promotedcoin.scss';
import { useSelector } from 'react-redux'
const PromotedCoin = () => {
    const lightMode = useSelector((state) => state.themereducer.lightMode)
    return (
        <>
            <div className={lightMode ? "" : "light"}>
                <div className="container-fluid p-0">
                    <div className="row">
                        <div className="col-sm-11 m-auto">
                            <div className="heading-main">
                                <h3>Promoted Coins</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <section className="Promotedcoin">
                    <div className="container-fluid p-0">
                        <div className="row">
                            <div className="col-sm-11 m-auto">
                                <div className="down-nfts">
                                    <div class="table-responsive">
                                        <table class="table">
                                            <thead>
                                                <tr>
                                                    <th scope="col">COIN</th>
                                                    <th scope="col">1H</th>
                                                    <th scope="col">MARKET CAP</th>
                                                    <th scope="col">TIME SINCE LAUNCH</th>
                                                    <th scope="col">VOTES</th>
                                                </tr>
                                            </thead>
                                            <tbody className="sndsj">
                                                <tr>
                                                    <td>
                                                        <div className="images-outer">
                                                            <img src="\coinhunt\Web - Light\image 6.svg" alt="" className="img-fluid" />
                                                            <div className="textss">
                                                                <h4>BitHigh</h4>
                                                                <p>BitHigh</p>
                                                            </div>
                                                            <div className="preslae">
                                                                Presale
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <button className="mnc">10.26%</button>
                                                    </td>
                                                    <td>
                                                        <p className="jhj">$952.678</p>
                                                    </td>
                                                    <td>
                                                        <p className="jhj">Launched Today</p>
                                                    </td>
                                                    <td>
                                                        <button className="bvhjr">
                                                        <img src="\coinhunt\Web - Light\color.svg" alt="" className="img-fluid" />
                                                        <p>21667</p>
                                                        </button>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="images-outer">
                                                            <img src="\coinhunt\Web - Light\image 6.svg" alt="" className="img-fluid" />
                                                            <div className="textss">
                                                                <h4>BitHigh</h4>
                                                                <p>BitHigh</p>
                                                            </div>
                                                            <div className="preslae">
                                                                Presale
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <button className="rnc">10.26%</button>
                                                    </td>
                                                    <td>
                                                        <p className="jhj">$952.678</p>
                                                    </td>
                                                    <td>
                                                        <p className="jhj">Launched Today</p>
                                                    </td>
                                                    <td>
                                                        <button className="bvhjr">
                                                        <img src="\coinhunt\Web - Light\color.svg" alt="" className="img-fluid" />
                                                        <p>21667</p>
                                                        </button>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="images-outer">
                                                            <img src="\coinhunt\Web - Light\image 6.svg" alt="" className="img-fluid" />
                                                            <div className="textss">
                                                                <h4>BitHigh</h4>
                                                                <p>BitHigh</p>
                                                            </div>
                                                            <div className="preslae">
                                                                Presale
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <button className="rnc">10.26%</button>
                                                    </td>
                                                    <td>
                                                        <p className="jhj">$952.678</p>
                                                    </td>
                                                    <td>
                                                        <p className="jhj">Launched Today</p>
                                                    </td>
                                                    <td>
                                                        <button className="bvhjr">
                                                        <img src="\coinhunt\Web - Light\color.svg" alt="" className="img-fluid" />
                                                        <p>21667</p>
                                                        </button>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="images-outer">
                                                            <img src="\coinhunt\Web - Light\image 6.svg" alt="" className="img-fluid" />
                                                            <div className="textss">
                                                                <h4>BitHigh</h4>
                                                                <p>BitHigh</p>
                                                            </div>
                                                            <div className="preslae">
                                                                Presale
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <button className="rnc">10.26%</button>
                                                    </td>
                                                    <td>
                                                        <p className="jhj">$952.678</p>
                                                    </td>
                                                    <td>
                                                        <p className="jhj">Launched Today</p>
                                                    </td>
                                                    <td>
                                                        <button className="bvhjr">
                                                        <img src="\coinhunt\Web - Light\color.svg" alt="" className="img-fluid" />
                                                        <p>21667</p>
                                                        </button>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="images-outer">
                                                            <img src="\coinhunt\Web - Light\image 6.svg" alt="" className="img-fluid" />
                                                            <div className="textss">
                                                                <h4>BitHigh</h4>
                                                                <p>BitHigh</p>
                                                            </div>
                                                            <div className="preslae">
                                                                Presale
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <button className="mnc">10.26%</button>
                                                    </td>
                                                    <td>
                                                        <p className="jhj">$952.678</p>
                                                    </td>
                                                    <td>
                                                        <p className="jhj">Launched Today</p>
                                                    </td>
                                                    <td>
                                                        <button className="bvhjr">
                                                        <img src="\coinhunt\Web - Light\color.svg" alt="" className="img-fluid" />
                                                        <p>21667</p>
                                                        </button>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
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

export default PromotedCoin;
