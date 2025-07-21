let inp = document.querySelector('#input')

function display(alpha){
//  console.log('you have clicked the button');
//  console.log(alpha);
// console.log(inp);
//   inp.innerText = alpha
  inp.innerText = inp.innerText + alpha

}

function space(){
    inp.innerHTML = inp.innerText + '&nbsp'
}

function bkspace(){
    inp.innerText = inp.innerText.slice(0,-1)
}

function clears(){
    inp.innerText = ""
}