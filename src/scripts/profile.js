
import { renderData } from "./render.js"

function backHome() {

    const button = document.querySelector('.back-home')

    button.addEventListener('click', () => {

        localStorage.clear()

        location.replace('../../')
    })

}

backHome()
renderData()