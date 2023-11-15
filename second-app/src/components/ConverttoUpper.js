import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

export default function ConvertIntoUpperCaseForm(props){
    var[text,setText]=useState("This is my Default Text");
    function onChangeHandler(event){
        setText(event.target.value)
    }
    function onClickHandler()
    { 
        setText(text.toUpperCase());
    }
    return(
        <>
        <h1>Write Code to Convert into Upper Case </h1>
            <div className="container">
                <textarea name="" id=""  value={text} onChange={onChangeHandler} cols="100" rows="10"></textarea>
            </div>
            <button onClick={onClickHandler} className="btn btn-primary"> Convert Into Upper Case </button>
        </>
    );
}