let chemistryId = 4;
let physicsId = 4;
let biologyId = 4;

function addChemistryItem() {
  const name = document.getElementById("chemistryItemName").value;
  const quantity = document.getElementById("chemistryItemQuantity").value;

  if (name && quantity) {
    chemistryId++;
    const table = document
      .getElementById("chemistryTable")
      .getElementsByTagName("tbody")[0];
    const newRow = table.insertRow(table.rows.length);

    newRow.insertCell(0).textContent = chemistryId;
    newRow.insertCell(1).textContent = name;
    newRow.insertCell(2).textContent = quantity;

    const removeCell = newRow.insertCell(3);
    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.onclick = function () {
      removeChemistryItem(removeButton);
    };
    removeCell.appendChild(removeButton);

  
    document.getElementById("chemistryItemName").value = "";
    document.getElementById("chemistryItemQuantity").value = "";
  } else {
    alert("Please fill in both fields.");
  }
}

function removeChemistryItem(button) {
  const row = button.closest("tr");
  row.remove();
}

function addPhysicsItem() {
  const name = document.getElementById("physicsItemName").value;
  const quantity = document.getElementById("physicsItemQuantity").value;

  if (name && quantity) {
    physicsId++;
    const table = document
      .getElementById("physicsTable")
      .getElementsByTagName("tbody")[0];
    const newRow = table.insertRow(table.rows.length);

    newRow.insertCell(0).textContent = physicsId;
    newRow.insertCell(1).textContent = name;
    newRow.insertCell(2).textContent = quantity;


    const removeCell = newRow.insertCell(3);
    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.onclick = function () {
      removePhysicsItem(removeButton);
    };
    removeCell.appendChild(removeButton);


    document.getElementById("physicsItemName").value = "";
    document.getElementById("physicsItemQuantity").value = "";
  } else {
    alert("Please fill in both fields.");
  }
}

function removePhysicsItem(button) {
  const row = button.closest("tr");
  row.remove();
}

function addBiologyItem() {
  const name = document.getElementById("biologyItemName").value;
  const quantity = document.getElementById("biologyItemQuantity").value;

  if (name && quantity) {
    biologyId++;
    const table = document
      .getElementById("biologyTable")
      .getElementsByTagName("tbody")[0];
    const newRow = table.insertRow(table.rows.length);

    newRow.insertCell(0).textContent = biologyId;
    newRow.insertCell(1).textContent = name;
    newRow.insertCell(2).textContent = quantity;


    const removeCell = newRow.insertCell(3);
    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.onclick = function () {
      removeBiologyItem(removeButton);
    };
    removeCell.appendChild(removeButton);


    document.getElementById("biologyItemName").value = "";
    document.getElementById("biologyItemQuantity").value = "";
  } else {
    alert("Please fill in both fields.");
  }
}

function removeBiologyItem(button) {
  const row = button.closest("tr");
  row.remove();
}
