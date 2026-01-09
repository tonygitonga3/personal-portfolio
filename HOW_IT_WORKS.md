# How the Personal Portfolio Website Works

## Table of Contents
1. [Page Load Sequence](#page-load-sequence)
2. [User Interactions](#user-interactions)
3. [Component Workflows](#component-workflows)
4. [Responsive Behavior](#responsive-behavior)
5. [Common Use Cases](#common-use-cases)
6. [Technical Flow Diagrams](#technical-flow-diagrams)

## Page Load Sequence

### Initial Load Process

When a user visits the portfolio website, the following sequence occurs:

```
1. Browser requests index.html
   ↓
2. HTML parser begins building DOM
   ↓
3. Parser discovers external resources:
   - Google Fonts (preconnected)
   - CSS file (assets/css/style.css)
   - Hero image (preloaded)
   - JavaScript file (assets/js/script.js)
   - Ionicons library
   ↓
4. Preloader displays (spinning circle)
   ↓
5. CSS downloads and applies styles
   - Body overflow is hidden (prevents scroll during load)
   - Preloader is visible
   ↓
6. Images begin loading (lazy images wait)
   ↓
7. JavaScript downloads and executes
   - Sets up event listeners
   - Initializes sliders
   ↓
8. DOMContentLoaded event fires
   - JavaScript adds "loaded" class to preloader
   - JavaScript adds "loaded" class to body
   - Preloader fades out (CSS transition)
   - Body overflow changes to "overlay" (enables scrolling)
   ↓
9. Page is fully interactive
```

### Critical Rendering Path

**First Paint**: 
- Basic HTML structure with dark background
- Preloader animation visible

**First Contentful Paint (FCP)**:
- Hero section with text content
- Navigation bar

**Largest Contentful Paint (LCP)**:
- Hero banner image (preloaded for performance)
- Should occur < 2.5 seconds on good connections

**Time to Interactive (TTI)**:
- All JavaScript initialized
- All interactive elements responsive
- Should occur < 3.8 seconds on good connections

## User Interactions

### 1. Navigation Flow

#### Desktop Navigation
```
User sees horizontal navigation bar
   ↓
User hovers over link → Link changes color (CSS)
   ↓
User clicks link → Smooth scroll to section (browser native)
```

#### Mobile Navigation
```
User sees hamburger menu button
   ↓
User taps hamburger
   ↓
JavaScript toggles classes:
   - navbar: "active" (slides in from right)
   - navToggleBtn: "active" (animates to X)
   - overlay: "active" (shows dark background)
   - body: "nav-active" (prevents scrolling)
   ↓
User sees full-screen menu
   ↓
User taps link OR overlay:
   - Menu slides out
   - Button animates back to hamburger
   - Overlay fades out
   - Body scroll restored
   - Page scrolls to section
```

### 2. Sticky Header Behavior

```
Page loads with header at natural position
   ↓
User scrolls down
   ↓
JavaScript monitors scroll position
   ↓
When scrollY >= 100px:
   - header.classList.add("active")
   - CSS applies:
     * Background becomes solid
     * Shadow appears
     * Slight padding change
   ↓
User scrolls back to top (scrollY < 100px):
   - header.classList.remove("active")
   - Header returns to original style
```

### 3. Slider Interactions

The portfolio has two sliders (Services and Portfolio) that work identically:

#### Initialization
```
Page loads
   ↓
JavaScript finds all [data-slider] elements
   ↓
For each slider:
   - Read CSS variable --slider-items (how many to show)
   - Calculate total slidable items
   - Set initial position (0)
   - Hide controls if no extra items
   - Attach event listeners
```

#### Next Button Click
```
User clicks Next button (arrow right)
   ↓
JavaScript checks if at end:
   - If at end: currentSlidePos = 0 (loop to start)
   - If not: currentSlidePos++
   ↓
Calculate offset of current item: 
   sliderContainer.children[currentSlidePos].offsetLeft
   ↓
Apply transform:
   transform: translateX(-[offset]px)
   ↓
CSS transition animates the slide
```

#### Previous Button Click
```
User clicks Prev button (arrow left)
   ↓
JavaScript checks if at start:
   - If at start: currentSlidePos = totalSlidableItems (loop to end)
   - If not: currentSlidePos--
   ↓
Calculate and apply transform (same as Next)
```

#### Mouse Wheel Scrolling
```
User hovers over slider
   ↓
User holds Shift key + scrolls mouse wheel
   ↓
JavaScript detects: event.shiftKey && event.deltaY !== 0
   ↓
If deltaY > 0 (scroll down): Trigger slideNext()
If deltaY < 0 (scroll up): Trigger slidePrev()
```

#### Window Resize
```
User resizes browser window
   ↓
JavaScript "resize" event fires
   ↓
Re-read --slider-items (may have changed at new breakpoint)
   ↓
Recalculate totalSlidableItems
   ↓
Apply correct transform for current position
```

### 4. Skills Progress Bars

These are **CSS-only animations** (no JavaScript):

```
Page loads
   ↓
Skills section enters viewport
   ↓
Browser applies CSS:
   .progress { width: [percentage]%; }
   ↓
CSS transition animates from 0% to target width
   ↓
Visual effect: bars "fill up"
```

### 5. Portfolio Card Hover

```
User hovers over portfolio card
   ↓
CSS :hover pseudo-class activates
   ↓
Card scales up slightly (transform: scale(1.05))
   ↓
Overlay becomes more opaque
   ↓
Title and description appear/become visible
   ↓
User moves cursor away:
   - Card returns to original size
   - Overlay fades back
```

### 6. Download CV Button

```
User clicks "Download CV" button
   ↓
Browser follows href (currently "#")
   ↓
Would typically download file or navigate to CV page
(Currently needs implementation)
```

## Component Workflows

### Preloader Component

**Purpose**: Show loading animation while page assets load

```
HTML Structure:
<div class="preloader" data-preloader>
  <div class="circle"></div>
</div>

Initial State:
- Position: fixed (covers entire screen)
- Z-index: 6 (above all content)
- Background: solid color
- Circle: animated spinning

JavaScript Action (on DOMContentLoaded):
- Add "loaded" class

CSS Transition (when .loaded is added):
- Opacity: 1 → 0 (fade out)
- Visibility: visible → hidden
- Duration: 0.5s

Result:
- Preloader fades away
- Content becomes visible
- User can scroll
```

### Mobile Menu Component

**Purpose**: Provide navigation on small screens

```
HTML Structure:
<button data-nav-toggle-btn>     ← Hamburger button
  <span class="line line-1"></span>
  <span class="line line-2"></span>
</button>
<nav data-navbar>                 ← Menu content
  <ul class="navbar-list">...</ul>
</nav>
<div data-overlay></div>          ← Dark background

Default State (Mobile):
- Navbar: translateX(100%) (off-screen right)
- Overlay: opacity 0, pointer-events none
- Button: Shows two horizontal lines

JavaScript Toggles:
- On toggle: add/remove "active" class to all elements

Active State:
- Navbar: translateX(0) (slides in)
- Overlay: opacity 1 (shows, blocks clicks to content)
- Button: Lines rotate to form X
- Body: overflow hidden (prevents scrolling)

Exit Triggers:
- Click hamburger button (toggles off)
- Click overlay (toggles off)
- Click any nav link (toggles off via smooth scroll)
```

### Slider Component (Reusable)

**Purpose**: Create horizontal scrolling galleries

```
HTML Structure:
<div class="slider" data-slider>
  <ul data-slider-container>
    <li data-slider-item>Card 1</li>
    <li data-slider-item>Card 2</li>
    ...
  </ul>
  <button data-slider-prev>Prev</button>
  <button data-slider-next>Next</button>
</div>

CSS Configuration:
.slider {
  --slider-items: 1;  /* Visible items count */
}

JavaScript Initialization:
1. Find container and buttons
2. Read --slider-items from computed styles
3. Calculate: totalSlidable = totalItems - visibleItems
4. If totalSlidable <= 0: hide buttons
5. Set currentPosition = 0

Navigation Logic:
1. User clicks Next/Prev or uses Shift+Wheel
2. Update currentPosition (with wrapping)
3. Get offsetLeft of current item
4. Apply: transform: translateX(-offsetLeft)
5. CSS transition smoothly animates

Responsive Updates:
- On window resize
- Re-read --slider-items (may change at breakpoint)
- Recalculate totalSlidable
- Reposition slider correctly
```

### Header Sticky Behavior

**Purpose**: Keep navigation accessible while scrolling

```
Initial State:
- Header at natural document flow position
- No background or shadow
- Scrolled: 0px

Scroll Detection:
JavaScript monitors: window.scrollY

Threshold: 100px

When scrollY >= 100:
- Add "active" class
- CSS applies:
  * Fixed positioning (stays on screen)
  * Solid background color
  * Box shadow for depth
  * Adjusted padding

When scrollY < 100:
- Remove "active" class
- Header returns to natural position and style
```

## Responsive Behavior

### Breakpoint System

The site uses **mobile-first** responsive design with these breakpoints:

| Breakpoint | Width | Target Devices |
|------------|-------|----------------|
| Base (default) | < 575px | Mobile phones |
| Small | 575px+ | Large phones, small tablets |
| Medium | 768px+ | Tablets, small laptops |
| Large | 992px+ | Laptops, desktops |
| XLarge | 1200px+ | Large desktops |

### Layout Transformations

#### Navigation
```
Mobile (< 768px):
- Hamburger menu button visible
- Navigation menu off-screen (slides in when toggled)
- Overlay menu style
- Full-screen on activation

Desktop (768px+):
- Hamburger hidden
- Navigation always visible
- Horizontal layout
- No overlay needed
```

#### Sliders
```
Mobile (< 575px):
- --slider-items: 1 (show 1 card)
- Full width cards
- Larger nav buttons

Tablet (575px+):
- --slider-items: 2 (show 2 cards)
- Cards side by side

Desktop (992px+):
- --slider-items: 3 (show 3 cards)
- More content visible
- Smoother browsing experience
```

#### Hero Section
```
Mobile:
- Stacked layout (vertical)
- Image full width
- Text below image
- Centered content

Desktop:
- Side-by-side layout
- Image and text share space
- Left-aligned text
- More white space
```

#### Skills Section
```
Mobile:
- Single column
- Progress bars full width
- Stacked content

Desktop:
- Two columns
- Text content on left
- Skills list on right
- Better use of space
```

### How Responsive CSS Works

```css
/* Base styles (Mobile) */
.navbar-list {
  flex-direction: column;
  gap: 30px;
}

/* Tablet and up */
@media (min-width: 768px) {
  .navbar-list {
    flex-direction: row;
    gap: 20px;
  }
}
```

The browser:
1. Loads base styles (mobile)
2. Checks viewport width
3. If width >= 768px: applies media query styles
4. On resize: re-evaluates and applies appropriate styles

## Common Use Cases

### Use Case 1: Visitor Wants to See Portfolio

```
1. Page loads → Visitor sees hero section with name
2. Visitor scrolls down → Header becomes sticky (stays visible)
3. Visitor reaches Portfolio section
4. Visitor clicks "Next" button → Slider advances to show more projects
5. Visitor hovers over a project card → Card enlarges, shows details
6. Visitor clicks card → (Would navigate to project details)
```

### Use Case 2: Mobile User Wants to Navigate

```
1. Mobile user visits site
2. User sees hamburger menu icon (three lines)
3. User taps hamburger icon
   → Menu slides in from right
   → Dark overlay appears
   → Body scroll disabled
4. User sees navigation links
5. User taps "Services" link
   → Menu slides out
   → Overlay disappears
   → Page smoothly scrolls to Services section
   → Body scroll re-enabled
```

### Use Case 3: Potential Client Wants Contact Info

```
1. Visitor browses portfolio
2. Visitor scrolls to bottom of page
3. Visitor sees Footer section
4. Footer displays:
   - Email: info@kwilliams.com (clickable)
   - Location: San Francisco
   - Social media icons
5. Visitor clicks email → Default mail client opens with email pre-filled
6. Visitor clicks social icon → Opens social media profile
```

### Use Case 4: Recruiter Wants to Download CV

```
1. Recruiter lands on hero section
2. Recruiter sees "Download CV" button
3. Recruiter clicks button
4. (Currently navigates to # - would need to link to actual CV file)
5. Ideal flow: Browser downloads PDF resume
```

### Use Case 5: Designer Wants to See Skills

```
1. Designer navigates to site
2. Designer scrolls to Skills section
3. As section enters viewport:
   → Progress bars animate from 0% to their values
   → Design: 90%
   → Branding: 80%
   → Web Design: 95%
   → Social Media: 85%
4. Designer sees visual representation of proficiency levels
```

## Technical Flow Diagrams

### Page Render Flow

```
Browser parses HTML
        ↓
Creates DOM tree ←──────┐
        ↓                │
Requests CSS            │
        ↓                │
CSSOM created           │
        ↓                │
Requests JavaScript     │
        ↓                │
Render tree built       │
        ↓                │
Layout calculated       │
        ↓                │
Paint (Preloader visible)
        ↓
JavaScript executes
        ↓
Event listeners attached
        ↓
DOMContentLoaded fires
        ↓
Preloader fades out
        ↓
Content becomes visible
        ↓
Images lazy load ───────┘
(updates render tree)
```

### Slider Navigation Flow

```
User clicks Next button
        ↓
Event listener fires
        ↓
Check current position
        ↓
    At end? ──Yes→ Set position = 0
        ↓
        No
        ↓
Increment position
        ↓
Get offset of current item:
  element.offsetLeft
        ↓
Calculate transform value:
  -offset + "px"
        ↓
Apply to container:
  style.transform = "translateX(...)"
        ↓
CSS transition animates
        ↓
Cards slide smoothly
        ↓
User sees next set of items
```

### Mobile Menu Interaction Flow

```
User taps hamburger
        ↓
Click event fires
        ↓
toggleNavbar() function executes
        ↓
Toggle "active" classes:
  ├─ navbar.classList.toggle("active")
  ├─ navToggleBtn.classList.toggle("active")
  ├─ overlay.classList.toggle("active")
  └─ body.classList.toggle("nav-active")
        ↓
CSS transitions trigger:
  ├─ Navbar: translateX(100%) → translateX(0)
  ├─ Button lines rotate to X shape
  ├─ Overlay: opacity 0 → 1
  └─ Body: overflow visible → hidden
        ↓
Animations complete (0.25s - 0.5s)
        ↓
Menu is fully open/closed
```

### Sticky Header Flow

```
Page loads
  ↓
Scroll event listener attached
  ↓
User scrolls ───→ Scroll event fires
  ↓
Read window.scrollY
  ↓
scrollY >= 100? ──No→ Remove "active" ─→ Header normal style
  ↓                                        ↑
  Yes                                      │
  ↓                                        │
Add "active" class ─→ CSS applies ────────┘
  - Fixed position
  - Background color
  - Box shadow
  - Padding adjust
```

### Responsive Image Loading

```
Browser parses HTML
        ↓
Finds <img> tags
        ↓
Has loading="lazy"? ──No→ Load immediately
        ↓
       Yes
        ↓
Is in viewport? ──Yes→ Load immediately
        ↓
        No
        ↓
Add to lazy load queue
        ↓
User scrolls down
        ↓
Image enters viewport
        ↓
Browser loads image
        ↓
Image displays
```

## Performance Optimization Flow

### First Load

```
Critical Path:
1. HTML (inline, immediate)
2. CSS (render-blocking, but small)
3. Preloaded hero image (priority)
4. JavaScript (async, non-blocking)

Non-Critical:
5. Below-fold images (lazy loaded)
6. Ionicons (async module)
7. Google Fonts (with preconnect)

Result: Fast First Contentful Paint
```

### Interaction Performance

```
User Action (e.g., slider click)
        ↓
JavaScript updates single property:
  element.style.transform
        ↓
GPU-accelerated (no layout recalc)
        ↓
CSS transition handles animation
        ↓
Smooth 60fps animation
```

### Scroll Performance

```
User scrolls
        ↓
Throttled scroll listener fires
        ↓
Reads: window.scrollY (no DOM query)
        ↓
Compares to threshold (100)
        ↓
If needed: toggles single class
        ↓
CSS handles visual changes
        ↓
No jank, smooth scrolling
```

## Error Handling & Edge Cases

### No JavaScript

```
If JavaScript fails to load or is disabled:
- Preloader stays visible (ISSUE)
- Sliders don't work but content still visible
- Mobile menu doesn't toggle (navigation inaccessible on mobile)
- Header doesn't become sticky
- Core content still accessible (HTML)
```

**Improvement needed**: Add `<noscript>` style to hide preloader

### Slow Network

```
On slow connection:
1. HTML loads first → Content visible (text)
2. CSS loads → Styling applies
3. Hero image preloading ensures it's prioritized
4. Lazy images wait until viewport proximity
5. JavaScript loads → Interactivity added
6. Fonts load last → Text reflows with web fonts

Result: Progressive enhancement, usable at each stage
```

### Small Screens (< 320px)

```
CSS min-width not specifically defined
- Container padding maintains some margin
- Text scales down (responsive units)
- Images scale proportionally
- Layout still functions but cramped
```

### Large Screens (> 1920px)

```
No max-width on container
- Content spreads full width (potential issue)
- Some elements may appear too spread out
```

**Improvement**: Add max-width to containers on ultra-wide screens

## Accessibility Flow

### Keyboard Navigation

```
User tabs through page
        ↓
Focus moves to next interactive element:
  - Navigation links
  - Slider buttons
  - Download CV button
  - Email/social links
        ↓
Visual focus indicator shows (CSS :focus)
        ↓
User presses Enter
        ↓
Element activates (same as click)
```

### Screen Reader Experience

```
Screen reader starts
        ↓
Reads page title: "Kane Williams - Web & App Developer"
        ↓
Reads header navigation
        ↓
Reads main content in order:
  - Headings (h1, h2, h3, h4)
  - Paragraphs
  - Links (with context)
  - Images (with alt text)
  - Buttons (with aria-labels)
        ↓
User can navigate by landmarks:
  - header
  - main
  - section
  - footer
```

---

**Document Version**: 1.0  
**Last Updated**: January 2026  
**Related Documentation**: See [ARCHITECTURE.md](./ARCHITECTURE.md) for technical details
