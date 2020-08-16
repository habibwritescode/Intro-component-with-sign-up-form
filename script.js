const button = document.querySelector('button');
const inputElements = document.querySelectorAll('input')
const errorIcons = document.querySelectorAll('.error-icon');
const errorMessages = document.querySelectorAll('.error-message');
const emailInput = inputElements[2]
const emailError = document.querySelector('.email-error')

const validateForm = (event) => {
    event.preventDefault()
    let regex = /^[^@\s]+@[^@\s\.]+\.[^@\.\s]+$/
    let isMatched = regex.test(emailInput.value)

    inputElements.forEach((element, index) => {
        if (!element.value) {
            errorIcons[index].style.display = 'block'
            errorMessages[index].style.display = 'block'
        } else
            if (emailInput.value && !isMatched) {
                errorIcons[2].style.display = 'block'
                emailError.style.display = 'block'
            }
    })
}

button.addEventListener('click', validateForm)


// Remove error styles when input element has focus
inputElements.forEach((element, index) => {
    element.addEventListener('focus', function removeErrorStyles() {
        errorIcons[index].style.display = 'none'
        errorMessages[index].style.display = 'none'
    })
})

emailInput.addEventListener('focus', function removeError() {
    emailError.style.display = 'none'
})