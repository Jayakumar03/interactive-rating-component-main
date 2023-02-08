console.log("this works")
// holding variables
const numberBtn = document.getElementsByClassName("indi-number")





// event listener

numberBtn.addEventListener("click ", backGroundColorChanger())




// function

function backGroundColorChanger () {
    numberBtn.style.backgroundColor = "hsl(25, 97%, 53%)"
    numberBtn.style.color = "white"

}