import Icon from '/Users/keirenbrandt-sawdy/repos/javascript_pathway/restaurant/dist/icon.jpg'
import Icon2 from '/Users/keirenbrandt-sawdy/repos/javascript_pathway/restaurant/dist/icon2.jpeg'
import Icon3 from '/Users/keirenbrandt-sawdy/repos/javascript_pathway/restaurant/dist/icon3.jpeg'

import clearDivs from './clear'
import createTabs from './tabs'
import addClick from './index'
const content = document.getElementById('content')


const createDivs = function (){


    const header = document.createElement('h1')
    header.textContent = 'Welcome to the Paws Club'

    const who = document.createElement('h2')
    who.textContent = "Who Are We?"

    const container = document.createElement('div')
    container.classList.add('container')

    const intro = document.createElement('div')
    intro.textContent = 'The Paws Club is a brand new, dog friendly cafe where furry friends and their owners can meet for a coffee, a sniff and a run around. We have a selection of freshly baked pastries and light meals as well as a few doggy treats as well'
    intro.setAttribute('id', 'intro')

       
    const myIcon3 = new Image();
    myIcon3.src = Icon3;
    myIcon3.setAttribute('id', 'img1')



    const myIcon2 = new Image();
    myIcon2.src = Icon2;
    myIcon2.setAttribute('id', 'img2')
     // document.getElementById('imageDiv').innerHTML = '<img width="100" height="100" src="images/hydrangeas.jpg">';

    content.appendChild(header)
    content.appendChild(who)
    content.appendChild(container)
    container.appendChild(myIcon3);
    container.appendChild(intro)
    container.appendChild(myIcon2);
    
}





export default createDivs