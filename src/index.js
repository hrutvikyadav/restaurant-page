import tabComponent from './tabcomponent'

function mainComponent() {
    // main content element
    const mainContent = document.createElement('div')
    mainContent.classList.add('content')

    const heading = document.createElement('h1')
    heading.textContent = 'Bistro Menu'
    
    mainContent.appendChild(heading)
    mainContent.appendChild(tabComponent())
    return mainContent
}

document.body.appendChild(mainComponent())