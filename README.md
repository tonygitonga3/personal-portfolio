# Personal Portfolio Website

<div align="center">
  <h3>A Fully Responsive Personal Portfolio</h3>
  <p>Modern, professional portfolio website built with HTML5, CSS3, and Vanilla JavaScript</p>
</div>

## 📋 Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Technology Stack](#technology-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Documentation](#documentation)
- [Customization](#customization)
- [Browser Support](#browser-support)
- [Performance](#performance)
- [License](#license)

## 🎯 Overview

This is a modern, fully responsive personal portfolio website designed to showcase a developer's skills, projects, and services. The portfolio features a clean, professional design with smooth animations and an intuitive user experience across all devices.

**Live Demo**: Open `index.html` in any modern web browser

![Pfolio Desktop Demo](./readme-images/desktop.png "Desktop Demo")

## ✨ Features

### Design & UI
- 🎨 **Modern Dark Theme**: Professional dark mode design with carefully chosen color palette
- 📱 **Fully Responsive**: Seamlessly adapts to all screen sizes (mobile, tablet, desktop)
- ⚡ **Smooth Animations**: CSS transitions and transforms for polished interactions
- 🎭 **Interactive Components**: Sliders, hover effects, and smooth scrolling
- 🔄 **Loading Animation**: Elegant preloader while assets load

### Sections
- 🏠 **Hero Section**: Eye-catching introduction with profile image and call-to-action
- 💼 **Services**: Showcases 6 services with horizontal slider navigation
- 🎯 **Skills**: Visual progress bars displaying proficiency levels
- 📂 **Portfolio**: Project showcase with image gallery and slider
- 📝 **Blog**: Recent articles/news section
- 📧 **Footer**: Contact information and social media links

### Technical Features
- ⚡ **Fast Loading**: Optimized with image preloading and lazy loading
- ♿ **Accessible**: Semantic HTML, ARIA labels, keyboard navigation support
- 🔍 **SEO Friendly**: Proper meta tags and semantic structure
- 🎯 **No Dependencies**: Pure vanilla JavaScript, no frameworks required
- 📦 **No Build Process**: Works out of the box, no compilation needed
- 🌐 **Cross-Browser**: Compatible with all modern browsers

## 🛠️ Technology Stack

- **HTML5**: Semantic markup for structure and accessibility
- **CSS3**: Modern styling with custom properties (CSS variables), Flexbox, and Grid
- **JavaScript (ES6+)**: Vanilla JS for interactive functionality
- **Ionicons**: Icon library for UI elements
- **Google Fonts**: Syne font family for typography

**No frameworks. No dependencies. Just clean, modern web technologies.**

## 🚀 Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- [Git](https://git-scm.com/downloads) (for cloning the repository)
- A text editor (VS Code, Sublime Text, etc.) for customization

### Installation & Setup

1. **Clone the repository**

   ```bash
   git clone https://github.com/tonygitonga3/personal-portfolio.git
   ```

2. **Navigate to the project directory**

   ```bash
   cd personal-portfolio
   ```

3. **Open the website**

   Simply open `index.html` in your web browser:
   
   - **Double-click** `index.html`, or
   - **Right-click** → Open with → Your browser
   - Or use a local development server:

   ```bash
   # Using Python 3
   python -m http.server 8000
   
   # Using Node.js (with http-server)
   npx http-server
   
   # Using PHP
   php -S localhost:8000
   ```

   Then visit `http://localhost:8000` in your browser.

### That's it! 🎉

The website is now running locally on your machine.

## 📁 Project Structure

```
personal-portfolio/
├── index.html              # Main HTML file (single-page application)
├── favicon.svg             # Browser tab icon
├── style-guide.md         # Design system reference (colors, fonts, etc.)
├── ARCHITECTURE.md        # Detailed technical architecture documentation
├── HOW_IT_WORKS.md        # Component workflows and interactions guide
├── LICENSE                # License information
├── README.md              # This file
├── assets/
│   ├── css/
│   │   └── style.css      # All styling (989 lines)
│   ├── js/
│   │   └── script.js      # All JavaScript (148 lines)
│   └── images/
│       ├── logo.svg       # Site logo
│       ├── hero-banner.jpg
│       ├── portfolio-1.jpg through portfolio-6.jpg
│       └── blog-1.jpg, blog-2.jpg
└── readme-images/
    └── desktop.png        # Screenshot for documentation
```

### Key Files

| File | Purpose | Lines |
|------|---------|-------|
| `index.html` | Complete page structure and content | 738 |
| `assets/css/style.css` | All styling and responsive design | 989 |
| `assets/js/script.js` | Interactive functionality | 148 |
| `style-guide.md` | Design system reference | - |
| `ARCHITECTURE.md` | Technical architecture documentation | - |
| `HOW_IT_WORKS.md` | Workflows and interaction guide | - |

## 📚 Documentation

This project includes comprehensive documentation:

### [ARCHITECTURE.md](./ARCHITECTURE.md)
Detailed technical documentation covering:
- Complete project architecture
- Technology stack explanation
- Component breakdown and responsibilities
- Styling architecture and organization
- JavaScript functionality details
- Responsive design strategy
- Performance optimizations
- Best practices implemented
- Deployment guide

### [HOW_IT_WORKS.md](./HOW_IT_WORKS.md)
User and developer guide explaining:
- Page load sequence and rendering
- User interaction workflows
- Component behaviors
- Responsive transformations
- Common use cases
- Technical flow diagrams
- Performance considerations
- Accessibility features

### [style-guide.md](./style-guide.md)
Design system reference with:
- Color palette
- Typography scale
- Spacing system
- Border radius values
- Transition timings
- Font import links

## 🎨 Customization

### Changing Personal Information

Edit `index.html` to update:

```html
<!-- Line 12: Page title -->
<title>Your Name - Your Title</title>

<!-- Line 121: Hero name -->
<h1 class="h1 hero-title">Your Name</h1>

<!-- Line 124: Hero subtitle -->
<p class="hero-subtitle">Your Title</p>

<!-- Line 674: Contact email -->
<a href="mailto:your.email@example.com">your.email@example.com</a>
```

### Changing Colors

Edit CSS custom properties in `assets/css/style.css`:

```css
:root {
  --raisin-black: hsla(231, 10%, 14%, 1);  /* Main background */
  --roman-silver: hsla(229, 10%, 57%, 1);  /* Text color */
  --white: hsla(0, 0%, 100%, 1);           /* Accent color */
}
```

### Changing Images

Replace files in `assets/images/`:
- `hero-banner.jpg` → Your profile photo
- `logo.svg` → Your logo
- `portfolio-*.jpg` → Your project images
- `blog-*.jpg` → Your blog images

### Changing Fonts

1. Update Google Fonts link in `index.html`:
```html
<link href="https://fonts.googleapis.com/css2?family=YourFont:wght@400;600;700;800&display=swap" rel="stylesheet">
```

2. Update font family in `assets/css/style.css`:
```css
:root {
  --ff-syne: 'YourFont', sans-serif;
}
```

### Adding/Modifying Content

- **Services**: Edit lines 155-317 in `index.html`
- **Skills**: Edit lines 327-409 in `index.html`
- **Portfolio Items**: Edit lines 419-559 in `index.html`
- **Blog Posts**: Edit lines 569-651 in `index.html`
- **Social Links**: Edit lines 691-717 in `index.html`

## 🌐 Browser Support

This portfolio works on all modern browsers:

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Opera (latest)

**Mobile browsers**:
- ✅ Chrome Mobile
- ✅ Safari iOS
- ✅ Samsung Internet
- ✅ Firefox Mobile

**Note**: Internet Explorer is not supported (uses modern CSS and JavaScript features).

## ⚡ Performance

The website is optimized for speed:

- **Lighthouse Score**: Aims for 90+ across all metrics
- **First Contentful Paint**: < 1.5s on 3G
- **Time to Interactive**: < 3.8s on 3G
- **Image Optimization**: Lazy loading for below-fold images
- **CSS/JS Optimization**: Minified and efficient
- **Font Loading**: Optimized with preconnect
- **No Framework Overhead**: Pure vanilla code

### Performance Features
- 🎯 Critical CSS inline (fast first paint)
- 🖼️ Hero image preloading
- 📦 Single CSS and JS files (reduced HTTP requests)
- ⚡ GPU-accelerated animations
- 📱 Responsive images
- 🔄 Efficient JavaScript (no heavy frameworks)

## 🚢 Deployment

This static website can be deployed to:

### GitHub Pages (Free)
1. Push code to GitHub repository
2. Go to repository Settings → Pages
3. Select branch and save
4. Access at `https://yourusername.github.io/repository-name`

### Netlify (Free)
1. Drag and drop project folder to [Netlify](https://netlify.com)
2. Or connect GitHub repository
3. Automatic deployment on every push

### Vercel (Free)
1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in project directory
3. Follow prompts

### Other Options
- AWS S3 + CloudFront
- Firebase Hosting
- Any web server (Apache, Nginx, etc.)

**Requirements**: Just a static file host. No server-side processing needed.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📝 License

This project is **free to use** and does not contain any license restrictions. Feel free to use it for personal or commercial projects.

## 📧 Contact

For questions or feedback:
- **Repository**: [https://github.com/tonygitonga3/personal-portfolio](https://github.com/tonygitonga3/personal-portfolio)
- **Issues**: [GitHub Issues](https://github.com/tonygitonga3/personal-portfolio/issues)

## 🙏 Acknowledgments

- Design inspiration from modern portfolio websites
- Icons by [Ionicons](https://ionic.io/ionicons)
- Fonts by [Google Fonts](https://fonts.google.com/)

---

<div align="center">
  <p>Made with ❤️ and modern web technologies</p>
  <p><strong>⭐ Star this repo if you find it helpful!</strong></p>
</div>
