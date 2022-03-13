import createDivs from './firstLoad';
import './style.css';
import createHomeDivs from './home'
import createTabs from './tabs';
import createMenuDivs from './menu'
import createContactDivs from './contact'


createTabs()
createDivs()

function addClick(){
const tabContainer = document.getElementById('tabContainer')
tabContainer.firstChild.addEventListener('click', createHomeDivs)
tabContainer.childNodes[1].addEventListener('click', createMenuDivs)
tabContainer.childNodes[2].addEventListener('click', createContactDivs)
}

addClick()


export default addClick


