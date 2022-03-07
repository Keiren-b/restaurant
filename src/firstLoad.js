const content = document.getElementById('content')

const createDivs = function (){


    const header = document.createElement('div')
    header.textContent = 'Welcome to the Paws Club'

    const who = document.createElement('div')
    who.textContent = "Who Are We?"

    const intro = document.createElement('div')
    intro.textContent = 'The Paws Club is a brand new, dog friendly cafe where furry friends and their owners can meet for a coffee, a sniff and a run around. We have a selection of freshly baked pastries and light meals as well as a few doggy treats as well'

    content.appendChild(header)
    content.appendChild(who)
    content.appendChild(intro)
}



export default createDivs