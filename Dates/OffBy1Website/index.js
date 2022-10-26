"use strict";

window.onload = init;

function init() 
{
    const dateBtn = document.getElementById("showdateBtn");
    dateBtn.onclick = onshowdateBtnClick;

}

function onshowdateBtnClick() 
{
    let date = document.getElementById("myDate").value;
    let d = new Date(date);
    let presentDate = document.getElementById("presentDate");
    presentDate.innerHTML = d.toString();
}