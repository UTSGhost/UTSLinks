global_nyas = 0

function discord(){
    let displayed = false 
    navigator.clipboard.writeText('UTSGhost#4892')
    let button = document.getElementById("copy")
    if (!displayed){
        button.style.display = "block"
        displayed = true
        setTimeout(function() {button.style.display = "none";displayed=false}, 1000)
    }
}
function nya() {
    let nya_power = "a"
    global_nyas += 1
    for (let i = 0; i < global_nyas; i++) {nya_power += "aaaaaaaaa"}
    let displayed = false 
    let nyaa = document.getElementById("nyaa")
    for (let i = 0; i < 20; i++) {
        setTimeout(function() {
            nya_power += "a"
            nyaa.innerHTML = `Ny${nya_power}~`
        }, i*50)
    }
    if (!displayed){
        nyaa.style.display = "block"
        displayed = true
        setTimeout(function() {nyaa.style.display = "none";displayed=false}, 1000)
    }
}