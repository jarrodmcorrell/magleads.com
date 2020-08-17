document.addEventListener('DOMContentLoaded', function () {
    loadHTMLTable([]);
})

function loadHTMLTable(data){
    const table = document.getElementById('premium-table-body');

    if(data.length===0){
        console.log("empty");
        table.innerHTML = "<tr><td class='no-data' colspan='5' style='font-size: 18px;'>No Data</td></tr>";
    }

}