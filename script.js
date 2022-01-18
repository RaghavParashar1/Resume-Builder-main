// functionalty of workex button
function addwe(){
    // creating new node which contains textarea 
    let newNode = document.createElement("textarea");
    // adding classes in new node
    newNode.classList.add("form-control");
    newNode.classList.add("weField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows",2);
    newNode.setAttribute("placeholder","Enter Your Work Details Here")

    // giving refernce to the areas in which we have to insert the new node
    // reference of div class where new node is inserting
    let weOb = document.getElementById("we");
    // reference of id before which we have to insert the new node
    let weAddButtonOb = document.getElementById("weAddButton");

    // inserting the new node before add button
    weOb.insertBefore(newNode, weAddButtonOb);
}

// functionality of academic qualification button
function addaq(){
    // console.log("added");
    // creating new node which contains textarea 
    let newNode = document.createElement("textarea");
    // adding classes in new node
    newNode.classList.add("form-control");
    newNode.classList.add("aqField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows",2);
    newNode.setAttribute("placeholder","Enter Your Academic Qualification Here")

    // giving refernce to the areas in which we have to insert the new node
    // reference of div class where new node is inserting
    let aqOb = document.getElementById("aq");
    // reference of id before which we have to insert the new node
    let aqAddButtonOb = document.getElementById("aqAddButton");

    // inserting the new node before add button
    aqOb.insertBefore(newNode, aqAddButtonOb);
}