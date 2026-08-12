const submitButton = document.getElementById("submit");
const tableBody = document.querySelector("tbody");


submitButton.addEventListener("click",  (e) => {
  e.preventDefault();
  const cardNumberInput = document.getElementById("card-number").value;
  const cardHolderInput = document.getElementById("card-holder").value;
  const monthSelect = document.getElementById("month").value;
  const yearSelect = document.getElementById("year").value;
  const cvvInput = document.getElementById("cvv").value;

  const date = monthSelect + "," + yearSelect;

    const newRow = document.createElement("tr");
    newRow.innerHTML = `
      <td>${cardNumberInput}</td>
      <td>${cardHolderInput}</td>
      <td>${date}</td>
      <td>${cvvInput}</td>
    `;
    tableBody.appendChild(newRow);


    //clear the value 
    document.getElementById("card-number").value = "";
    document.getElementById("card-holder").value = "";
    document.getElementById("month").value = "";
    document.getElementById("year").value="";
    document.getElementById("cvv").value = "";

});
