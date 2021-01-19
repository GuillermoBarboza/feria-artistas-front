window.onload = () => {
    let button = document.querySelector('button')
    let div = document.querySelector('#apiDiv')
    button.addEventListener('click', e => {
        fetch('https://feria-de-artistas-back.vercel.app/')
        .then(response => {
            console.log(response)
            return response.json()
        })
        .then(data => {
            let p = document.createElement('p')
            p.innerHTML = data
            div.appendChild(p)
        })
    })
}