var lastSelected

var tabcolor = $(".tabs")[0].style.color

$(".tabs").on("click", (e) => {
    var index = Array.from($(".tabs")).indexOf(e.currentTarget)
    if(index>2) return 
    if (lastSelected != e.currentTarget.innerText) {
        $(".hovderdiv-container")[0].style.display = 'flex'
        lastSelected = e.currentTarget.innerText
        handlehovercontent(e)
    }
    else {
        $(".hovderdiv-container")[0].style.display = 'none'
        lastSelected = undefined
        resettabs()
    }
})
function resettabs(){
    for (let i = 0; i < $(".tabs").length; i++) {
        const e = $(".tabs")[i];
        e.style.color = ""
    }
}
function handlehovercontent(e) {
    var index = Array.from($(".tabs")).indexOf(e.currentTarget)
    
    for (let i = 0; i < $(".tabs").length; i++) {
        const e = $(".tabs")[i];
        e.style.color = ""
    }
    for (let i = 0; i < $(".hovderdiv-content").length; i++) {
        $(".hovderdiv-content")[i].style.display = 'none'
    }
    
    if (lastSelected == e.currentTarget.innerText) {
        
        e.currentTarget.style.color = "black"
    }
    $(".hovderdiv-content")[index].style.display = 'block'

}