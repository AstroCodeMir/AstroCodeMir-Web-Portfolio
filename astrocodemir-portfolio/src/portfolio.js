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

// 👇 expose to global scope so inline HTML onclick can access it
window.changeTab = changeTab;

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

// Modal
(function () {
  function openModal(id) {
    const modal = document.getElementById(id);
    if (!modal) {
      console.warn(`openModal: element #${id} not found`);
      return;
    }
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    document.body.style.overflow = 'hidden'; // prevent background scroll
    modal.setAttribute('aria-hidden', 'false');

    // focus first focusable element inside modal (close button if present)
    const focusable = modal.querySelector('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
    if (focusable) focusable.focus();
  }

  function closeModal(id) {
    const modal = document.getElementById(id);
    if (!modal) return;
    modal.classList.remove('flex');
    modal.classList.add('hidden');
    document.body.style.overflow = ''; // restore scroll
    modal.setAttribute('aria-hidden', 'true');
  }

  // Close on ESC and click outside (backdrop) for any modal with .modal class
  document.addEventListener('DOMContentLoaded', () => {
    // close when pressing Escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        document.querySelectorAll('.modal.flex').forEach(m => closeModal(m.id));
      }
    });

    // close when clicking the backdrop (requires modal container to have class "modal")
    document.querySelectorAll('.modal').forEach(modal => {
      modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal(modal.id);
      });
    });
  });

  // expose to global for inline onclick handlers
  window.openModal = openModal;
  window.closeModal = closeModal;
})();




// --- INIT ---
document.addEventListener("DOMContentLoaded", () => {
    initSliders();
});
