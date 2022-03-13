let displayed = false 
function discord(){
    navigator.clipboard.writeText('UTSGhost#4892')
    button = document.getElementById("copy")
    if (!displayed){
        button.style.display = "block"
        displayed = true
        setTimeout(function() {button.style.display = "none";displayed=false}, 1000)
    }
}