const ratingEls = document.querySelectorAll(".rating");
const btnEl = document.querySelector(".btn");
const containerEl=document.querySelector(".container")
let selectedRating = "";
ratingEls.forEach(ratingEl => {
    ratingEl.addEventListener('click', (event) => {
        console.log(event.target.innerText || event.target.parentNode.innerText)
        removeActive();
        selectedRating = event.target.innerText||event.target.parentNode.innerText;
        event.target.classList.add("active");
        event.target.parentNode.classList.add("active");
    })
})
function removeActive() {
    ratingEls.forEach(ratingEl => {
        ratingEl.classList.remove("active")
    })
}

btnEl.addEventListener('click', () => {
    if (selectedRating !== "") {
        containerEl.innerHTML = `<strong>Thank you!</strong>
        <br>
        <br>
        <strong>Feedback:${selectedRating}</strong>
        <p>We will use your feedback to improve our customers support!></p>`
    }
})