  function toggleNav() {
        const sideNav = document.getElementById('sideNav');
        const menuBtn = document.getElementById('menu-icon'); 
    
        sideNav.classList.toggle('open');
        document.body.classList.toggle('overlay-active'); 
    
        if (sideNav.classList.contains('open')) {
            menuBtn.innerHTML = "&#10005;";
        } else {
            menuBtn.innerHTML = "&#9776;";
        }
    }
    
    document.addEventListener('click', function (event) {
        const sideNav = document.getElementById('sideNav');
        const menuBtn = document.getElementById('menu-icon');
    
        if (!sideNav.contains(event.target) && !menuBtn.contains(event.target)) {
            sideNav.classList.remove('open');
            document.body.classList.remove('overlay-active'); 
            menuBtn.innerHTML = "&#9776;"; 
        }
    });

    function toggleNav() {
  const sideNav = document.getElementById("sideNav");
  const body = document.body;
  const overlay = document.getElementById("overlay");

  sideNav.classList.toggle("open");

  if (sideNav.classList.contains("open")) {
    body.classList.add("lock-scroll");
    overlay.classList.add("active");
  } else {
    body.classList.remove("lock-scroll");
    overlay.classList.remove("active");
  }
}
// Close nav when clicking overlay
document.getElementById("overlay").addEventListener("click", () => {
  document.getElementById("sideNav").classList.remove("open");
  document.body.classList.remove("lock-scroll");
  document.getElementById("overlay").classList.remove("active");
});

