import React from 'react';
import { Link } from 'react-router-dom';
import './allbest.scss';
import { useSelector } from 'react-redux'
const AllTheTime = () => {
    const lightMode = useSelector((state) => state.themereducer.lightMode)
    return (
        <>
            <div className={lightMode ? "" : "light"}>
                <section className="AllTheTime d-none d-sm-block">
                    <div className="container-fluid p-0">
                        <div className="row">
                            <div className="col-sm-11 m-auto">
                                <div className="down-nfts">
                                    <div className="heading-main  bncvx d-flex justify-content-between align-items-center">
                                        <div className="left">
                                            <h3>All Time Best</h3>
                                        </div>
                                        <div className="right">
                                            <h4>View All</h4>
                                        </div>

                                    </div>
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
                <section className="AllTheTime-mobile d-block d-sm-none">
                    {/* <div className="container-fluid p-0">
                        <div className="row">
                            <div className="col-sm-12 m-auto">
                                <div className="down-nfts heading-main d-flex justify-content-between w-100">
                                    <div className="left">
                                        <h3>All Time Best</h3>
                                    </div>
                                    <div className="right">
                                        <h4>View All</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}
                    <div className="container-fluid">
                        <div className="row p-0">
                            {/* <div className='d-flex flex-column AllTheTime-mobile-inner'> */}
                                <div className="col-12 p-0 m-auto">
                                    <div className="atm-top d-flex justify-content-between align-items-center w-100">
                                            <h3>All Time Best</h3>
                                            <h4>View All</h4>
                                    </div>
                                </div>
                                <div className="col-12 p-0 m-auto">
                                    <div className='row p-0'>
                                        <div className="col-12 p-0">
                                            <div className='Promotedcoin-row'>
                                                <div className='img-div mr-2'>
                                                    <img src="\coinhunt\Web - Light\image 6.svg" className='img-fluid' alt="" />
                                                </div>
                                                <div className=" d-flex justify-content-between w-100 align-items-center">
                                                    <div className='some-detail-div'>
                                                        <p className="sdd-p">Stroam Bringer</p>
                                                        <div className='some-detail mt-2'>
                                                            <p>JIND</p>
                                                            <p>$890.690</p>
                                                            <p>8days</p>
                                                        </div>
                                                        <div className='Badge-div mt-2'>
                                                            <span class="badge custom-badge badge-primary">Primary</span>
                                                        </div>
                                                    </div>
                                                    <div className='btn-div'>
                                                        <button className="bvhjr">
                                                            <img src="\coinhunt\Web - Light\color.svg" alt="" className="img-fluid" />
                                                            <p>21667</p>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className='Promotedcoin-row'>
                                                <div className='img-div mr-2'>
                                                    <img src="\coinhunt\Web - Light\image 6.svg" className='img-fluid' alt="" />
                                                </div>
                                                <div className=" d-flex justify-content-between w-100 align-items-center">
                                                    <div className='some-detail-div'>
                                                        <p className="sdd-p">Stroam Bringer</p>
                                                        <div className='some-detail mt-2'>
                                                            <p>JIND</p>
                                                            <p>$890.690</p>
                                                            <p>8 days</p>
                                                        </div>
                                                        <div className='Badge-div mt-2'>
                                                            <span class="badge custom-badge badge-primary">Primary</span>
                                                        </div>
                                                    </div>
                                                    <div className='btn-div'>
                                                        <button className="bvhjr">
                                                            <img src="\coinhunt\Web - Light\color.svg" alt="" className="img-fluid" />
                                                            <p>21667</p>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className='Promotedcoin-row'>
                                                <div className='img-div mr-2'>
                                                    <img src="\coinhunt\Web - Light\image 6.svg" className='img-fluid' alt="" />
                                                </div>
                                                <div className=" d-flex justify-content-between w-100 align-items-center">
                                                    <div className='some-detail-div'>
                                                        <p className="sdd-p">Stroam Bringer</p>
                                                        <div className='some-detail mt-2'>
                                                            <p>JIND</p>
                                                            <p>$890.690</p>
                                                            <p>8 days</p>
                                                        </div>
                                                        <div className='Badge-div mt-2'>
                                                            <span class="badge custom-badge badge-primary">Primary</span>
                                                        </div>
                                                    </div>
                                                    <div className='btn-div'>
                                                        <button className="bvhjr">
                                                            <img src="\coinhunt\Web - Light\color.svg" alt="" className="img-fluid" />
                                                            <p>21667</p>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className='Promotedcoin-row'>
                                                <div className='img-div mr-2'>
                                                    <img src="\coinhunt\Web - Light\image 6.svg" className='img-fluid' alt="" />
                                                </div>
                                                <div className=" d-flex justify-content-between w-100 align-items-center">
                                                    <div className='some-detail-div'>
                                                        <p className="sdd-p">Stroam Bringer</p>
                                                        <div className='some-detail mt-2'>
                                                            <p>JIND</p>
                                                            <p>$890.690</p>
                                                            <p>8 days</p>
                                                        </div>
                                                        <div className='Badge-div mt-2'>
                                                            <span class="badge custom-badge badge-primary">Primary</span>
                                                        </div>
                                                    </div>
                                                    <div className='btn-div'>
                                                        <button className="bvhjr">
                                                            <img src="\coinhunt\Web - Light\color.svg" alt="" className="img-fluid" />
                                                            <p>21667</p>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className='Promotedcoin-row'>
                                                <div className='img-div mr-2'>
                                                    <img src="\coinhunt\Web - Light\image 6.svg" className='img-fluid' alt="" />
                                                </div>
                                                <div className=" d-flex justify-content-between w-100 align-items-center">
                                                    <div className='some-detail-div'>
                                                        <p className="sdd-p">Stroam Bringer</p>
                                                        <div className='some-detail mt-2'>
                                                            <p>JIND</p>
                                                            <p>$890.690</p>
                                                            <p>8 days</p>
                                                        </div>
                                                        <div className='Badge-div mt-2'>
                                                            <span class="badge custom-badge badge-primary">Primary</span>
                                                        </div>
                                                    </div>
                                                    <div className='btn-div'>
                                                        <button className="bvhjr">
                                                            <img src="\coinhunt\Web - Light\color.svg" alt="" className="img-fluid" />
                                                            <p>21667</p>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className='Promotedcoin-row'>
                                                <div className='img-div mr-2'>
                                                    <img src="\coinhunt\Web - Light\image 6.svg" className='img-fluid' alt="" />
                                                </div>
                                                <div className=" d-flex justify-content-between w-100 align-items-center">
                                                    <div className='some-detail-div'>
                                                        <p className="sdd-p">Stroam Bringer</p>
                                                        <div className='some-detail mt-2'>
                                                            <p>JIND</p>
                                                            <p>$890.690</p>
                                                            <p>8 days</p>
                                                        </div>
                                                        <div className='Badge-div mt-2'>
                                                            <span class="badge custom-badge badge-primary">Primary</span>
                                                        </div>
                                                    </div>
                                                    <div className='btn-div'>
                                                        <button className="bvhjr">
                                                            <img src="\coinhunt\Web - Light\color.svg" alt="" className="img-fluid" />
                                                            <p>21667</p>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className='Promotedcoin-row'>
                                                <div className='img-div mr-2'>
                                                    <img src="\coinhunt\Web - Light\image 6.svg" className='img-fluid' alt="" />
                                                </div>
                                                <div className=" d-flex justify-content-between w-100 align-items-center">
                                                    <div className='some-detail-div'>
                                                        <p className="sdd-p">Stroam Bringer</p>
                                                        <div className='some-detail mt-2'>
                                                            <p>JIND</p>
                                                            <p>$890.690</p>
                                                            <p>8 days</p>
                                                        </div>
                                                        <div className='Badge-div mt-2'>
                                                            <span class="badge custom-badge badge-primary">Primary</span>
                                                        </div>
                                                    </div>
                                                    <div className='btn-div'>
                                                        <button className="bvhjr">
                                                            <img src="\coinhunt\Web - Light\color.svg" alt="" className="img-fluid" />
                                                            <p>21667</p>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            {/* </div> */}
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default AllTheTime;
