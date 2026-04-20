import { Route, Routes } from "react-router"
import NavBar from "./components/NavBar"
import Home from "./pages/Home"
import SavedRentals from "./pages/SavedRentals"
import PrivateRoute from "./components/PrivateRoute"
import Login from "./pages/Login"

function App() {

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/saved-rentals" element={
          <PrivateRoute>
            <SavedRentals />
          </PrivateRoute>
          } 
        />
      </Routes>
    </>

  )
}

export default App
