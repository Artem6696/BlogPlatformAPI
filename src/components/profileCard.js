const profileCard = (data) => {
    return `
<div class="profile-card">
    <div class="profile-avatar">
    <img class="user-avatar" src="https://pixlok.com/wp-content/uploads/2022/02/Profile-Icon-SVG-09856789.png">
    </div>
<div class="profile-title">
    <div class="username">Имя пользователя: ${data.login} </div>
    <div class="username">Фамилия пользователя: ${data.fullName} </div>

    <div class="user-value">Номер пользователя: ${data.phoneNumber} </div>
    <div class="user-value">Почта пользователя: ${data.email} </div>
</div>
</div>
    `
}

export default profileCard
