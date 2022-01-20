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
                    flag={false}
                />
                <MyFormGroup 
                    label="Path"
                    type="text"
                    placeholder="Enter the Path variables separated by space"
                    flag={false}
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
                <MyFormGroup 
                    flag={true}
                    label="Body"
                    placeholder="Enter body as object"
                    type="textarea"
                />
                <Button varient="success" className="mb-3">Validate</Button>            
            </Form>
        </Container>
    )
}

export default MyForm;