var tl = gsap.timeline({repeat:-1, yoyo:true});

tl.from(".content" , {duration: 3, y:-100, ease: "bounce"});

var tl = gsap.timeline({repeat:-1, yoyo:true});

tl.from(".box2-content" , {duration:2, y:-50, ease: "sine"});

gsap.timeline({
    scrollTrigger: {
        trigger: ".box",
        start: "center center",
        end: "bottom top",
        markers: true,
        scrub: true,
        pin: true
    }
})

.from(".text1", { x : innerWidth * 1})
.from(".text2", { x : innerWidth * -1})
.from(".text3", { x : innerWidth * 1})
.from(".logo" , {
    y: innerHeight * 1,
    rotate: 360
})

gsap.timeline({
    scrollTrigger: {
        trigger: ".box2",
        start: "center center",
        end: "bottom top",
        markers: true,
        scrub: true,
        pin: true
    }
})
.from(".box2", {opacity : 0})

gsap.timeline({
    scrollTrigger: {
        trigger: ".box3",
        start: "center center",
        end: "bottom top",
        markers: true,
        scrub: true,
        pin: true
    }
})

.from(".iphone", { x : innerWidth * -1})


