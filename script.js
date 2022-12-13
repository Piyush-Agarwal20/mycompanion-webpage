let slides=document.getElementsByClassName("slider")
let btns = document.getElementsByClassName("slidebtn");

// to put all stacked slides into oneline
Array.from(slides).forEach((slide,index) => {
    slide.style.left = `${index*100}%`;
});

//  intial the first circle
btns[0].style.backgroundColor = "#f1e0e0";
var count = 0;
const goprev = ()=>{
    if(count == 0){
        console.log("getnot get back");
        return ;
    }
    Array.from(btns).forEach((btn)=>{
        btn.style.backgroundColor = "";
    });
    count--;
    callme();
}
const gonxt =()=>{
    if(count == 3){
        console.log("getnot get front");
        return ;
    }
    Array.from(btns).forEach((btn)=>{
        btn.style.backgroundColor = "";
    });
    count ++;
    callme();
}
const callme = () => {
    Array.from(slides).forEach((slide,index) => {
        slide.style.transform = `translateX(-${count*100}%)`;
        btns[count].style.backgroundColor ="#f1e0e0"
    });
}


let slides2 = document.getElementsByClassName("slider2")
let btns2   = document.getElementsByClassName("slidebtn2");

Array.from(slides2).forEach((slide,index) => {
    slide.style.left = `${index*100}%`;
});

btns2[0].style.backgroundColor = "#f1e0e0";
var count2 = 0;
const goprev2 = ()=>{
    if(count2 == 0){
        console.log("getnot get back");
        return ;
    }
    Array.from(btns2).forEach((btn)=>{
        btn.style.backgroundColor = "";
    });
    count2--;
    callme2();
}

const gonxt2 =()=>{
    if(count2 == 2){
        console.log("getnot get front");
        return ;
    }
    Array.from(btns2).forEach((btn)=>{
        btn.style.backgroundColor = "";
    });
    count2++;
    callme2();
}
const callme2 = () => {
    Array.from(slides2).forEach((slide,index) => {
        slide.style.transform = `translateX(-${count2*100}%)`;
        btns2[count2].style.backgroundColor ="#f1e0e0"
    });
}

console.log(slides2);