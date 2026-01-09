'use strict';



/**
 * UTILITY FUNCTION
 * Add event listener on multiple elements
 * This helper function allows us to attach the same event listener to multiple elements
 * without repeating code, making the codebase more maintainable
 * 
 * @param {NodeList} elements - List of elements to attach listeners to
 * @param {String} eventType - Type of event (e.g., "click", "scroll")
 * @param {Function} callback - Function to execute when event fires
 */

const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback);
  }
}



/**
 * PRELOADER
 * Shows a loading animation while the page is loading
 * Once the DOM is fully loaded, it fades out and enables scrolling
 */

const preloader = document.querySelector("[data-preloader]");

// Wait for DOM to be fully loaded before hiding preloader
window.addEventListener("DOMContentLoaded", function () {
  // Add "loaded" class to trigger CSS fade-out animation
  preloader.classList.add("loaded");
  // Enable body scrolling (was hidden during load to prevent scroll while loading)
  document.body.classList.add("loaded");
});



/**
 * NAVBAR
 * Mobile navigation toggle functionality
 * On mobile devices, navigation is hidden by default and slides in from the right
 * when the hamburger button is clicked. Clicking the overlay closes the menu.
 */

// Get all elements that can toggle the navbar (hamburger button and overlay)
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");
const navbar = document.querySelector("[data-navbar]");
const overlay = document.querySelector("[data-overlay]");

/**
 * Toggle navbar visibility
 * Adds/removes "active" class to navbar, button, overlay, and body
 * This triggers CSS transitions for smooth slide-in/out animation
 */
const toggleNavbar = function () {
  navbar.classList.toggle("active");        // Show/hide navbar
  navToggleBtn.classList.toggle("active");  // Animate hamburger to X
  overlay.classList.toggle("active");       // Show/hide dark overlay
  document.body.classList.toggle("nav-active"); // Prevent/allow body scrolling
}

// Attach the toggle function to all toggle elements (button and overlay)
addEventOnElements(navTogglers, "click", toggleNavbar);



/**
 * HEADER - STICKY BEHAVIOR
 * Makes the header sticky with a background when user scrolls down
 * Adds visual feedback that navigation is always accessible
 */

const header = document.querySelector("[data-header]");

// Listen for scroll events to detect when to make header sticky
window.addEventListener("scroll", function () {
  // When scrolled more than 100px from top
  if (window.scrollY >= 100) {
    // Add "active" class (makes header fixed with background and shadow)
    header.classList.add("active");
  } else {
    // Remove "active" class (returns header to normal state)
    header.classList.remove("active");
  }
});



/**
 * SLIDER
 * Reusable horizontal slider/carousel component
 * Used for Services and Portfolio sections
 * Features:
 * - Next/Previous button navigation
 * - Shift + Mouse wheel scrolling
 * - Responsive: shows different number of items based on screen size
 * - Loops back to start/end when reaching limits
 */

const sliders = document.querySelectorAll("[data-slider]");

/**
 * Initialize a single slider instance
 * @param {HTMLElement} currentSlider - The slider element to initialize
 */
const initSlider = function (currentSlider) {

  // Get slider child elements
  const sliderContainer = currentSlider.querySelector("[data-slider-container]");
  const sliderPrevBtn = currentSlider.querySelector("[data-slider-prev]");
  const sliderNextBtn = currentSlider.querySelector("[data-slider-next]");

  // Read CSS variable to determine how many items to show at once
  // This value changes at different breakpoints for responsive behavior
  let totalSliderVisibleItems = Number(getComputedStyle(currentSlider).getPropertyValue("--slider-items"));
  
  // Calculate how many items can be scrolled
  // Example: 6 total items - 3 visible = 3 slidable positions
  let totalSlidableItems = sliderContainer.childElementCount - totalSliderVisibleItems;

  // Track current position (starts at 0)
  let currentSlidePos = 0;

  /**
   * Move slider to current position
   * Uses CSS transform for smooth, GPU-accelerated animation
   */
  const moveSliderItem = function () {
    // Get the left offset of the current item and apply negative transform
    // This "slides" the container to show the desired items
    sliderContainer.style.transform = `translateX(-${sliderContainer.children[currentSlidePos].offsetLeft}px)`;
  }

  /**
   * NEXT SLIDE
   * Move to the next set of items
   * If at the end, loop back to the beginning
   */
  const slideNext = function () {
    const slideEnd = currentSlidePos >= totalSlidableItems;

    if (slideEnd) {
      // At the end, loop back to start
      currentSlidePos = 0;
    } else {
      // Move to next position
      currentSlidePos++;
    }

    moveSliderItem();
  }

  sliderNextBtn.addEventListener("click", slideNext);

  /**
   * PREVIOUS SLIDE
   * Move to the previous set of items
   * If at the start, loop to the end
   */
  const slidePrev = function () {
    if (currentSlidePos <= 0) {
      // At the start, loop to end
      currentSlidePos = totalSlidableItems;
    } else {
      // Move to previous position
      currentSlidePos--;
    }

    moveSliderItem();
  }

  sliderPrevBtn.addEventListener("click", slidePrev);

  /**
   * Hide navigation buttons if there aren't enough items to slide
   * Example: If showing 3 items and only 3 exist, no need for navigation
   */
  const dontHaveExtraItem = totalSlidableItems <= 0;
  if (dontHaveExtraItem) {
    sliderNextBtn.style.display = 'none';
    sliderPrevBtn.style.display = 'none';
  }

  /**
   * KEYBOARD/MOUSE SHORTCUT
   * Slide with [Shift + Mouse Wheel]
   * Provides alternative navigation method for desktop users
   */
  currentSlider.addEventListener("wheel", function (event) {
    // Shift + scroll down = next slide
    if (event.shiftKey && event.deltaY > 0) slideNext();
    // Shift + scroll up = previous slide
    if (event.shiftKey && event.deltaY < 0) slidePrev();
  });

  /**
   * RESPONSIVE BEHAVIOR
   * When window is resized, recalculate slider parameters
   * This handles changes in --slider-items at different breakpoints
   * Example: Mobile shows 1 item, tablet shows 2, desktop shows 3
   */
  window.addEventListener("resize", function () {
    // Re-read the number of visible items (may have changed at new breakpoint)
    totalSliderVisibleItems = Number(getComputedStyle(currentSlider).getPropertyValue("--slider-items"));
    // Recalculate how many positions we can slide to
    totalSlidableItems = sliderContainer.childElementCount - totalSliderVisibleItems;

    // Reposition slider correctly for new layout
    moveSliderItem();
  });

}

// Initialize all sliders on the page (Services and Portfolio)
for (let i = 0, len = sliders.length; i < len; i++) { initSlider(sliders[i]); }