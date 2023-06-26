export const getLoginValues =  () => {
    return {
        login: document.querySelector("#login-form").value,
        password: document.querySelector("#password-form").value
    }                                       
}
