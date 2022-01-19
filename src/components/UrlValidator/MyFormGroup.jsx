import React from "react";
import {Form} from "react-bootstrap";

function MyFormGroup(props){
    
    const {label,type,placeholder} = props;
    
    return (
        <Form.Group className="mb-3">
            <Form.Label>{label}</Form.Label>
            <Form.Control type={type} placeholder={placeholder} />
        </Form.Group>
    )
}

export default MyFormGroup;