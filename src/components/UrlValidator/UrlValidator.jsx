import React,{useState} from "react";
import MyForm from "./MyForm";
import "bootstrap/dist/css/bootstrap.min.css";
import "./components.css"

function UrlValidator(){
    const [url,setUrl] = useState("");
    const [color,setColor] = useState("green");
    const [isClicked,setIsClicked] = useState(false);
    
    const customStyle = {
        backgroundColor:color,
        textAlign:"center",
        color:"white"
    }
    
    return (
        <div 
            id="urlvalidator" 
            className="border rounded m-auto" 
            style={{"width":"400px"}}
        >
            <h1 className="m-2">Url Validator</h1>
            {isClicked
            &&
            <div 
                id="message" 
                className="m-2 border rounded"
                style={customStyle}
            >{url}</div>
            }
                <MyForm 
                    setIsClicked={setIsClicked}
                    setUrl={setUrl} 
                    setColor={setColor}   
                />
        </div>
       
    )
}

export default UrlValidator;