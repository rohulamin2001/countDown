
const display = document.getElementById("display")
const [decreaseBtn,resetBtn,increaseBtn] = document.getElementsByTagName("button")

let count = 0;

increaseBtn.addEventListener("click",function(){
    count++;
    display.innerHTML  = count;
    if(count>0){
        display.style.color = 'green'
    }else if(count === 0){
        display.style.color = "black"
    }
})
resetBtn.addEventListener("click",function(){
    display.innerHTML = 0
    count = 0
    if(count === 0) display.style.color = '#000000'
})
decreaseBtn.addEventListener("click",function(){
    count--;
    display.innerHTML = count;
    if(count<0){
        display.style.color = "red"
    }else if(count === 0){
        display.style.color = "black"
    }
})
