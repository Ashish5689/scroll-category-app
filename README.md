# Scroll Category App

## Overview
Scroll Category App is a modern React application that provides a smooth, category-based navigation experience. The app features a sticky category bar at the top that allows users to quickly navigate between different category sections. As users scroll through the content, the active category in the navigation bar updates automatically to reflect their current position on the page.

## Features
- **Smooth Scrolling Navigation**: Click on any category in the top bar to smoothly scroll to that section
- **Auto-Highlighting**: The category bar automatically highlights the current section as you scroll through the page
- **Responsive Design**: Works well on both desktop and mobile devices
- **Hardware-Accelerated Animations**: Utilizes GPU acceleration for smooth scrolling and transitions
- **Dynamic Content Loading**: Efficiently renders category sections and provider cards

## Technology Stack
- **React**: Frontend library for building the user interface
- **Vite**: Next-generation frontend tooling for faster development
- **CSS3**: Modern styling with hardware acceleration and smooth transitions
- **Intersection Observer API**: For efficient scroll-based navigation

## Project Structure
```
src/
├── components/
│   ├── CategoryBar.jsx    # Top navigation bar component
│   └── DataSection.jsx    # Main content area with category sections
├── data/
│   └── mockData.js        # Sample data for categories and providers
├── styles/
│   ├── CategoryBar.css    # Styles for the category navigation
│   └── DataSection.css    # Styles for the content sections
├── App.jsx                # Main application component
├── App.css                # Global application styles
└── main.jsx               # Application entry point
```

## Getting Started

### Prerequisites
- Node.js (v14.0.0 or later)
- npm or yarn

### Installation
1. Clone the repository
   ```bash
   git clone <repository-url>
   cd scroll-category-app
   ```

2. Install dependencies
   ```bash
   npm install
   # or
   yarn
   ```

3. Start the development server
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

## Usage
- **Category Navigation**: Click on any category in the top bar to navigate to that section
- **Scrolling**: As you scroll through the page, the active category in the navigation bar will update
- **Provider Cards**: Each category section displays provider cards with images and names

## Performance Optimizations
- **Hardware Acceleration**: CSS transforms and will-change properties for smooth animations
- **Debounced Scrolling**: Prevents performance issues during rapid scrolling
- **Optimized Image Rendering**: Efficient image loading and display
- **Animation Frame Scheduling**: Uses requestAnimationFrame for smooth UI updates

## Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing
Contributions are welcome! Please feel free to submit a Pull Request.

## License
This project is licensed under the MIT License - see the LICENSE file for details.

