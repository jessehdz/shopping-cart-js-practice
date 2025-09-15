# Shopping Cart Application

This project implements core shopping cart functionality for a storefront application. The visual layout is pre-built, and the JavaScript connects user interactions to product and cart logic. The project emphasizes reusable functions, clear code structure, and a focus on building experiences that users enjoy.

## Features & Updates

- Fully functional cart with `addProductToCart`, `increaseQuantity`, `decreaseQuantity`, `removeProductFromCart`, and `emptyCart` functions.
- Refactored repetitive product lookup code with `findProductById` helper for cleaner, DRY code.
- Checkout functionality with `cartTotal()` and `pay()`, including handling of payments and change calculation.
- All code is commented for clarity, explaining function purpose and flow.

## Getting Started

### Prerequisites

- Node.js (LTS version recommended)
- npm

Check Node installation:

```bash
node -v
```

Install project dependencies:

```bash
npm install
```

### Cloning the Repository

You can either download the repo directly or fork and clone it:

```bash
git clone path/to/your/repository
```

### Running the Project

Start the live server (auto-refreshes on file changes):

```bash
npm run start
```

Stop the server with `[Control] + [C]`.

### Running Tests

This project uses Jest for unit testing. Run tests with:

```bash
npm run test
```

Passing and failing tests will be displayed in the terminal.

## File Structure

```bash
├── src
│ ├── assets
│ │ ├── front.js          # Handles UI rendering
│ │ ├── script.js         # Main project logic
│ │ └── styles.css
│ ├── images
│ │ ├── cherry.jpg
│ │ ├── orange.jpg
│ │ └── strawberry.jpg
│ └── index.html
├── tests
│ └── script.test.js        # Jest test cases
├── package.json
└── package-lock.json
```

## How It Works

1. **Products & Cart:** Product objects are stored in an array, with quantities tracked in the cart array.
2. **Adding & Removing Items:** `addProductToCart`, `increaseQuantity`, `decreaseQuantity`, `removeProductFromCart` functions handle cart updates.
3. **Checkout:** `cartTotal()` calculates total price, and `pay()` processes payments.
4. **Reusability:** `findProductById` centralizes product lookups across all functions.
5. **User Interaction:** Buttons in the UI trigger functions via event delegation in `front.js`.

## Usage Example

```javascript
// Add a product to the cart
addProductToCart(101);

// Increase quantity
increaseQuantity(101);

// Calculate total
const total = cartTotal();

// Pay for cart
const change = pay(20.0);

// Empty the cart
emptyCart();
```

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a new branch for your feature or fix:

```bash
git checkout -b feature-name
```

3. Make your changes and commit with descriptive messages.
4. Push to your branch and open a pull request.

## Built With

- Node.js – JavaScript runtime
- Live Server – Auto-refresh for development
- Jest – Unit testing framework

## License

[License](LICENSE.txt)
