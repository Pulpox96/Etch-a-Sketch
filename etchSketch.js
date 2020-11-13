const container = document.querySelector('#divContainer');
var color = "blue";

// let num = int(prompt("Enter number between 1-100"));
function createGrid(num){
    let gridArea = num*num;
    let sizeContainer = 50*num;
    
    // Change the style, and add rows and columns 
    container.style.display = "grid";
    container.style.gridTemplateColumns = `repeat(${num}, 50px)`;
    container.style.gridTemplateRows = `repeat(${num}, 50px)`;
    
    //set the size of the container, multiplying the num with the pixels
    // of the columns/rows
    container.style.width = `${sizeContainer}px`;
    container.style.height = `${sizeContainer}px`;

    //for loop to create and add the divs
    for(i=0; i<=gridArea; i++){
        
        // Grid area NUM X NUM
        

        const div = document.createElement("div");
        

        //add div to container

        div.classList.add("hoverDiv")
        container.insertAdjacentElement("beforeend", div);


};

    //Grab the divs again to add the eventListener
    let pixelHandler= document.querySelectorAll(".hoverDiv");

    pixelHandler.forEach(pixelHandler => pixelHandler.addEventListener("mouseover", colorGrid))


};


//Adds color to the pixel once hovered.
function colorGrid(){

    // changes the color of the pixel
    // the variable "color" is declared at the beginning
    this.style.backgroundColor = color; 

}

//clears the grid (color -> white)
function clear(){
    //grab divs
    let div = document.querySelectorAll("div");

    //for each, change the color to white (white is the default)
    div.forEach(div => 
        div.style.backgroundColor = "white");

}

//grab the clear Button and add the event listener
const clearButton = document.querySelector("#clear");

clearButton.addEventListener("click", clear);


//Call main function
createGrid(10);
