// Store user preference in localStorage
function savePreference(preference) {
  localStorage.setItem('animationEnabled', preference);
}

// Retrieve user preference from localStorage
function getPreference() {
  return localStorage.getItem('animationEnabled') === 'true';
}

// Set initial state of the animation based on user preference
window.onload = function () {
  const animationEnabled = getPreference();
  if (animationEnabled) {
    document.getElementById('animationButton').classList.add('animate');
  }
}

// Toggle animation preference and trigger animation
document.getElementById('animationButton').addEventListener('click', function () {
  const animationButton = this;
  const animationEnabled = getPreference();

  // Toggle the animation class
  if (animationEnabled) {
    animationButton.classList.remove('animate');
    savePreference(false);  // Disable animation
  } else {
    animationButton.classList.add('animate');
    savePreference(true);  // Enable animation
  }
});

