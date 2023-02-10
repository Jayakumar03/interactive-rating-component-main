
const numberBtn = document.getElementsByClassName("indi-number")
const submitBtn = document.getElementById("submit-btn")
const ratingDisplay = document.getElementsByClassName("main-container")



for (let index = 0; index <= numberBtn.length; index++) {
    numberBtn[index] = addEventListener("click",  changeBackgroundColor )
    
}

submitBtn.addEventListener("click", changeDisplay)

function changeBackgroundColor() {
    numberBtn.style.backgroundColor = "red"
    numberBtn.style.color = "white"
  
}

function changeDisplay() {
    ratingDisplay[0].style.display = "none"
    ratingDisplay[1].style.display = "block"

}

// todo
// 1) display the ratingDisplay
// 2) even after refreshing the dom should the change
