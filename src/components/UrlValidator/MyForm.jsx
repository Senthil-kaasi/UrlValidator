import React,{useState} from "react";
import {Button,Container,Form} from "react-bootstrap";
import MyFormGroup from "./MyFormGroup";
import {makeHttpRequestUrl} from "./makeHttpRequestUrl.js";


function MyForm(props){
 
    const {setUrl,setIsClicked,setColor} = props;

    const [isDisabled,setIsDisabled] = useState(false);
    const [userInput,setUserInput]=useState({domain:"",path:"",body:""});
    const [option,setOption] = useState("GET");


    const validate = function(){
        setIsClicked(true);
        const {domain,path,body} = userInput;
        let url = makeHttpRequestUrl(domain,path,option,body);
        setUrl(url);
        if(url.includes("Error")|| url.includes("Invalid")){
            setColor("red");
        }else{
            setColor("green");
        }
    }

    const handleChange = function(e){
        const {value} = e.target;
        setOption(value);
        if(value === "DELETE"){
            setIsDisabled(true);
        }else{
            setIsDisabled(false);
        }
    }

    return(
        <Container style={{"width":"400px"}}>
            <Form>
                <MyFormGroup 
                    label="Domain"
                    type="text"
                    placeholder="Enter the Domain name"
                    flag={false}
                    setUserInput={setUserInput}
                />
                <MyFormGroup 
                    label="Path"
                    type="text"
                    placeholder="Enter the Path variables separated by space"
                    flag={false}
                    setUserInput={setUserInput}
                />     
                <Form.Group className="mb-3">
                    <Form.Label>Method</Form.Label>
                    <Form.Select
                        onChange={handleChange}
                    >
                        <option value="GET">GET</option>
                        <option value="POST">POST</option>
                        <option value="PUT">PUT</option>
                        <option value="DELETE">DELETE</option>
                    </Form.Select>
                </Form.Group>
                <MyFormGroup 
                    isDisabled = {isDisabled}
                    flag={true}
                    label="Body"
                    placeholder="Enter body as object"
                    type="textarea"
                    setUserInput={setUserInput}
                />
                <Button 
                    varient="secondary" 
                    className="mb-3"
                    onClick={validate}
                    >Validate</Button>            
            </Form>
        </Container>
    )
}

export default MyForm;