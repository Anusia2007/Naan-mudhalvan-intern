let leaves = [];

function addLeave() {

    let name = document.getElementById("empName").value;
    let reason = document.getElementById("leaveReason").value;
    let date = document.getElementById("leaveDate").value;
    let status = document.getElementById("status").value;

    if(name === "" || reason === "" || date === ""){
        alert("Please fill all fields");
        return;
    }

    leaves.push({
        name,
        reason,
        date,
        status
    });

    displayLeaves();
    updateDashboard();

    document.getElementById("empName").value = "";
    document.getElementById("leaveReason").value = "";
    document.getElementById("leaveDate").value = "";
}

function displayLeaves(){

    let table = document.getElementById("leaveTable");
    table.innerHTML = "";

    leaves.forEach(leave => {

        table.innerHTML += `
        <tr>
            <td>${leave.name}</td>
            <td>${leave.reason}</td>
            <td>${leave.date}</td>
            <td>${leave.status}</td>
        </tr>`;
    });
}

function updateDashboard(){

    let pending = leaves.filter(l => l.status === "Pending").length;
    let approved = leaves.filter(l => l.status === "Approved").length;
    let rejected = leaves.filter(l => l.status === "Rejected").length;

    document.getElementById("pendingCount").innerText = pending;
    document.getElementById("approvedCount").innerText = approved;
    document.getElementById("rejectedCount").innerText = rejected;
}

function filterEmployee(){

    let search = document.getElementById("search").value.toLowerCase();
    let rows = document.querySelectorAll("#leaveTable tr");

    rows.forEach(row => {
        let employee = row.cells[0].innerText.toLowerCase();

        if(employee.includes(search)){
            row.style.display = "";
        }else{
            row.style.display = "none";
        }
    });
}