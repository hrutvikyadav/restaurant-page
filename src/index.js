import './styles.css';
import Bistro from './bistro-img.jpg';

console.log("Webpack working")
console.log("working in development mode")

let contentDiv = document.getElementById('content')

let heading = document.createElement('h1')
heading.textContent = "Brady's Bistro"
contentDiv.appendChild(heading)

let imageEl = document.createElement('img')
imageEl.setAttribute('src', Bistro)
imageEl.setAttribute('id', 'img-element')
contentDiv.appendChild(imageEl)
