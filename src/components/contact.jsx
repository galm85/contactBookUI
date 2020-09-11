import React, { Component } from 'react';

import Input from './common/input';


class Contact extends Component {
    state = {  }
    render() { 
        return ( 
        <div>
        <Input name="firstName" placeholder="First Name"  />
        </div>
        );
    }
}
 
export default Contact;