import { showErrorMessage, showSuccessMessage } from "./showAuthMessage"

const publishRequest  = async () => {
    const content = document.querySelector("#post-text").value
    const images = (document.querySelector('#post-images').value).split(" ")

    const userId = localStorage.getItem("userId")

    const url = "http://cepbep.ddns.net:2500/api/postDB/posts/createPost"

    const data = {
        content: content,
        authorId: userId,
        images: images
    }

    console.log(data)

    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })

    console.log(await response.text())

    if (response.status != 200) {
        showErrorMessage()
        return
    }

    showSuccessMessage()
}

export default publishRequest