const boxes = document.querySelectorAll('.box');
const loader = document.querySelector(".loading-text");
const body = document.body
const spinner = document.querySelector('.spinner')
const button = document.querySelector(".btn");
const input = document.querySelector(".input");
const search = document.querySelector(".search");
const image = document.querySelector(".bg");
let count = 0;




window.addEventListener('scroll', checkBoxes)
checkBoxes()
function checkBoxes  () {
  
   const windowHeight =  window.innerHeight - 180;
   boxes.forEach((box) => {
     const top = box.getBoundingClientRect().top
     if(top<windowHeight){
        box.classList.add('show')
     }else{
        box.classList.remove('show')
     }
   })
}


let precentage = setInterval(load, 30);

function load() {
  count++;
  if (count === 100) {
    clearInterval(precentage);
  }
  loader.innerText = `${count}%`;
  body.style.filter = `blur(${scale(count,0,100,30,0)}px)`;
  search.style.filter = `blur(${scale(count,0,100,30,0)}px)`;
  // loader.style.opacity = scale(count,0,100,1,0)
  // spinner.style.opacity = scale(count,0,100,1,0)
}

function scale(number, inMin, inMax, outMin, outMax) {
  return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}




button.addEventListener('click', () => {
  search.classList.toggle('active')
  input.focus()
})