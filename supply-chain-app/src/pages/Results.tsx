import React from 'react';
import PricingOptions from '../components/PricingOptions';
import Distribution from '../components/Distribution';
import Sourcing from '../components/Sourcing';

const Results: React.FC = () => {
    return (
        <div>
            <h1>Supply Chain Analysis Results</h1>
            <PricingOptions />
            <Distribution />
            <Sourcing />
        </div>
    );
};

export default Results;