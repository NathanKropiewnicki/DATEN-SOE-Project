/**
 * Author: Addison Ambabo
 * Date: 3/24/24
 * Description: check if form is resnobly filled 
 */

"use strict";

console.log("works 1");
// for page 2 form to check it input is valid 
document.addEventListener("DOMContentLoaded", function() {

    console.log("works 2");
    var form = document.querySelector("form");

    form.addEventListener("submit", function(event) {

        event.preventDefault();

        if (form.checkValidity()) {

            form.submit();

        } else {

            alert("Please fill out all required fields.");

        }

    });
    console.log("works 3");
});
