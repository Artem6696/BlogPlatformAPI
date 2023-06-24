export const showErrorMessage = () => {
    document.querySelector("#register-message").innerHTML = `
<div class="auth-message error">Ошибка: неверный формат данных</div>
    `
}

export const showSuccessMessage = () => {
    document.querySelector("#register-message").innerHTML = `
<div class="auth-message success">Регистрация прошла успешно!</div>
    `
}