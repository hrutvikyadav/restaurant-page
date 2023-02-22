import './styles.css';

console.log("Webpack working")
console.log("working in development mode")

let contentDiv = document.getElementById('content')

let heading = document.createElement('h1')
heading.textContent = "Brady's Bistro"
contentDiv.appendChild(heading) 