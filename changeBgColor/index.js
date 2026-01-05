const randomColor = function(){
    let color="#"
    const hex = "0123456789ABCDE"

    for(let i=0;i<6;i++){
        color += hex[Math.floor(Math.random()*16)]
    }
    return color;
};
let interval = null;
function changeBgColor() {
        document.body.style.backgroundColor=randomColor();
    }

const startChangingColor = function(){
    
    if(interval===null){
    interval = setInterval(changeBgColor,500)
    }
    
}

const stopChangingColor = function(){
    clearInterval(interval)
    interval = null;
}

document.querySelector('#start').addEventListener('click',startChangingColor)
document.querySelector('#stop').addEventListener('click',stopChangingColor)
