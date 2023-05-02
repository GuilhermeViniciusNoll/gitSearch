
function backHome() {

    const button = document.querySelector('.back-home')

    button.addEventListener('click', () => {
        location.replace('../../')
    })

}

backHome()