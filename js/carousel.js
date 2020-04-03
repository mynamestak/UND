// handwriting names
const handwritingNames = document.querySelector(".handwriting-names");
const handwritingName = document.querySelectorAll(".handwriting-name");
const handwritingNameWidth = handwritingName[0].clientHeight + 20;

// kanji names
const kanjiNames = document.querySelector(".kanji-names");
const kanjiName = document.querySelectorAll(".kanji-name");
const kanjiNameWidth = kanjiName[0].clientHeight + 20;

//counter
let counter = 0;

//pageインジケーター
const circles = document.querySelectorAll(".page-circle");

// house images
const houseImageContainer = document.querySelector(".house-images");
const houseImages = document.querySelectorAll(".house-image img");
const houseImageHeight = houseImages[0].clientHeight;


//body
const body = document.querySelector("body");


//リロード時の設定
//見えてない家の名前をopacity=0にして消しておく
for(let i = 0; i <= handwritingName.length -1; i++){
    if(i == 0){
    }else{
        handwritingName[i].style.opacity = "0";
    }
}

for(let i = 0; i <= kanjiName.length -1; i++){
    if(i == 0){
    }else{
        kanjiName[i].style.opacity = "0";
    }
}

for(let i = 0; i <= houseImages.length -1; i++){
    if(i == 0){
    }else{
        houseImages[i].style.opacity = "0";
    }
}


// １番目のpageインジケーターのbackgroundcolor をredにしておく。
circles[0].style.backgroundColor = "red";


