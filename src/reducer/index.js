import {GET_TODO , DELETE_TODO, COMPLETE_TODO, UPDATE_TODO , ADD_NEW_TODO} from '../action/index'

const initialState={
    todo:[]
}

export default function rootReducer(state= initialState,action){
    switch(action.type){
        case GET_TODO:
            return{
                todo:action.todo
            }
        
        case DELETE_TODO:
        const newTodo=state.todo.filter(todo => todo.id !== action.id);
        return{
            ...state,
            todo:newTodo
        }
        case COMPLETE_TODO:
            const index=state.todo.findIndex( todo => todo.id === action.id); 
            const updatedTodo=state.todo.map(item => ({...item}));
            updatedTodo[index].completed=true;//changing completed to true
            return{
                ...state,
                todo:updatedTodo
            }
        case UPDATE_TODO:
            const text=action.text;
            const Index=state.todo.findIndex( todo => todo.id === action.id); 
            const UpdatedTodo=state.todo.map(item => ({...item}));
            UpdatedTodo[Index].text=true;//changing completed to true
            return{
                ...state,
                todo:updatedTodo
            }

        case ADD_NEW_TODO:
            console.log("reducer ==>" , action.data)
            return{
                todo:[action.data , ...state.todo ]
            }

        default:
            return  state;
        }
    }