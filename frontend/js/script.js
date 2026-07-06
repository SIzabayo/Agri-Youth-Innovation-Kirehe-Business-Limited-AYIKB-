// AYIKB static site interactions
(function () {
  "use strict";

  // Mobile navigation toggle
  var toggle = document.getElementById("navToggle");
  var nav = document.getElementById("nav");

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var isOpen = nav.classList.toggle("open");
      toggle.classList.toggle("active", isOpen);
      toggle.setAttribute("aria-expanded", String(isOpen));
    });

    // Close menu when a link is clicked (mobile)
    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("open");
        toggle.classList.remove("active");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // Current year in footer
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Contact form (demo handler)
  window.AYIKB = {
    handleSubmit: function (event) {
      event.preventDefault();
      var note = document.getElementById("formNote");
      if (note) note.hidden = false;
      event.target.reset();
      return false;
    }
  };
})();
