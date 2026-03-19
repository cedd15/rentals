import NavBar from "../components/NavBar";
import "../styles/Home.css"
import Rentals from "../components/Rentals";

function Home() {
    return (
        <div className="home">
            <NavBar />
            <Rentals />
        </div>
    )
}

export default Home;