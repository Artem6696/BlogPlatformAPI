const getProfileData = async () => {
    const userId = localStorage.getItem("userId")

    const response = await fetch(`http://cepbep.ddns.net:2500/api/hotelDB/users/${userId}`)

    return await response.json()
}

export default getProfileData
//сюда должно придти айди