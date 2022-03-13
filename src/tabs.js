
const content = document.getElementById('content')

const createTabs = function (){

    const tabContainer = document.createElement('div')
    tabContainer.setAttribute('id','tabContainer')

    const tabHome = document.createElement('div')
    tabHome.textContent = "Home"
    tabHome.setAttribute('id', 'tab');


    const tabMenu = document.createElement('div')
    tabMenu.textContent = 'Menu'
    tabMenu.setAttribute('id', 'tab');

    const tabContact = document.createElement('div')
    tabContact.textContent = 'Contact'
    tabContact.setAttribute('id', 'tab');

    tabContainer.appendChild(tabHome)
    tabContainer.appendChild(tabMenu)
    tabContainer.appendChild(tabContact)
    content.appendChild(tabContainer)

}


export default createTabs