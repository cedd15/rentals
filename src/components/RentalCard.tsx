import type { Rental } from "../models/Rental";

interface Prop {
    rental: Rental
}

function RentalCard({ rental } : Prop) {
    return(
        <div className="rentalCard">
            <span>`${rental.monthly} /mo`</span>
            <span>`${rental.city}, ${rental.provice}`</span>
            <p>`${rental.house_number} ${rental.address_1} ${rental.address_2} ${rental.barangay}`</p>
            <p>`${rental.description}`</p>
        </div>
    )
}

export default RentalCard;