export const initialUserState=null;

const UserReducer=(state=initialUserState,action)=>{
    if(action.type==="LOGIN"){
        return action.payload;
    }
    if(action.type==="LOGOUT")
      return initialUserState;
    else{
        return state;
    }

}
export default UserReducer;