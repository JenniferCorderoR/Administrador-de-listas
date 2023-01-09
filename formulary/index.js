const formulario=document.getElementById("formulario");
formulario.addEventListener('submit', function(event){
event.preventDefault();
let transactionFormData = new FormData(formulario);
let tableref = document.getElementById('tablaDatos');
let newRow = tableref.insertRow(-1);

newCell = newRow.insertCell(0);
newCell.textContent = transactionFormData.get("nombre");

newCell = newRow.insertCell(1);
newCell.textContent = transactionFormData.get("apellidos");

newCell = newRow.insertCell(2);
newCell.textContent = transactionFormData.get("clase");

newCell = newRow.insertCell(3);
newCell.textContent = transactionFormData.get("nota");

let newDeleteCell = newRow.insertCell(4);
let deleteButton = document.createElement("button");
deleteButton.textContent = "Borrar"
newDeleteCell.appendChild(deleteButton);
deleteButton.addEventListener("click", (event) => {
event.target.parentNode.parentNode.remove()
})
formulario.reset();
})