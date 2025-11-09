# VFilms - Modern Film Production & Branding Studio Website

<div align="center">
  
![VFilms](https://img.shields.io/badge/VFilms-Film%20Production-orange)
![React](https://img.shields.io/badge/React-18.3.1-blue)
![Vite](https://img.shields.io/badge/Vite-6.0.5-purple)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.15-cyan)
![License](https://img.shields.io/badge/License-MIT-green)

**A modern, responsive single-page web application for VFilms - Film Production, Branding, and Art Curation company.**

[Live Demo](#) • [Report Bug](#) • [Request Feature](#)

</div>

---

## 📋 Table of Contents

- [About The Project](#about-the-project)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [API Integration](#api-integration)
- [Deployment](#deployment)
- [Screenshots](#screenshots)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

---

## 🎬 About The Project

VFilms is a comprehensive web platform showcasing a film production, branding, and art curation company. The website features a modern, elegant design with smooth animations, responsive layout, and interactive elements that bring the company's creative vision to life.

**Tagline:** *"Where stories find their voice and form"*

### Why This Project?

- **Showcase Portfolio**: Display film production and branding work elegantly
- **Client Engagement**: Interactive contact form with real-time validation
- **Brand Identity**: Strong visual identity with custom animations
- **Responsive Design**: Seamless experience across all devices
- **Modern Tech Stack**: Built with cutting-edge web technologies

---

## ✨ Features

### 🎨 Design & UI
- ✅ **Fully Responsive Design** - Mobile, tablet, and desktop optimized
- ✅ **Smooth Scroll Navigation** - Seamless section transitions
- ✅ **Custom Animations** - Hover effects, transforms, and transitions
- ✅ **Modern Gradient Backgrounds** - Aesthetic color schemes
- ✅ **Custom SVG Logo** - Scalable brand identity

### 🔧 Functionality
- ✅ **Interactive Navigation Bar** - Fixed header with mobile hamburger menu
- ✅ **Image Carousel** - Portfolio showcase with navigation controls
- ✅ **Contact Form** with:
  - Real-time validation
  - Email format checking
  - Phone number validation (10 digits)
  - Error & success messages
  - API integration
- ✅ **Service Cards** - Film production, branding, and art curation
- ✅ **Statistics Display** - Projects, clients, and team size
- ✅ **Client Logos Section** - Brand partnerships showcase

### ⚡ Performance
- ✅ **Fast Loading** - Optimized with Vite
- ✅ **Lazy Loading** - Efficient image loading
- ✅ **Clean Code** - Modular and maintainable
- ✅ **SEO Friendly** - Proper meta tags and semantic HTML

---

## 🛠️ Technologies Used

### Frontend Framework
- **[React 18.3.1](https://react.dev/)** - UI library for building user interfaces
- **[Vite 6.0.5](https://vitejs.dev/)** - Next-generation frontend tooling

### Styling
- **[Tailwind CSS 3.4.15](https://tailwindcss.com/)** - Utility-first CSS framework
- **[PostCSS 8.4.49](https://postcss.org/)** - CSS transformation tool
- **[Autoprefixer 10.4.20](https://github.com/postcss/autoprefixer)** - CSS vendor prefixing

### Icons & Assets
- **[Lucide React 0.263.1](https://lucide.dev/)** - Beautiful icon library
- **[Unsplash](https://unsplash.com/)** - High-quality stock images

### Development Tools
- **Node.js** - JavaScript runtime
- **npm** - Package manager
- **ESLint** - Code linting
- **Git** - Version control

---

## 📁 Project Structure

```
vfilms-homepage/
│
├── node_modules/              # Dependencies (after npm install)
│
├── public/                    # Static assets
│   └── vite.svg              # Vite logo
│
├── src/                       # Source files
│   ├── components/           
│   │   └── VFilmsHomepage.jsx # Main component with all sections
│   │
│   ├── App.jsx               # Root component
│   ├── main.jsx              # Entry point
│   └── index.css             # Global styles & Tailwind imports
│
├── .gitignore                # Git ignore rules
├── index.html                # HTML template
├── package.json              # Project metadata & dependencies
├── postcss.config.js         # PostCSS configuration
├── tailwind.config.js        # Tailwind CSS configuration
├── vite.config.js            # Vite configuration
└── README.md                 # Project documentation
```

### Component Breakdown

```jsx
VFilmsHomepage.jsx
├── Navigation Bar (Fixed Header)
├── Hero Section (Logo + Tagline)
├── About Team Section
├── Statistics Section
├── Services Section (3 Service Cards)
├── Portfolio Section (Image Carousel)
├── Contact Form Section
└── Footer
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed:
- **Node.js** (v18 or higher) - [Download](https://nodejs.org/)
- **npm** (comes with Node.js)
- **Git** - [Download](https://git-scm.com/)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/asarthak2003/vfilms-homepage.git
   cd vfilms-homepage
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:3001
   ```

### Build for Production

```bash
# Create optimized production build
npm run build

# Preview production build locally
npm run preview
```

The build output will be in the `dist/` folder.

---

## 🔌 API Integration

### Contact Form Endpoint

**Base URL:** `https://vernanbackend.ezlab.in`

**Endpoint:** `/api/contact-us/`

**Method:** `POST`

**Request Headers:**
```json
{
  "Content-Type": "application/json"
}
```

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john.doe@example.com",
  "phone": "1234567890",
  "message": "Your message here"
}
```

**Success Response (200):**
```json
{
  "status": "success",
  "message": "Form submitted successfully"
}
```

**Error Response (400/500):**
```json
{
  "status": "error",
  "message": "Error message details"
}
```

### Testing the API

**Using cURL:**
```bash
curl -X POST https://vernanbackend.ezlab.in/api/contact-us/ \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "phone": "9876543210",
    "message": "Test message"
  }'
```

**Using JavaScript (Browser Console):**
```javascript
fetch('https://vernanbackend.ezlab.in/api/contact-us/', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    name: "Test User",
    email: "test@example.com",
    phone: "9876543210",
    message: "Test message"
  })
})
.then(r => r.json())
.then(data => console.log('Success:', data))
.catch(error => console.error('Error:', error));
```

---

## 🌐 Deployment

### Deploy to GitHub Pages

1. **Install gh-pages**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Update package.json**
   ```json
   {
     "homepage": "https://asarthak2003.github.io/vfilms-homepage",
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```

3. **Update vite.config.js**
   ```javascript
   export default defineConfig({
     base: '/vfilms-homepage/',
     // ... rest of config
   })
   ```

4. **Deploy**
   ```bash
   npm run deploy
   ```

### Deploy to Vercel (Recommended)

**Method 1: Via Vercel Dashboard**
1. Go to [vercel.com](https://vercel.com)
2. Click "Add New..." → "Project"
3. Import your GitHub repository
4. Configure:
   - Framework Preset: **Vite**
   - Build Command: `npm run build`
   - Output Directory: `dist`
5. Click "Deploy"

**Method 2: Via Vercel CLI**
```bash
# Install Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy
vercel

# Deploy to production
vercel --prod
```

### Deploy to Netlify

1. **Via Netlify Dashboard**
   - Go to [netlify.com](https://netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Connect to GitHub and select repository
   - Build settings:
     - Build command: `npm run build`
     - Publish directory: `dist`
   - Click "Deploy site"

2. **Via Netlify CLI**
   ```bash
   npm install -g netlify-cli
   netlify login
   netlify deploy
   netlify deploy --prod
   ```

---

## 📸 Screenshots

### Desktop View
```
┌─────────────────────────────────────────────┐
│  Navigation Bar                             │
├─────────────────────────────────────────────┤
│                                             │
│         VFilms Logo & Hero Section          │
│   "Where stories find their voice..."      │
│                                             │
├─────────────────────────────────────────────┤
│         About Team & Statistics             │
├─────────────────────────────────────────────┤
│        Services (3 Column Grid)             │
├─────────────────────────────────────────────┤
│        Portfolio Carousel                   │
├─────────────────────────────────────────────┤
│        Contact Form Section                 │
├─────────────────────────────────────────────┤
│              Footer                         │
└─────────────────────────────────────────────┘
```

### Mobile View
```
┌──────────────┐
│ ☰ Navigation │
├──────────────┤
│              │
│     Hero     │
│   Section    │
│              │
├──────────────┤
│ About Team   │
├──────────────┤
│ Statistics   │
├──────────────┤
│ Service 1    │
│ Service 2    │
│ Service 3    │
├──────────────┤
│ Portfolio    │
├──────────────┤
│ Contact Form │
├──────────────┤
│   Footer     │
└──────────────┘
```

---

## 🤝 Contributing

Contributions are what make the open-source community amazing! Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📝 License

Distributed under the MIT License. See `LICENSE` file for more information.

---

## 👤 Contact

**Sarthak Agrawal**

- GitHub: [@asarthak2003](https://github.com/asarthak2003)
- Email: asarthak2003@gmail.com

**Project Link:** [https://github.com/asarthak2003/vfilms-homepage](https://github.com/asarthak2003/vfilms-homepage)

---

## 🙏 Acknowledgments

- [React Documentation](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vite](https://vitejs.dev/)
- [Lucide Icons](https://lucide.dev/)
- [Unsplash](https://unsplash.com/)
- [EZ Labs](https://ezlab.in/) - For the assignment opportunity

---

<div align="center">

**Made with ❤️ by Sarthak Agrawal**

⭐ Star this repo if you found it helpful!

</div>