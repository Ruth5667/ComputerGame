
// function addContact(){
//     const headers = ["name", "email"];
    
//             // Create table header
//             const tableHeader = document.getElementById("table-header");
//             console.log(tableHeader);
          
//             for (let i = 0; i < headers.length; i++) {
//                 const th = document.createElement("th");
//                 th.textContent = headers[i];
//                 tableHeader.appendChild(th);
//             }
    
//             // Retrieve form data from localStorage
//             const storedData = localStorage.getItem("formData");
//             const formData = JSON.parse(storedData);
    
//             // Insert form data into table
//             const tableBody = document.getElementById("table-body");
//             const tr = document.createElement("tr");
//             for (let i = 0; i < headers.length; i++) {
//                 const td = document.createElement("td");
//                 td.textContent = formData[headers[i]];
//                 tr.appendChild(td);
//             }
//             tableBody.appendChild(tr);

//         }
        const func=()=>{
                        const storedData = localStorage.getItem("formData");

let name =localStorage.getItem("name")
let email =localStorage.getItem("email")
// console.log("email" +storedData)
        }