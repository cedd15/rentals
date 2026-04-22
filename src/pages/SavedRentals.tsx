import { useSaved } from "../components/customHooks";
import { MdOutlineClose } from "react-icons/md";
import "../styles/SavedRentals.css";
import { useAuth } from "../contexts/AuthContext";


function SavedRentals() {
    const { rentals, toggleSave } = useSaved();
    const { logout } = useAuth();

    // if (rentals.length === 0)
    //     return (
    //         <div className="no-saved">
    //             <p>Nothing saved here.</p>
    //         </div>
    // )

    const handleLogout = () => {
        logout();
    }

    return (
        <div className="saved-rentals">
            <button className="logout" onClick={handleLogout}>Logout</button>
            {rentals.length === 0 ?
                <div className="no-saved">
                    <p>Nothing saved here.</p>
                </div> :
                <div className="rental-card-wrapper">
                    {rentals.map(rental => (
                        <div className="rental-card" key={rental.id}>
                            <div className="rental-btns">
                                <button onClick={() => toggleSave(rental)}>
                                    <MdOutlineClose />
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
            }
        </div>

    )
}

export default SavedRentals;