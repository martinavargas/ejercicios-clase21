window.addEventListener('DOMContentLoaded', () => {
    const firstNameInput = document.querySelector('input[name="first-name"]')
    const lastNameInput = document.querySelector('input[name="last-name"]')
    const usernameInput = document.querySelector('input[name="username"]')
    const passwordInput = document.querySelector('input[name="password"]')
    const confirmPasswordInput = document.querySelector('input[name="confirm-password"]')
    const birthdayInput = document.querySelector('input[name="birthday"]')
    const termsAndConditionsInput = document.querySelector('input[name="terms-conditions"]')
    const form = document.querySelector('form')

    const validateName = (name) => {
        const regExp = new RegExp(/^[a-zA-Z\s]+$/)
        return name.length > 0 && regExp.test(name)
    }

    const validateUserName = (username) => {
        const regExp = new RegExp(/^[a-zA-Z0-9]+$/)
        return username.length > 0 && regExp.test(username)
    }

    const validatePassword = (password, confirmPassword) => password === confirmPassword 

    const validateBirthday = (birthday) => {
        const today = new Date()
        const eighteenYearsAgo = new Date(today.getFullYear() - 18, today.getMonth(), today.getDate())
        const birthdayDate = new Date(birthday)
        return birthdayDate <= eighteenYearsAgo
    }

    form.addEventListener('submit', (event) => {
        event.preventDefault()

        const firstName = firstNameInput.value
        const lastName = lastNameInput.value
        const username = usernameInput.value
        const password = passwordInput.value
        const confirmPassword = confirmPasswordInput.value
        const birthday = birthdayInput.value
        const termsAndConditions = termsAndConditionsInput.checked

        let isValid = true
        isValid &&= validateName(firstName)
        isValid &&= validateName(lastName)
        isValid &&= validateUserName(username)
        isValid &&= validatePassword(password, confirmPassword)
        isValid &&= validateBirthday(birthday)

        if(!isValid) {
            alert('Invalid input')
            return
        }

        const newUser = {
            firstName,
            lastName,
            password,
            confirmPassword,
            username,
            birthday,
            termsAndConditions
        }

        console.log(newUser)
    })
})