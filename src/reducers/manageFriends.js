export function manageFriends(state = {friends: []}, action){
  if(action.type === "ADD_FRIEND"){
    return({...state, friends: [...state.friends], action.friends})
  } else if(action.type === ""){
    
  } else {
    
  }
}
