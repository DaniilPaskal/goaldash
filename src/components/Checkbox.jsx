import { useState } from "react";

const Checkbox = ({ name, handleChange, checked }) => {
    return (
        <input type='checkbox' className='checkbox' id={name} name={name} checked={checked} onChange={handleChange} />
    )
}

export default Checkbox;