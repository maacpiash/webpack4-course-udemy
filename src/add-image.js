import Apple from '../Apple.png'

function addImage() {
    const img = document.createElement('img')
    img.alt = 'Apple'
    img.width = 300
    img.src = Apple

    const body = document.querySelector('body')
    body.appendChild(img)
}

export default addImage
