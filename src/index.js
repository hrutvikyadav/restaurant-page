import './styles.css';
import Bistro from './bistro-img.jpg';
import XData from './data.xml';
import CData from './data.csv';
import toml from './data.toml';
import yaml from './data.yaml';
import json from './data.json5';

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

console.log(XData, "\n", CData)
console.log(toml.title, toml.owner.name)
console.log(yaml.title, yaml.owner.name)
console.log(json.title, json.owner.name)