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
import getProfileDataPersonalPost from "./functions/getProfileDataPersonalPost";
import profilePersonalPost from "./components/profilePersonalPost";
import changeAvatar from "./functions/changeAvatar";
import loginRequest from "./functions/loginRequest";
import { getLoginValues } from "./functions/getLoginValues";

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
   console.log(loginRequest());
  })
}

export const showProfile = async () => {
  const userData = await getProfileData()
  const userDataPost = await getProfileDataPersonalPost()
  const personalPostUser = userDataPost.map(({_id, content, images}) => {
    return profilePersonalPost(_id, content, images)
  })
  const personalPostUserHTML = personalPostUser.join("")
  root.innerHTML = `
        <div class="profile-container">
          <div class="profile-information">${profileCard(userData)}</div>
          <div class="profile-posts">${personalPostUserHTML}</div>
        </div>
  `
  
  await changeAvatar()
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