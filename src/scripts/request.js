
export async function requestUserAPI(nameUser) {

    const user = await fetch(`https://api.github.com/users/${nameUser}`, {
        method: "GET"
    }).then(async (res) => {
        if (res.ok) {

            const response = await res.json()
            localStorage.setItem('user', JSON.stringify(response))

            await requestRepos(nameUser)
            
            location.replace('./src/pages/profile.html')
        } else {
            localStorage.clear()
            location.replace('./src/pages/error.html')
        }
    })
}

async function requestRepos (nameUser){

    const repos = await fetch(`https://api.github.com/users/${nameUser}/repos`, {
        method: "GET"
    }).then(async (res) => {
        const response = await res.json()
        localStorage.setItem('repos', JSON.stringify(response))
    })
}