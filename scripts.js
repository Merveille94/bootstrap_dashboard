    // Data for the chart
    const data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
            label: 'monthly',
            data: [50, 60, 70, 80, 90, 100, 110],
            backgroundColor: 'rgb(0, 123, 225)', // Lemon green color
            borderColor: 'rgba(54, 162, 235, 1)', // Border color
            borderWidth: 1.9,
            borderRadius: 50 // Pill shape
        }]
    };

    // Configuration options
    const options = {
        scales: {
            y: {
                beginAtZero: true, // Start y-axis at 0
            }
        },
        
    };

    // Initialize the chart
    const ctx = document.getElementById('myChart').getContext('2d');
    const myChart = new Chart(ctx, {
        type: 'bar',
        data: data,
        options: options
    });