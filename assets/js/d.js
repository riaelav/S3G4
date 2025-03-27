document.addEventListener("DOMContentLoaded", function () {
  const table = document.getElementById("tabella");

  for (i = 1; i <= 99; i++) {
    const tableCell = document.createElement("div");
    tableCell.textContent = i;
    tableCell.className = "cell";
    table.appendChild(tableCell);
  }
  const randomButton = document.getElementById("bottone");
  randomButton.addEventListener("click", function (event) {
    let randomNum = Math.floor(Math.random() * 99) + 1;
    const cellIndex = table.children[randomNum];
    cellIndex.classList.add("background");

    const p = document.getElementById("numeri estratti");
    if (p.textContent === "Numeri estratti:") {
      p.textContent += randomNum + 1;
    } else {
      p.textContent += "," + (randomNum + 1);
    }
  });
  const secondTable = document.getElementById("secondtable");
  for (i = 1; i <= 24; i++) {
    const secondTableCell = document.createElement("div");
    secondTableCell.textContent = i;
    secondTableCell.className = "secondCell";
    secondTable.appendChild(secondTableCell);
  }
});
