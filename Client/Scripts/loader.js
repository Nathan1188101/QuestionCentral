//if the current page is the couples page, then never show the loader
//do we want to keep this, not sure if I want the spinner evertime choosing new question
if (window .location.pathname === '/questions/couples'){
    const loader = document.querySelector('.loader')
    loader.style.display = 'none'
}
//keep this though
window.addEventListener('load', () => {
    const loader = document.querySelector('.loader')

    loader.classList.add('loader-hidden')//hide the loader

    loader.addEventListener('transitionend', () => {
        document.body.removeChild('loader')
    })

})

/*
// Select the loader
const loader = document.querySelector('.loader');

// Function to show the loader
function showLoader() {
    loader.style.display = 'block';
}

// Function to hide the loader
function hideLoader() {
    loader.style.display = 'none';
}

// Get the category selected by the user
// This is just an example, replace it with your actual code to get the category
const category = document.querySelector('.category-select').value;

// Show the loader when making a request
showLoader();

// Make the request to the server
fetch(`/api/couplesQuestion?category=${encodeURIComponent(category)}`)
    .then(response => response.json())
    .then(data => {
        // Use the data here...

        // Hide the loader
        hideLoader();
    })
    .catch(error => {
        // Handle the error here...

        // Hide the loader
        hideLoader();
    });
    */