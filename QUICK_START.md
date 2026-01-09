# Quick Start Guide - Personal Portfolio Website

## 🎯 TL;DR (Too Long; Didn't Read)

This is a **static portfolio website** built with HTML, CSS, and JavaScript. No frameworks, no build tools, no dependencies. Just open `index.html` in a browser and it works!

## 📦 What You Get

- ✅ Fully responsive portfolio website
- ✅ Modern dark theme design
- ✅ Animated sliders for services and portfolio
- ✅ Mobile-friendly navigation
- ✅ Fast loading with optimized assets
- ✅ Ready to deploy anywhere

## 🚀 Getting Started (3 Steps)

### 1. Get the Code
```bash
git clone https://github.com/tonygitonga3/personal-portfolio.git
cd personal-portfolio
```

### 2. Open in Browser
- Double-click `index.html`
- OR use a local server (optional but recommended):
  ```bash
  python -m http.server 8000
  # Visit: http://localhost:8000
  ```

### 3. Customize Your Info
Edit `index.html` to add your:
- Name (line 121)
- Job title (line 124)
- Services (lines 155-317)
- Skills (lines 327-409)
- Portfolio items (lines 419-559)
- Contact email (line 674)

## 📝 Key Sections to Edit

| Section | Lines in index.html | What to Change |
|---------|-------------------|----------------|
| **Hero** | 116-145 | Your name, title, bio, profile image |
| **Services** | 155-317 | Your 6 services/offerings |
| **Skills** | 327-409 | Your skill percentages |
| **Portfolio** | 419-559 | Your 6 projects with images |
| **Blog** | 569-651 | Your 2 recent articles |
| **Footer** | 664-720 | Email, location, social links |

## 🎨 Quick Customization

### Change Colors
Edit `assets/css/style.css` (lines 17-30):
```css
:root {
  --raisin-black: hsla(231, 10%, 14%, 1);  /* Background */
  --roman-silver: hsla(229, 10%, 57%, 1);  /* Text */
  --white: hsla(0, 0%, 100%, 1);            /* Accents */
}
```

### Change Images
Replace these files in `assets/images/`:
- `hero-banner.jpg` → Your photo
- `logo.svg` → Your logo
- `portfolio-1.jpg` through `portfolio-6.jpg` → Your projects
- `blog-1.jpg` and `blog-2.jpg` → Your blog images

