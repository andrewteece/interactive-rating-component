
document.addEventListener('DOMContentLoaded', function () {
    const ratings = document.querySelectorAll('.card--rating a')
    const submitBtn = document.querySelector('#submit-btn')

    let selectedRating = null

    ratings.forEach(rating => {
        rating.addEventListener('click', () => {
            // store the selected rating
            selectedRating = rating.textContent
        })
    })

    submitBtn.addEventListener('click', () => {
        // check if a rating has been selected
        if (selectedRating) {
            // Pass the selected rating as a query parameter
            window.location.href = `thanks.html?rating=${selectedRating}`
        } else {
            alert("Please select a rating before submitting.")
        }
    })
})

