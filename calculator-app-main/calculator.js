const PreviousOperandTextElement = document.getElementById('previous-operand')
const CurrentOperandTextElement = document.getElementById('current-operand')
const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const resetbutton = document.querySelector('[data-reset]')
const resultbutton = document.querySelector('[data-result]')
const deletebutton = document.querySelector('[data-delete]')

class Calculator{
    constructor(PreviousOperandTextElement,CurrentOperandTextElement){
        this.PreviousOperandTextElement = PreviousOperandTextElement
        this.CurrentOperandTextElement = CurrentOperandTextElement
        this.clear()
    }
    clear(){
        this.CurrentOperand = ''
        this.PreviousOperand = ''
        this.resultOperation = ''
        this.operation = undefined
        this.symbol = ''
        this.PreviousOperandTextElement.innerText = ""
        this.CurrentOperandTextElement.innerText = ""    
    } 

    delete(){
        let current = this.CurrentOperand
        let previous = this.PreviousOperand
        let operation = this.operation
        console.log(previous, "sep", operation, "sep",current)
        // number blank undefined
        // when there is 55
        if(current !== "" && previous == "" && (operation == undefined || operation == "")){
            console.log(typeof(this.CurrentOperand))
            this.CurrentOperand = current.slice(0, -1);
            console.log("current")
        }
        // after 55+ (<--+ get deleted, safeguard)
        else if(current == "" && (operation == "" || operation == undefined) && previous !== ""){
            this.PreviousOperand = previous.slice(0, -1);
        }
        // when there is 55+
        else if(current == "" && operation !== '' && previous !== ""){
                this.operation = ''
                this.symbol = ''
        }
        // when there is 55+5...
        else if(current !== "" && operation !== "" && previous !== ""){
            this.CurrentOperand = current.slice(0,-1)
        }
        this.Result()
        
    }
    appendNumber(number){
        if(number == '.' && this.CurrentOperand.includes(".") && this.currentOperand[0]==".") return 
        if(number !=="" && this.PreviousOperand !== "" & this.resultOperation !== "" && this.operation == ''){
            this.resultOperation = ''
            this.PreviousOperand = ''
        }
        this.CurrentOperand += number
        this.Result()
    }
    Operation(operation){
        console.log("You are in operation")
        this.operation = operation
        var symbol = ''
        switch(operation){
            case "*":
                this.symbol = "x"
                break;
            case "+":
                this.symbol = "+"
                break;
            case "-":
                this.symbol = "-"
                break;
            case "/":
                this.symbol = "/"
                break;
        }
        if(this.currentOperand == '') return

        if(this.PreviousOperand !== '') return this.Result()
        this.PreviousOperand = this.CurrentOperand
        this.CurrentOperand = ''
        this.PreviousOperandTextElement.innerText = this.PreviousOperand + this.symbold
    }
    Result(){
        switch(this.operation){
            case "*":
                this.resultOperation = (this.checkFloat(this.CurrentOperand) * this.checkFloat(this.PreviousOperand)).toString()
                break
            case "+":
                this.resultOperation = (this.checkFloat(this.CurrentOperand) + this.checkFloat(this.PreviousOperand)).toString()
                break;
            case "-":
                this.resultOperation = (this.checkFloat(this.PreviousOperand) - this.checkFloat(this.CurrentOperand)).toString()
                break;
            case "/":
                this.resultOperation = (this.checkFloat(this.PreviousOperand) / this.checkFloat(this.CurrentOperand)).toString()
                break;
            
        }
        return this.resultOperation

    }
    updateDisplay(){
        console.log(parseInt(this.PreviousOperand) + parseInt(this.CurrentOperand))
        this.PreviousOperandTextElement.innerText = this.PreviousOperand === "" ? this.CurrentOperand : (this.PreviousOperand + this.symbol + this.CurrentOperand)
        this.CurrentOperandTextElement.innerText = ((this.PreviousOperand + this.CurrentOperand) === '' || isNaN(parseInt(this.PreviousOperand) + parseInt(this.CurrentOperand))) ? this.CurrentOperand : (this.resultOperation)

    }
    finalResult(){
        this.PreviousOperandTextElement.innerText = this.resultOperation
        this.CurrentOperandTextElement.innerText = ""
        this.PreviousOperand = this.resultOperation
        this.CurrentOperand = ''
        this.operation = ''
        this.symbol = ''
    }
    checkFloat(number){
        if(parseFloat(number)){
            return parseFloat(number)
        }else if(parseInt(number)){
            return parseInt(number)
        }else{
            return 0
        }
    }

}

const calculator = new Calculator(PreviousOperandTextElement,CurrentOperandTextElement)

//Button.addEventListener('click',calculating)
numberButtons.forEach( button=>{
    button.addEventListener('click', ()=>{
        calculator.appendNumber(button.dataset.value)
        calculator.updateDisplay()
    })
})

operationButtons.forEach( button=>{
    button.addEventListener('click', ()=>{
        calculator.Operation(button.dataset.value)
        calculator.updateDisplay()

    })
})

resultbutton.addEventListener('click',()=>{
    calculator.finalResult()
})
deletebutton.addEventListener('click',()=>{
    calculator.delete()
    calculator.updateDisplay()

})
resetbutton.addEventListener('click',()=>{
    calculator.clear()
    console.log("reset")
})