### Change Font
1. Pick a font from [Google Fonts](https://fonts.google.com/)
2. Update line 26 in `index.html`
3. Update line 35 in `assets/css/style.css`

## 📱 Features Overview

### What Works Out of the Box:
- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Sticky header on scroll
- ✅ Mobile hamburger menu
- ✅ Service slider (keyboard + mouse)
- ✅ Portfolio slider
- ✅ Animated skill bars
- ✅ Smooth scrolling
- ✅ Loading animation
- ✅ Hover effects

### What You Need to Implement:
- ⚠️ Download CV button (link to your PDF)
- ⚠️ Actual navigation links (or use smooth scroll)
- ⚠️ Contact form (requires backend or service like Formspree)
- ⚠️ Blog posts linking to actual articles

## 🌐 Deployment (Choose One)

### GitHub Pages (Free & Easy)
```bash
# 1. Push to GitHub
git add .
git commit -m "My portfolio"
git push

# 2. Enable GitHub Pages:
# Settings → Pages → Deploy from main branch
# Done! Your site is at: https://yourusername.github.io/personal-portfolio
```

### Netlify (Free & Easy)
1. Drag & drop your folder at [netlify.com](https://netlify.com)
2. Done! Get a URL instantly

### Vercel (Free & Easy)
```bash
npm i -g vercel
vercel
# Follow prompts
```

## 🔧 File Structure (Simple!)

```
personal-portfolio/
├── index.html              ← Your content
├── assets/
│   ├── css/style.css      ← Your styles
│   ├── js/script.js       ← Your interactions
│   └── images/            ← Your images
└── Documentation files
```

## 📚 Documentation Files

| File | Purpose |
|------|---------|
| `README.md` | Main documentation (you're here!) |
| `ARCHITECTURE.md` | Deep dive into technical architecture |
| `HOW_IT_WORKS.md` | How components interact |
| `QUICK_START.md` | This file - quick reference |
| `style-guide.md` | Design tokens (colors, fonts, etc.) |

## 🎯 Common Tasks

### Add a New Service Card
Copy lines 180-198 in `index.html` and modify:
```html
<li class="slider-item" data-slider-item>
  <div class="service-card">
    <div class="card-icon">
      <ion-icon name="your-icon-name"></ion-icon>
    </div>
    <h3 class="h3 card-title">Your Service</h3>
    <p class="card-text">Your description...</p>
    <span class="text-lg card-number">07</span>
    <a href="#" class="layer-link"></a>
  </div>
</li>
```

### Add a New Portfolio Item
Copy lines 441-456 in `index.html` and modify:
```html
<li class="slider-item">
  <div class="portfolio-card img-holder" style="--width: 600; --height: 600;">
    <img src="./assets/images/your-project.jpg" width="600" height="600" 
         loading="lazy" alt="Your project" class="img-cover">
    <div class="card-content">
      <h3 class="h3 card-title">Project Name</h3>
      <p class="card-text">Project Type</p>
    </div>
    <a href="#" class="layer-link"></a>
  </div>
</li>
```

### Add a New Skill
Copy lines 354-364 in `index.html` and modify:
```html
<li>
  <div class="progress-wrapper">
    <p class="progress-label">Your Skill</p>
    <data class="progress-value" value="85">85%</data>
  </div>
  <div class="progress-bg">
    <div class="progress" style="width: 85%;"></div>
  </div>
</li>
```

## 🐛 Troubleshooting

### Preloader won't disappear?
- Check browser console for JavaScript errors
- Make sure `assets/js/script.js` is loading correctly

### Sliders not working?
- Verify Ionicons is loading (check network tab)
- Ensure JavaScript is enabled
- Check for console errors

### Images not showing?
- Verify image paths are correct
- Check that images exist in `assets/images/`
- Use browser DevTools to inspect network requests

### Mobile menu not working?
- Check that JavaScript is enabled
- Verify `assets/js/script.js` loaded correctly
- Test in different browsers

### Styling looks broken?
- Ensure `assets/css/style.css` is loading
- Clear browser cache (Ctrl/Cmd + Shift + R)
- Check for CSS syntax errors in DevTools

## 💡 Tips & Best Practices

1. **Images**: Optimize before adding (use TinyPNG, ImageOptim, etc.)
2. **Testing**: Test on real devices, not just browser resize
3. **SEO**: Update meta tags in `<head>` section
4. **Performance**: Keep images under 500KB each
5. **Accessibility**: Test with keyboard navigation
6. **Browser Testing**: Check in Chrome, Firefox, Safari, Edge

## 🎓 Learning Resources

Want to understand how it works?

1. **Start Here**: `README.md` - Overview and setup
2. **Technical Details**: `ARCHITECTURE.md` - How it's built
3. **Workflows**: `HOW_IT_WORKS.md` - How components interact
4. **Design System**: `style-guide.md` - Colors, fonts, spacing
5. **Code Comments**: Check `script.js` and `index.html` for inline explanations

## 🚀 Next Steps After Setup

1. ✅ Replace all placeholder content with your own
2. ✅ Add your profile photo and project images
3. ✅ Update colors to match your brand
4. ✅ Link Download CV button to your resume PDF
5. ✅ Add your social media links
6. ✅ Test on mobile devices
7. ✅ Deploy to your hosting service
8. ✅ Share your portfolio!

## 📞 Need Help?

- 📖 Read the full docs: `README.md` and `ARCHITECTURE.md`
- 🐛 Found a bug? Open an issue on GitHub
- 💬 Questions? Check existing GitHub issues first

## ✨ That's It!

You now have a professional portfolio website. Customize it, deploy it, and share it with the world! 🎉

---

**Quick Links**:
- [Full Documentation](./README.md)
- [Technical Architecture](./ARCHITECTURE.md)
- [How It Works](./HOW_IT_WORKS.md)
- [Style Guide](./style-guide.md)
