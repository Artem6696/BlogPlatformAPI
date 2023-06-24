import postForm from "./components/postForm";
import loginForm from "./components/loginForm";
import profileCard from "./components/profileCard";
import registrationForm from "./components/registrationForm";
import getProfileData from "./functions/getProfileData";
import { getRegisterValues } from "./functions/getRegisterValues";
import registerRequest from "./functions/registerRequest";
import "./style.scss";
import publishRequest from "./functions/publishRequest";
import getPostData from "./functions/getPostData";
import Post from "./components/post";

const root = document.querySelector("#root")

const showReg = async () => {
  root.innerHTML = registrationForm()

  document.querySelector("#register-button").addEventListener('click', () => {
    registerRequest()
  })
}

const showLogin = async () => {
  root.innerHTML = loginForm()

  document.querySelector("#login-button").addEventListener('click', () => {
    registerRequest()
  })
}

const showProfile = async () => {
  const userData = await getProfileData()

  root.innerHTML = profileCard(userData)
  
}

const showFeed = async () => {
  const postData = await getPostData()

  let result = ""
  for(const post of postData){
    result += await Post(post)
  }
  root.innerHTML = `<div class="post-container">${result}</div>`
}

const showPost = async () => {
  root.innerHTML = postForm()

  document.querySelector("#post-button").addEventListener('click', () => {
    publishRequest()
  })
}

document.querySelector("#nav-reg").addEventListener('click', showReg)
document.querySelector("#nav-login").addEventListener('click', showLogin)
document.querySelector("#nav-profile").addEventListener('click', showProfile)
document.querySelector("#nav-feed").addEventListener('click', showFeed)
document.querySelector("#nav-post").addEventListener('click', showPost)

showReg()