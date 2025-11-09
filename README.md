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
- [API Integration & Testing](#api-integration--testing)
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
    name: "Sarthak Agrawal",
    email: "asarthak2003@gmail.com",
    phone: "9876543210",
    message: "Test message"
  })
})
.then(r => r.json())
.then(data => console.log('Success:', data))
.catch(error => console.error('Error:', error));
```

---

## 🧪 API Integration & Testing

### Live API Response Demo

The contact form successfully integrates with the Django REST Framework backend and returns structured JSON responses with email notifications.

<div align="center">

### ✅ Successful Submission Response

<img src="https://drive.google.com/file/d/1ECvWcktcpm718TkUpvGrFykIFzyvsFpS/view?usp=drive_link" alt="API Success Response - Django REST Framework" width="900"/>

*Django REST Framework showing successful form submission with automatic email confirmation*

</div>

### Response Structure

**Success Response (HTTP 201 Created):**
```json
{
  "message": "Contact request submitted and email sent successfully",
  "data": {
    "id": 4191,
    "name": "Sarthak Agrawal",
    "email": "asarthak2003@gmail.com",
    "phone": "908765498",
    "message": "This is a message",
    "created_at": "2025-11-09T08:19:23.725470Z",
    "updated_at": "2025-11-09T08:19:23.725488Z"
  }
}
```

### API Features

- ✅ **Automatic Email Notifications** - Confirmation sent to submitted email address
- ✅ **Timestamp Tracking** - Records creation and update timestamps
- ✅ **Unique ID Generation** - Each submission receives a unique identifier
- ✅ **Data Validation** - Server-side validation for all required fields
- ✅ **JSON Response Format** - Structured data following REST API standards
- ✅ **HTTP Status Codes** - Proper REST conventions (201 Created, 400 Bad Request, etc.)
- ✅ **CORS Enabled** - Cross-Origin Resource Sharing configured for frontend access

### Testing Methods

#### 1. Using cURL (Command Line)
```bash
curl -X POST https://vernanbackend.ezlab.in/api/contact-us/ \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "phone": "1234567890",
    "message": "This is a test message"
  }'
```

#### 2. Using JavaScript Fetch API
```javascript
const submitForm = async () => {
  try {
    const response = await fetch('https://vernanbackend.ezlab.in/api/contact-us/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: "Your Name",
        email: "your@email.com",
        phone: "1234567890",
        message: "Your message"
      })
    });

    if (response.ok) {
      const data = await response.json();
      console.log('Success:', data);
    } else {
      console.error('Error:', response.status);
    }
  } catch (error) {
    console.error('Network Error:', error);
  }
};
```

#### 3. Using Postman
1. **Method:** `POST`
2. **URL:** `https://vernanbackend.ezlab.in/api/contact-us/`
3. **Headers:** 
   - Key: `Content-Type`
   - Value: `application/json`
4. **Body (raw JSON):**
```json
{
  "name": "Test User",
  "email": "test@example.com",
  "phone": "9876543210",
  "message": "Testing API with Postman"
}
```

### Form Validation Rules

The API enforces the following validation:

| Field | Validation Rules |
|-------|-----------------|
| **name** | Required, non-empty string |
| **email** | Required, valid email format |
| **phone** | Required, 10-digit number |
| **message** | Required, non-empty string |

### Error Handling

The application gracefully handles various error scenarios:

**Validation Errors (HTTP 400 Bad Request):**
```json
{
  "status": "error",
  "errors": {
    "email": ["Enter a valid email address."],
    "phone": ["Phone number must be 10 digits."]
  }
}
```

**Server Errors (HTTP 500 Internal Server Error):**
```json
{
  "status": "error",
  "message": "Internal server error. Please try again later."
}
```

**Network Errors:**
- Display user-friendly error message
- Suggest checking internet connection
- Provide retry option

### Frontend Implementation

The contact form in `VFilmsHomepage.jsx` implements:

✅ **Client-side Validation** - Real-time input validation before API call  
✅ **Error Display** - User-friendly error messages for each field  
✅ **Success Feedback** - Green success banner with checkmark icon  
✅ **Loading States** - Disabled button with "Submitting..." text during API call  
✅ **Form Reset** - Automatic form clearing after successful submission  
✅ **Error Recovery** - Clears previous errors when user corrects input  

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

---

<div align="center">

**Made with ❤️ by Sarthak Agrawal**

</div>
