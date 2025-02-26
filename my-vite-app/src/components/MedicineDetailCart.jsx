import React, { useContext, useState } from 'react';
import context from '../context/context';

export default function MedicineDetailCart(props) {
    const { medicineList, addToCart } = useContext(context);

    const [quantities, setQuantities] = useState({}); // Use "quantities" (plural)

    const handleQuantityChange = (event, id) => {
        const value = parseInt(event.target.value) || 1; // Parse to number, default 1
        setQuantities({ ...quantities, [id]: value });
    };

    const handleClick = (medicine) => { // Receive the whole medicine object
        const quantity = quantities[medicine.id] || 1;
        const itemToAdd = { ...medicine, quantity }; // Create item to add
        addToCart(itemToAdd);
    };

    return (
        <div className="container">
            {medicineList.length !== 0 && (
                <table>
                    <thead>
                        <tr>
                            <td>Name</td>
                            <td>Description</td>
                            <td>Price</td>
                            <td>Quantity</td>
                        </tr>
                    </thead>
                    <tbody>
                        {medicineList.map((medicine) => (
                            <tr key={medicine.id}> {/* Add key prop */}
                                <td>{medicine.name}</td>
                                <td>{medicine.description}</td>
                                <td>Rs.{medicine.price}</td>
                                <td>
                                    <input
                                        type="number"
                                        className="quantity-input"
                                        value={quantities[medicine.id] || 1} // Controlled input - DYNAMIC VALUE
                                        onChange={(e) => handleQuantityChange(e, medicine.id)}
                                        min="1" // Prevent negative numbers
                                    />
                                </td>
                                <td>
                                    <button onClick={() => handleClick(medicine)}>Add to Cart</button> {/* Pass medicine object */}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
}
