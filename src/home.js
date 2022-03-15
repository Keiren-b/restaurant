
import clearDivs from './clear'
import createTabs from './tabs'
import createDivs from './firstLoad'
import addClick from './index'
const content = document.getElementById('content')


const createHomeDivs = function (){
    clearDivs()
    createTabs()
    addClick()
    createDivs()

  }





export default createHomeDivs