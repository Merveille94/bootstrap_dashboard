const hamburger = document.querySelector("#toggle-btn");
hamburger.addEventListener("click", function () {
  document.querySelector("#sidebar").classList.toggle("expand");
});

  // Get the context of the canvas element
  var ctx = document.getElementById('myChart').getContext('2d');
  
  // Create the chart
  var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [{
        label: 'Musician Chart',
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false // visible on small screens
    }
  });