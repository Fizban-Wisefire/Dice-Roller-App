console.log('This is JavaScript')

const roll = document.getElementById('roll')
console.log(roll.innerText)

function d4(){
    let dieroll = Math.floor(Math.random() *4 +1)
    console.log(roll)
    roll.textContent = dieroll
}
function d6(){
    let dieroll = Math.floor(Math.random() *6 +1)
    console.log(dieroll)
    roll.textContent = dieroll
}
function d8(){
    let dieroll = Math.floor(Math.random() *8 +1)
    console.log(dieroll)
    roll.textContent = dieroll
}
function d10(){
    let dieroll = Math.floor(Math.random() *10 +1)
    console.log(dieroll)
    roll.textContent = dieroll
}
function d12(){
    let dieroll = Math.floor(Math.random() *12 +1)
    console.log(dieroll)
    roll.textContent = dieroll
}
function d20(){
    let dieroll = Math.floor(Math.random() *20 +1)
    console.log(dieroll)
    roll.textContent = dieroll
}
function d100(){
    let dieroll = Math.floor(Math.random() *100 +1)
    console.log(dieroll)
    roll.textContent = dieroll
}