var addData = document.getElementById("addData");
var row = 1;
function addRow() {
  var name = document.getElementById("name").value;
  var dateOfBirth = document.getElementById("dob").value;
  var age = document.getElementById("age").value;
  var phoneNumber = document.getElementById("phoneNumber").value;
  if (!name || !dateOfBirth || !age || !phoneNumber) {
    alert("Please fill all the fields");
    return;
  }
  var table = document.getElementById("table_id");

  var newRow = table.insertRow(row);

  // add cells to the row
  var cell1 = newRow.insertCell(0);
  var cell2 = newRow.insertCell(1);
  var cell3 = newRow.insertCell(2);
  var cell4 = newRow.insertCell(3);

  // add values to the cells
  cell1.innerHTML = name;
  cell2.innerHTML = dateOfBirth;
  cell3.innerHTML = age;
  cell4.innerHTML = phoneNumber;
  //increment row
  row++;
}

function resetData() {
  document.getElementById("name").value = "";
  document.getElementById("dob").value = "";
  document.getElementById("age").value = "";
  document.getElementById("phoneNumber").value = "";
}

function sortTableData(n) {
  var table,
    rows,
    switching,
    i,
    x,
    y,
    shouldSwitch,
    dir,
    switchcount = 0;
  table = document.getElementById("table_id");
  switching = true;

  dir = "asc";

  while (switching) {
    //no switching is done
    switching = false;
    rows = table.rows;

    for (i = 1; i < rows.length - 1; i++) {
      // no switching
      shouldSwitch = false;

      x = rows[i].getElementsByTagName("TD")[n];
      y = rows[i + 1].getElementsByTagName("TD")[n];

      if (dir == "asc") {
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
          shouldSwitch = true;
          break;
        }
      } else if (dir == "desc") {
        if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
          shouldSwitch = true;
          break;
        }
      }
    }
    if (shouldSwitch) {
      //if true
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
      // if switch id done +1
      switchcount++;
    } else {
      /* If no switching done ,  run the while loop again. */
      if (switchcount == 0 && dir == "asc") {
        dir = "desc";
        switching = true;
      }
    }
  }
}
