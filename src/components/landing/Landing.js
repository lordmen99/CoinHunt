// import logo from './logo.svg';
import '../../App.scss';
import Yesterday from './yesterday/Yesterday';
import NFts from './NFTs/NFT';
import Presale from './presale/Presale';
import PromotedCoin from './promotedcoins/PromotedCoin';
import Today from './today/Today';
import AllTheTime from './allthetime/AllBest';

function Landing() {
  return (
    <>
      <PromotedCoin />
      <NFts />
      <Today />
      <Presale />
      <AllTheTime />
      <Yesterday />
    </>
  );
}

export default Landing;