import { ethers } from 'ethers';
import React from 'react';
import {useState} from "react";

const startPayment = async ({setError, sendTxs, ether, address}) =>{
    
    //check for wallet extension
    if(!window.ethereum){
        alert('please install Metamask');
        return;
    }
    
    try{
        await window.ethereum.send("eth_requestAccounts");   

        const provider =  new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();

        //validate address - getAddress will throw an invalid address error
        ethers.utils.getAddress(address);

        //set up transaction
        const transaction = await signer.SendTransaction({
            to: address,
            value: ethers.utils.parseEther(ether)
        });
        console.log(ether, address);
        console.log("transaction", transaction)

        setTransaction([transaction]);
    }
    catch(error){
        console.log(error);
        setError(error.message)
    }

};
function SendTransaction() {
    const [transaction, setTransaction] = useState([]);
    const [error, setError] = useState();
    return (
        <div>
            
        </div>
    )
}

export default SendTransaction
