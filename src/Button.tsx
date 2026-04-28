import React from 'react';


interface ButtonProps{
    lable: string;
    onClick: () => void;

}

const Button: React.<ButtonProps> = ({lable, onClick}) => {
    return (
        <button 
    onClick={onClick}
    );
}


export default Button;
