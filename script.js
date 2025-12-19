const menuBtn = document.getElementById("menu-icon");
const sideNav = document.getElementById("sideNav");
const overlay = document.getElementById("overlay");

const dotsSVG = `
<svg class="dot-menu" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
  <circle cx="12" cy="5" r="2" fill="#9ca3af" />
  <circle cx="12" cy="12" r="2" fill="#9ca3af" />
  <circle cx="12" cy="19" r="2" fill="#9ca3af" />
</svg>
`;

function toggleNav() {
  sideNav.classList.toggle("open");
  document.body.classList.toggle("lock-scroll");
  overlay.classList.toggle("active");

  if (sideNav.classList.contains("open")) {
    menuBtn.innerHTML = "&#10005;"; // X icon
  } else {
    menuBtn.innerHTML = dotsSVG; // 3-dot icon
  }
}

// Close on overlay click
function scrollToProjects() {
  const section = document.querySelector('.P-pt');
  if (!section) return;

  section.scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });
}

function scrollToExperience() {
  const section = document.querySelector('.cert-Y');
  if (!section) return;

  section.scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });
}

