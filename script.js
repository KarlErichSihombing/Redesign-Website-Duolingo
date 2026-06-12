/* ===== SHARED SCRIPT ===== */

// Hamburger sidebar toggle
function initSidebar() {
  const hamBtn  = document.getElementById('hamBtn') || document.getElementById('hamburgerBtn');
  const sidenav = document.getElementById('sidenav') || document.getElementById('sidebarLeft');
  const overlay = document.getElementById('overlay') || document.getElementById('sidebarOverlay');
  if (!hamBtn || !sidenav || !overlay) return;

  hamBtn.addEventListener('click', () => {
    sidenav.classList.toggle('open');
    overlay.classList.toggle('show');
  });
  overlay.addEventListener('click', () => {
    sidenav.classList.remove('open');
    overlay.classList.remove('show');
  });
}

// Mobile bottom nav active state
function initMobileNav() {
  document.querySelectorAll('.mobile-nav-item').forEach(item => {
    item.addEventListener('click', () => {
      document.querySelectorAll('.mobile-nav-item').forEach(i => i.classList.remove('active'));
      item.classList.add('active');
    });
  });
}

// Run shared inits
document.addEventListener('DOMContentLoaded', () => {
  initSidebar();
  initMobileNav();
});