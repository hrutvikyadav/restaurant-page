import tabComponent from './tabcomponent'
import contactComponent from './contactcomponent'
import './styles.css'

function mainComponent() {
    // main content element
    const mainContent = document.createElement('div')
    mainContent.classList.add('content')

    const heading = document.createElement('h1')
    heading.textContent = 'Bistro Menu'

    const tabButtons = document.createElement('div')
    tabButtons.classList.add('tab-buttons')

    // tab switching logic
    const menuButton = document.createElement('button')
    menuButton.textContent = 'Menu'
    menuButton.classList.add('menu-button')
    menuButton.onclick = (e) => {
        console.log(e.target, mainContent.lastChild.classList.value)
        // if contact tab exists, remove it before appending menu tab
        if(mainContent.lastChild.classList.value === 'contact') mainContent.removeChild(mainContent.lastChild)
        if(mainContent.lastChild.classList.value === 'tab-buttons') mainContent.appendChild(tabComponent())
    }
    const contactButton = document.createElement('button')
    contactButton.classList.add('contact-button')
    contactButton.textContent = 'Contact us'
    contactButton.onclick = (e) => {
        console.log(e.target, mainContent.lastChild.classList.value)
        // if menu tab exists, remove before appending contact tab
        if(mainContent.lastChild.classList.value === 'menu') mainContent.removeChild(mainContent.lastChild)
        if(mainContent.lastChild.classList.value === 'tab-buttons') mainContent.appendChild(contactComponent())
    }

    tabButtons.appendChild(menuButton)
    tabButtons.appendChild(contactButton)
    
    mainContent.appendChild(heading)
    mainContent.appendChild(tabButtons)
    return mainContent
}

document.body.appendChild(mainComponent())