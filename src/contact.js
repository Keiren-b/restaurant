import clearDivs from './clear'
import createTabs from './tabs'
import addClick from './index'

const content = document.getElementById('content')

function createContactDivs() {
    clearDivs()
    createTabs()
    addClick()
    const header = document.createElement('h1')
    header.textContent = 'Contact'
    content.appendChild(header)

}

export default createContactDivs
