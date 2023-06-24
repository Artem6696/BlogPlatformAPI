const getPostData = async () => {
    const response = await fetch('http://cepbep.ddns.net:2500/api/postDB/posts/')

    return await response.json()
}
export default getPostData