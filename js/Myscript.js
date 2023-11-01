document.getElementById('dataForm').addEventListener('submit', function(e) {
  e.preventDefault(); // Prevent form submission


  // Get the input values
  var name = document.getElementById('name').value;
  var age = document.getElementById('age').value;
  var lastname = document.getElementById('lastname').value;
  var email = document.getElementById('email').value;

  // Create a new row in the table
  var table = document.getElementById('dataTable').getElementsByTagName('tbody')[0];
  var newRow = table.insertRow(table.rows.length);

  // Insert cells in the row
  var nameCell = newRow.insertCell(0);
  var lastnameCell = newRow.insertCell(1);
  var ageCell = newRow.insertCell(2);
  var emailCell = newRow.insertCell(3);

  // Add the input values to the cells
  nameCell.innerHTML = name;
  lastnameCell.innerHTML = lastname;
  ageCell.innerHTML = age;
  emailCell.innerHTML = email;

  // Clear the form inputs
  document.getElementById('name').value = '';
  document.getElementById('lastname').value = '';
  document.getElementById('age').value = '';
  document.getElementById('email').value ='';
});
// Show/hide contact form

  
  // Approve comment
  