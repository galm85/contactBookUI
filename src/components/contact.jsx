import React from 'react';
import Form from './common/form';


class Contact extends Form {
    state = {}
    render() {
        
       return (
       <div className="container">

            <form>
                {this.renderInput('firstName','First Name')}
                {this.renderInput('lastName','Last Name')}
                {this.renderInput('email','Email','email')}
                {this.renderButton('send')}
            </form>
         </div>
       )}
}
 
export default Contact;