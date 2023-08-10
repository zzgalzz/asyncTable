const url = 'https://data.gov.il/api/action/datastore_search?resource_id=3f06e2f2-e2ad-41ac-9665-37d0625537f2&limit=400'
const tbody = document.querySelector("tbody#hehiga")

fetch(url)
.then(res => res.json())
.then(data => displaySchools(data.result.records));

function displaySchools(schools){
    schools.forEach(school => {
        console.log(school)

        tbody.innerHTML += `
        <tr>
        <td>${school._id}</td>
        <td>${school.cod_ezor}</td>
        <td>${school.ezor}</td>
        <td>${school.cod_beit_sefer}</td>
        <td >${school.shem_beit_sefer}</td>
        <td>${school.cod_hiter}</td>
        <td>${school.ktovet}</td>
        <td>${school.telefon}</td>
        <td>${(school.prati == 0) ? "no" : (school.prati == 1) ? "yes" : ""}

        </tr>
       
        `


    });

}




function myFunction() {
    // Declare variables
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
  
    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[4];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
  }