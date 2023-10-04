const initailState={
    todolist:["Supraja","chinna","ambadas","sunitha","sairam"]
}
function todolistReducer(state=initailState,action){
          if(action.type==="ADDTODO"){
            return {todolist:[...state.todolist,action.payload]}
          }
          return state;
}
export default todolistReducer;