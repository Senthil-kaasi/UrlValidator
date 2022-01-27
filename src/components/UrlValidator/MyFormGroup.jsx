import React from "react";
import {Form} from "react-bootstrap";

function MyFormGroup(props){
    
    const {label,type,placeholder,flag,setUserInput,isDisabled} = props;
    
    const handleChanges = function(event){
        const {value,name} = event.target;
        setUserInput((prev)=>{
            return {
                ...prev,
                [name]:value
            }
        })
    }

    return (
        <Form.Group className="mb-3">
            <Form.Label>{label}</Form.Label>{
                flag ? <Form.Control 
                            disabled={isDisabled}
                            as={type}
                            name={label.toLowerCase()}
                            placeholder={placeholder}
                            onChange={handleChanges}
                            /> :  
                            <Form.Control 
                                onChange={handleChanges}
                                name={label.toLowerCase()} 
                                type={type} 
                                placeholder={placeholder} />
            }
        </Form.Group>
    )
}

export default MyFormGroup;