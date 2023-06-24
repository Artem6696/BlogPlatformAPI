const postForm = () => {
    return `
    <div class="auth-form">
      <h2>What's new?</h2>
      <textarea placeholder="text here" type="text" name="" id="post-text" class="auth-input"></textarea>
      
      <textarea placeholder="images here" type="text" name="" id="post-images" class="auth-input"></textarea>
      

      <div id="post-button" class="auth-submit">Publish</div>

      <div id="register-message">
        
      </div>
    </div>
    `
}

export default postForm
