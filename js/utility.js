let count = 1;
// setting input value by id 
function inputFieldById(id) {
  const fieldInput = document.getElementById(id);
  const fieldInputString = fieldInput.value;
  const fieldValue = parseFloat(fieldInputString);
  return fieldValue;
}

// setting dynamic text 
function dynamicTextSet(area) {
  let lists = document.getElementById("area-container");
  let ol = document.createElement("ol");

  let li = document.createElement("li");
  li.innerText = ` ${count}.    ${area}cm`;
  let sup = document.createElement("sup");
  sup.innerText = "2  ";
  li.appendChild(sup);
  let button = document.createElement("button");
  button.setAttribute('id','centimeter-button');
  
  button.innerText = ` convert to m`;

//   styling 
  button.style.backgroundColor = "blue";
  button.style.padding = "4px";
  button.style.marginLeft = "10px";
  button.style.borderRadius = "10px";
  let sup2 = document.createElement("sup");
  sup2.innerText = "2";
  button.appendChild(sup2);
  li.appendChild(button);

  ol.appendChild(li);
//   appending lists 
  lists.appendChild(ol);
  count++;
}
// two decimel places for area 
function twoDecimel(area){
    const stringArea=area.toFixed(2);
    const totalArea=parseFloat(stringArea);
    return totalArea;
}
