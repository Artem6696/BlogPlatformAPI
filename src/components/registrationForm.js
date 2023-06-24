const registrationForm = () => {
    return `
    <div class="auth-form">
      <h2>Register</h2>
      <input placeholder="login here" type="text" name="" id="login" class="auth-input">
      <input placeholder="enter your email" type="text" name="" id="email" class="auth-input">
      <input placeholder="phone number" type="text" name="" id="phoneNumber" class="auth-input">
      <input placeholder="first name" type="text" name="" id="fname" class="auth-input">
      <input placeholder="last name" type="text" name="" id="lname" class="auth-input">
      <input placeholder="your password" type="password" name="" id="password" class="auth-input">
      <input placeholder="repeat password" type="password" name="" id="tryPassword" class="auth-input">
      
      <div id="register-button" class="auth-submit">Sign up</div>

      <div id="register-message">
        
      </div>
    </div>
    `
}

export default registrationForm
