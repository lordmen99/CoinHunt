import './App.scss';
import React from 'react';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Landing from './components/landing/Landing.js';
import Footer from './components/landing/footer/Footer.js';
import Navbar from './components/landing/header/Navbar.js';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useWeb3React } from '@web3-react/core';
import useEagerConnect from './hooks/useEagerConnect';
import HomeLogin from './components/homelogin/HomeLogin';
import SingleCoinDetail from './components/coindetail/SingleCoinDetail';
import NFTDetail from './components/nftdetail/AddNft';
import Profile from './components/Profile/Profile';
import NFt from './components/CoinNFTTable/Nft';
import Coins from './components/CoinNFTTable/Coin';
import BitHighNFT from './components/BitHigh/BitHighNFT';
import AddCoin from './components/coindetail/AddCoin';
import AddNft from './components/nftdetail/AddNft';
import SingleNft from './components/nftdetail/SingleNft';
import BitHighCoin from './components/BitHigh/BitHighCoin';

function App() {
  useEagerConnect();
  const { account } = useWeb3React();
  return (
    <>
      <ToastContainer />
        <Router>
          <Navbar />
          <Switch>
            <Route exact path='/' component={Landing} />
            <Route exact path='/Login' component={HomeLogin} />
            <Route exact path='/AddCoin' component={AddCoin} />
            <Route exact path='/AddNft' component={AddNft} />
            <Route exact path='/SingleNft' component={SingleNft} />
            <Route exact path='/SingleCoinDetail' component={SingleCoinDetail} />
            <Route exact path='/Profile' component={Profile} />
            <Route exact path='/AllNFTDetail' component={NFt} />
            <Route exact path='/AllCoinDetail' component={Coins} />
            <Route exact path='/BitNFT' component={BitHighNFT} />
            <Route exact path='/BitCoin' component={BitHighCoin} />
          </Switch>
          <Footer />
        </Router>
    </>
  );
}

export default App;
