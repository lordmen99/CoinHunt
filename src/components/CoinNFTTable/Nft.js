import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './tables.scss';
import { useSelector } from 'react-redux'
import axios from 'axios';
import { API_URL } from '../../utils/ApiURL';
const NFt = () => {
    const lightMode = useSelector((state) => state.themereducer.lightMode)
    const [allnft, setallnft] = useState([]);
    const allnftcollection = () => {
        axios.get(`${API_URL}/v1/Nft/getAllNft`)
            .then((response) => {
                setallnft(response.data.data)
            })
    }
    // console.log("all nft data", allnft)
    useEffect(() => {
        allnftcollection()
    }, [])

    const AllNFT = allnft.map((elem) => {
        return (
            <>
                <tr>
                    <td>
                        <div className="images-outer">
                            <img src={elem.imageUrl} alt="" className="img-fluid" />
                            <div className="textss">
                                <h4>{elem.name}</h4>
                            </div>
                        </div>
                    </td>
                    <td>
                        <Link to="" className="cnc">{elem.price} BNB</Link>
                    </td>
                    <td>
                        <p className="jhj">{elem.blockChian}</p>
                    </td>
                    <td>
                        <p className="jhjf">APPROVED</p>
                    </td>
                    <td>
                    <Link to={'/SingleNft/' + elem._id } ><button className="bvhjr">
                            Detail
                        </button>
                        </Link>
                    </td>
                </tr>
            </>
        )

    })
    return (
        <>
            <div className={lightMode ? "" : "light"}>
                <div className="container-fluid p-0">
                    <div className="row">
                        <div className="col-sm-11 m-auto">
                            <div className="heading-main">
                                <h3>NFTs</h3>
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
                                               {AllNFT}
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

export default NFt;
