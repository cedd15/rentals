import type { Rental } from "../models/Rental";
import "../styles/RentalCard.css"
import { FaRegHeart } from "react-icons/fa";
import { IoIosAdd } from "react-icons/io";
import { MdDeleteOutline } from "react-icons/md";

interface Prop {
    rentals: Rental[],
    onToggleFave: (id : string) => void
    onDelete: (id : string) => void
}

function RentalCard({ rentals, onToggleFave, onDelete } : Prop) {

    return(
        <div className="rental-card-wrapper">
            {rentals.map(rental => (
                <div className="rental-card" key={rental.id}>
                    <div className="rental-btns">
                        <button onClick={() => onToggleFave(rental.id)}>
                            {rental.isFave ? <FaRegHeart /> : <IoIosAdd />}
                        </button>
                        <button onClick={() => onDelete(rental.id)}>
                            <MdDeleteOutline />
                        </button>
                    </div>
                    <div className="rental-item">
                        <h4>{`${rental.monthly} /mo`}</h4>
                        <h4>{`${rental.city}, ${rental.province}`}</h4>
                        <p>{`${rental.house_number} ${rental.address_1}`}</p>
                        {rental.address_2 && <p>{rental.address_2}</p>}
                        <p>{`Barangay ${rental.barangay}`}</p>
                        <p>{`${rental.description}`}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default RentalCard;