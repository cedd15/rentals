import { useState, type ChangeEventHandler } from 'react';
import "../styles/RentalForm.css"
import type { Rental } from '../models/Rental';

interface Prop {
    setRentals: React.Dispatch<React.SetStateAction<Rental[]>>
}

function RentalForm({setRentals} : Prop) {
    const [showForm, setShowForm] = useState<boolean>(false);
    const [formData, setFormData] = useState<Rental>({
        id: crypto.randomUUID(),
        house_number: "",
        address_1: "",
        address_2: "",
        barangay: "",
        city: "",
        province: "",
        monthly: 0,
        description: "",
        isFave: false
    })

    const handleSubmit = (e : React.SubmitEvent) => {
        e.preventDefault();

        if (
        !formData.house_number ||
        !formData.address_1 ||
        !formData.barangay ||
        !formData.city ||
        !formData.province ||
        !formData.description ||
        formData.monthly <= 0   ) {
            alert("Please fill in all required fields.");
            return;
        }

        setRentals(prev => [...prev, formData])

        setShowForm(false)
    }

    const handleChange = (e : React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;

        setFormData(prev => ({
            ...prev,
            [name]: name === "monthly" ? Number(value) : value
        }))
    }

    return (
        <div className="form-wrapper">
            {!showForm && <button className="post-rent-btn" onClick={() => setShowForm(true)}>Post Rental</button>}
            {showForm && (
                <form onSubmit={handleSubmit} className="rental-form">
                    <div className="input-wrapper">
                        <label className="input-label" htmlFor="house_number">House Number: </label>
                        <input className="input-box" type="text" name="house_number" id="house_number" onChange={handleChange}/>
                    </div>
                    <div className="input-wrapper">
                        <label className="input-label" htmlFor="address_1">Address 1: </label>
                        <input className="input-box" type="text" name="address_1" id="address_1" onChange={handleChange}/>
                    </div>
                    <div className="input-wrapper">
                        <label className="input-label" htmlFor="address_2">Address 2: </label>
                        <input className="input-box" type="text" name="address_2" id="address_2" onChange={handleChange}/>
                    </div>
                    <div className="input-wrapper">
                        <label className="input-label" htmlFor="barangay">Barangay: </label>
                        <input className="input-box" type="text" name="barangay" id="barangay" onChange={handleChange}/>
                    </div>
                    <div className="input-wrapper">
                        <label className="input-label" htmlFor="city">City: </label>
                        <input className="input-box" type="text" name="city" id="city" onChange={handleChange}/>
                    </div>
                    <div className="input-wrapper">
                        <label className="input-label" htmlFor="province">Province: </label>
                        <input className="input-box" type="text" name="province" id="province" onChange={handleChange}/>
                    </div>
                    <div className="input-wrapper">
                        <label className="input-label" htmlFor="description">Description: </label>
                        <textarea className="input-box" name="description" id="description" onChange={handleChange} />
                    </div>
                    <div className="input-wrapper">
                        <label className="input-label" htmlFor="monthly">Monthly: </label>
                        <input className="input-box" type="number" min="0" name="monthly" id="monthly" onChange={handleChange}/>
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