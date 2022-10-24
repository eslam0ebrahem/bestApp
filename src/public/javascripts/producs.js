$(".demo")[0].style.marginLeft = "0px"

let slideIndex = 1;

showSlides(slideIndex);
function plusSlides(n) {
  showSlides(slideIndex += n);
}
function currentSlide(n) {
  showSlides(slideIndex = n);
}
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {

    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace("active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

// var demos = $( ".demo" );
// for (let i = 0; i < demos.length; i++) {
//   const element = demos[i];
//   element.click(() => currentSlide(i+1))
//   // element.addEventListener("click",() => currentSlide(i+1));
// }

$(".demo").on("click", (e) => currentSlide(Array.from($(".demo")).indexOf(e.currentTarget) + 1))

// $('.scrolling').on("wheel",(e)=>{ 
//   console.log(e.originalEvent)
//   console.log(e.originalEvent.deltaY)
//   console.log($('.scrolling')[0].scrollLeft)

//   $('.scrolling')[0].scrollTo($('.scrolling')[0].scrollLeft+e.originalEvent.deltaY, 0);
// })

$('.prev').on('click', () => {
  $('.scrolling')[0].scrollTo($('.scrolling')[0].scrollLeft - 160, 0);
})
$('.next').on('click', () => {
  $('.scrolling')[0].scrollTo($('.scrolling')[0].scrollLeft + 160, 0);
})
$(window).resize(function () {
  handleContainer()
  handlefotterTap()
});

function handleContainer() {
  if ($(window).width() <= 500) {
    $(".container").width($(window).width() * .9)
  }
  else $(".container").width(470)
}

function handlefotterTap(){
  
}