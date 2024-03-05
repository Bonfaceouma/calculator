const calculator = document.querySelector('.js-calculator-button');

      

const keys =calculator.querySelector('.js-key-button');


console.log(keys);

let display= calculator.querySelector('.js-display')




console.log(display);

keys.addEventListener('click',e=>{
if(e.target.matches('button')){
  // Do something

  
 // Use the data action attribute to determine the type of key being pressed

const key =e.target;

 const action = key.dataset.action;

 const keyContent = key.innerHTML;
 const displayedNumber = display.innerHTML;

 const previousKeyType = calculator.dataset.previousKeyType
 
 if(!action){
  if(displayedNumber==='0'||previousKeyType==='operator'){
    display.innerHTML = keyContent;
  }else{
    display.innerHTML = displayedNumber+keyContent;
  }

 }
 if(action==='decimal'){
  display.innerHTML = displayedNumber + '.'

 }
 

     
if(action ==='Add'||
 action==='subtract'||
 action === 'multiply'||
 action === 'divide'){
  calculator.dataset.previousKeyType = 'operator'
  calculator.dataset.firstValue = displayedNumber
  calculator.dataset.operator =action
  
  }

  if (action=== 'calculate'){
    const firstValue =calculator.dataset.firstValue;
    const operator = calculator.dataset.operator;
    const secondValue =displayedNumber;

    display.innerHTML = calculate(firstValue,operator,secondValue);
  }


    }
    

  }          
         
           

)
const calculate =(n1,operator,n2)=>{
let result = '';

if (operator ==='Add'){
  result = parseFloat(n1)+parseFloat(n2);

} else if(operator ==='substract'){
  result = parseFloat(n1)-parseFloat(n2);
}else if (operator ==='multiply'){
  result = parseFloat(n1)*parseFloat(n2);
}else if(operator === 'divide'){
  result = parseFloat(n1)/parseFloat(n2);

}
return result;

}





