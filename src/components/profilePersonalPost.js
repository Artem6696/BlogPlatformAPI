const profilePersonalPost = (_id, content,images) => {


    let imageHTML = ""
    for(const image of images){
        imageHTML += `<img class="image" src="${image}">`
    }
    
    return `
    <div class="post-block">
    <h5 class="post-title">Ранее вы публиковали:</h5>
        
        <div class="content">${content}</div>
        <div class="images">${imageHTML}</div>
        <div class="author"> <h6>post ID:${_id}</h6> </div>
    </div>
    `
}
export default profilePersonalPost