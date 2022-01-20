import React,{useState} from "react";
import MyForm from "./MyForm";
import "bootstrap/dist/css/bootstrap.min.css";
import "./components.css"

function UrlValidator(){
    const [url,setUrl] = useState("");
    return (
        <div 
            id="urlvalidator" 
            className="border rounded m-auto" 
            style={{"width":"400px"}}
        >
            <h1 className="m-2">Url Validator</h1>
                <div 
                    id="message" 
                    className="m-2 border rounded"
                    style={{"height":"50px"}}
                >{url}</div>
                <MyForm 
                    setUrl={setUrl}    
                />
        </div>
       
    )
}

export default UrlValidator;