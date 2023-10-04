const initailState={
    count:0
}
function counterReducer(state=initailState,action){
        if(action.type==="INC"){
            return {count:state.count+1}
        }
        if(action.type==="DEC"){
            return{count:state.count-1}
        }
        return state
    }
    export default counterReducer;