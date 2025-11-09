# Netflix Clone

A responsive streaming platform replicating Netflix's UI/UX, built with modern web technologies.

 🎯 Features

- Dynamic Movie Carousels: Horizontal scrolling categories with smooth animations
- Category-Based Browsing: Trending, Popular, Action, and Comedy sections
- Responsive Design: Optimized for desktop, tablet, and mobile devices
- Hero Banner: Featured content with call-to-action buttons
- Hover Effects: Interactive movie cards with smooth transitions
- Reusable Components: Modular architecture for maintainability

 🛠️ Tech Stack

- React.js - Component-based UI library
- TypeScript - Type-safe JavaScript
- Vite - Fast build tool and dev server
- Tailwind CSS - Utility-first CSS framework
- shadcn/ui - Reusable UI components

 📦 Installation

```bash
# Clone the repository
git clone <YOUR_GIT_URL>

# Navigate to project directory
cd netflix-clone

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at `http://localhost:8080`

 🚀 Build for Production

```bash
# Create optimized production build
npm run build
```

 📂 Project Structure

```
src/
├── components/        # Reusable UI components
│   ├── Navbar.tsx    # Navigation bar
│   ├── Hero.tsx      # Hero banner section
│   ├── MovieCard.tsx # Individual movie card
│   └── MovieRow.tsx  # Horizontal movie carousel
├── data/             # Mock data
│   └── movies.ts     # Movie listings
├── pages/            # Page components
│   └── Index.tsx     # Home page
└── index.css         # Global styles & design tokens
```

 💡 Key Implementation Details

- Reusable Components: MovieCard and MovieRow are designed for maximum reusability
- Responsive Layouts: CSS Grid and Flexbox ensure cross-device compatibility
- Custom Scrollbars: Styled scrollbars for better UX in movie carousels
- Design System: Consistent theming using CSS custom properties

 🎨 Design Highlights

- Netflix-inspired dark theme with red accents
- Smooth hover animations and transitions
- Custom scrollbar styling
- Semantic color tokens for easy theming

Built with React • TypeScript • Tailwind CSS
