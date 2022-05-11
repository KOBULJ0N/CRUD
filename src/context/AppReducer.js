export default function AppReducer(state, action) {
    switch (action.type) {
        case 'DELETE':
            const leftUsers = state.users.filter((user) => user.id.$oid !== action.payload.id);
            return {users:leftUsers}
            default: return state
         
        case 'CREATE':
            const newUser = action.payload.newUser;
            const newUsers = [ ...state.users, newUser ]
    
            return { users: newUsers }
         
        case 'UPDATE': 
            const updatedUser = action.payload.updatedUser
            const updatedUsers = state.users.map((user) => user.id.$oid === updatedUser.id.$oid ? updatedUser : user)
           
            return { users: updatedUsers }
    }
    
}
