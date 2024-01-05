document.addEventListener('DOMContentLoaded', function () {
    const resultSpan = document.getElementById('result')
    // Parse the query parameter from the url
    const urlParms = new URLSearchParams(window.location.search)
    const ratingValue = urlParms.get('rating')

    if (ratingValue) {
        resultSpan.textContent = ratingValue
    }
})