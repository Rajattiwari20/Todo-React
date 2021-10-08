import React, {useState, useEffect} from "react";
import { connect } from "react-redux";
import {handelDelete , handelMarkCompleted, handelUpdate} from '../action'
import {Grid, Paper, Button, TextField} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import Alert from './Alert'
 
function Todo(props) {

    const{data ,  index} = props
    // console.log( index , "props.data" , data.title)
    const[showEdit , setEdit] = useState(false);
    const [status, setStatus] =useState(data.completed)
    const [alert , setAlert] = useState({
        showAlert: false,
        message : ""
    })
    const [open, setOpen] = useState(false);
    const handelDeleteTodo = (id) =>{
        props.dispatch(handelDelete(id))
        setAlert({
            showAlert : true,
            message : "Task Deleted ..."
        })
        setOpen(true)
        console.log("show alert" ,  alert.showAlert )
        setStatus(false)
    }

    const handelMarkCompletedTodo = (id) =>{
        props.dispatch(handelMarkCompleted(id))
        setStatus(true)
    }
    
    const handelEdit = (id) =>{
        setEdit(true)
    }

    const handelSave = (id) =>{
        const newTask = document.getElementById('newTask');
        props.dispatch(handelUpdate(id,newTask))
        data.title = newTask.value
        setEdit(false)
    }
    
 
    return (
        <>
        <Grid container  justifyContent = "center" style = {{marginTop : "25px" , marginBottom : "50px" }}>
           <Grid item md = {4} sm = {6}Update xs = {10} className = "todo-container" >
                <Paper elevation={3} style = {{width : "100%" , height : "100%", padding : "10px" }} >
                    <h1 className = "heading">Task ID : <span className = "status">{data.id} </span> </h1>
                    <h1 className = "heading">
                        Task : <span className = "status">
                            {showEdit ? <TextField id="newTask" label="Edit Task" variant="standard" /> : data.title.toUpperCase() }
                            {
                                showEdit ?
                                <Button variant="contained"  onClick = {() =>  handelSave(index) } style = {{marginLeft : "20px"}}> Save</Button>
                                :
                                <EditIcon  onClick = {() =>  handelEdit(index) } style = {{marginLeft : "20px" , color : "#1976D2"}}/>
                            }
                            </span></h1>


                        <h1 className = "heading">Status: <span className = "status">{status ? <p style = {{display : "inline"}}>Completed</p> : <p style = {{display : "inline"}}>Pending</p>}</span></h1>
                    {
                       status?
                        <Button variant="contained" color="error"  onClick = { () => handelDeleteTodo(data.id)} > Delete Task</Button>
                        :
                        <Button variant="contained"onClick = {() => handelMarkCompletedTodo(data.id)} >Mark Completed</Button>
                    }
                </Paper>
           </Grid>
        </Grid>
        {         
             alert.showAlert &&
            <Alert open = {open} setOpen = {setOpen} message = {alert.message}/>
            }
        </>
    )
}

function mapStateToProps(state){
    return{
      todo:state.todo,
    }
  }
  
  const connectedComponent=connect(mapStateToProps)(Todo);
  export default connectedComponent;

