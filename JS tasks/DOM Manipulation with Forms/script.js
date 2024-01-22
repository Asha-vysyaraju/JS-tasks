var row = 1;
function entryData() {

    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var email = document.getElementById("email").value;
    var adr = document.getElementById("adr").value;
    var gender = document.getElementById("gender").value;
    var state = document.getElementById("state").value;
    var country = document.getElementById("country").value;
    var pin = document.getElementById("pin").value;

    var options = document.getElementById('food').selectedOptions;
    var food = Array.from(options).map(({ value }) => value);
     
    if(!fname || !lname || !email || !adr || !gender || !state || !country || !pin){
        alert("Please fill all fileds")
        return;
    }
    if (food.length < 2) {
        alert("Must select atleast two Choices of food");
        return;
    }
    var display = document.getElementById("display");
    var newRow = display.insertRow(row);
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1)
    var cell3 = newRow.insertCell(2)
    var cell4 = newRow.insertCell(3)
    var cell5 = newRow.insertCell(4)
    var cell6 = newRow.insertCell(5)
    var cell7 = newRow.insertCell(6)
    var cell8 = newRow.insertCell(7)
    var cell9 = newRow.insertCell(8)
    cell1.innerHTML = fname;
    cell2.innerHTML = lname;
    cell3.innerHTML = email;
    cell4.innerHTML = gender;
    cell5.innerHTML = food;
    cell6.innerHTML = adr;
    cell7.innerHTML = state;
    cell8.innerHTML = country;
    cell9.innerHTML = pin;
   
    var elements = document.getElementsByTagName("input");


    for (var i = 0; i < elements.length - 1; i++) {
        elements[i].value = "";
    }
    var opt = document.getElementById('food').options
    for (var i = 0; i < opt.length; i++) {
        opt[i].selected = false;
    }
    row++;
    document.getElementById("display").style.display="block";
}