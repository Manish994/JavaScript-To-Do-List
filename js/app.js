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

//Function add to do
function addToDo(todo) {
   const item = `<li class="item">
   <i class="fa ${UNCHECK} co" job="complete" id="0"></i>
   <p class="text">${todo}</p>
   <i class="fa fa-trash-o de" job="delete" id="0"></i>
   </li>`;
   const position = "beforeend";
   listElement.insertAdjacentHTML(position, item);
}


//add an item to the user interface when press Enter Key
document.addEventListener("keyup", function (e) {
   if (e.keyCode == 13) {
      const todo = inputElement.value;
      //check empty or not 
      if (todo) {
         addToDo(todo);
      }
   }
})