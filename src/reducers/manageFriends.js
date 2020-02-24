export function manageFriends(state = {friends: []}, action){
  if(action.type === "ADD_FRIEND"){
    return({...state, friends: [...state.friends, action.friend]})
  } else if(action.type === "REMOVE_FRIEND"){
    let removeFriend = state.friends.findIndex(friend => friend.id === action.id);
    return  (
        {...state,
            friends: [
              ...state.friends.slice(0, removalIndex),
              ...state.friends.slice(removalIndex + 1)
            ]
        }
      )
  } else {
    return state;
  }
}
