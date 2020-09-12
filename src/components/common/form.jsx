import React, { Component } from 'react';
import Input from './input';

class Form extends Component {

    renderInput(name,placeholder,type="text",...rest){
        return <Input {...rest} name={name} placeholder={placeholder} type={type}  />
    }


    renderButton(label){
        return <button className="btn btn-dark mt-5">{label}</button>
    }
   
    
}
 
export default Form;