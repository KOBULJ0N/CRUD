
export default function AppReducer(state, action) {
  switch (action.type) {
    case "CREATE_USER":
      const newUser = action.payload.newUser;
      const newUsers = [...state.users, newUser ]
      console.log(newUsers)
      return state = {users: newUsers};
    case "UPDATE_USER":
      const updatedUser = action.payload.updatedUser;
      const nextUsers = state.users.filter(user => user.id.$oid !== updatedUser.id.$oid)
      const updatedUsers = [...nextUsers, updatedUser]
      return state = {users: updatedUsers};
    case "DELETE_USER":
      const leftUser = state.users.filter(user => user.id.$oid !== action.payload.id);
      return state = {users: leftUser}
  
    default: return state;
  }
}