//mousewheelの発火回数を少なくする
function debounce(func, wait = 200, immediate = true) {
    var timeout;
    return function() {
      var context = this, args = arguments;
      var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  };




body.addEventListener("mousewheel", debounce(wheeled, 500));


// mousewheelの発火条件
function wheeled(){
    let amoutOfWheel = event.wheelDelta;
    if(amoutOfWheel > 0){
        console.log(amoutOfWheel);
        goDownBtn();
    }else{
        console.log(amoutOfWheel);
        goUpBtn();
    }
}


function goUpBtn(){
    if(counter < handwritingName.length -1) {
        counter++;
        // handwriting nameの動作
        anime ({
            targets: handwritingNames,
            duration: 100,
            translateY: [-handwritingNameWidth * counter] +"px",
            delay: 900,
            easing: "easeInOutQuad"
        })
        anime({
            targets: handwritingName[counter-1],
            duration: 800,
            opacity: 0,
            easing: "linear"
        })
        anime({
            targets: handwritingName[counter],
            duration: 800,
            opacity: 1,
            delay: 1000,
            easing: "linear"
        })


        //kanji name の動作
        anime ({
            targets: kanjiNames,
            duration: 100,
            translateY: [-kanjiNameWidth * counter] +"px",
            delay: 900,
            easing: "easeInOutQuad"
        })
        anime({
            targets: kanjiName[counter-1],
            duration: 800,
            opacity: 0,
            easing: "linear"
        })
        anime({
            targets: kanjiName[counter],
            duration: 800,
            opacity: 1,
            delay: 1000,
            easing: "linear"
        })


        // page circlesの動作
        anime({
            targets: circles[counter],
            backgroundColor: "#e54915",
            duration: 800,
            delay: 1000,
            easing: "easeInOutQuad"
        })
        anime({
            targets: circles[counter-1],
            backgroundColor: "#ffffff",
            duration: 1000,
            easing: "easeInOutQuad",
        })

        // house imageの動作
        anime({
            targets: houseImages,
            translateY: [-houseImageHeight * counter] +"px",
            duration: 100,
            delay: 900,
            easing: "linear"
        })
        anime({
            targets: houseImages[counter-1],
            opacity: 0,
            duration: 800,
            easing: "easeInQuart"
        })
        anime({
            targets: houseImages[counter],
            opacity: {
                value: "1",
                duration: 800
            },
            delay: 1000,
            easing: "easeInQuart",
        })

        
        }else{
        counter = 0;
        // handwriting name の動作
        anime ({
            targets: handwritingNames,
            duration: 100,
            translateY: [-handwritingNameWidth * counter] +"px",
            delay: 900,
            easing: "easeInOutQuad"
        })
        
        anime({
            targets: handwritingName[counter+4],
            duration: 800,
            opacity: 0,
            easing: "linear"
        })
        
        anime({
            targets: handwritingName[counter],
            duration: 800,
            opacity: 1,
            delay: 1000,
            easing: "linear"
        })

        //kanji name の動作
        anime ({
            targets: kanjiNames,
            duration: 100,
            translateY: [-kanjiNameWidth * counter] +"px",
            delay: 900,
            easing: "easeInOutQuad"
        })
        anime({
            targets: kanjiName[counter+4],
            duration: 800,
            opacity: 0,
            easing: "linear"
        })
        anime({
            targets: kanjiName[counter],
            duration: 800,
            opacity: 1,
            delay: 1000,
            easing: "linear"
        }) 
        anime({
            targets: circles[counter+4],
            backgroundColor: '#e54915',
        })


        // page circlesの動作
        anime({
            targets: circles[counter],
            backgroundColor: "#e54915",
            duration: 800,
            delay: 1000,
            easing: "easeInOutQuad"
        })
        anime({
            targets: circles[counter+4],
            backgroundColor: "#ffffff",
            duration: 1000,
            easing: "easeInOutQuad",
        })

        // house imageの動作
        anime({
            targets: houseImages,
            translateY: [-houseImageHeight * counter] +"px",
            duration: 100,
            delay: 900,
            easing: "easeInOutQuad"
        })
        anime({
            targets: houseImages[counter+4],
            opacity: 0,
            duration: 800,
            easing:"easeInQuart"
        })
        anime({
            targets: houseImages[counter],
            opacity: {
                value: "1",
                duration: 800
            },
            delay: 1000,
            easing: "easeInQuart",
        })
        
        

    }
}


function goDownBtn(){
    if(counter > 0 ){
        counter--;
        // handwriting nameの動作
        anime ({
            targets: handwritingNames,
            duration: 100,
            translateY: [-handwritingNameWidth * counter] +"px",
            delay: 900,
            easing: "easeInOutQuad"
        })
        anime({
            targets: handwritingName[counter+1],
            duration: 800,
            opacity: 0,
            easing: "linear"
        })
        anime({
            targets: handwritingName[counter],
            duration: 800,
            opacity: 1,
            delay: 1000,
            easing: "linear"
        })

        // kanji nameの動作
        anime ({
            targets: kanjiNames,
            duration: 100,
            translateY: [-kanjiNameWidth * counter] +"px",
            delay: 900,
            easing: "easeInOutQuad"
        })
        anime({
            targets: kanjiName[counter+1],
            duration: 800,
            opacity: 0,
            easing: "linear"
        })
        anime({
            targets: kanjiName[counter],
            duration: 800,
            opacity: 1,
            delay: 1000,
            easing: "linear"
        })

        // page circlesの動作
        anime({
            targets: circles[counter],
            backgroundColor: "#e54915",
            duration: 800,
            delay: 1000,
            easing: "easeInOutQuad"
        })
        anime({
            targets: circles[counter+1],
            backgroundColor: "#ffffff",
            duration: 1000,
            easing: "easeInOutQuad",
        })

        // house imageの動作
        anime({
            targets: houseImages,
            translateY: [-houseImageHeight * counter] +"px",
            duration: 100,
            delay: 900,
            easing: "linear"
        })
        anime({
            targets: houseImages[counter+1],
            opacity: 0,
            duration: 800,
            easing: "easeInQuart"
        })
        anime({
            targets: houseImages[counter],
            opacity: {
                value: "1",
                duration: 800
            },
            delay: 1000,
            easing: "easeInQuart",
        })
        
        
    }else{
        counter = handwritingName.length-1;
            // handwriting nameの動作
            anime ({
                targets: handwritingNames,
                duration: 100,
                translateY: [-handwritingNameWidth * counter] +"px",
                delay: 900,
                easing: "easeInOutQuad"
            })
            anime({
                targets: handwritingName[counter-4],
                duration: 800,
                opacity: 0,
                easing: "linear"
            })
            anime({
                targets: handwritingName[counter],
                duration: 800,
                opacity: 1,
                delay: 1000,
                easing: "linear"
            })

            // kanji nameの動作
            anime ({
                targets: kanjiNames,
                duration: 100,
                translateY: [-kanjiNameWidth * counter] +"px",
                delay: 900,
                easing: "easeInOutQuad"
            })
            anime({
                targets: kanjiName[counter-4],
                duration: 800,
                opacity: 0,
                easing: "linear"
            })
            anime({
                targets: kanjiName[counter],
                duration: 800,
                opacity: 1,
                delay: 1000,
                easing: "linear"
            }) 
            
            // page circlesの動作
            anime({
                targets: circles[counter],
                backgroundColor: "#e54915",
                duration: 800,
                delay: 1000,
                easing: "easeInOutQuad"
            })
            anime({
                targets: circles[counter-4],
                backgroundColor: "#ffffff",
                duration: 1000,
                easing: "easeInOutQuad",
            })

            // house imageの動作
            anime({
                targets: houseImages,
                translateY: [-houseImageHeight * counter] +"px",
                duration: 100,
                delay: 900,
                easing: "linear"
            })
            anime({
                targets: houseImages[counter-4],
                opacity: 0,
                duration: 800,
                easing: "easeInQuart"
            })
            anime({
                targets: houseImages[counter],
                opacity: {
                    value: "1",
                    duration: 800
                },
                delay: 1000,
                easing: "easeInQuart",
            })


    }
}

