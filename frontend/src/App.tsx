import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from './pages/Layout'
import Home from './pages/Home'
import Profile from './pages/Profile'
import Trips from "./pages/Trips"
import Property from "./pages/Property"
import Holdings from "./pages/Holdings"
import MyHolding from "./pages/MyHolding"
import HoldingInfo from "./pages/HoldingInfo"
import Proposal from "./pages/Proposal"
import CreateProposal from "./pages/CreateProposal"
import { Payment } from "./pages/Payment"
import { useState } from "react"
import { locationData } from "./utils/mock"
import Projects from "./pages/Projects"
import Project from "./pages/Project"
import { Funding } from "./pages/Funding"
import { ethers } from "ethers";

import { MetaMaskUIProvider, useSDK } from "@metamask/sdk-react-ui";

function App() {

  const [filteredLocation, setFilteredLocation] = useState(locationData);
  const [account, setAccount] = useState("");
  const [provider, setProvider] = useState<ethers.providers.Web3Provider | null>(null);
  const [signer, setSigner] = useState<ethers.providers.JsonRpcSigner | null>(null);

  const { sdk } = useSDK();

    const connectMetamask = async () => {
      if(!window.ethereum){
        alert("You need metamask!");
    } else{
        try{
            //@ts-ignore
            const web3Provider = new ethers.providers.Web3Provider(window.ethereum, "any");
            
            const accounts = await web3Provider.send('eth_requestAccounts' ,[]);
            const address = accounts[0];
            const web3Signer = web3Provider.getSigner(address);

            setAccount(address);
            setProvider(web3Provider);
            setSigner(web3Signer);
            
            return {
                web3Provider,
                web3Signer,
                address
            }

        } catch(err){
            console.log(err);
            return null;
        }
    }
    };


  return (
    <MetaMaskUIProvider
    sdkOptions={{
        dappMetadata: {
          name: "BlockEstate",
          url: window.location.href,
        },
        checkInstallationImmediately: false
        
    }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
            <Layout
              filteredLocation={filteredLocation}
              setFilteredLocation={setFilteredLocation}
              connectMetamask={connectMetamask}
              account={account}
            />
          }>
            <Route path="/" element={
              <Home 
                filteredLocation={filteredLocation}
              />
            } />
            <Route path="/profile" element={<Profile />} />
            <Route path="/trips" element={<Trips />} />
            <Route path="/holdings" element={<Holdings />} />
            <Route path="/my-holding/:id/" element={<MyHolding />} >
              <Route path="/my-holding/:id/info" element={<HoldingInfo />} />
              <Route path="/my-holding/:id/proposal" element={<Proposal />} />
              <Route path="/my-holding/:id/create-proposal" element={<CreateProposal />} />
            </Route>
            <Route path="/property/:id" element={
              <Property
              />
            }/>
            <Route path="/checkout/:id" element={
              <Payment
              />
            }/>
            <Route path="/projects" element={
              <Projects
                filteredLocation={filteredLocation}
              />
            } />
            <Route path="/projects/:id" element={
              <Project
              />
            } />
            <Route path="/funding/:id" element={
              <Funding
              />
            } />
          </Route>
        </Routes>
      </BrowserRouter>
    </MetaMaskUIProvider>
  )
}

export default App
