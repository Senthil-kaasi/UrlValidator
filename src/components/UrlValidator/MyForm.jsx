import React from "react";
import {Button,Container,Form} from "react-bootstrap";
import MyFormGroup from "./MyFormGroup";


function MyForm(props){
    return(
        <Container style={{"width":"400px"}}>
            <Form>
                <MyFormGroup 
                    label="Domain"
                    type="text"
                    placeholder="Enter the Domain name"
                />
                <MyFormGroup 
                    label="Path"
                    type="text"
                    placeholder="Enter the Path variables separated by space"
                />     
                <Form.Group className="mb-3">
                    <Form.Label>Method</Form.Label>
                    <Form.Select>
                        <option>GET</option>
                        <option>POST</option>
                        <option>PUT</option>
                        <option>DELETE</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Body</Form.Label>
                    <Form.Control 
                        as="textarea"
                        placeholder="Enter the body"
                        style={{"height":"100px"}}
                    />    
                </Form.Group>  
                <Button varient="success" className="mb-3">Validate</Button>            
            </Form>
        </Container>
    )
}

export default MyForm;