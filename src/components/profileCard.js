const profileCard = (data) => {
    return `
<div class="profile-card">
    <div class="profile-avatar">
    <img class="user-avatar" src="${localStorage.getItem('localAvatar') || ''}">
    <div class="change-avatar">поменять фото</div>
    <div class="choice-user-avatar">

        <input class="choice-user-avatar_input" placeholder="новое фото">
        <button class="choice-user-avatar_button">сменить</button>
        
    </div>
    </div>
<div class="profile-title">

<div class="login-container">
    <img  class="username-img" src="https://cdn-icons-png.flaticon.com/512/3810/3810796.png">
    <div class="username">Логин: <h3>${data.login} </h3></div>
</div>

<div class="username-container">
    <img  class="username-img" src="https://cdn-icons-png.flaticon.com/512/4505/4505359.png">
    <div class="username">Имя/Фамилия: <h3>${data.fullName} </h3></div>
</div>

<div class="user-number-container">
    <img  class="number-img" src="https://cdn-icons-png.flaticon.com/512/3059/3059434.png">
    <div class="user-value">Номер пользователя: <h4>${data.phoneNumber}</h4> </div>
</div>
<div class="user-email-container">
    <img  class="email-img" src="https://cdn-icons-png.flaticon.com/512/4519/4519975.png">
    <div class="user-value">Почта пользователя: <h4>${data.email}</h4> </div>
</div>
</div>
</div>
    `
}

export default profileCard
