const Post = async (postData) => {
    const authorResponse = await fetch(`http://cepbep.ddns.net:2500/api/hotelDB/users/${postData.authorId}`)

    const authorData = await authorResponse.json()

    let imagesHTMl = ""

    for(const image of postData.images){
        imagesHTMl += `<img class="image" src="${image}">`
    }
    return `
    <div class="post-block">
        <div class="author">Author:  ${authorData.login}</div>
        <div class="content">${postData.content}</div>
        <div class="images">${imagesHTMl}</div>
    </div>
    `
}
export default Post