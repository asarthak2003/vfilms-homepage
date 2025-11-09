# VFilms - Modern Film Production & Branding Studio Website

<div align="center">

**A modern, responsive single-page web application for VFilms - Film Production, Branding, and Art Curation company.**

</div>
---

## 📋 Table of Contents

- [About The Project](#about-the-project)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [API Integration](#api-integration)
- [Deployment](#deployment)
- [Screenshots](#screenshots)
- [Contact](#contact)

---

## 🎬 About The Project

VFilms is a comprehensive web platform showcasing a film production, branding, and art curation company. The website features a modern, elegant design with smooth animations, responsive layout, and interactive elements that bring the company's creative vision to life.

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
  "name": "Sarthak Agrawal",
  "email": "asarthak2003@gmail.com",
  "phone": "9876543210",
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

**Using JavaScript (Browser Console):**
```javascript
fetch('https://vernanbackend.ezlab.in/api/contact-us/', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
 "name": "Sarthak Agrawal",
  "email": "asarthak2003@gmail.com",
  "phone": "9876543210",
    message: "Test message"
  })
})
.then(r => r.json())
.then(data => console.log('Success:', data))
.catch(error => console.error('Error:', error));
```

---

## 🌐 Deployment

### Deploy to Vercel

**Via Vercel Dashboard**
1. Go to [vercel.com](https://vercel.com)
2. Click "Add New..." → "Project"
3. Import your GitHub repository
4. Configure:
   - Framework Preset: **Vite**
   - Build Command: `npm run build`
   - Output Directory: `dist`
5. Click "Deploy"


---

## 📸 Screenshots

### Desktop View

<div align="center">

<img src="https://drive.google.com/uc?export=view&id=1_gFz4rQlm95SawlEeWVed5JFRkkMfJrk" alt="Desktop View 1" width="800"/>

<img src="https://drive.google.com/uc?export=view&id=1_Nii4aHVsylXzKdRCwg0Apa4cQ13s_kJ" alt="Desktop View 2" width="800"/>

<img src="https://drive.google.com/uc?export=view&id=12UEOGpP1O15OYCns4JI3HuNNB77H-gRm" alt="Desktop View 3" width="800"/>

</div>

### Mobile View

<div align="center">

<img src="https://drive.google.com/uc?export=view&id=1WpIcyCnXRxjssOQBegrdwZGw0Y8yBTaY" alt="Mobile View 1" width="300"/>
<img src="https://drive.google.com/uc?export=view&id=1kZuLyowLfXL6Qdt1lhiCx_vKYopx6zwI" alt="Mobile View 2" width="300"/>
<img src="https://drive.google.com/uc?export=view&id=1bDU5oVEbEw0qzSI_j7RSqhll6BxC7PXp" alt="Mobile View 3" width="300"/>

</div>


---

## 👤 Contact

**Sarthak Agrawal**

- GitHub: [@asarthak2003](https://github.com/asarthak2003)
- Email: asarthak2003@gmail.com
