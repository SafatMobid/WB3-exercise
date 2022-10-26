"use strict";

function init() {
    const showdateBtn = document.getElementById("showdateBtn");
    showdateBtn.onclick = showdateBtnOnClick;
}

function showdateBtnOnClick() {
    let dateInput = document.getElementById("dateInput");
    let date = dateInput.value;
    let newDate = new Date(date);
    let presentDate = document.getElementById("presentDate");
    presentDate.innerhtml = newDate.toString();
}

