let bookCount = 0;
let memberCount = 0;

function addBook() {
  bookCount++;
  updateCounters();
}

function removeBook() {
  if (bookCount > 0) {
    bookCount--;
    updateCounters();

    if (bookCount === 0) {
      document.getElementById("lowBookAlert").style.display = "block";
      fetch("/notify-admin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: "Book count is zero! Please restock.",
        }),
      });
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
