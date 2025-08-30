# Supply Chain Management Application

This project is a web application designed to help users manage their supply chains effectively. It provides tools for analyzing transportation prices, sourcing products, and determining distribution strategies.

## Features

- **Transportation Pricing Options**: Users can input product details and receive various transportation pricing options tailored to their needs.
- **Distribution Strategies**: The application suggests optimal distribution methods based on user input and product characteristics.
- **Sourcing Alternatives**: Users can find and connect with suppliers to source their products efficiently.
- **User-Friendly Interface**: The application features a clean and intuitive interface for easy navigation and data input.

## Project Structure

```
supply-chain-app
├── src
│   ├── components
│   │   ├── PricingOptions.tsx
│   │   ├── Distribution.tsx
│   │   └── Sourcing.tsx
│   ├── pages
│   │   ├── Home.tsx
│   │   └── Results.tsx
│   ├── services
│   │   ├── pricingService.ts
│   │   └── supplyChainService.ts
│   └── types
│       └── index.ts
├── public
│   └── index.html
├── package.json
├── tsconfig.json
└── README.md
```

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd supply-chain-app
   ```
3. Install the dependencies:
   ```
   npm install
   ```

## Usage

1. Start the development server:
   ```
   npm start
   ```
2. Open your browser and navigate to `http://localhost:3000` to view the application.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for details.