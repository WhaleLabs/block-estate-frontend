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

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <Layout
          />
        }>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/trips" element={<Trips />} />
          <Route path="/holdings" element={<Holdings />} />
          <Route path="/my-holding/:id/" element={<MyHolding />} >
            <Route path="/my-holding/:id/info" element={<HoldingInfo />} />
            <Route path="/my-holding/:id/proposal" element={<Proposal />} />
          </Route>
          <Route path="/property/:id" element={
            <Property
            />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
