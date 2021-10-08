import React, {useState, useEffect} from "react";
import { useSelector, connect } from "react-redux";
import {fetchTodos} from '../action'
import {InputLabel , MenuItem , FormControl, Select , Grid} from '@mui/material';
import Todo from './Todo'
import AddTodo from './AddTodo'
 
function Dropdown(props) {

    console.log("DropDown props" , props)
    const [user, setUser] = useState('');
    const handleChange = (event) => {
        setUser(event.target.value);
    };
    const todo = useSelector((state) => state.todo)

    useEffect (()=>{
        props.dispatch(fetchTodos())
    },[])

    return (
        <>
        <Grid container justifyContent= "center" >
            <Grid item md = {12}>
                <h1 style = {{color : "#1976D2", textAlign : "center"}}> TODO LIST</h1>
            </Grid>
            <Grid item>
                <FormControl variant="standard" sx={{ m: 1, minWidth: 200 }}>
                    <InputLabel id="demo-simple-select-standard-label">Select User</InputLabel>
                    <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    value={user}
                    onChange={handleChange}
                    label="Select User"
                    >
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                    <MenuItem value={4}>4</MenuItem>
                    <MenuItem value={5}>5</MenuItem>
                    <MenuItem value={6}>6</MenuItem>
                    <MenuItem value={7}>7</MenuItem>
                    <MenuItem value={8}>8</MenuItem>
                    <MenuItem value={9}>9</MenuItem>
                    <MenuItem value={10}>10</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
        </Grid>

        {   user >=1 &&
            <Grid container justifyContent= "center" spacing = {100}>
            <Grid item>
                <AddTodo user= {user}/>
            </Grid>
        </Grid>
        }

        {todo &&
        todo.map((item, index)=>{
        return(
            user === item.userId && 
          <Todo data = {item}  key = {index}  index = {index}/>
        )
      })
    }  
        </>
    )
}

function mapStateToProps(state){
    return{
      todo:state.todo,
    }
  }
  
  const connectedComponent=connect(mapStateToProps)(Dropdown);
  export default connectedComponent;

