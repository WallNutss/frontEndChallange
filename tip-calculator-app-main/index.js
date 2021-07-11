const inputPrice = document.getElementById('input-price')
const tip = document.querySelector('.tip-select')
const tipAmount = document.querySelector('#tip-total-amount')
const totalAmount = document.querySelector('.total-amount')
const people = document.getElementById('num-of-people')
const customTips = document.getElementById('custom-tip')
const warning = document.querySelector('.span-warning')
let Price;
let Tips;
let People;

function price(){
    Price = inputPrice.value
    calculate(Price,Tips,People)
}

function tips(result){
    Tips = result
    calculate(Price,Tips,People)
}
function peoples(){
    People = parseInt(people.value)
    if(People==0){
        warning.classList.add('warning')
    }else{
        console.log(People)
        calculate(Price,Tips,People)
        warning.classList.remove('warning')
    }
    

}

function calculate(Price=undefined,Tips=undefined,People=undefined){

    resultTips = (Price/People)*Tips
    resultSum = (resultTips) + (Price/People)
    if(!Number.isFinite(resultTips) || Number.isNaN(resultTips)){
        tipAmount.innerHTML = "Rp."
        totalAmount.innerHTML = "Rp."
    }else{
        tipAmount.innerHTML = "Rp." + (!Number.isInteger(resultTips) ? parseFloat(resultTips).toFixed(2) : resultTips)
        totalAmount.innerHTML = "Rp." + (!Number.isInteger(resultSum) ? parseFloat(resultSum).toFixed(2) : resultSum)
    }
    
}
inputPrice.addEventListener('input',()=>{
    price()
})
tip.addEventListener('click',(e)=>{
    let result;
    console.log(e.target)
    if(e.target.innerText==""){
        tip.addEventListener('input',()=>{
            result = parseFloat(e.target.value)/100
            tips(result)
    })
    }else{
        percent = parseFloat(e.target.innerText)
        result = percent/100
        tips(result)
        for(let i=0;i<5;i++){
            tip.children[i].classList.remove('active')
        }
        e.target.classList.add('active')
    }
})

people.addEventListener('input',()=>{
    peoples()
})

const form = document.getElementById('main')
function Reset(){
    form.reset()
}

