import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'


export const usersSlice = createSlice({
    name: 'users',
    initialState: {
        data: [],
        fetching: false
    },
    reducers: {
        fetchUsers: state => {state.fetching = true},
        fetchUsersSuccess: (state, action) => {
            state.fetching = true
            state.data = action.payload
        },
        fetchUsersFailure: state => {state.fetching = true}
    }

})

export const {fetchUsers, fetchUsersSuccess, fetchUsersFailure} = usersSlice.actions
export default usersSlice.reducer