const imgs = document.getElementById("img");
const img = document.querySelectorAll("#img img");

let idx = 0;

function slides(){
    idx++;


    if(idx > img.length -1){
    idx =0;
}

imgs.style.transform = `translateX(${-idx * 900}px)`;

}

setInterval(slides,2800);