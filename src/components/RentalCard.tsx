import type { Rental } from "../models/Rental";

interface Prop {
    rentals: Rental[]
}

function RentalCard({ rentals } : Prop) {return(
        <div className="rentalCard">
            {rentals.map(rental => (
                <div>
                    <h4>{`${rental.monthly} /mo`}</h4>
                    <h5>{`${rental.city}, ${rental.provice}`}</h5>
                    <p>{`${rental.house_number} ${rental.address_1}, ${rental.address_2}, ${rental.barangay}`}</p>
                    <p>{`${rental.description}`}</p>
                </div>
            ))}
        </div>
    )
}

export default RentalCard;