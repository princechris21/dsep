// script.js
document.addEventListener("DOMContentLoaded", () => {
    const menuItems = document.querySelectorAll(".menu-item");
    const sections = document.querySelectorAll(".section");
    const logoutButton = document.getElementById("logoutButton");
  
    menuItems.forEach(item => {
      item.addEventListener("click", (e) => {
        e.preventDefault();
        const sectionId = item.getAttribute("data-section");
        showSection(sectionId);
      });
    });
  
    logoutButton.addEventListener("click", () => {
      // Handle logout logic here
      alert("Logged out");
    });
  
    function showSection(sectionId) {
      sections.forEach(section => {
        section.classList.remove("active");
        if (section.id === sectionId) {
          section.classList.add("active");
        }
      });
    }
  
    window.showSubSection = function(subSectionId) {
      const subSections = document.querySelectorAll(".sub-section");
      subSections.forEach(subSection => {
        subSection.classList.add("hidden");
        if (subSection.id === subSectionId) {
          subSection.classList.remove("hidden");
        }
      });
    }
  
    // Show home section by default
    showSection("home");
  });
  