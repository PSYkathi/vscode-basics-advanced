// console.log(document);

document.title = "DOM"
let he = document.querySelector('#he')
// console.log(he.outerHTML);

let ho = document.querySelector('.ho')
// console.log(ho.outerHTML);

// console.log(he.innerText); hello

// console.log(he.innerText); 'hello'
// console.log(he.textContent); ' hello'  


// he.innerText = "hollo" + "<br>" + "vibe"  <BR> DON'T work
// he.textContent = "hollo" + "<br>" + "vibe"  <BR> DON'T work
// he.innerHTML = "hollo" + "<br>" + "vibe" <BR> WORKS



// ho.innerText = "vibe" + "podo" no output


// ho.style.color = "red" yes the color turns red.  for some reason if [console.log(document); document.title = "DOM"] both of these are activated then  [ho.innerText = "vibe" + "podo" no output] this may work

// ho.style.backgroundColor = "red" the bgC turns red

// function colorchange(){
//     let num = Math.random()
//     console.log(num)
// }

// let color = ["red","blue","green"]

// function colorchange(){
//     let num = parseInt(Math.random()*3)
//     console.log(num);
//     ho.style.color = color[num]
// }

