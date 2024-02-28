import { BrowserRouter, Routes, Route  } from "react-router-dom"
import Layout from './pages/Layout'
import Home from './pages/Home'
import Property from "./pages/Property"

function App() {

  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
            <Layout
            />
          }>
            <Route path="/" element={<Home />} />
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
