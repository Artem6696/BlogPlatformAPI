const getProfileDataPersonalPost = async () => {
    const userId = localStorage.getItem("userId")

    const response = await fetch(`http://cepbep.ddns.net:2500/api/postDB/posts/getUserPosts/${userId}`)

    return await response.json()
}

export default getProfileDataPersonalPost
//Сюда должно придти айди