import { Route, Routes } from "react-router"
import NavBar from "./components/NavBar"
import Home from "./pages/Home"
import SavedRentals from "./pages/SavedRentals"

function App() {

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/saved-rentals" element={<SavedRentals />} />
      </Routes>
    </>

  )
}

export default App
