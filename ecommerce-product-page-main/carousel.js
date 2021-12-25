// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.querySelector('.img-big-preview')
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


const prev = document.getElementById("prev");
const next = document.getElementById("next");

prev.addEventListener("click", function () {
	/* Find the current card */
	const currCard = document.querySelector(".card.view");
	/* Set the prevCard based on its availability */
	const prevCard = currCard.previousElementSibling ? currCard.previousElementSibling : document.querySelector(".card-container").lastElementChild;
    let activeChild = document.querySelectorAll('.modal-img-thumbnail')
    let activeArr = Array.from(currCard.parentNode.children).indexOf(currCard)
    let passiveArr = Array.from(prevCard.parentNode.children).indexOf(prevCard)
    activeChild[activeArr].classList.toggle('active-thumbnail')
    activeChild[passiveArr].classList.toggle('active-thumbnail')
	currCard.classList.remove("view");
	prevCard.classList.add("view");
  });


next.addEventListener("click", function () {
/* Find the current card */
	const currCard = document.querySelector(".card.view");
	/* Set the nextCard based on its availability */
	const nextCard = currCard.nextElementSibling ? currCard.nextElementSibling : document.querySelector(".card-container").firstElementChild;
    let activeChild = document.querySelectorAll('.modal-img-thumbnail')
    let activeArr = Array.from(currCard.parentNode.children).indexOf(currCard)
    let passiveArr = Array.from(nextCard.parentNode.children).indexOf(nextCard)
    activeChild[activeArr].classList.toggle('active-thumbnail')
    activeChild[passiveArr].classList.toggle('active-thumbnail')
	currCard.classList.remove("view");
	nextCard.classList.add("view");
});

const Modalthumbnails = document.querySelectorAll('.modal-img-thumbnail')
const ModalbigPreview = document.querySelector('.modal-img-big-preview')

Modalthumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click',()=>{
        console.log(thumbnail)
        let ModalthumbnailSrc = thumbnail.src
        let regex = /-thumbnail/i
        ModalthumbnailSrc = ModalthumbnailSrc.replace(regex,'')
        ModalbigPreview.src = ModalthumbnailSrc
    })
})
