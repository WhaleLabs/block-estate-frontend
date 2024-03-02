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
import CreateProject from "./pages/CreateProject"

function App() {

  const [filteredLocation, setFilteredLocation] = useState(locationData);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <Layout
            filteredLocation={filteredLocation}
            setFilteredLocation={setFilteredLocation}
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
          <Route path="/create-project" element={<CreateProject />} />
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
  )
}

export default App
