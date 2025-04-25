import { useEffect, useState } from "react";


const Screen = ({
    className,
    value,
}) => {

    const [defaultValue , setDefaultValue] = useState(value)

    useEffect( () => {
        setDefaultValue(value)
    } , [value])

    return(
        <div
        className={className} 
        > {defaultValue}</div>
    )
}

export default Screen;
