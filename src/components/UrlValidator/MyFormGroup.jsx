import React from "react";
import {Form} from "react-bootstrap";

function MyFormGroup(props){
    
    const {label,type,placeholder,flag} = props;
    
    return (
        <Form.Group className="mb-3">
            <Form.Label>{label}</Form.Label>{
                flag ? <Form.Control 
                            as={type}
                            placeholder={placeholder} /> :  <Form.Control type={type} placeholder={placeholder} />
            }
        </Form.Group>
    )
}

export default MyFormGroup;