import { useState } from "react"


const ToggleButton = ({
  className,
  Mover
}) => {
     


    return(
        <div
        className='flex justify-center items-center'
        >
          <button 
          className={`h-[70%] w-[100%] bg-blue-300 border-2 border-black rounded-full transition-all duration-3000 `}
          onClick={Mover}

          >
            <div
            className={`h-[100%] w-[50%] bg-black border-2 border-white rounded-full transform transition-transform duration-500 ${className} `}
            
            > </div>
          </button>
        </div>
    )
}

export default ToggleButton;