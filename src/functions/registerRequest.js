import { getRegisterValues } from "./getRegisterValues"
import { showErrorMessage, showSuccessMessage } from "./showAuthMessage"

const registerRequest = async () => {
    const url = "http://cepbep.ddns.net:2500/api/hotelDB/users/register"

    try {

        console.log(JSON.stringify(getRegisterValues()))
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(getRegisterValues())
        })

        const status = response.status

        if (status != 200) throw "Ошибка сервера!"

        showSuccessMessage()
        const responseData = await response.json()
        localStorage.setItem("userId", responseData._id)
    }

    catch (error) {
        console.log(error)
        showErrorMessage()
    }

}

export default registerRequest

// const registerRequest = async () => {
//     const url = "http://cepbep.ddns.net:2500/api/hotelDB/users/register"

//     try {
//         console.log(JSON.stringify(getRegisterValues()))

//         const response = await fetch(url, {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json"
//             },
//             body: JSON.stringify(getRegisterValues())
//         })

//         console.log(await response.text())
//     }
//     catch (error) {
//         console.log(error)
//     }
// }

// export default registerRequest
