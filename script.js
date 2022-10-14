




var circle = document.querySelector("#circle")
// var img = document.querySelector("#i")
window.addEventListener("mousemove",function(dets){
    circle.style.left = `${dets.clientX}px`
    circle.style.top = `${dets.clientY}px`
})

document.querySelectorAll(".img").forEach(function(elem){
    elem.addEventListener("mousemove",function(dets){
        circle.style.height = "70px"
        circle.style.width = "70px"
        circle.style.border = `1px solid red`
        circle.style.backgroundColor = "white"
        circle.style.mixBlendMode = "difference"
      
        document.querySelector("#page").style.backgroundColor = dets.target.dataset.color
    })
})
document.querySelectorAll(".img").forEach(function(elem){
    elem.addEventListener("mouseleave",function(dets){
        circle.style.height = "18px"
        circle.style.width = "18px"
        circle.style.border = `3px solid black`
        circle.style.backgroundColor = "transparent"
        circle.style.mixBlendMode = "initial"
        document.querySelector(".section h2").style.color = "Black"

        document.querySelector("#page").style.backgroundColor = "transparent"

    })
})

var tl = gsap.timeline()
tl.to("#loader",{
    y:"-100%",
  duration:1,
  delay:1,
  ease:"slow"
})
tl.from("#text>h1",{
    y:50,
    duration:2,
    ease:Expo.easeInOut,
    opacity:0,
  
},"-=1")

document.querySelectorAll(".img").forEach(function(elem){
    gsap.from(elem,{
scrollTrigger:{
    
 
    trigger:elem,
    start:"top 60%",
    
},

        y:30,
        duration:.5,
        stggger:2,
        opacity:0
    })
})

