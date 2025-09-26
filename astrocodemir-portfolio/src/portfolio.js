// portfolio.js

// --- TAB SWITCHING ---
function changeTab(event, tabId) {
  const allTabs = document.querySelectorAll(".tab-content");
  const allButtons = document.querySelectorAll(".tab-btn");

  // Hide all tab contents
  allTabs.forEach(tab => tab.classList.add("hidden"));

  // Reset all buttons to inactive (muted gray + hover)
  allButtons.forEach(btn => {
    btn.classList.remove("text-white", "font-semibold");
    btn.classList.add("text-gray-500", "hover:text-gray-300");
  });

  // Show selected tab
  document.getElementById(tabId).classList.remove("hidden");

  // Style active button (white)
  const currentBtn = event.currentTarget;
  currentBtn.classList.add("text-white", "font-semibold");
  currentBtn.classList.remove("text-gray-500", "hover:text-gray-300");
}







// --- IMAGE SLIDER ---
function initSliders() {
    const sliders = document.querySelectorAll(".card-image-slider");

    sliders.forEach(slider => {
        const images = slider.querySelectorAll("img");
        let currentIndex = 0;
        let intervalId = null;

        // Function to start auto-sliding
        function startSlider() {
            if (images.length <= 1) return;
            intervalId = setInterval(() => {
                images[currentIndex].classList.remove("active");
                currentIndex = (currentIndex + 1) % images.length;
                images[currentIndex].classList.add("active");
            }, 2000); // every 2s
        }

        // Function to stop and reset slider
        function resetSlider() {
            clearInterval(intervalId);
            images.forEach(img => img.classList.remove("active"));
            currentIndex = 0;
            images[currentIndex].classList.add("active"); // reset to first
        }

        // Start on hover
        slider.addEventListener("mouseenter", startSlider);
        // Reset when mouse leaves
        slider.addEventListener("mouseleave", resetSlider);
    });
}

// --- INIT ---
document.addEventListener("DOMContentLoaded", () => {
    initSliders();
});
