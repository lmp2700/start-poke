//assuming square is a jquery object, when we makre this square we can apply the random color do it
//take in a square and apply a random color to it
   //$div class "squares"
//Math.floor(Math.random() * $('<div>squares</div>').appendTo('body'));
// console.log(createSquares(14));
//grabbing the button element from html
//when we click begin we're going to have a function that populates a random numbe of divs
/*Now we need to write a function named (createSquares) that sets up our squares, 
Try to write a function that takes a parameter numberOfSquares that will create an 
arbitary number of divs depending on the parameter and append them to the squares 
class from the html*/
// let $div = $('<div/>')
// let $squares = $("#squares");
// $squares.append($div);

// how do we attach event listeners to dynamically loaded content
//event listener for "start button" then if jq contains event listeners for .square buttons, its too late 
//put event listeners in the start button on(click) function
//$(.squares).append(div)
//$(.squares div).click (function)

//how to attach event listeners to things starting later - attach event listener in the same function as the first event listenr
//.on and attach listener to something that does exist at the begining of loaded page like the container div .square
//$(.squares.on('click', 'div', function(){

//}))

$("button").on("click", () =>{
    //this is where user clicks button so we want to populate the squares here;
    createSquares(37);
});

const createSquares = (numberOfSquares) => {
    for (let i = 0; i <= numberOfSquares; i++) {
    //creates div class
    const $div = $("<div/>").on('click', disappearSquares);
    randRBG($div);  //assuming div is jquery
    $(".squares").append($div);
    }
};
    // $("div").on("click", () =>{
    //     console.log("clicked"); })
const disappearSquares = (e) => {
        // e is short for 'event'
        // const $div = $('<div/>').on('click', (e) => {
       // e.currentTarget gives you the div you are clicking on
       $(e.currentTarget).css('opacity', 0);
}

const randRBG = (square) => {
    const randNum = Math.floor(Math.random() * 3) + 1;
        if(randNum ===1){
            square.css('background-color', 'red');
    } else if(randNum === 2){
            square.css('background-color', 'blue');
    } else {
            square.css('background-color', 'green');
    }
};



