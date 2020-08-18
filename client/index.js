document.addEventListener('DOMContentLoaded', function () {
    fetch('http://localhost:5000/getAll')
    .then(response => response.json())
    .then(data => loadHTMLTable(data['data']));
});

const addBtn = document.querySelector("#add-btn");

addBtn.onclick = function(){
    const nameInput = document.querySelector('#add-input-name');
    const typeInput = document.querySelector('#add-input-type');
    const locationInput = document.querySelector('#add-input-location');
    const phoneInput = document.querySelector('#add-input-phone');
    const emailInput = document.querySelector('#add-input-email');

    const name = nameInput.value;
    const type = typeInput.value;
    const location = locationInput.value;
    const phone = phoneInput.value;
    const email = emailInput.value;

    nameInput.value = "";
    typeInput.value = "";
    locationInput.value = "";
    phoneInput.value = "";
    emailInput.value = "";

    fetch('http://localhost:5000/insert', {
        headers: {
            'Content-type' : 'application/json'
        },
        method: 'POST',
        body: JSON.stringify({name : name, type: type, location : location, phone : phone, email : email})
    })
    .then(response => response.json())
    .then(data => insertRowIntoTable(data['data']))
    ;
}

function insertRowIntoTable(data){
    
}

function loadHTMLTable(data){
    const table = document.getElementById('premium-table-body');

    console.log(data);

    if(data.length===0){
        console.log("empty");
        table.innerHTML = "<tr><td class='no-data' colspan='5' style='font-size: 18px;'>No Data</td></tr>";
    }

}