import React from 'react';
import { Link } from 'react-router-dom';
import './tables.scss';
import { useSelector } from 'react-redux'
const Coins = () => {
    const lightMode = useSelector((state) => state.themereducer.lightMode)
    return (
        <>
            <div className={lightMode ? "" : "light"}>
                <div className="container-fluid p-0">
                    <div className="row">
                        <div className="col-sm-11 m-auto">
                            <div className="heading-main">
                                <h3>Coins</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <section className="AllNFT">
                    <div className="container-fluid p-0">
                        <div className="row">
                            <div className="col-sm-11 m-auto">
                                <div className="down-nfts">
                                    <div class="table-responsive">
                                        <table class="table">
                                            <thead>
                                                <tr>
                                                    <th scope="col">NFTS NAME</th>
                                                    <th scope="col">PRICE</th>
                                                    <th scope="col">CHAIN</th>
                                                    <th scope="col">STATUS</th>
                                                    <th scope="col">DETAILS</th>
                                                </tr>
                                            </thead>
                                            <tbody className="sndsj">
                                                <tr>
                                                    <td>
                                                        <div className="images-outer">
                                                            <img src="\coinhunt\Web - Light\coindetail-1.svg" alt="" className="img-fluid" />
                                                            <div className="textss">
                                                                <h4>SkullApe</h4>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <Link className="cnc">0.1 BNB</Link>
                                                    </td>
                                                    <td>
                                                        <p className="jhj">BSC</p>
                                                    </td>
                                                    <td>
                                                        <p className="jhjf">APPROVED</p>
                                                    </td>
                                                    <td>
                                                         <button className="bvhjr">
                                                            Detail
                                                        </button>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="images-outer">
                                                            <img src="\coinhunt\Web - Light\coindetail-2.svg" alt="" className="img-fluid" />
                                                            <div className="textss">
                                                                <h4>Mutant</h4>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <Link className="cnc">0.1 BNB</Link>
                                                    </td>
                                                    <td>
                                                        <p className="jhj">BSC</p>
                                                    </td>
                                                    <td>
                                                        <p className="jhjf">APPROVED</p>
                                                    </td>
                                                    <td>
                                                         <button className="bvhjr">
                                                            Detail
                                                        </button>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="images-outer">
                                                            <img src="\coinhunt\Web - Light\coindetail-3.svg" alt="" className="img-fluid" />
                                                            <div className="textss">
                                                                <h4>Sant</h4>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <Link className="cnc">0.1 BNB</Link>
                                                    </td>
                                                    <td>
                                                        <p className="jhj">BSC</p>
                                                    </td>
                                                    <td>
                                                        <p className="jhjf">APPROVED</p>
                                                    </td>
                                                    <td>
                                                        <button className="bvhjr">
                                                            Detail
                                                        </button>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="images-outer">
                                                            <img src="\coinhunt\Web - Light\coindetail-4.svg" alt="" className="img-fluid" />
                                                            <div className="textss">
                                                                <h4>Royal Horse</h4>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <Link className="cnc">0.1 BNB</Link>
                                                    </td>
                                                    <td>
                                                        <p className="jhj">BSC</p>
                                                    </td>
                                                    <td>
                                                        <p className="jhjf">APPROVED</p>
                                                    </td>
                                                    <td>
                                                         <button className="bvhjr">
                                                            Detail
                                                        </button>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="images-outer">
                                                            <img src="\coinhunt\Web - Light\coindetail-1.svg" alt="" className="img-fluid" />
                                                            <div className="textss">
                                                                <h4>SkullApe</h4>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <Link className="cnc">0.1 BNB</Link>
                                                    </td>
                                                    <td>
                                                        <p className="jhj">BSC</p>
                                                    </td>
                                                    <td>
                                                        <p className="jhjf">APPROVED</p>
                                                    </td>
                                                    <td>
                                                         <button className="bvhjr">
                                                            Detail
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

export default Coins;
