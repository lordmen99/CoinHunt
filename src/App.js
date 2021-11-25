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
import CoinDetail from './components/coindetail/CoinDetail';
import NFTDetail from './components/nftdetail/NFTDetail';
import Profile from './components/Profile/Profile';
import NFt from './components/CoinNFTTable/Nft';
import Coins from './components/CoinNFTTable/Coin';

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
            <Route exact path='/CoinDetail' component={CoinDetail} />
            <Route exact path='/NFTDetail' component={NFTDetail} />
            <Route exact path='/Profile' component={Profile} />
            <Route exact path='/NFTDetail' component={NFt} />
            <Route exact path='/CoinDetail' component={Coins} />
          </Switch>
          <Footer />
        </Router>
    </>
  );
}

export default App;
