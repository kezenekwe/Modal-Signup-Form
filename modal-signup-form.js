//select elements
const openbtn = document.querySelector(".open-modal");
const buttons = document.querySelectorAll(".button");
const close = document.querySelector(".close");
const cancel = document.querySelector(".cancel");
const signup = document.querySelector(".signup");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");

//open modal
openbtn.addEventListener("click", function() {
    overlay.classList.toggle("show-overlay");
    modal.classList.toggle("show-modal");
});

//close modal
buttons.forEach(function(btn){
    btn.addEventListener("click", function(e) {
        let classes = e.currentTarget.classList;
        if (classes.contains("close")) {
            overlay.classList.toggle("show-overlay");
            modal.classList.toggle("show-modal");
        }
        else if (classes.contains("cancel")) {
            overlay.classList.remove("show-overlay");
            modal.classList.remove("show-modal");
        }
        else if (classes.contains("signup")) {
            overlay.classList.remove("show-overlay");
            modal.classList.remove("show-modal");
        }
    });
});

//close modal
window.addEventListener("click", function(event) {
    if (event.target == overlay) {
        overlay.classList.remove("show-overlay");
        modal.classList.remove("show-modal");
    }
});