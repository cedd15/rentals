function CreateRental() {
    return (
        <form action="">
            <input type="text" name="house_number" />
            <input type="text" name="address_1" />
            <input type="text" name="address_2" />
            <input type="text" name="barangay" />
            <input type="text" name="city" />
            <input type="text" name="province" />
            <input type="text" name="description" />
            <input type="number" min="0" name="monthly" />
            <button type="submit">Create Rental</button>
        </form>
    )
}

export default CreateRental;