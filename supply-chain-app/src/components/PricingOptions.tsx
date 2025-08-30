import React, { useEffect, useState } from 'react';
import { fetchPricingOptions } from '../services/pricingService';

const PricingOptions: React.FC<{ product: string }> = ({ product }) => {
    const [pricingOptions, setPricingOptions] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const getPricingOptions = async () => {
            try {
                const options = await fetchPricingOptions(product);
                setPricingOptions(options);
            } catch (err) {
                setError('Failed to fetch pricing options');
            } finally {
                setLoading(false);
            }
        };

        if (product) {
            getPricingOptions();
        }
    }, [product]);

    if (loading) {
        return <div>Loading pricing options...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div>
            <h2>Transportation Pricing Options for {product}</h2>
            <ul>
                {pricingOptions.map((option, index) => (
                    <li key={index}>
                        {option.transportMethod}: ${option.price}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PricingOptions;