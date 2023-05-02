
export function renderData() {

    const user = JSON.parse(localStorage.getItem('user'))
    const repository = JSON.parse(localStorage.getItem('repos'))

    const photo = document.querySelector('.user-data__photo')
    const name = document.querySelector('.user-data__name')
    const ul = document.querySelector('.main__container-repos')

    ul.innerHTML = ''
    photo.src = ''
    name.innerHTML = ''

    photo.src = user.avatar_url
    photo.alt = user.name
    name.innerText = user.login

    for (let i = 0; i < repository.length; i++) {
        renderRepos(repository[i])
    }
}

function renderRepos(repos) {

    const ul = document.querySelector('.main__container-repos')

    const container = document.createElement('div')
    const name = document.createElement('h2')
    const description = document.createElement('p')
    const reposLink = document.createElement('button')
    const ancora = document.createElement('a')

    container.classList.add('container-repos__div')
    name.classList.add('container-repos__name')
    description.classList.add('container-repos__description')
    reposLink.classList.add('container-repos__button')
    ancora.classList.add('container-repos__link')

    ul.appendChild(container)
    container.append(name, description, reposLink)
    reposLink.appendChild(ancora)

    ancora.href = repos.html_url
    ancora.target = '_blank'
    ancora.innerText = 'Repositório'
    description.innerText = repos.description
    name.innerText =  repos.name

}