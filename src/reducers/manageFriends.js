export function manageFriends(state = {friends: []}, action){
  if(action.type === "ADD_FRIEND"){
    return({...state, friends: [...state.friends], action.friends})
  } else if(action.type === "REMOVE_FRIEND"){
    let removeFriend = state.friends.findIndex(friend => friend.id === action.id);
    return {...state, friend:[...state.friends.slice(0, removeFriend), ...state.friends.slice(removeFriend +1)]}
  } else {
    
  }
}
