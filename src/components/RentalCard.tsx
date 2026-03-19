import type { Rental } from "../models/Rental";
import "../styles/RentalCard.css"

interface Prop {
    rentals: Rental[]
}

function RentalCard({ rentals } : Prop) {return(
        <div className="rental-card-wrapper">
            {rentals.map(rental => (
                <div className="rental-card">
                    <h4>{`${rental.monthly} /mo`}</h4>
                    <h4>{`${rental.city}, ${rental.provice}`}</h4>
                    <p>{`${rental.house_number} ${rental.address_1}`}</p>
                    {rental.address_2 && <p>{rental.address_2}</p>}
                    <p>{`Barangay ${rental.barangay}`}</p>
                    <p>{`${rental.description}`}</p>
                </div>
            ))}
        </div>
    )
}

export default RentalCard;