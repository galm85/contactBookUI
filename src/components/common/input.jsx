import React from 'react';

const Input = ({name,placeholder,type ,...rest}) => {
    return ( 
        <input {...rest} name={name} id={name} placeholder={placeholder} type={type} className="form-control col-8 mt-5"></input>
     );
}
 
export default Input;
