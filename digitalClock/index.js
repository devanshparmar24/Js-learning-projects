// using getElementById just for change
const clock = document.getElementById("clock");


setInterval(()=>{
    let date = new Date();
    // console.log(date.toLocaleTimeString());  to check clock working
    clock.innerHTML = date.toLocaleTimeString()
},1000)