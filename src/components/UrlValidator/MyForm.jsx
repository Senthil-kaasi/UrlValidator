import React from "react";
import {Button,Container,Form} from "react-bootstrap";


function MyForm(props){
    return(
        <Container style={{"width":"400px"}}>
            <Form>
                <Form.Group className="mb-3">
                    <Form.Label>Domain</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter the Domain Url"    
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Path</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter the Path variable seperated by space"    
                    />
                </Form.Group>      
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
                <Button varient="primary" className="mb-3">Validate</Button>            
            </Form>
        </Container>
    )
}

export default MyForm;