let inputBox = document.querySelector(".input-box"),
 searchIcon = document.querySelector(".icon"),
 closeIcon = document.querySelector(".close-icon"),
 navIcon = document.querySelector(".nav-icon"),
 navButtons = document.querySelector(".nav-buttons");

searchIcon.addEventListener("click", () =>
 {
    inputBox.classList.add("open");
    navIcon.classList.add('hidden');
    navButtons.classList.add('hidden')
    closeIcon.classList.remove("hidden")
}
 );
closeIcon.addEventListener("click", () =>{
    inputBox.classList.remove("open")
    setTimeout(function() {
        closeIcon.classList.add("hidden")
        navIcon.classList.remove('hidden');
    navButtons.classList.remove('hidden')

    }, 250);
});