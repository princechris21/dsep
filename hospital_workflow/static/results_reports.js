// script.js
document.addEventListener("DOMContentLoaded", () => {
    const ctx = document.getElementById('resultsChart').getContext('2d');
    const resultsChart = new Chart(ctx, {
      type: 'bar', // You can change this to 'line', 'pie', etc.
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
          label: 'Simulation Results',
          data: [65, 59, 80, 81, 56, 55, 40],
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  
    const downloadReportBtn = document.getElementById('downloadReportBtn');
    const viewHistoricalDataBtn = document.getElementById('viewHistoricalDataBtn');
    const historicalDataDiv = document.getElementById('historicalData');
    const historicalDataList = document.getElementById('historicalDataList');
  
    downloadReportBtn.addEventListener('click', () => {
      // Logic to download the report
      alert('Report downloaded');
    });
  
    viewHistoricalDataBtn.addEventListener('click', () => {
      if (historicalDataDiv.style.display === 'none') {
        // Fetch historical data and display it
        const historicalData = [
          'Report January 2024',
          'Report February 2024',
          'Report March 2024'
          // Add more historical data as needed
        ];
        historicalDataList.innerHTML = '';
        historicalData.forEach(data => {
          const li = document.createElement('li');
          li.textContent = data;
          historicalDataList.appendChild(li);
        });
        historicalDataDiv.style.display = 'block';
      } else {
        historicalDataDiv.style.display = 'none';
      }
    });
  });
  