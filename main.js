
const button = document.getElementById('bottone');
const image =document.getElementById('img');

// image.src = './img/yellow_lamp.png';
// button.innerText = "spegni la lampadina";

button.addEventListener("click",function(){
    console.log("bottone cliccato",image.src)

    if(image.src.includes("white_lamp.png")){
        image.src = './img/yellow_lamp.png';
        button.innerText = "spegni la lampadina";
    }else{
        image.src = './img/white_lamp.png';
        button.innerText = "accendi la lampadina";
    }
})