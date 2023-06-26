const loginForm = () => {
    return `
    <div class="auth-form">
      <h2>Login</h2>
      <input id="login-form"    placeholder="login here"    type="text"     name=""  class="auth-input">
      <input id="password-form" placeholder="your password" type="password" name=""  class="auth-input">
      
      <div id="login-button" class="auth-submit">Sign up</div>

      <div id="register-message">
        
      </div>
    </div>
    `
}

export default loginForm
