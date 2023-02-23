export default function tabComponent() {
    // html element to display first tab menu contents
    const menu = document.createElement('div')
    menu.classList.add('menu')

    const para = document.createElement('p')
    para.textContent = 'Starters'
    console.log('appending tab anytime now')

    const para2 = document.createElement('p')
    para2.textContent = 'Main course'
    
    menu.appendChild(para)
    menu.appendChild(para2)
    return menu
}