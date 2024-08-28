

const form = document.querySelector(".student-form");
console.log(form)
form.addEventListener("submit",(e) => {
  e.preventDefault();
  var firstname = document.g.getElementById('first-name').value;
  let lname = document.getElementById("last-name").value;
  let address = document.getElementById("address").value;
  let state = document.getElementById("state").value;
  let country = document.getElementById("country").value;
  let pincode = document.getElementById("pincode").value;
  let gender;
 
  

  if( document.getElementById('gender1').checked){
    gender = 'Male'
  }
  else if( document.getElementById('gender2').checked){
    gender = 'Female'
  } else{
    gender = 'Other'
  }
   
  const checks = document.querySelectorAll(".single-checkbox");
  // input[type="checkbox"]
  let selected = 0
  let selectedItem='';
checks.forEach(function (check) {
  if(check.checked){
    selectedItem = selectedItem + ', ' + check.value
    selected++;
  }
  });
  console.log(selectedItem);

  // let choice = document.getElementById("name").value;

  if(selected < 2){
    alert('Please select more than two option in food choice');
    return false;
  }

  let table = document.getElementById("studen-table")

  let row = table.insertRow();
  row.insertCell(0).innerText = firstname.value;
  row.insertCell(1).innerText = lname;
  row.insertCell(2).innerText = address;
  row.insertCell(3).innerText = state;
  row.insertCell(4).innerText = country;
  row.insertCell(5).innerText = pincode;
  row.insertCell(6).innerText = gender;
  row.insertCell(7).innerText = selectedItem; 

  document.getElementById('student-form').reset();

})