export interface Product {
    id: string;
    name: string;
    category: string;
    weight: number;
    dimensions: {
        length: number;
        width: number;
        height: number;
    };
}

export interface PricingOption {
    carrier: string;
    price: number;
    estimatedDelivery: string;
}

export interface DistributionStrategy {
    method: string;
    cost: number;
    estimatedTime: string;
}

export interface SourcingOption {
    supplier: string;
    price: number;
    leadTime: string;
}