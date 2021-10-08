import  React, {useState} from 'react';
import { connect } from "react-redux";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Alert from './Alert'
import {handelAddTodo} from '../action'

function AddTodo(props) {

  const {user} = props
  const [open, setOpen] = useState(false);
  const [alert , setAlert] = useState({
    showAlert: false,
    message : ""
})
  const [newOpen , setNewOpen] = useState(false)
  const [newData , setNewData] = useState({
    userId: "",
    title : "",
    id: ""
})
  
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleUserId = (e) => {
    const newValue = parseInt(e.target.value)
    setNewData({
      ...newData,
      userId : newValue
    })
  };
  
  const handleTask = (e) => {
    const newValue = e.target.value
    setNewData({
      ...newData,
      title : newValue
    })
  };
  const handleIdTask = (e) => {
    const newValue = parseInt(e.target.value)
    setNewData({
      ...newData,
      id :  newValue
    })
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleADD = () => {
    const {userId, title, id} = newData
    console.log(userId, title, id)
    if(title === ""){
      setAlert({
        showAlert : true,
        message : "Please Fill All Informations ..."
    })
    setNewOpen(true)
    return
    }
    props.dispatch(handelAddTodo(userId, title, id))
    setNewData({
      id : "",
      title : "",
      userId : ""
    })
    setOpen(false);
    setAlert({
      showAlert : true,
      message : "Todo Added ..."
  })
  setNewOpen(true)
  }; 


  return (
    <>
      <Button variant="outlined" onClick={handleClickOpen} style ={{minWidth : "300px"}}>
        ADD TODO
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle style ={{minWidth : "500px", overflow: "hidden"}}>Add new todo</DialogTitle>
        <DialogContent style ={{ overflow: "hidden"}} >
          <TextField
            autoFocus
            margin="dense"
            id="userId"
            type="input"
            fullWidth
            variant="standard"
            label = "User Id"
            onChange = {(e) => handleUserId(e)}
          />
        </DialogContent>
        <DialogContent style ={{ overflow: "hidden"}} >
          <TextField
            autoFocus
            margin="dense"
            id="taskId"
            type="input"
            fullWidth
            variant="standard"
            label = "Task Id"
            onChange = {(e) => handleIdTask(e)}
          />
        </DialogContent>
        <DialogContent style ={{overflow: "hidden"}}>
          <TextField
            autoFocus
            margin="dense"
            id="task"
            label="Task "
            type="input"
            fullWidth
            variant="standard"
            onChange = {(e) => handleTask(e)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleADD}>Add</Button>
        </DialogActions>
      </Dialog>
      {         
             alert.showAlert &&
            <Alert open = {newOpen} setOpen = {setNewOpen} message = {alert.message}/>
            }
    </>
  );
}


function mapStateToProps(state){
  return{
    todo:state.todo,
  }
}

const connectedComponent=connect(mapStateToProps)(AddTodo);
export default connectedComponent;


