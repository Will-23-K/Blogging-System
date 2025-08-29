// Navigation functionality
export function initNavigation() {
  const navItems = document.querySelectorAll('.nav-item');
  const contentPages = document.querySelectorAll('.content-page');
  const sidebarItems = document.querySelectorAll('.sidebar-item');
  
  // Main navigation
  if (navItems.length) {
    navItems.forEach(item => {
      item.addEventListener('click', () => {
        const target = item.getAttribute('data-target');
        
        // Update active nav item
        navItems.forEach(navItem => navItem.classList.remove('active'));
        item.classList.add('active');
        
        // Show corresponding content page
        contentPages.forEach(page => {
          page.classList.remove('active');
          if (page.id === target) {
            page.classList.add('active');
          }
        });
      });
    });
  }
  
  // Sidebar navigation
  if (sidebarItems.length) {
    sidebarItems.forEach(item => {
      item.addEventListener('click', () => {
        const page = item.getAttribute('data-page');
        
        // Update active sidebar item
        sidebarItems.forEach(sidebarItem => sidebarItem.classList.remove('active'));
        item.classList.add('active');
        
        // For demo purposes, just show an alert
        // In a real app, this would navigate to the appropriate page
        if (page !== 'home') {
          alert(`Navigating to ${page} page...`);
        }
      });
    });
  }
}
