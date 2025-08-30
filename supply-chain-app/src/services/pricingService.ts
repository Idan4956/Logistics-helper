import axios from 'axios';

const API_BASE_URL = 'https://api.example.com/pricing'; // Replace with actual API endpoint

export interface PricingOption {
    mode: string;
    price: number;
    estimatedDelivery: string;
}

export const fetchPricingOptions = async (productId: string): Promise<PricingOption[]> => {
    try {
        const response = await axios.get(`${API_BASE_URL}?productId=${productId}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching pricing options:', error);
        throw error;
    }
};

export const calculateBestPricingOption = (pricingOptions: PricingOption[]): PricingOption | null => {
    if (pricingOptions.length === 0) return null;
    return pricingOptions.reduce((bestOption, currentOption) => {
        return currentOption.price < bestOption.price ? currentOption : bestOption;
    });
};