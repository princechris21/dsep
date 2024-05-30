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
  
    // Show home section by default
    showSection("home");
  
    // Resource Management Functionality
    const resourceForm = document.getElementById("resourceForm");
    const saveResourceBtn = document.getElementById("saveResourceBtn");
    const cancelResourceBtn = document.getElementById("cancelResourceBtn");
    const resourceTable = document.querySelector("#resourceTable tbody");
    const searchResource = document.getElementById("searchResource");
  
    let resources = [];
  
    saveResourceBtn.addEventListener("click", () => {
      const resource = {
        name: document.getElementById("resourceName").value,
        type: document.getElementById("resourceType").value,
        quantity: document.getElementById("resourceQuantity").value
      };
      resources.push(resource);
      displayResources(resources);
      resourceForm.reset();
    });
  
    cancelResourceBtn.addEventListener("click", () => {
      resourceForm.reset();
    });
  
    searchResource.addEventListener("input", (e) => {
      const query = e.target.value.toLowerCase();
      const filteredResources = resources.filter(resource =>
        resource.name.toLowerCase().includes(query) ||
        resource.type.toLowerCase().includes(query)
      );
      displayResources(filteredResources);
    });
  
    function displayResources(resources) {
      resourceTable.innerHTML = "";
      resources.forEach((resource, index) => {
        const row = document.createElement("tr");
        row.innerHTML = `
          <td>${resource.name}</td>
          <td>${resource.type}</td>
          <td>${resource.quantity}</td>
          <td>
            <button onclick="editResource(${index})">Edit</button>
            <button onclick="deleteResource(${index})">Delete</button>
          </td>
        `;
        resourceTable.appendChild(row);
      });
    }
  
    window.editResource = function(index) {
      const resource = resources[index];
      document.getElementById("resourceName").value = resource.name;
      document.getElementById("resourceType").value = resource.type;
      document.getElementById("resourceQuantity").value = resource.quantity;
      saveResourceBtn.onclick = () => {
        resources[index] = {
          name: document.getElementById("resourceName").value,
          type: document.getElementById("resourceType").value,
          quantity: document.getElementById("resourceQuantity").value
        };
        displayResources(resources);
        resourceForm.reset();
        saveResourceBtn.onclick = saveResource;
      };
    };
  
    window.deleteResource = function(index) {
      resources.splice(index, 1);
      displayResources(resources);
    };
  
    function saveResource() {
      const resource = {
        name: document.getElementById("resourceName").value,
        type: document.getElementById("resourceType").value,
        quantity: document.getElementById("resourceQuantity").value
      };
      resources.push(resource);
      displayResources(resources);
      resourceForm.reset();
    }
  });
  