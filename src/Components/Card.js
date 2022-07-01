import React from "react";
import Axios from "axios";
import './cardlayout.css'

const Card = (props) => {
    const deleteTask =(ob1,ob2,ob3)=>{
        Axios.post("http://localhost:3001/deleteTask",{
          ob1,
          ob2,
          ob3
        })
        .then((res)=>{
            alert(ob2)
    
        });
    }
    return(
        <div className="layed">
        <div className="layoutcard">
            <p>{props.ttask}</p>
            <button onClick={()=>deleteTask(props.tname,props.ttask,props.tcheck)}><i class="fa-regular fa-trash-can" style={{color:"white"}}></i></button>
        </div>
        <p style={{color:"grey"}}>Name:- {props.tname}</p>
        </div>
    );
}

export default Card