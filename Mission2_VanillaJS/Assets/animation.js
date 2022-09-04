function crescentAnimation(){
    window.addEventListener("load", (event) => {
        let distance = 0
        let direction = 1
        let timer = setInterval(()=>{
            crescent.style.top = distance + "px"
            distance = distance + 0.05 * direction
            if (distance >= 20){
                direction = -1
            } else if (distance <= 0){
                direction = 1
            }
        })
    })
}

function moonAnimation(){
    window.addEventListener("load", (event) => {
        let angle = 1
        let timer = setInterval(()=>{
            moon.style.transform = 'rotate('+ angle + 'deg)'
            angle += 0.1
            if(angle == 360) angle = 0;
        })
    })
}

function fogAnimation(){
    window.addEventListener("load", (event) => {
        let distance = 0
        let direction = -1
        let timer = setInterval(() => {
            fog.style.transform = 'translate('+ distance + '%)'
            distance = distance + 0.05 * direction
            if(distance <= -50){
                direction = 1
            } else if (distance >= 0){
                direction = -1
            }
        })
    })
}

function bgmControl() {
    let status = 0
    let played = 0
    window.addEventListener("click", (event) => {
        if(status == 0){
            status = 1
            bgm.play()
            if(played == 0) {
                bgm.volume = 0.1
                played = 1
            }
            document.getElementById("command").innerHTML = "Click to pause bgm..."
            document.getElementById("volume").innerHTML = bgm.volume.toFixed(1) * 100 + "%"
            let opacity = 0
            let fadeIn = setInterval(() => {
                opacity += 0.05
                volContainer.style.opacity = opacity
                info.style.opacity = opacity
                if (opacity >= 1) clearInterval(fadeIn);
            }, 25)
            
        } else{
            status = 0
            bgm.pause()
            document.getElementById("command").innerHTML = "Click to play bgm..."
            let opacity = 1
            let fadeOut = setInterval(() => {
                opacity -= 0.05
                volContainer.style.opacity = opacity
                info.style.opacity = opacity
                if (opacity <= 0) clearInterval(fadeOut);
            }, 25)
        }
    })
    window.addEventListener("wheel", (event) => {
        if(event.deltaY < 0){
            bgm.volume += 0.1
        } else if (event.deltaY > 0) {
            bgm.volume -= 0.1
        }
        document.getElementById("volume").innerHTML = bgm.volume.toFixed(1) * 100 + "%"
    })
}

function bgLoad(){
    window.addEventListener("load", (event) => {
        let distance = -200
        let moveIn = setInterval(() => {
            stones.style.bottom = distance + "px"
            moon.style.top = distance + "px"
            distance += 1
            if (distance == 0) clearInterval(moveIn);
        }, 5)
        
        let opacity = 0
        let fadeIn = setInterval(() => {
            opacity += 0.05
            command.style.opacity = opacity
            if (opacity == 1) clearInterval(fadeIn);
        }, 50)
    })
}


bgLoad()
bgmControl()
crescentAnimation()
moonAnimation()
fogAnimation()
