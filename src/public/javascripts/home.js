
var card_size = 260
var mytransform = []
var pholder = document.getElementsByClassName("productsHolder")
var product = document.getElementsByClassName("Hproduct")[0]

// product
//Hproducts[0].innerHTML = product.repeat(20)   
handleUI()

function handleUI() {
    
    setHolderWidth()
    window.addEventListener('resize', (a) => {
        setHolderWidth()
    }, true)

}

function insertproduct(lis) {

    lis.forEach(data => {
        var clone = product
        if (data?.image) {
            clone.getElementsByClassName("productimg")[0].src = data.image
        }

        if (data?.name)
            clone.getElementsByClassName("productName")[0].innerHTML = data.name

        if (data?.oldprice)
            clone.getElementsByClassName("oldprice")[0].innerHTML = data.oldprice

        if (data?.newprice)
            clone.getElementsByClassName("newprice")[0].innerHTML = data.newprice

        if (data?.link)
            clone.getElementsByTagName("a")[0].href = data?.link


        pholder[data['type']].children[0].innerHTML += product.outerHTML
    });


}
function insertbestproduct(lis) {
    var product2 = document.getElementsByClassName("bestproduct")[0]

    lis.forEach((data) => {
        var clone = product2
        if (data?.image)
            clone.getElementsByClassName("productimg2")[0].src = data.image

        if (data?.descripe)
            clone.getElementsByClassName("productdetails")[0].innerHTML = data?.descripe

        if (data?.link)
            product2.getElementsByTagName("a")[0].href = data?.link

        document.getElementById("bestproducts").innerHTML += clone.outerHTML
    })


}
function setHolderWidth() {
    var width = calucateHolderWidth()
    for (let index = 0; index < holder.length; index++) {
        refreshPoints(index)
    }
    for (const i of holder) {
        mytransform.push(0)
        i.style.width = `${width}px`
    }
}
function calucateHolderWidth() {
    var pagewidth = document.getElementsByClassName("background")[0]
    holder = document.getElementsByClassName("productsHolder")
    return Math.floor(pagewidth.clientWidth * .8 / card_size) * card_size
}
function cardsInRow() {
    var pagewidth = document.getElementsByClassName("background")[0]
    holder = document.getElementsByClassName("productsHolder")
    return Math.floor(pagewidth.clientWidth * .8 / card_size)
}
function iteratorClick(iterator, direction) {
    var slidesMover = document.getElementsByClassName("slideMover")
    var index = 0
    for (let i = 0; i < slidesMover.length; i++) {
        if (slidesMover[i] == iterator) {
            index = Math.floor(i / 2)
            break
        }
    }
    transform(index, iterator.id == "left" ? -1 : 1)
}

function transform(index, steps) {
    
    var productsHolder = document.getElementsByClassName("slideshow")[index].querySelector(".productsHolder")

    var transform_index = mytransform[index]

    transform_index -= (card_size * steps)

    var bigger_scroll = productsHolder.children[0].children.length * card_size - productsHolder.clientWidth

    if (transform_index + bigger_scroll < 0) transform_index = bigger_scroll * -1

    if (transform_index > 0) transform_index = 0
    
    productsHolder.children[0].style.transform = `translate(${transform_index}px,0px)`

    mytransform[index] = transform_index

    refreshPoints(index)
}

function gettransform(index) {

    return Math.abs(mytransform[index] / card_size)
}

function refreshPoints(index) {

    var transform_index = mytransform[index]

    var position = Math.abs(transform_index / card_size)

    var colPosition = Math.floor(document.getElementsByClassName("background")[0].clientWidth * .8 / card_size)

    var myPosition = Math.floor(position / colPosition)

    var totalLen = document.getElementsByClassName("productsHolder")[index].children[0].children.length

    var coleTotalLen = Math.floor(totalLen / colPosition)

    if (!myPosition) myPosition = 0

    var points = []

    for (let i = 0; i < coleTotalLen; i++) {
        var inpoint = "emptypoint"
        if (myPosition == i) inpoint = "fullpoint"
        points.push(`<div class="${inpoint} point myshdow" onclick = "getpointLocation(${index},${i})" ></div>`)

    }
    points.reverse()
    
    document.getElementsByClassName("pointsContainer")[index].innerHTML = points.join("\n")
}
function getpointLocation(x, y) {
    transform(x, y * cardsInRow() - gettransform(x))
}
for (const iterator of document.getElementsByClassName("product")) {
    iterator.onclick = () => {

    }
}

/*
each i in [1,2,3,4]
          if i!=2
            = i
*/

  