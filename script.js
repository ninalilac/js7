"use strict";

// ---- ajax
const div = document.getElementById("api-users");

function getUsers() {
  const request = new XMLHttpRequest();

  request.open("GET", "https://reqres.in/api/unknown");

  request.addEventListener("load", function () {
    // console.log(this);
    // console.log(this.responseText);
    const receivedInfo = this.responseText;
    const receivedInfoJS = JSON.parse(receivedInfo);
    // console.log(receivedInfoJS);
    const ulElement = document.createElement("ul");

    receivedInfoJS.data.forEach((element) => {
        const  li = document.createElement('li');
        li.textContent = element.name + element.color;
        ulElement.appendChild(li);
     });
     div.appendChild(ulElement);
  });
  request.send();
}

getUsers();
// methods - get, post, put, delete
// -- უფასო სერვერები
// json placeholder 
// reqress


