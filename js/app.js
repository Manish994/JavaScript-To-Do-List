// CODE EXPLAINED channel

//Select the elements
const clear = document.querySelector(".clear");
const dateElement = document.getElementById("date");
const listElement = document.getElementById("list");
const inputElement = document.getElementById("input");

//Classes Names
const CHECK = "fa-check-circle";
const UNCHECK = "fa-circle-thin";
const LINE_THROUGH = "lineThrough";

//Show Today date
const options = {
   weekday: "long",
   month: "short",
   day: "numeric"
}
const today = new Date();
dateElement.innerHTML = today.toLocaleDateString("en-us", options);
