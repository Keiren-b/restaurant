import clearDivs from './clear'
import createTabs from './tabs'
import addClick from './index'

const content = document.getElementById('content')
const createMenuDivs = function (){
clearDivs()
createTabs()
addClick()
const header = document.createElement('h1')
    header.textContent = 'Menu'
content.appendChild(header)
    
}    

export default createMenuDivs