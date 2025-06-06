/**
 * Menu
 */
 $("a.menu-icon").on("click", function(event) {
   var w = $(".menu");

   w.css({
     display: w.css("display") === "none"
      ? "block"
      : "none"
   });
 });

/**
 * Wechat widget
 */
function moveWidget(event) {
  var w = $("#wechat-widget");

  w.css({
    left: event.pageX - 25,
    top: event.pageY - w.height() - 60
  });
}

$("a#wechat-link").on("mouseenter", function(event) {
  $("#wechat-widget").css({ display: "block" });
  moveWidget(event);
});

$("a#wechat-link").on("mousemove", function(event) {
  moveWidget(event);
});

$("a#wechat-link").on("mouseleave", function(event) {
  $("#wechat-widget").css({ display: "none" });
});

// Dark Mode Toggle
(function() {
  var body = document.body;
  var toggle = document.getElementById('dark-mode-toggle');
  console.log('Dark mode toggle element:', toggle); // Debug line

  if (toggle) { // Only proceed if toggle exists
    // Function to apply/remove dark mode
    function applyDarkMode(isDark) {
      if (isDark) {
        body.classList.add('dark-mode');
        toggle.textContent = 'Light Mode'; // Or use an icon
      } else {
        body.classList.remove('dark-mode');
        toggle.textContent = 'Dark Mode'; // Or use an icon
      }
    }

    // Event listener for the toggle button
    toggle.addEventListener('click', function() {
      var isDarkMode = body.classList.contains('dark-mode');
      applyDarkMode(!isDarkMode);
      try {
        // Ensure localStorage stores a string 'true' or 'false'
        localStorage.setItem('darkMode', !isDarkMode ? 'true' : 'false');
      } catch (e) {
        console.error("LocalStorage not available: ", e);
      }
    });

    // Check for saved preference on page load
    var savedPreference = null; // Initialize to null to distinguish from 'false'
    try {
       savedPreference = localStorage.getItem('darkMode');
    } catch (e) {
       console.error("LocalStorage not available: ", e);
    }

    if (savedPreference !== null) {
      applyDarkMode(savedPreference === 'true');
    } else {
      // Default to light mode if no preference is set in localStorage
      applyDarkMode(false);
      // Optional: Check for system preference if no user preference is set
      // if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      //  applyDarkMode(true);
      //  try { localStorage.setItem('darkMode', 'true'); } catch (e) {} // Optionally save system pref
      // } else {
      //  applyDarkMode(false);
      // }
    }

  } else {
    // This message is more informative if the toggle is missing
    console.log('Dark mode toggle element #dark-mode-toggle not found. Dark mode functionality will be disabled.');
  }
})();
