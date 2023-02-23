import image from './b-img.jpg';

export default function contactComponent() {
    // html element to display first tab menu contents
    const contact = document.createElement('div')
    contact.classList.add('contact')

    const para = document.createElement('p')
    para.textContent = 'Contact us on twitter'
    console.log('appending contact anytime now')

    const para2 = document.createElement('p')
    para2.textContent = '...and through phone: '

    const img = new Image()
    img.src = image 
    
    contact.appendChild(para)
    contact.appendChild(para2)
    contact.appendChild(img)
    return contact
}