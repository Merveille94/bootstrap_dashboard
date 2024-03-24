
// Function to toggle sidebar
function toggleSidebar() {
  const sidebar = document.querySelector("#sidebar");
  const sidebarNav = document.querySelector(".sidebar-nav");

  // Toggle expand class on sidebar
  sidebar.classList.toggle("expand");

  // If sidebar is retracted, collapse all submenu items
  if (!sidebar.classList.contains("expand")) {
    sidebarNav.querySelectorAll('.has-dropdown').forEach(item => {
      item.classList.remove('expanded');
    });
  }
}

// Function to handle sidebar and submenu behavior on icon click
function handleIconClick(event) {
  // Prevent default link behavior
  // event.preventDefault();

  // Toggle the sidebar if the clicked item is not a dropdown
  if (!event.currentTarget.classList.contains('has-dropdown')) {
    toggleSidebar();
  }

  // If the clicked icon is in a submenu, toggle its expansion
  const clickedItem = event.currentTarget;
  if (clickedItem.classList.contains('has-dropdown')) {
    clickedItem.classList.toggle('expanded');
  }
}

// Add event listener to the toggle button
document.getElementById('toggle-btn').addEventListener('click', toggleSidebar);

// Add event listeners to all icons in the sidebar
document.querySelectorAll('.sidebar-item').forEach(item => {
  item.addEventListener('click', handleIconClick);
});


// Get the context of the canvas element
var ctx = document.getElementById("myChart").getContext("2d");

// Create the chart
var myChart = new Chart(ctx, {
  type: "bar",
  data: {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Musician Chart",
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false, // visible on small screens
  },
});

function toggleSchedule(type) {
  const scheduleGigCards = document.getElementById("scheduleGigCards");
  if (type === "schedule") {
    scheduleGigCards.classList.toggle("d-none");
  }
}
// Enable Bootstrap tooltips
var tooltipTriggerList = [].slice.call(
  document.querySelectorAll('[data-bs-toggle="tooltip"]')
);
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl);
});

