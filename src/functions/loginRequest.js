import { showProfile } from "..";
import { getLoginValues } from "./getLoginValues";
import { correctPassword, incorrectPassword, showErrorMessage, showSuccessMessage } from "./showAuthMessage";



const loginRequest = async () => {
    const url = "http://cepbep.ddns.net:2500/api/hotelDB/users/login"

    try {


        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(getLoginValues())
        })

        const status = response.status

        if(status != 200) throw "Ошибка"
            correctPassword()
            
        const responseData = await response.json()
        
       
        
        localStorage.setItem("userId", responseData[0]._id)
        showProfile()
    }
    catch(error){
        console.log(error)
        incorrectPassword()
    }


   
}
export default loginRequest