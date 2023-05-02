
import { requestUserAPI } from "./request.js"

function searchUser (){
    
    const button = document.querySelector('.section-secound__button')
    const input = document.querySelector('.section-secound__input')

    button.addEventListener('click', async () =>{

        localStorage.setItem('userName', input.value)

        await requestUserAPI(input.value)
    })
}

searchUser()