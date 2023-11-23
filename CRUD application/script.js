var selectedRow = null



function onFormSubmit(){
    var formData = readFormData();
    if(selectedRow == null){
    insertNewRecord(formData);
    inserlocalstorge(formData);
    }
else{
updateRecord(formData);
}
    resetForm();
}

function inserlocalstorge(formData){
    
var fullname = localStorage.setItem("fullName",formData["fullName"]);
var empId = localStorage.setItem("empid",formData["empid"]);
var dob = localStorage.setItem("dob",formData["dob"]);
var workFrom = localStorage.setItem("workfrom",formData["workfrom"]);

}


function readFormData() {
    var formData = {};
    formData["fullName"] = document.getElementById("fullName").value;
    formData["empid"] = document.getElementById("empid").value;
    formData["dob"] = document.getElementById("dob").value;
    formData["workfrom"] = document.getElementById("workfrom").value;
    return formData

}

function insertNewRecord(data) {
    var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.fullName;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.empid;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.dob;
    cell4 = newRow .insertCell(3);
    cell4.innerHTML = data.workfrom;
    cell4 = newRow.insertCell(4);
    cell4.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                       <a onClick="onDelete(this)">Delete</a>`;
                        


}

function resetForm() {
    document.getElementById("fullName").value = "";
    document.getElementById("empid").value = "";
    document.getElementById("dob").value = "";
    document.getElementById("workfrom").value = "";


}
function onEdit(td){
    selectedRow = td.parentElement.parentElement;
    document.getElementById("fullName").value = selectedRow.cells[0].innerHTML;
    document.getElementById("empid").value = selectedRow.cells[1].innerHTML;
    document.getElementById("dob").value = selectedRow.cells[2].innerHTML;
    document.getElementById("workfrom").value = selectedRow.cells[3].innerHTML;
}

function updateRecord(formData) {
    selectedRow.cells[0].innerHTML= formData.fullName;
    selectedRow.cells[1].innerHTML= formData.empid;
    selectedRow.cells[2].innerHTML= formData.dob;
    selectedRow.cells[3].innerHTML= formData.workfrom;

}

function onDelete(td) {
    if(confirm('Are you sure to delete this record?'))
    row = td.parentElement.parentElement;
    document.getElementById("employeeList").deleteRow(row.rowIndex);
    resetForm();

}



