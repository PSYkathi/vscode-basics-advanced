let inp = document.querySelector('#input')
let out = document.querySelector('#output')


function display(digit){
    inp.innerHTML = inp.innerText + digit
}

function calculate(){
    let numbertobecalculated = inp.innerText
    console.log(typeof(numbertobecalculated))   
    console.log(eval('1+1'));
    let changenum = numbertobecalculated.replaceAll('x','*')
    out.innerHTML = eval(changenum)
    let div = numbertobecalculated.replaceAll('/','/')
    out.innerHTML = eval(div)




 // calculated result out.innerHTML = eval(inp.innerText)


}

function percentage(){
    let numbertofindpercentage = inp.innerText
    let twonumber = numbertofindpercentage.split('x')
    console.log(twonumber);
    let num1 = twonumber[1]/100;
    out.innerHTML = twonumber[0]*num1
    display('%')
}