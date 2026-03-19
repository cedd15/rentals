import { useState } from 'react';
import "../styles/RentalForm.css"

function RentalForm() {
    const [showForm, setShowForm] = useState<boolean>(false);

    return (
        <div className="form-wrapper">
            {!showForm && <button className="post-rent-btn" onClick={() => setShowForm(true)}>Post Rental</button>}
            {showForm && (
                <form action="" className="rental-form">
                    <div className="input-wrapper">
                        <label className="input-label" htmlFor="house_number">House Number: </label>
                        <input className="input-box" type="text" name="house_number" id="house_number" />
                    </div>
                    <div className="input-wrapper">
                        <label className="input-label" htmlFor="address_1">Address 1: </label>
                        <input className="input-box" type="text" name="address_1" id="address_1" />
                    </div>
                    <div className="input-wrapper">
                        <label className="input-label" htmlFor="address_2">Address 2: </label>
                        <input className="input-box" type="text" name="address_2" id="address_2" />
                    </div>
                    <div className="input-wrapper">
                        <label className="input-label" htmlFor="barangay">Barangay: </label>
                        <input className="input-box" type="text" name="barangay" id="barangay" />
                    </div>
                    <div className="input-wrapper">
                        <label className="input-label" htmlFor="city">City: </label>
                        <input className="input-box" type="text" name="city" id="city" />
                    </div>
                    <div className="input-wrapper">
                        <label className="input-label" htmlFor="province">Province: </label>
                        <input className="input-box" type="text" name="province" id="province" />
                    </div>
                    <div className="input-wrapper">
                        <label className="input-label" htmlFor="description">Description: </label>
                        <textarea className="input-box" name="description" id="description" />
                    </div>
                    <div className="input-wrapper">
                        <label className="input-label" htmlFor="monthly">Monthly: </label>
                        <input className="input-box" type="number" min="0" name="monthly" id="monthly" />
                    </div>
                    <div className="input-wrapper">
                        <button className="input-btn" type="submit">Post Rental</button>
                        <button className="input-btn" type="button" onClick={() => setShowForm(false)}>Cancel</button>
                    </div>
                </form>
            )}
        </div>

    )
}

export default RentalForm;