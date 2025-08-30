import React, { useState } from 'react';
import PricingOptions from '../components/PricingOptions';
import Distribution from '../components/Distribution';
import Sourcing from '../components/Sourcing';
import { useHistory } from 'react-router-dom';

const Home: React.FC = () => {
    const [productDetails, setProductDetails] = useState('');
    const history = useHistory();

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setProductDetails(event.target.value);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        history.push('/results', { productDetails });
    };

    return (
        <div>
            <h1>Supply Chain Management</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={productDetails}
                    onChange={handleInputChange}
                    placeholder="Enter product details"
                    required
                />
                <button type="submit">Analyze</button>
            </form>
            <PricingOptions productDetails={productDetails} />
            <Distribution productDetails={productDetails} />
            <Sourcing productDetails={productDetails} />
        </div>
    );
};

export default Home;