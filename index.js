
const numberBtn = document.getElementsByClassName("indi-number")
const submitBtn = document.getElementById("submit-btn")
const ratingDisplay = document.getElementsByClassName("main-container")
const rating = document.getElementById("selected-rating")



// Event listener

for (let index = 0; index < numberBtn.length; index++) {
    numberBtn[index] = addEventListener("click",  changeBackgroundColor )
    console.log(index)
}

submitBtn.addEventListener("click", changeDisplay)




// Function

function changeBackgroundColor() {
    let val =  numberBtn.innerText
    numberBtn[val].style.backgroundColor = "red"
    numberBtn[val].style.color = "white"
    // changeDisplay(4)
  
}

function changeDisplay(val) {
    ratingDisplay[0].style.display = "none"
    ratingDisplay[1].style.display = "block"
    rating.innerText = val


}



// todo
// 1) display the ratingDisplay
// 2) even after refreshing the dom should the change
