console.log("hello main.js");


let saywhat = document.getElementById("output");
console.log("sayWhat", saywhat);

let listItems = document.getElementsByClassName("list-item");
console.log(listItems);

function handleClick(event){
   console.log("what is event?", event);
   let elementText = event.target.innerHTML;
   saywhat.innerHTML = "hummmm, " + elementText + " you have clicked";
}

for (let i = 0; i < listItems.length; i++) {
   listItems.item(i).addEventListener("click", handleClick);
}

let inputArea = document.getElementById("keypress-input");

inputArea.addEventListener("keyup", function(event){
   console.log("event", event);
   saywhat.innerHTML = event.target.value;
})

var yodaImage = document.getElementById("theYoda");

document.getElementById("change-color").addEventListener("click", (event) => {
   yodaImage.classList.toggle("flashy");
});

document.getElementById("force-lots-of").addEventListener("click", function () {
      yodaImage.classList.toggle("moreforce");
   });

document.getElementById("add-border").addEventListener("click", function () {
      yodaImage.classList.toggle("bordered");
   });

document.getElementById("wrapper").addEventListener("click", function(event){
   console.log("target", event.target);
   console.log("currentTarget", event.currentTarget);

   // Handle the click event on any li
   if (event.target.tagName.toLowerCase() === "li") {
      console.log("You clicked on an <li> element");
   }

   // Handle the click event on any section
   // * Notice how when you click on a section, it executes
   // this code, but *also* the code on above.
   if (event.target.className === "list-item") {
      console.log("You clicked on an `list-item` element");
   }

   // Inspect the `id` property of the event target
   if (event.target.id === "page-title") {
      console.log("You clicked on the page-title element");
   }

})

/*  Looping through array and adding events doesn't work with innerHTML because
    it removed previous items from the DOM before reinsering them.
    This deletes the added event handlers. Here's an alternative
*/


var quotesArray = [
   "A long time ago in a galaxy far, far away…",
   "Use the force, Luke.",
   "The force is strong with this one.",
   "Do. Or do not. There is no try.",
   "Fear is the path to the dark side.",
   "Someday I will be the most powerful Jedi ever.",
   "You were the chosen one!"
]

//adding to the dom and listener intact.
quotesArray.forEach((quote, index) => {
   let quoteBlock = `<div id="quote--${index}">
                        <h3>"${quote}" - Star Wars</h3>
                      </div>`
   let quoteDiv = document.createElement("div"); //<---Here's the key to adding the cards with the click event intact
   quoteDiv.innerHTML = quoteBlock;
   document.getElementById("stickItHere").appendChild(quoteDiv);
   let quoteDOM = document.getElementById(`quote--${index}`);
   quoteDOM.addEventListener("click", function () {
      console.log("event", event);
      event.currentTarget.classList.add("accent");
   });
});



var jediPlayer = [22, 34, 11, 90, 200];
var stormPlayer = [76, 56, 788, 902];


function changeScores(item, index, whichArray) {
   console.log(item, index, whichArray);
   whichArray[index] = item * 10;

}

document.getElementById("changejedi").addEventListener("click", () => {
   jediPlayer.forEach(changeScores);
   console.log("Jedi:", jediPlayer);
});
document.getElementById("changestorm").addEventListener("click", () => {
   stormPlayer.forEach(changeScores);
   console.log("StormTrooper:", stormPlayer);
});











