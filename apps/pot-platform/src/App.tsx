import Navigation from "./components/Navigation"
import Linking from './pages/Linking'
import Transfer from "./pages/Transfer"
import { Routes, Route, BrowserRouter, Outlet } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter basename="/pay-ops/">
        <Navigation />
        <Routes>
          <Route path="/linking" element={<Linking />} />
          <Route path="/transfer" element={<Transfer />} />
          <Route path="*" element={<Outlet />} />
        </Routes>
      </BrowserRouter>
      <div id="sub-app" />
    </div>
  )
}

export default App
