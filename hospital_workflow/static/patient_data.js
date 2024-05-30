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
  
    // Patient Data Functionality
    const patientForm = document.getElementById("patientForm");
    const savePatientBtn = document.getElementById("savePatientBtn");
    const cancelPatientBtn = document.getElementById("cancelPatientBtn");
    const patientTable = document.querySelector("#patientTable tbody");
    const searchPatient = document.getElementById("searchPatient");
  
    let patients = [];
  
    savePatientBtn.addEventListener("click", () => {
      const patient = {
        name: document.getElementById("patientName").value,
        age: document.getElementById("patientAge").value,
        gender: document.getElementById("patientGender").value,
        condition: document.getElementById("patientCondition").value,
      };
      patients.push(patient);
      displayPatients(patients);
      patientForm.reset();
    });
  
    cancelPatientBtn.addEventListener("click", () => {
      patientForm.reset();
    });
  
    searchPatient.addEventListener("input", (e) => {
      const query = e.target.value.toLowerCase();
      const filteredPatients = patients.filter(patient =>
        patient.name.toLowerCase().includes(query) ||
        patient.condition.toLowerCase().includes(query)
      );
      displayPatients(filteredPatients);
    });
  
    function displayPatients(patients) {
      patientTable.innerHTML = "";
      patients.forEach((patient, index) => {
        const row = document.createElement("tr");
        row.innerHTML = `
          <td>${patient.name}</td>
          <td>${patient.age}</td>
          <td>${patient.gender}</td>
          <td>${patient.condition}</td>
          <td>
            <button onclick="editPatient(${index})">Edit</button>
            <button onclick="deletePatient(${index})">Delete</button>
          </td>
        `;
        patientTable.appendChild(row);
      });
    }
  
    window.editPatient = function(index) {
      const patient = patients[index];
      document.getElementById("patientName").value = patient.name;
      document.getElementById("patientAge").value = patient.age;
      document.getElementById("patientGender").value = patient.gender;
      document.getElementById("patientCondition").value = patient.condition;
      savePatientBtn.onclick = () => {
        patients[index] = {
          name: document.getElementById("patientName").value,
          age: document.getElementById("patientAge").value,
          gender: document.getElementById("patientGender").value,
          condition: document.getElementById("patientCondition").value,
        };
        displayPatients(patients);
        patientForm.reset();
        savePatientBtn.onclick = () => {
          const patient = {
            name: document.getElementById("patientName").value,
            age: document.getElementById("patientAge").value,
            gender: document.getElementById("patientGender").value,
            condition: document.getElementById("patientCondition").value,
          };
          patients.push(patient);
          displayPatients(patients);
          patientForm.reset();
        };
      };
    };
  
    window.deletePatient = function(index) {
      patients.splice(index, 1);
      displayPatients(patients);
    };
  });
  