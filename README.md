# React Calculator App

A fully functional calculator application inspired by the macOS Calculator, built with React 19, TypeScript, and Vite.

![Calculator](https://img.shields.io/badge/React-19-blue) ![TypeScript](https://img.shields.io/badge/TypeScript-5-blue) ![Vite](https://img.shields.io/badge/Vite-6-purple) ![License](https://img.shields.io/badge/License-MIT-green)

## ✨ Features

### Calculator Operations

- **Basic Arithmetic**: Addition (+), Subtraction (-), Multiplication (×), and Division (÷)
- **Percentage Calculation**: Convert numbers to percentages instantly
- **Sign Toggle**: Switch between positive and negative numbers (±)
- **Decimal Support**: Full floating-point number support with dot input
- **Clear Functions**:
  - `C` - Clear current display
  - `AC` - Clear all (resets entire calculator state)

### User Experience

- **Auto-scaling Display**: The display automatically scales text to fit large numbers, switching to exponential notation for very large values
- **Locale-aware Formatting**: Numbers are formatted according to the user's browser locale settings
- **Keyboard Support**: Full keyboard navigation for efficient use:
  - `0-9` - Input digits
  - `+`, `-`, `*`, `/` - Arithmetic operations
  - `=` or `Enter` - Calculate result
  - `.` or `,` - Decimal point
  - `%` - Percentage
  - `Backspace` - Delete last character
  - `Clear` - Clear display/all

### Technical Highlights

- **State Management**: Uses React's `useReducer` hook for predictable state management
- **Custom Hook**: `useCalculator` encapsulates all calculator logic and keyboard event handling
- **Type Safety**: Fully typed with TypeScript including strict type definitions for operations, digits, and state
- **Component Architecture**: Clean separation of concerns with dedicated components:
  - `Calculator` - Main container component
  - `CalculatorDisplay` - Auto-scaling display component
  - `CalculatorKey` - Reusable button component

## 🛠️ Tech Stack

- **React 19** - Latest React with modern features
- **TypeScript** - Type-safe JavaScript
- **Vite** - Next-generation frontend build tool
- **Vitest** - Fast unit testing framework
- **React Testing Library** - Testing utilities for React components
- **SCSS** - Enhanced CSS with variables and nesting
- **ESLint & Prettier** - Code linting and formatting
- **Stylelint** - CSS/SCSS linting

## 📁 Project Structure

```
src/
├── App.tsx                    # Root application component
├── App.scss                   # Global app styles
├── components/
│   ├── Calculator/            # Main calculator container
│   ├── CalculatorDisplay/     # Display with auto-scaling
│   └── CalculatorKey/         # Reusable key/button component
├── hooks/
│   └── useCalculator.ts       # Calculator logic & keyboard handling
├── reducer/
│   └── reducer.ts             # State management reducer
├── types/
│   └── index.ts               # TypeScript type definitions
└── utils/
    └── helpers.ts             # Utility functions & operations config
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- Yarn or npm

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd react-calculator-app

# Install dependencies
yarn install
# or
npm install
```

### Development

```bash
# Start development server with hot reload
yarn dev
# or
npm run dev
```

The app will be available at `http://localhost:5173`

### Build

```bash
# Build for production
yarn build
# or
npm run build
```

### Testing

```bash
# Run tests in watch mode
yarn test
# or
npm test

# Run tests once (CI mode)
yarn ci
# or
npm run ci
```

### Linting

```bash
# Run all linters
yarn lint

# Fix linting issues
yarn lint:fix

# Individual linters
yarn eslint        # JavaScript/TypeScript
yarn stylelint     # CSS/SCSS
yarn check-types   # TypeScript type checking
```

## 🌐 Deployment

The app is configured for deployment to GitHub Pages:

```bash
yarn deploy
# or
npm run deploy
```

## 🧪 Testing

The project includes comprehensive tests using Vitest and React Testing Library:

- **Unit Tests**: Test individual utility functions
- **Component Tests**: Test React components in isolation
- **Integration Tests**: Test calculator functionality end-to-end

Test files are co-located with their source files (e.g., `Calculator.test.tsx`).

## 📄 License

This project is open source and available under the MIT License.

---

Built with ❤️ using React, TypeScript, and Vite
