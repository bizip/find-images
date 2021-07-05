import React, { useState,Fragment } from "react";
import ErrorModal from "./ErrorModal";
import classes from './InputForm.module.css';
import Button from "./Button";

const InputForm =props=>{
const [enteredImageId,setEnteredImageId]=useState('');
const [error,setError]=useState('');

const searchHandler=e=>{
    e.preventDefault()
    if(enteredImageId<=0){
        setError({
            title:'Invalid Input',
            message:'Album id should not be less than or equal to 0'
        })
        return;
    };
    if(enteredImageId.trim().length <0 ){
        setError({
            title:'Invalid Input',
            message:'Please input a valid album id number'
        })
        return;
    };
    props.onAddId(enteredImageId);
    setEnteredImageId('');
}

const searchChangeHandler=(e)=>{
    setEnteredImageId(e.target.value)
}

const ErrorHandler=()=>{
setError(null)
}

return (
    <Fragment>
    {error && <ErrorModal 
    title={error.title} 
    message={error.message} 
    onConfirm={ErrorHandler}
    />}
    <div className={classes.search}>
        
    <form onSubmit={searchHandler} className={classes.formsearch}>
    <h1>IMAGE ALBUM FINDER</h1>
            <input id='imageId' type="number" 
            value={enteredImageId} 
            onChange={searchChangeHandler}
            className={classes.searchtxt} 
            placeholder='Search album by id number ...' />
            <Button type="submit" class={classes.searchbtn}>Search</Button>
    </form>
    </div>
    </Fragment>)
}
export default InputForm;