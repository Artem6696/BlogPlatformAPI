export const showErrorMessage = () => {
    document.querySelector("#register-message").innerHTML = `
<div class="auth-message error">Ошибка: неверный формат данных</div>
    `
}
export const incorrectPassword = () => {
    document.querySelector("#register-message").innerHTML = `
<div class="auth-message error">Вы ввели неправильный пароль</div>
    `
}
export const correctPassword = () => {
    document.querySelector("#register-message").innerHTML = `
<div class="auth-message done">Вход выполнен</div>
    `
}
export const showSuccessMessage = () => {
    document.querySelector("#register-message").innerHTML = `
<div class="auth-message done">Регистрация прошла успешно!</div>
    `
}
export const showSuccessPost = () => {
    document.querySelector("#register-message").innerHTML = `
<div class="auth-message done">Пост опубликован</div>
    `
}