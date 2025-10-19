# In Between Imports Clone

A React + Vite + Tailwind CSS project that replicates the design of [inbetweenimports.com](https://www.inbetweenimports.com/), an e-commerce site for premium incense and aromatic products.

## Features

- 🎨 Tailwind CSS for styling
- ⚡ Vite for fast development and building
- ⚛️ React 18 with modern hooks
- 📱 Fully responsive design
- 🧩 Component-based architecture

## Components

- **Header** - Navigation bar with menu, search, and cart
- **Hero** - Featured banner with important notices and slideshow
- **Collections** - Product category grid (Stick Incense, Cone Incense, Resins, Smudges)
- **Newsletter** - Email subscription section
- **Footer** - Links, social media, and payment methods

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Tech Stack

- **React** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **PostCSS** - CSS processing
- **Autoprefixer** - Automatic vendor prefixing

## Project Structure

```
.
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── Collections.jsx
│   │   ├── Newsletter.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## Customization

- Edit `tailwind.config.js` to customize colors, fonts, and theme
- Modify components in `src/components/` to change layout and functionality
- Update `src/index.css` for global styles

## License

This is a demonstration project for educational purposes.
