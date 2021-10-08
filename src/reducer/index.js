//imported all the required const from actions
import {GET_TODO , DELETE_TODO, COMPLETE_TODO, UPDATE_TODO , ADD_NEW_TODO} from '../action/index'

//initial state
const initialState={
    todo:[]
}

export default function rootReducer(state= initialState,action){
    switch(action.type){
        //get all todo from api
        case GET_TODO:
            return{
                todo:action.todo
            }
        
            //delete a task
        case DELETE_TODO:
            //filetering todo array on the basis of id passed 
        const newTodo=state.todo.filter(todo => todo.id !== action.id);
        return{
            ...state,
            todo:newTodo
        }

        //complete a task
        case COMPLETE_TODO:
            //getting index on the basis of id passed 
            const index=state.todo.findIndex( todo => todo.id === action.id);
            //deep cloaning  
            const updatedTodo=state.todo.map(item => ({...item}));
            //changing completed to true
            updatedTodo[index].completed=true;
            return{
                ...state,
                todo:updatedTodo
            }
            //update a task 
        case UPDATE_TODO:
            const text=action.text;
            //getting index on the basis of id passed
            const Index=state.todo.findIndex( todo => todo.id === action.id);  
            //deep cloaning 
            const UpdatedTodo=state.todo.map(item => ({...item}));
            //changing title
            UpdatedTodo[Index].title=text;
            return{
                ...state,
                todo:updatedTodo
            }
            //add new task 
        case ADD_NEW_TODO:
            // console.log("reducer ==>" , action.data)
            return{
                //add new todo to 0 index
                todo:[action.data , ...state.todo ]
            }

        default:
            return  state;
        }
    }