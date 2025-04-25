import { useEffect, useState } from 'react'
import Button from './components/button/Button'
import Screen from './components/screen/Screen'
import Togglebutton from './components/toggleButton/Togglebutton'
import { calculate } from './calculator/Calculation'
import './App.css'

function App() {
  const [value, setValue] = useState('0')
 

  useEffect( () => {
    setValue(value)
  } , [value])

  let operator = ['*', '/', '-', '+'] //operators for calculations.
  let decimal = '.'

  const updateScreen = (e) => {
    let digit = e.target.value
    

    if (digit === 'Ac') {
      setValue('0')

    }else if (digit === 'Ce') {
        if(value !== '0' && value.length > 1) {
          setValue(prev => prev.slice(0,-1))
          //checks for values having double digit 

        }else if ( value.length === 1) {
          setValue('0')
          // checks for value with single digit
          
        }  

    }else if (operator.includes(digit)) {
        if ( value === '0') {
          setValue(prev => prev + digit)
          //check for operator using at starting
          
        }else if (operator.includes(value[value.length - 1])) {
          setValue(value) 
          //checks for assigning double operators before a digit
          
        }else if ((value[value.length] - 2) === decimal) {
          setValue(prev => prev + '0')


        } else {
          setValue(prev => prev + digit)
        }      

    }else if (digit === decimal){

        if (operator.includes(value[value.length - 1])) {
          let decimalValue = '0.'
          setValue(prev => prev + decimalValue)
          //checks for placing decimal before operators

        }else if ( value[value.length - 1] === decimal ) {
          alert('Complete the digit first !')
          //cheks for double decimal i.e '0..'

        }else if (value === '0') {
          setValue(prev => prev + digit)
          //cheks for placing decimal at starting
          
        }else {
          let splittedValues = value.split(/[\+\-\*\/]/)
          let numHaveDecimal = splittedValues.some((num) => num.includes(decimal))
              if (numHaveDecimal) {
                alert('Please complete the digit it already have a decimal ')
                
              }else {
                setValue(prev =>prev + digit)
              }
         
        }    
     
    }else if (digit === '=') {
        if (value[value.length - 1] === decimal) {
          alert('Complete the digits')
          //

        }else if (operator.includes(value[value.length - 1])) {
          alert('Complete the digits')
          //

        }else if (value[value.length - 1] === '0' && value[value.length - 2] === '/'){
          alert("Can't divide with Zero ")
          //

        }else {
          setValue(String(calculate(value)))
        }

    }else {
    setValue( (prev) => {
      const updated = prev === '0' ? digit : prev + digit
      //update the first value with pressed digit .
      return updated

      })   
  }
    // console.log(value)  # for some checks 

  } 

   
  const [isOn, setIsOn] = useState(false)
  const toogleButton = () => {
    setIsOn(prev => !prev);
    //button to set theme 
  }

  return (
    <>
      <div
      className={`${isOn ? 'bg-white h-dvh w-dvw flex justify-center items-center' : 'bg-black h-dvh w-dvw flex justify-center items-center' }`}
      >

        <div
        className={`${isOn? 'bg-black' : 'bg-orange-500'} h-[500px] w-[350px] rounded-2xl flex flex-wrap justify-center`}
        >
          <div
          className='h-[30%] w-[95%]'
          >
            <Screen
            className='flex flex-wrap items-end flex-row-reverse bg-white h-[100%] w-[100%] mt-[10px] rounded-2xl text-[40px] border-4 border-black'
            value={value}
            
            />
          </div>

        <div
        className='grid grid-cols-4 grid-rows-5 gap-3 h-[65%] w-[95%] rounded-2xl'
        >
          <Button value='Ac' onPress={updateScreen}
            
          />
          <Button value='Ce'onPress={updateScreen}/>
          <Button value='/' onPress={updateScreen} />
          <Button value='*' onPress={updateScreen} />
          <Button value='7' onPress={updateScreen} />
          <Button value='8' onPress={updateScreen} />
          <Button value='9' onPress={updateScreen} />
          <Button value='-' onPress={updateScreen} />
          <Button value='4' onPress={updateScreen} />
          <Button value='5' onPress={updateScreen} />
          <Button value='6' onPress={updateScreen} />
          <Button value='+' onPress={updateScreen}  className='row-span-2' />
          <Button value='1' onPress={updateScreen} />
          <Button value='2' onPress={updateScreen} />
          <Button value='3' onPress={updateScreen} />
          <Button value='0' onPress={updateScreen} />
          <Button value='.' onPress={updateScreen} />
          <Button value='=' onPress={updateScreen} />
          <Togglebutton className={isOn ? 'translate-x-full' : 'translate-x-0'} Mover={toogleButton} />

        </div>

        </div>

        

      </div>
    </>
  )
}

export default App
