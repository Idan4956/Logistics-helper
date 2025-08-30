import React, { useState, useEffect } from 'react';
import { fetchSourcingOptions } from '../services/supplyChainService';

const Sourcing = () => {
    const [product, setProduct] = useState('');
    const [sourcingOptions, setSourcingOptions] = useState([]);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setProduct(event.target.value);
    };

    const handleSearch = async () => {
        if (product) {
            const options = await fetchSourcingOptions(product);
            setSourcingOptions(options);
        }
    };

    useEffect(() => {
        // Optionally, you can fetch initial data or handle side effects here
    }, []);

    return (
        <div>
            <h2>Sourcing Options</h2>
            <input
                type="text"
                value={product}
                onChange={handleInputChange}
                placeholder="Enter product name"
            />
            <button onClick={handleSearch}>Find Sourcing Options</button>
            <ul>
                {sourcingOptions.map((option, index) => (
                    <li key={index}>{option}</li>
                ))}
            </ul>
        </div>
    );
};

export default Sourcing;