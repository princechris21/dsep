// script.js
document.addEventListener("DOMContentLoaded", () => {
  // Simulation Control Functionality
  const startSimulationBtn = document.getElementById("startSimulationBtn");
  const pauseSimulationBtn = document.getElementById("pauseSimulationBtn");
  const resumeSimulationBtn = document.getElementById("resumeSimulationBtn");
  const stopSimulationBtn = document.getElementById("stopSimulationBtn");
  const speedControl = document.getElementById("speedControl");

  let simulationRunning = false;
  let simulationPaused = false;

  startSimulationBtn.addEventListener("click", () => {
    const selectedData = document.getElementById("dataSelect").value;
    const parameters = document.getElementById("simulationParameters").value;
    // Add logic to start simulation with selected data and parameters
    console.log(`Starting simulation with data: ${selectedData} and parameters: ${parameters}`);
    simulationRunning = true;
    simulationPaused = false;
  });

  pauseSimulationBtn.addEventListener("click", () => {
    if (simulationRunning) {
      // Add logic to pause the simulation
      console.log("Simulation paused");
      simulationPaused = true;
    }
  });

  resumeSimulationBtn.addEventListener("click", () => {
    if (simulationRunning && simulationPaused) {
      // Add logic to resume the simulation
      console.log("Simulation resumed");
      simulationPaused = false;
    }
  });

  stopSimulationBtn.addEventListener("click", () => {
    if (simulationRunning) {
      // Add logic to stop the simulation
      console.log("Simulation stopped");
      simulationRunning = false;
      simulationPaused = false;
    }
  });

  speedControl.addEventListener("input", (e) => {
    const speed = e.target.value;
    // Add logic to adjust simulation speed
    console.log(`Simulation speed set to: ${speed}`);
  });
});
