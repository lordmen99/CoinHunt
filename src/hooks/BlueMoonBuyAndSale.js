import { useCallback } from 'react'
import { useWeb3React } from '@web3-react/core'
import useWeb3 from './useWeb3';
// import environment from '../utils/Environment';
// import { BlueMoonProContract, BlueMoonMarketPlaceContract, BlueMoonUniqueContract, BlueMoonFreshContract } from '../utils/contractHelpers';
import Web3 from 'web3';


export const BuyUningBnb = () => {
    const { account } = useWeb3React();
    // console.log("account", account)
    const web3 = useWeb3();
    const BnbBuy = useCallback(async (price) => {
        const res = await web3.eth.sendTransaction(
            {
                from: account,
                to: "0x294d0487fdf7acecf342ae70AFc5549A6E90f3e0",
                value: web3.utils.toWei(price, "ether")
            });
        return res;
    }, [account])
    return { BnbBuy: BnbBuy }
}