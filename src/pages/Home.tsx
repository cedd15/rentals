import CreateRental from "../components/CreateRental";
import NavBar from "../components/NavBar";
import RentalCard from "../components/RentalCard";
import type { Rental } from "../models/Rental";

function Home() {
    const rentals : Rental[] = [
        {
            house_number: "123",
            address_1: "Molave Street",
            address_2: "St Joseph Subdivision",
            barangay: "Santo Domingo",
            city: "Cainta",
            provice: "Rizal",
            monthly: 5000,
            description: "1 month advance 1 month deposit"
        },
        {
            house_number: "456",
            address_1: "Yakal Street",
            address_2: "St Joseph Subdivision",
            barangay: "Santo Domingo",
            city: "Cainta",
            provice: "Rizal",
            monthly: 8000,
            description: "1 month advance 1 month deposit"
        },
        {
            house_number: "789",
            address_1: "Kamagong Street",
            address_2: "St Joseph Subdivision",
            barangay: "Santo Domingo",
            city: "Cainta",
            provice: "Rizal",
            monthly: 7500,
            description: "1 month advance 1 month deposit"
        }
    ]

    return (
        <div className="home">
            <NavBar />
            <RentalCard rentals={rentals} />
            <CreateRental />
        </div>
    )
}

export default Home;