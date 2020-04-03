// burger
const hamburger = document.querySelector(".hamburger");

// ナブメニュー
const navMenus = document.querySelector(".nav-menus");

// ナブカバー（白色）
const navCover = document.querySelector(".nav-cover");

// burgerのそれぞれの線
const line = document.querySelectorAll(".line");
const line1 = document.querySelector(".line-1")
const line2 = document.querySelector(".line-2")
const line3 = document.querySelector(".line-3")

// wrapper
const wrapper = document.querySelector(".wrapper");

// スクリーンの幅
const screen = document.querySelector("body");
const screenWidth = screen.clientWidth;


// 条件
let burgerON = false;

// スクリーンの幅が1028px以上なら、ナビが初めから見れるようにする
if(screenWidth > 1028){
    anime({
        targets: navMenus,
        translateX:["0"],
        easing: "linear",
        opacity: [1],
        duration: 0
    })
}


hamburger.addEventListener("click", navOn);



function navOn(){
    if(burgerON === false){    
        line1.classList.add("line-1_active");
        line2.classList.add("line-2_active");
        line3.classList.add("line-3_active");
        wrapper.classList.add("nav-active");
        openNavCover();
        openNavMenus();
        burgerON = true;
    }else {
        line1.classList.remove("line-1_active");
        line2.classList.remove("line-2_active");
        line3.classList.remove("line-3_active");
        wrapper.classList.remove("nav-active");
        closeNavCover();
        closeNavMenus();
        burgerON = false;
    }
    
}



// nav-coverの白地開く
function openNavCover(){
    anime({
        targets: navCover,
        opacity: {
            value: 1,
            duration: 500,
        },
        // duration: 10,
        translateX: {
            value: ["100%", "0"],
            duration: 10,
        },
        easing: "linear"
    });
}

// nav-coverの白地閉まる
function closeNavCover(){
    anime({
        targets: navCover,
        opacity: {
            value: 0,
            duration: 500,
        },
        // duration: 10,
        translateX: {
            value: ["0", "100%"],
            duration: 10,
            delay: 500,
        },
        easing: "linear"
    });
}

// nav-menus開ける
function openNavMenus(){
    anime({
        targets: navMenus,
        translateX: {
            value: ["200%", "0"],
            duration: 10,
        },
        opacity: {
            value: [0, 1],
            duration: 500
        },
        easing: "linear",
    })
}

// nav-menus閉じる
function closeNavMenus(){
    anime({
        targets: navMenus,
        translateX: {
            value: ["0", "-200%"],
            duration: 10,
            delay: 500,
        },
        opacity: {
            value: [1, 0],
            duration: 400
        },
        easing: "linear",
    })
}


