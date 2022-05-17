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
            state.fetching = false
            state.data = action.payload
        },
        fetchUsersFailure: state => {
            state.fetching = false
        }
    }

})

export const {fetchUsers, fetchUsersSuccess, fetchUsersFailure} = usersSlice.actions
export default usersSlice.reducer