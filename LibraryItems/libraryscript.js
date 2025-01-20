let bookCount = 8;
let memberCount = 6;

function updateCounter(type) {
  if (type === "book") {
    document.getElementById("bookCounter").textContent = bookCount;
    updateChart();
  } else if (type === "member") {
    document.getElementById("memberCounter").textContent = memberCount;
  }
}

function addBook() {
  bookCount++;
  updateCounter("book");
}

function removeBook() {
  if (bookCount > 0) {
    bookCount--;
    updateCounter("book");

    if (bookCount === 0) {
      window.alert("Book count is zero! Please restock!!");

      fetch("http://127.0.0.1:5000/run-script")
        .then((response) => response.text())
        .then((data) => console.log(data))
        .catch((error) => console.error("Error:", error));
    } else {
      console.log("Condition not met, not calling the Python script.");
    }
  }
}

function addMember() {
  memberCount++;
  updateCounter("member");
}

function removeMember() {
  if (memberCount > 0) {
    memberCount--;
    updateCounter("member");
  }
}

function resetSystem() {
  bookCount = 0;
  memberCount = 0;
  updateCounter("book");
  updateCounter("member");
  document.getElementById("lowBookAlert").style.display = "none";
}

let ctx = document.getElementById("bookChart").getContext("2d");
let bookChart = new Chart(ctx, {
  type: "bar",
  data: {
    labels: ["Books"],
    datasets: [
      {
        label: "Total Books",
        data: [bookCount],
        backgroundColor: ["#2575fc"],
        borderColor: ["#1b5cc5"],
        borderWidth: 1,
      },
    ],
  },
  options: {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 1,
        },
      },
    },
  },
});


function updateChart() {
  bookChart.data.datasets[0].data[0] = bookCount;
  bookChart.update();
}
