let bookCount = 5;
let memberCount = 5;

function addBook() {
  bookCount++;
  updateCounters();
}

function removeBook() {
  if (bookCount > 0) {
    bookCount--;
    updateCounters();

    if (bookCount === 1 || bookCount === 0) {
      window.alert("Item is Low! Please restock!!");
      fetch("http://127.0.0.1:8000/run-script")
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
  updateCounters();
}

function removeMember() {
  if (memberCount > 0) {
    memberCount--;
    updateCounters();
  }
}

function updateCounters() {
  document.getElementById("bookCounter").textContent = bookCount;
  document.getElementById("memberCounter").textContent = memberCount;
}

function resetSystem() {
  bookCount = 0;
  memberCount = 0;
  updateCounters();
  document.getElementById("lowBookAlert").style.display = "none";
}
