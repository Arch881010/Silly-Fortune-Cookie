document.addEventListener("DOMContentLoaded", function() {
    const elementsToInitialize = document.querySelectorAll('.initalize');
    elementsToInitialize.forEach(element => {
        element.classList.add('show');
    });
});