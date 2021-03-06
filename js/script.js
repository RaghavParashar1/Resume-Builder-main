// To Prevent User From Reloading The Page
window.addEventListener('beforeunload', () => {
    event.preventDefault();
    event.returnValue = "";
})


// functionalty of workex button
function addwe() {
    // creating new node which contains textarea 
    let newNode = document.createElement("textarea");
    // adding classes in new node
    newNode.classList.add("form-control");
    newNode.classList.add("weField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows", 2);
    newNode.setAttribute("placeholder", "Enter Your Work Details Here")

    // giving refernce to the areas in which we have to insert the new node
    // reference of div class where new node is inserting
    let weOb = document.getElementById("we");
    // reference of id before which we have to insert the new node
    let weAddButtonOb = document.getElementById("weAddButton");

    // let newNode2 = document.createElement("input");
    // newNode2.classList.add("form-control");
    // newNode2.setAttribute("type", "date")

    // inserting the new nodes before add button
    weOb.insertBefore(newNode, weAddButtonOb);
    // weOb.insertBefore(newNode2, weAddButtonOb);
}

// functionality of academic qualification button
function addaq() {
    // console.log("added");
    // creating new node which contains textarea 
    let newNode = document.createElement("textarea");
    // adding classes in new node
    newNode.classList.add("form-control");
    newNode.classList.add("aqField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows", 2);
    newNode.setAttribute("placeholder", "Enter Your Academic Qualification Here")

    // giving refernce to the areas in which we have to insert the new node
    // reference of div class where new node is inserting
    let aqOb = document.getElementById("aq");
    // reference of id before which we have to insert the new node
    let aqAddButtonOb = document.getElementById("aqAddButton");

    // inserting the new node before add button
    aqOb.insertBefore(newNode, aqAddButtonOb);
}


// functionality of Extracurricular Activity button
function addeca() {
    // console.log("added");
    // creating new node which contains textarea 
    let newNode = document.createElement("textarea");
    // adding classes in new node
    newNode.classList.add("form-control");
    newNode.classList.add("ecaField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows", 2);
    newNode.setAttribute("placeholder", "Enter Your Extracurricular Activity Here")

    // giving refernce to the areas in which we have to insert the new node
    // reference of div class where new node is inserting
    let ecaOb = document.getElementById("eca");
    // reference of id before which we have to insert the new node
    let ecaAddButtonOb = document.getElementById("ecaAddButton");

    // inserting the new node before add button
    ecaOb.insertBefore(newNode, ecaAddButtonOb);
}


// generate resume

function genresume() {
    // for name
    let namefield = document.getElementById("nameField").value;
    if (namefield == "") {
        document.getElementById("namespan").innerHTML = "** Please enter name"
        return false;
    }
    let nameT1 = document.getElementById("nameT1");
    nameT1.innerHTML = namefield;
    document.getElementById("nameT2").innerHTML = namefield;

    // for contact
    let contactfield = document.getElementById("contactField").value;
    if (contactfield == "") {
        document.getElementById("contactspan").innerHTML = "** Please enter contact"
        return false;
    }
    let contactT = document.getElementById("contactT");
    contactT.innerHTML = contactfield;

    // for gmail
    let gmailfield = document.getElementById("emailField").value;
    if (gmailfield == "") {
        document.getElementById("emailspan").innerHTML = "** Please enter gmail"
        return false;
    }
    let gmailT = document.getElementById("mailT");
    gmailT.innerHTML = gmailfield;

    // for address
    let addressfield = document.getElementById("addressField").value;
    if (addressfield == "") {
        document.getElementById("addressspan").innerHTML = "** Please enter address"
        return false;
    }
    document.getElementById("addressT").innerHTML = addressfield;

    // for linkedin
    let linkedfield = document.getElementById("linkedinField").value;
    if (linkedfield == "") {
        document.getElementById("linkedinspan").innerHTML = "** Please enter linkedin i'd"
        return false;
    }
    document.getElementById("linkedT").innerHTML = document.getElementById("linkedinField").value;

    // for github
    let gitfield = document.getElementById("githubField").value;
    if (gitfield == "") {
        document.getElementById("gitspan").innerHTML = "** Please enter github link"
        return false;
    }
    document.getElementById("gitT").innerHTML = document.getElementById("githubField").value;

    // for portfolio
    let portfield = document.getElementById("portfolioField").value;
    if (portfield == "") {
        document.getElementById("portfoliospan").innerHTML = "** Please enter portfolio link"
        return false;
    }
    document.getElementById("portfolioT").innerHTML = document.getElementById("portfolioField").value;

    // for objective
    let objectivefield = document.getElementById("objectiveField").value;
    if (objectivefield == "") {
        document.getElementById("objectivespan").innerHTML = "** Please enter objective"
        return false;
    }
    document.getElementById("objectiveT").innerHTML = document.getElementById("objectiveField").value;

    // for skill
    let stfield = document.getElementById("stField").value;
    if (stfield == "") {
        document.getElementById("skillspan").innerHTML = "** Please enter skill"
        return false;
    }
    document.getElementById("skillT").innerHTML = document.getElementById("stField").value;

    // for work experience
    let wes = document.getElementsByClassName("weField");

    let str = ''

    for (let e of wes) {
        if (e.value == "") {
            document.getElementById("workexspan").innerHTML = "** Please enter workex"
            return false;
        }
        str = str + "<li>" + e.value + "</li>"
    }


    document.getElementById("weT").innerHTML = str;

    // for academic qualification
    let aqs = document.getElementsByClassName("aqField");

    let str1 = ''

    for (let e of aqs) {
        if (e.value == "") {
            document.getElementById("academicspan").innerHTML = "** Please enter Academic Qualification"
            return false;
        }
        str1 = str1 + "<li>" + e.value + "</li>"
    }

    document.getElementById("aqT").innerHTML = str1;

    // for academic qualification
    let eas = document.getElementsByClassName("ecaField");

    let str2 = ''

    for (let e of eas) {
        if (e.value == "") {
            document.getElementById("extraspan").innerHTML = "** Please enter Extracurricular Activity"
            return false;
        }
        str2 = str2 + "<li>" + e.value + "</li>"
    }

    document.getElementById("eaT").innerHTML = str2;

    // for image

    let file = document.getElementById('imgField').files[0]
    console.log(file)
    let reader = new FileReader()
    reader.readAsDataURL(file)
    console.log(reader.result)
        // set image to template
    reader.onloadend = function() {
        document.getElementById("imgT").src = reader.result;
    };



    document.getElementById("resume-form").style.display = "none";
    document.getElementById("resume-template").style.display = "block";

    // for date
    var today = new Date();
    var date = today.getFullYear() + '/' + (today.getMonth() + 1) + '/' + today.getDate();
    document.getElementById("currentDate").value = date;
}

// function for print
function printresume() {
    document.getElementById("print-button").style.display = "none";
    document.getElementById("back-button").style.display = "none";
    window.print();
    document.getElementById("print-button").style.display = "block";
    document.getElementById("back-button").style.display = "block";

}


// function for baack button
function back() {
    document.getElementById("resume-form").style.display = "block";
    document.getElementById("resume-template").style.display = "none";
}