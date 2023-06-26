const changeAvatar = async () => {

    const userAvatar = document.querySelector(".user-avatar")
    const btn = document.querySelector(".choice-user-avatar_button") 
    const input = document.querySelector(".choice-user-avatar_input")
    const changeAvatar = document.querySelector(".change-avatar")
    const choiceAvatar = document.querySelector('.choice-user-avatar')


    btn.addEventListener('click', function() {
        btn.classList.add('active');
      
        setTimeout(() => {
          btn.classList.remove('active');
        }, 2000);
      });

      
choiceAvatar.classList.add('hidden')

changeAvatar.addEventListener('click', () => {
   if(choiceAvatar.classList.contains('hidden')){
    choiceAvatar.classList.remove('hidden')
   }else{
    choiceAvatar.classList.add('hidden')
   }
})
btn.addEventListener('click', () => {
   localStorage.setItem('localAvatar',input.value)
   userAvatar.src = input.value
})
}



export default changeAvatar