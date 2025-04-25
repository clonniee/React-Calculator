

function Button({
    value,
    onPress,
    className
}){
    
    return(
        <button
        className={`bg-[#6d6d6d] rounded-2xl active:scale-95 transition transform duration-100 text-2xl text-white border-black border-2 border-e-8 border-b-8 ${className} `}
        value={value}
        onClick={onPress}
        >
            {value}
        </button>
    )
}


export default Button;
