import React from 'react';

function Button(props) {
    return (
        <div className={`bg-gray-800 text-white w-24 h-fit cursor-pointer p-2 min-h-[30px] rounded-md flex justify-center items-center mx-2 ${props.className}`}>
            <a href={props.link}>{props.name}</a>
        </div>
    );
}

Button.defaultProps ={
    link : "/#",
    name : "Button"
}

export default Button;