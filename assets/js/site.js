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

  if (!toggle) {
    console.log('Dark mode toggle not found, ensure it exists in your HTML.');
    return;
  }

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
      localStorage.setItem('darkMode', !isDarkMode ? 'true' : 'false');
    } catch (e) {
      console.error("LocalStorage not available: ", e);
    }
  });

  // Check for saved preference on page load
  var savedPreference = 'false'; // Default to false if not found or error
  try {
     var item = localStorage.getItem('darkMode');
     if (item !== null) { // Only update if item actually exists
        savedPreference = item;
     }
  } catch (e) {
     console.error("LocalStorage not available: ", e);
  }

  applyDarkMode(savedPreference === 'true');

  // Optional: Check for system preference if no user preference is set
  // This part is outside the initial applyDarkMode to avoid double application
  // and ensure localStorage takes precedence.
  // Note: This specific placement might need adjustment based on desired behavior
  // if localStorage is empty and system preference should be the default.
  // For now, localStorage or 'false' (light mode) is the default.
  /*
  if (localStorage.getItem('darkMode') === null) { // Only if no explicit user choice
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      applyDarkMode(true);
      // Optionally save this system preference as the new default
      // try {
      //   localStorage.setItem('darkMode', 'true');
      // } catch (e) {
      //   console.error("LocalStorage not available: ", e);
      // }
    }
  }
  */
})();
