import {useState} from "react";
import React from 'react'

const Button = ({ placement, round, children, additionalClasses}) => {
    const [isHovered, setIsHovered]= useState(false);
    const onMouseEnter = () => setIsHovered (true);
    const onMouseLeave = () => setIsHovered (false);
    const roundButtonClassname = round ? 'btn-round':"";
    const placementClassname = placement === "left" ? "left" : "right";
    const hoverClassNames = isHovered ? "btn-white":"btn-orange";
    
    const classnames =`btn ${additionalClasses} ${roundButtonClassname} ${placementClassname} ${hoverClassNames}`;
    
    return (
    <button className={classnames} onMouseEnter={onMouseEnter} onMouseLeave= {onMouseLeave}>{children}</button>
  )
}

export default Button