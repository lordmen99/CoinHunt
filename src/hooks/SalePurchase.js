import { useCallback } from 'react'
import { useWeb3React } from '@web3-react/core'
import useWeb3 from './useWeb3';
import environment from '../utils/Environment';
import { BlueMoonMarketPlaceContract, BlueMoonProContract, BlueMoonUniqueContract, BlueMoonFreshContract, BlueMoonCustomCollectionContract } from '../utils/contractHelpers'



export const usePurchase = () => {
    const { account } = useWeb3React();
    const web3 = useWeb3();
    const tokenAddress = environment.BlueMoonMarketPlace;
    const contract = BlueMoonMarketPlaceContract(tokenAddress, web3)

    const PurchaseFun = useCallback(async (address, id, addedValue) => {
        console.log("aaaaaaaaaaa", address, id, addedValue, account)
        const mint = await contract.methods.buy(address, id)
            .send({
                from: account,
                value: web3.utils.toWei(addedValue.toString())
            })
            .on('transactionHash', (tx) => {
                console.log("trx hash", tx)
                return true;
            });
            console.log("returnValues",mint)
        return mint;
    }, [account, contract])

    return { purchase: PurchaseFun }
}