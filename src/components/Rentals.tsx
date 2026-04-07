import type { Rental } from "../models/Rental";
import RentalCard from "./RentalCard";
import RentalForm from "./RentalForm";
import "../styles/Rentals.css"
import { useState } from "react";
import { useSaved } from "./customHooks";

function Rentals() {
    const [rentals, setRentals] = useState<Rental[]>([
        {
            id: "f47ac10b-58cc-4372-a567-0e02b2c3d479",
            house_number: "123",
            address_1: "Molave Street",
            address_2: "St Joseph Subdivision",
            barangay: "Santo Domingo",
            city: "Cainta",
            province: "Rizal",
            monthly: 5000,
            description: "1 month advance 1 month deposit",
            isFave: false
        },
        {
            id: "f47ac10b-58cc-4372-a567-0e02b2c3d478",
            house_number: "456",
            address_1: "Yakal Street",
            address_2: "St Joseph Subdivision",
            barangay: "Santo Domingo",
            city: "Cainta",
            province: "Rizal",
            monthly: 8000,
            description: "1 month advance 1 month deposit",
            isFave: false
        },
        {
            id: "f47ac10b-58cc-4372-a567-0e02b2c3d477",
            house_number: "789",
            address_1: "Kamagong Street",
            address_2: "St Joseph Subdivision",
            barangay: "Santo Domingo",
            city: "Cainta",
            province: "Rizal",
            monthly: 7500,
            description: "1 month advance 1 month deposit",
            isFave: false
        }
    ])

    const { toggleSave } = useSaved();

    const toggleFave = (rental : Rental) => {
        setRentals((prevItems) =>
            prevItems.map((item) =>
                item.id === rental.id
                    ? { ...item, isFave: !item.isFave }
                    : item
            )
        );

        toggleSave({...rental, isFave: true});
    };

    const deleteItem = (id : string) => {
        setRentals(prev => prev.filter(p => p.id != id))
    }

    return (
        <div className="rentals">
            <RentalForm setRentals={setRentals} />
            <RentalCard rentals={rentals} onToggleFave={toggleFave} onDelete={deleteItem} />
        </div>
    )
}

export default Rentals;