import React from "react";
import MyForm from "./MyForm";
import "bootstrap/dist/css/bootstrap.min.css";
import "./components.css"

function UrlValidator(){
    return (
        <div 
            id="urlvalidator" 
            className="border rounded m-auto" 
            style={{"width":"400px"}}
        >
            <h1 className="m-2">Url Validator</h1>
                <div 
                    id="message" 
                    className="m-2 border rounded bg-primary"
                    style={{"height":"50px"}}
                ></div>
                <MyForm />
        </div>
       
    )
}

export default UrlValidator;