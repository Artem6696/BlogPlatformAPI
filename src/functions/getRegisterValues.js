

export const getRegisterValues = () => {
    return {
        login: document.querySelector("#login").value,
        password: document.querySelector("#password").value,
        tryPassword: document.querySelector("#tryPassword").value,
        email: document.querySelector("#email").value,
        phoneNumber: document.querySelector("#phoneNumber").value,
        fullName: document.querySelector("#fname").value + " " + document.querySelector("#lname").value
    }
}

