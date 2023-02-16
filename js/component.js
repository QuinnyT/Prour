const hamnav = document.querySelector('.nav-hamburger');
const textnavItem = document.getElementsByClassName('nav-text-item');

function hamnavFunc() {
    hamnav.classList.toggle('active');
    for (let i = 0; i < textnavItem.length; i++) {
        textnavItem[i].classList.toggle('active');
    }
}


const sidebar = document.getElementById('sidebar');
const sideDot = document.querySelector('.side-dots');
const sideText = document.querySelector('.side-text');
$("#sidebar").hover(function () {
    gsap.to([".side-dots", ".side-text"], {
        height: "20%",
        duration: 0.6
    })
    // gsap.to(".side-text-item", {
    //     fontSize: "14px",
    //     duration: 0.6
    // })

    for (let i = 0; i < sideText.children.length; i++) {
        sideText.children[i].classList.add('active');
    }
}, function () {
    // sideDot.classList.remove('active');
    gsap.to([".side-dots", ".side-text"], {
        height: "16%",
        duration: 0.6
    })

    for (let i = 0; i < sideText.children.length; i++) {
        sideText.children[i].classList.remove('active');
    }
})

function selectStage(i, position) {
    console.log(i);
    gsap.to(".side-dots svg", {
        top: position,
        y: -7,
        duration: 0.5
    })

    gsap.to(".dot", {
        backgroundColor: "#ababab",
        delay: 0.5
    })
    gsap.to(sideDot.children[ i+1 ], {
        backgroundColor: "#fff",
        delay: 0.5
    })

    gsap.to(".side-text-item", {
        color: "#ababab",
        delay: 0.5
    })
    gsap.to(sideText.children[i], {
        color: "#fff",
        delay: 0.5
    })
}