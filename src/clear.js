const content = document.getElementById('content')
const clearDivs = function (){

while(content.firstChild){
    content.removeChild(content.lastChild)
}
    
}    

export default clearDivs
