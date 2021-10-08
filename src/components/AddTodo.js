import  React, {useState} from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function AddTodo(props) {

  const {setNewData , newData} = props
  const [open, setOpen] = useState(false);
  
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
  const handleTaskId = (e) => {
    const newValue = parseInt(e.target.value)
    setNewData({
      ...newData,
      id : newValue
    })
  };
  const handleTask = (e) => {
    const newValue = e.target.value
    setNewData({
      ...newData,
      title : newValue
    })
  };
  const handleStatus = (e) => {
    const newValue = e.target.value
    setNewData({
      ...newData,
      completed : newValue === "pending" ? false : true 

    })
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleADD = () => {
    setOpen(false);
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
            onChange = {(e) => handleTaskId(e)}
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
        <DialogContent style ={{overflow: "hidden"}}>
          <TextField
            autoFocus
            margin="dense"
            id="status"
            label="Status : Pending or Completed"
            type="input"
            fullWidth
            variant="standard"
            onChange = {(e) => handleStatus(e)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleADD}>Add</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

