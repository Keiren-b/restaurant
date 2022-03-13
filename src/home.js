import Icon from '/Users/keirenbrandt-sawdy/repos/javascript_pathway/restaurant/dist/icon.jpg'
import Icon2 from '/Users/keirenbrandt-sawdy/repos/javascript_pathway/restaurant/dist/icon2.jpeg'
import Icon3 from '/Users/keirenbrandt-sawdy/repos/javascript_pathway/restaurant/dist/icon3.jpeg'
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